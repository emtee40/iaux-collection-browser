import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TileModel } from '../../models';

@customElement('item-tile')
export class ItemTIle extends LitElement {
  @property({ type: Object }) model?: TileModel;

  render() {
    return html`
      <h1>Item</h1>
      <h2>${this.model?.title}</h2>
      <p>${this.model?.identifier}</p>
    `;
  }

  static get styles() {
    return css`
      h1 {
        color: white;
        margin-top: 0;
      }
    `;
  }
}
