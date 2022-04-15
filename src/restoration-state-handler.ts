import { SortDirection } from '@internetarchive/search-service';
import type { CollectionBrowser } from './collection-browser';
import {
  MetadataFieldToSortField,
  MetadataSortField,
  FacetOption,
} from './models';

export interface RestorationStateHandlerInterface {
  persistState(): void;
  restoreState(): void;
}

export class RestorationStateHandler
  implements RestorationStateHandlerInterface
{
  private collectionBrowser: CollectionBrowser;

  constructor(options: { collectionBrowser: CollectionBrowser }) {
    this.collectionBrowser = options.collectionBrowser;
  }

  persistState(): void {
    this.updateUrl();
  }

  restoreState(): void {
    this.loadStateFromUrl();
  }

  private updateUrl() {
    const url = new URL(window.location.href);
    const { searchParams } = url;
    searchParams.delete('sort');
    searchParams.delete('query');
    searchParams.delete('page');
    searchParams.delete('and[]');
    searchParams.delete('not[]');

    if (this.collectionBrowser.sortParam) {
      url.searchParams.set('sort', this.collectionBrowser.sortParam.asString);
    }

    if (this.collectionBrowser.baseQuery) {
      url.searchParams.set('query', this.collectionBrowser.baseQuery);
    }

    if (this.collectionBrowser.currentPage) {
      if (this.collectionBrowser.currentPage > 1) {
        url.searchParams.set(
          'page',
          this.collectionBrowser.currentPage.toString()
        );
      } else {
        url.searchParams.delete('page');
      }
    }

    for (const [facetName, facetValues] of Object.entries(
      this.collectionBrowser.selectedFacets
    )) {
      const facetEntries = Object.entries(facetValues);
      // eslint-disable-next-line no-continue
      if (facetEntries.length === 0) continue;
      for (const [key, facetState] of facetEntries) {
        const notValue = facetState === 'hidden';
        const paramValue = `${facetName}:${key}`;
        if (notValue) {
          url.searchParams.append('not[]', paramValue);
        } else {
          url.searchParams.append('and[]', paramValue);
        }
      }
    }
    if (this.collectionBrowser.dateRangeQueryClause) {
      url.searchParams.append(
        'and[]',
        this.collectionBrowser.dateRangeQueryClause
      );
    }
    if (this.collectionBrowser.titleQuery) {
      url.searchParams.append('and[]', this.collectionBrowser.titleQuery);
    }
    if (this.collectionBrowser.creatorQuery) {
      url.searchParams.append('and[]', this.collectionBrowser.creatorQuery);
    }

    window.history.pushState(
      {
        page: this.collectionBrowser.currentPage,
        query: this.collectionBrowser.baseQuery,
      },
      '',
      url
    );
  }

  private loadStateFromUrl() {
    const url = new URL(window.location.href);
    const pageNumber = url.searchParams.get('page');
    const searchQuery = url.searchParams.get('query');
    const sortQuery = url.searchParams.get('sort');
    const facetAnds = url.searchParams.getAll('and[]');
    const facetNots = url.searchParams.getAll('not[]');
    if (pageNumber) {
      const parsed = parseInt(pageNumber, 10);
      this.collectionBrowser.currentPage = parsed;
      if (parsed > 1) {
        this.collectionBrowser.goToPage(parsed);
      }
    } else {
      this.collectionBrowser.currentPage = 1;
    }
    if (searchQuery) {
      this.collectionBrowser.baseQuery = searchQuery;
    }
    if (sortQuery) {
      const [field, direction] = sortQuery.split(' ');
      const metadataField =
        MetadataFieldToSortField[field as MetadataSortField];
      if (metadataField) {
        this.collectionBrowser.selectedSort = metadataField;
      }
      if (direction === 'desc' || direction === 'asc') {
        this.collectionBrowser.sortDirection = direction as SortDirection;
      }
    }
    if (facetAnds) {
      facetAnds.forEach(and => {
        const [field, value] = and.split(':');
        switch (field) {
          case 'year': {
            const [minDate, maxDate] = value.split(' TO ');
            this.collectionBrowser.minSelectedDate = minDate.substring(
              1,
              minDate.length
            );
            this.collectionBrowser.maxSelectedDate = maxDate.substring(
              0,
              maxDate.length - 1
            );
            this.collectionBrowser.dateRangeQueryClause = `year:${value}`;
            break;
          }
          case 'firstTitle':
            this.collectionBrowser.selectedTitleFilter = value;
            break;
          case 'firstCreator':
            this.collectionBrowser.selectedCreatorFilter = value;
            break;
          default:
            this.collectionBrowser.selectedFacets[field as FacetOption][value] =
              'selected';
        }
      });
    }
    if (facetNots) {
      facetNots.forEach(not => {
        const [field, value] = not.split(':');
        this.collectionBrowser.selectedFacets[field as FacetOption][value] =
          'hidden';
      });
    }
  }
}
