var go=Object.defineProperty,yo=Object.defineProperties;var bo=Object.getOwnPropertyDescriptors;var Va=Object.getOwnPropertySymbols;var wo=Object.prototype.hasOwnProperty,xo=Object.prototype.propertyIsEnumerable;var Wa=(r,e,t)=>e in r?go(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ce=(r,e)=>{for(var t in e||(e={}))wo.call(e,t)&&Wa(r,t,e[t]);if(Va)for(var t of Va(e))xo.call(e,t)&&Wa(r,t,e[t]);return r},dt=(r,e)=>yo(r,bo(e));const So=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}};So();function n(r,e,t,i){var a=arguments.length,o=a<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,e,t,i);else for(var l=r.length-1;l>=0;l--)(s=r[l])&&(o=(a<3?s(o):a>3?s(e,t,o):s(e,t))||o);return a>3&&o&&Object.defineProperty(e,t,o),o}class $o{constructor(e){var t,i,a,o;this.ARCHIVE_ANALYTICS_VERSION=2,this.DEFAULT_SERVICE="ao_2",this.NO_SAMPLING_SERVICE="ao_no_sampling",this.DEFAULT_IMAGE_URL="https://analytics.archive.org/0.gif",this.defaultService=(t=e==null?void 0:e.defaultService)!==null&&t!==void 0?t:this.DEFAULT_SERVICE,this.imageUrl=(i=e==null?void 0:e.imageUrl)!==null&&i!==void 0?i:this.DEFAULT_IMAGE_URL,this.imageContainer=(a=e==null?void 0:e.imageContainer)!==null&&a!==void 0?a:document.body,this.requireImagePing=(o=e==null?void 0:e.requireImagePing)!==null&&o!==void 0?o:!1}sendPing(e){const t=this.generateTrackingUrl(e).toString();if(this.requireImagePing){this.sendPingViaImage(t);return}const i=navigator.sendBeacon&&navigator.sendBeacon.bind(navigator);try{i(t)}catch{this.sendPingViaImage(t)}}sendEvent(e){const t=e.label&&e.label.trim().length>0?e.label:window.location.pathname,i=ce({kind:"event",ec:e.category,ea:e.action,el:t,cache_bust:Math.random()},e.eventConfiguration);this.sendPing(i)}sendEventNoSampling(e){const t=e.eventConfiguration||{};t.service=this.NO_SAMPLING_SERVICE;const i=e;i.eventConfiguration=t,this.sendEvent(i)}sendPingViaImage(e){const t=new Image(1,1);t.src=e,t.alt="",this.imageContainer.appendChild(t)}generateTrackingUrl(e){var t;const i=e!=null?e:{};i.service=(t=i.service)!==null&&t!==void 0?t:this.defaultService;const a=new URL(this.imageUrl),o=Object.keys(i);return o.forEach(s=>{const l=i[s];a.searchParams.append(s,l)}),a.searchParams.append("version",`${this.ARCHIVE_ANALYTICS_VERSION}`),a.searchParams.append("count",`${o.length+2}`),a}}function w(r){let e,t,i;return typeof r=="object"?(e=r.hashFunction,t=r.expiring,i=r.tags):e=r,(a,o,s)=>{if(s.value!=null)s.value=ja(s.value,e,t,i);else if(s.get!=null)s.get=ja(s.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Ri=new Map;function ja(r,e,t=0,i){const a=Symbol("__memoized_map__");return function(...o){let s;this.hasOwnProperty(a)||Object.defineProperty(this,a,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let l=this[a];if(Array.isArray(i))for(const d of i)Ri.has(d)?Ri.get(d).push(l):Ri.set(d,[l]);if(e||o.length>0||t>0){let d;e===!0?d=o.map(v=>v.toString()).join("!"):e?d=e.apply(this,o):d=o[0];const h=`${d}__timestamp`;let m=!1;if(t>0)if(!l.has(h))m=!0;else{let v=l.get(h);m=Date.now()-v>t}l.has(d)&&!m?s=l.get(d):(s=r.apply(this,o),l.set(d,s),t>0&&l.set(h,Date.now()))}else{const d=this;l.has(d)?s=l.get(d):(s=r.apply(this,o),l.set(d,s))}return s}}class ta{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:Boolean(e)}}ta.shared=new ta;class Oe{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}Oe.shared=new Oe;class ci{parseValue(e){return Oe.shared.parseValue(e)}}ci.shared=new ci;class Vt{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let a=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(a=new Date(a.getTime()+a.getTimezoneOffset()*1e3*60)),a}}Vt.shared=new Vt;class hi{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let i;return t.length===1?i=this.parseNumberFormat(t[0]):i=this.parseColonSeparatedFormat(t),i}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const i=e.map((a,o)=>{const s=parseFloat(a);if(Number.isNaN(s))return t=!0,0;const l=e.length-1-o,d=60**l;return s*Math.floor(d)}).reduce((a,o)=>a+o,0);return t?void 0:i}}hi.shared=new hi;class ia{parseValue(e){if(typeof e=="string")return e}}ia.shared=new ia;class Co{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let i=[];for(const a of this.separators)if(i=t.split(a),i.length>1)break;return this.parseListValues(i)}parseListValues(e){const i=e.map(o=>o.trim()).map(o=>this.parser.parseValue(o)),a=[];return i.forEach(o=>{o!==void 0&&a.push(o)}),a}}class aa{parseValue(e){if(typeof e=="string")return e}}aa.shared=new aa;class pi{parseValue(e){return String(e)}}pi.shared=new pi;class ge{constructor(e,t){this.parser=e,this.rawValue=t}get values(){return this.parseRawValue()}get value(){return this.values[0]}parseRawValue(){if(this.rawValue===void 0)return[];const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const a=this.parser.parseValue(i);Array.isArray(a)?t.push(...a):a!==void 0&&t.push(a)}),t}}n([w()],ge.prototype,"values",null);n([w()],ge.prototype,"value",null);class _o extends ge{constructor(e){super(ta.shared,e)}}class _e extends ge{constructor(e){super(Vt.shared,e)}}class Ni extends ge{constructor(e){super(hi.shared,e)}}class he extends ge{constructor(e){super(Oe.shared,e)}}class P extends ge{constructor(e){super(pi.shared,e)}}class zo extends ge{constructor(e){super(aa.shared,e)}}class Qa extends ge{constructor(e){super(ci.shared,e)}}class ko extends ge{constructor(e){super(ia.shared,e)}}class To extends ge{constructor(e,t){super(t,e)}}class Do extends To{constructor(e){const t=new Co(pi.shared);super(e,t)}}class C{constructor(e){this.rawMetadata=e}get identifier(){var e;return(e=this.rawMetadata)===null||e===void 0?void 0:e.identifier}get addeddate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.addeddate?new _e(this.rawMetadata.addeddate):void 0}get audio_codec(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.audio_codec?new P(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.audio_sample_rate?new he(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.avg_rating?new he(this.rawMetadata.avg_rating):void 0}get collection(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection?new P(this.rawMetadata.collection):void 0}get collections_raw(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collections_raw?new P(this.rawMetadata.collections_raw):void 0}get collection_size(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection_size?new Qa(this.rawMetadata.collection_size):void 0}get contributor(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.contributor?new P(this.rawMetadata.contributor):void 0}get coverage(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.coverage?new P(this.rawMetadata.coverage):void 0}get creator(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.creator?new P(this.rawMetadata.creator):void 0}get date(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.date?new _e(this.rawMetadata.date):void 0}get description(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.description?new P(this.rawMetadata.description):void 0}get downloads(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.downloads?new he(this.rawMetadata.downloads):void 0}get duration(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.duration?new Ni(this.rawMetadata.duration):void 0}get"external-identifier"(){var e,t;return!((e=this.rawMetadata)===null||e===void 0)&&e["external-identifier"]?new P((t=this.rawMetadata)===null||t===void 0?void 0:t["external-identifier"]):void 0}get files_count(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.files_count?new he(this.rawMetadata.files_count):void 0}get indexdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.indexdate?new _e(this.rawMetadata.indexdate):void 0}get isbn(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.isbn?new P(this.rawMetadata.isbn):void 0}get issue(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.issue?new P(this.rawMetadata.issue):void 0}get item_count(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.item_count?new he(this.rawMetadata.item_count):void 0}get item_size(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.item_size?new Qa(this.rawMetadata.item_size):void 0}get language(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.language?new P(this.rawMetadata.language):void 0}get length(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.length?new Ni(this.rawMetadata.length):void 0}get lineage(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.lineage?new P(this.rawMetadata.lineage):void 0}get month(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.month?new he(this.rawMetadata.month):void 0}get mediatype(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.mediatype?new ko(this.rawMetadata.mediatype):void 0}get noindex(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.noindex?new _o(this.rawMetadata.noindex):void 0}get notes(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.notes?new P(this.rawMetadata.notes):void 0}get num_favorites(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.num_favorites?new he(this.rawMetadata.num_favorites):void 0}get num_reviews(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.num_reviews?new he(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.openlibrary_edition?new P(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.openlibrary_work?new P(this.rawMetadata.openlibrary_work):void 0}get page_progression(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.page_progression?new zo(this.rawMetadata.page_progression):void 0}get partner(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.partner?new P(this.rawMetadata.partner):void 0}get ppi(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.ppi?new he(this.rawMetadata.ppi):void 0}get publicdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.publicdate?new _e(this.rawMetadata.publicdate):void 0}get publisher(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.publisher?new P(this.rawMetadata.publisher):void 0}get reviewdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.reviewdate?new _e(this.rawMetadata.reviewdate):void 0}get runtime(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.runtime?new Ni(this.rawMetadata.runtime):void 0}get scanner(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.scanner?new P(this.rawMetadata.scanner):void 0}get snippets(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.snippets?new P(this.rawMetadata.snippets):void 0}get source(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.source?new P(this.rawMetadata.source):void 0}get start_localtime(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.start_localtime?new _e(this.rawMetadata.start_localtime):void 0}get start_time(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.start_time?new _e(this.rawMetadata.start_time):void 0}get stop_time(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.stop_time?new _e(this.rawMetadata.stop_time):void 0}get subject(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.subject?new Do(this.rawMetadata.subject):void 0}get taper(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.taper?new P(this.rawMetadata.taper):void 0}get title(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.title?new P(this.rawMetadata.title):void 0}get transferer(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.transferer?new P(this.rawMetadata.transferer):void 0}get track(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.track?new he(this.rawMetadata.track):void 0}get type(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.type?new P(this.rawMetadata.type):void 0}get uploader(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.uploader?new P(this.rawMetadata.uploader):void 0}get utc_offset(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.utc_offset?new he(this.rawMetadata.utc_offset):void 0}get venue(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.venue?new P(this.rawMetadata.venue):void 0}get volume(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.volume?new P(this.rawMetadata.volume):void 0}get week(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.week?new he(this.rawMetadata.week):void 0}get year(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.year?new _e(this.rawMetadata.year):void 0}}n([w()],C.prototype,"addeddate",null);n([w()],C.prototype,"audio_codec",null);n([w()],C.prototype,"audio_sample_rate",null);n([w()],C.prototype,"avg_rating",null);n([w()],C.prototype,"collection",null);n([w()],C.prototype,"collections_raw",null);n([w()],C.prototype,"collection_size",null);n([w()],C.prototype,"contributor",null);n([w()],C.prototype,"coverage",null);n([w()],C.prototype,"creator",null);n([w()],C.prototype,"date",null);n([w()],C.prototype,"description",null);n([w()],C.prototype,"downloads",null);n([w()],C.prototype,"duration",null);n([w()],C.prototype,"external-identifier",null);n([w()],C.prototype,"files_count",null);n([w()],C.prototype,"indexdate",null);n([w()],C.prototype,"isbn",null);n([w()],C.prototype,"issue",null);n([w()],C.prototype,"item_count",null);n([w()],C.prototype,"item_size",null);n([w()],C.prototype,"language",null);n([w()],C.prototype,"length",null);n([w()],C.prototype,"lineage",null);n([w()],C.prototype,"month",null);n([w()],C.prototype,"mediatype",null);n([w()],C.prototype,"noindex",null);n([w()],C.prototype,"notes",null);n([w()],C.prototype,"num_favorites",null);n([w()],C.prototype,"num_reviews",null);n([w()],C.prototype,"openlibrary_edition",null);n([w()],C.prototype,"openlibrary_work",null);n([w()],C.prototype,"page_progression",null);n([w()],C.prototype,"partner",null);n([w()],C.prototype,"ppi",null);n([w()],C.prototype,"publicdate",null);n([w()],C.prototype,"publisher",null);n([w()],C.prototype,"reviewdate",null);n([w()],C.prototype,"runtime",null);n([w()],C.prototype,"scanner",null);n([w()],C.prototype,"snippets",null);n([w()],C.prototype,"source",null);n([w()],C.prototype,"start_localtime",null);n([w()],C.prototype,"start_time",null);n([w()],C.prototype,"stop_time",null);n([w()],C.prototype,"subject",null);n([w()],C.prototype,"taper",null);n([w()],C.prototype,"title",null);n([w()],C.prototype,"transferer",null);n([w()],C.prototype,"track",null);n([w()],C.prototype,"type",null);n([w()],C.prototype,"uploader",null);n([w()],C.prototype,"utc_offset",null);n([w()],C.prototype,"venue",null);n([w()],C.prototype,"volume",null);n([w()],C.prototype,"week",null);n([w()],C.prototype,"year",null);class $t{constructor(e){this.rawValue=e}get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size?ci.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length?hi.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height?Oe.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width?Oe.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track?Oe.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}}n([w()],$t.prototype,"size",null);n([w()],$t.prototype,"length",null);n([w()],$t.prototype,"height",null);n([w()],$t.prototype,"width",null);n([w()],$t.prototype,"track",null);class $i{constructor(e){this.rawValue=e}get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewdate(){return this.rawValue.reviewdate?Vt.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate?Vt.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars?Oe.shared.parseValue(this.rawValue.stars):void 0}}n([w()],$i.prototype,"reviewdate",null);n([w()],$i.prototype,"createdate",null);n([w()],$i.prototype,"stars",null);class Mo{constructor(e){var t,i;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(a=>new $t(a)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new C(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(i=e.reviews)===null||i===void 0?void 0:i.map(a=>new $i(a))}}class Ao{constructor(e){this.numFound=e.numFound,this.start=e.start,this.docs=e.docs.map(t=>new C(t)),this.aggregations=e.aggregations}}class Eo{constructor(e){this.rawResponse=e,this.responseHeader=e.responseHeader,this.response=new Ao(e.response)}}var Ke;(function(r){r.networkError="SearchService.NetworkError",r.itemNotFound="SearchService.ItemNotFound",r.decodingError="SearchService.DecodingError",r.searchEngineError="SearchService.SearchEngineError"})(Ke||(Ke={}));class ra extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}class Oo{static aggregateSearchParamsAsString(e){if(e.advancedParams){const t=e.advancedParams.map(a=>({terms:a}));return JSON.stringify(t)}if(e.simpleParams)return e.simpleParams.join(",")}static sortParamsAsString(e){return`${e.field} ${e.direction}`}static generateURLSearchParams(e){const t=new URLSearchParams;if(t.append("q",e.query),t.append("output","json"),e.rows&&t.append("rows",String(e.rows)),e.page&&t.append("page",String(e.page)),e.fields&&t.append("fl",e.fields.join(",")),e.sort){const a=e.sort.map(o=>this.sortParamsAsString(o));t.append("sort",a.join(","))}const i=e.aggregations;if(i){const a=this.aggregateSearchParamsAsString(i);a&&t.append("user_aggs",a)}return t}}class Io{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const a=new URL(window.location.href).searchParams.get("scope");a&&(this.requestScope=a)}}async performSearch(e){const i=Oo.generateURLSearchParams(e).toString(),a=`https://${this.baseUrl}/advancedsearch.php?${i}`;return this.fetchUrl(a)}async fetchMetadata(e,t){const i=t?`/${t}`:"",a=`https://${this.baseUrl}/metadata/${e}${i}`;return this.fetchUrl(a,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var i;const a=new URL(e);this.requestScope&&a.searchParams.set("scope",this.requestScope);let o;try{const s=(i=t==null?void 0:t.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};o=await fetch(a.href,s)}catch(s){const l=s instanceof Error?s.message:typeof s=="string"?s:"Unknown error";return this.getErrorResult(Ke.networkError,l)}try{const s=await o.json(),l=s.error;if(l){const d=s.forensics;return this.getErrorResult(Ke.searchEngineError,l,d)}else return{success:s}}catch(s){const l=s instanceof Error?s.message:typeof s=="string"?s:"Unknown error";return this.getErrorResult(Ke.decodingError,l)}}getErrorResult(e,t,i){return{error:new ra(e,t,i)}}}class pt{constructor(e){this.searchBackend=e}async search(e){const t=await this.searchBackend.performSearch(e);return t.error?t:{success:new Eo(t.success)}}async fetchMetadata(e){var t;const i=await this.searchBackend.fetchMetadata(e);return i.error?i:((t=i.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new ra(Ke.itemNotFound)}:{success:new Mo(i.success)}}async fetchMetadataValue(e,t){var i;const a=await this.searchBackend.fetchMetadata(e,t);return a.error?a:((i=a.success)===null||i===void 0?void 0:i.result)===void 0?{error:new ra(Ke.itemNotFound)}:{success:a.success.result}}}pt.default=new pt(new Io);function Lo(){var r=!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent);if(!r||!indexedDB.databases)return Promise.resolve();var e;return new Promise(function(t){var i=function(){return indexedDB.databases().finally(t)};e=setInterval(i,100),i()}).finally(function(){return clearInterval(e)})}function Ct(r){return new Promise((e,t)=>{r.oncomplete=r.onsuccess=()=>e(r.result),r.onabort=r.onerror=()=>t(r.error)})}function Fo(r,e){const t=Lo().then(()=>{const i=indexedDB.open(r);return i.onupgradeneeded=()=>i.result.createObjectStore(e),Ct(i)});return(i,a)=>t.then(o=>a(o.transaction(e,i).objectStore(e)))}let Pi;function Ci(){return Pi||(Pi=Fo("keyval-store","keyval")),Pi}function Ro(r,e=Ci()){return e("readonly",t=>Ct(t.get(r)))}function No(r,e,t=Ci()){return t("readwrite",i=>(i.put(e,r),Ct(i.transaction)))}function Po(r,e=Ci()){return e("readwrite",t=>(t.delete(r),Ct(t.transaction)))}function Bo(r,e){return r.openCursor().onsuccess=function(){!this.result||(e(this.result),this.result.continue())},Ct(r.transaction)}function Ho(r=Ci()){return r("readonly",e=>{if(e.getAllKeys)return Ct(e.getAllKeys());const t=[];return Bo(e,i=>t.push(i.key)).then(()=>t)})}function Uo(r,e){return r.setMilliseconds(r.getMilliseconds()+e*1e3),r}class Vo{constructor(e){var t,i,a,o;if(this.namespace=(t=e==null?void 0:e.namespace)!==null&&t!==void 0?t:"LocalCache",this.defaultTTL=(i=e==null?void 0:e.defaultTTL)!==null&&i!==void 0?i:15*60,(!((a=e==null?void 0:e.immediateClean)!==null&&a!==void 0)||a)&&this.cleanExpired(),!(e!=null&&e.disableCleaning)){const s=(o=e==null?void 0:e.cleaningInterval)!==null&&o!==void 0?o:60;setInterval(()=>{this.cleanExpired()},s*1e3)}}async set(e){var t;const i={value:e.value},a=(t=e.ttl)!==null&&t!==void 0?t:this.defaultTTL,o=Uo(new Date,a);i.expires=o;const s=this.getNamespacedKey(e.key);try{await No(s,i)}catch{}}async get(e){const t=this.getNamespacedKey(e);let i;try{i=await Ro(t)}catch{}if(!i)return;const a=new Date;if(i.expires&&i.expires<a){await this.delete(e);return}return i.value}async delete(e){const t=this.getNamespacedKey(e);try{await Po(t)}catch{}}async cleanExpired(){const e=await this.getAllKeys();await Promise.all(e.map(async t=>this.get(t)))}async getAllKeys(){let e=[];try{e=await Ho()}catch{}const t=[];for(const o of e)typeof o=="string"&&t.push(o);return t.filter(o=>o.startsWith(this.namespace)).map(o=>this.removeNamespace(o))}getNamespacedKey(e){return`${this.namespace}-${e}`}removeNamespace(e){return e.replace(`${this.namespace}-`,"")}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fa=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ga=Symbol(),Ga=new Map;class Er{constructor(e,t){if(this._$cssResult$=!0,t!==ga)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=Ga.get(this.cssText);return fa&&e===void 0&&(Ga.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const Wo=r=>new Er(typeof r=="string"?r:r+"",ga),y=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,a,o)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+r[o+1],r[0]);return new Er(t,ga)},jo=(r,e)=>{fa?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),a=window.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=t.cssText,r.appendChild(i)})},Ya=fa?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Wo(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Bi;const Ka=window.trustedTypes,Qo=Ka?Ka.emptyScript:"",qa=window.reactiveElementPolyfillSupport,oa={toAttribute(r,e){switch(e){case Boolean:r=r?Qo:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Or=(r,e)=>e!==r&&(e==e||r==r),Hi={attribute:!0,type:String,converter:oa,reflect:!1,hasChanged:Or};class ht extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const a=this._$Eh(i,t);a!==void 0&&(this._$Eu.set(a,i),e.push(a))}),e}static createProperty(e,t=Hi){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,a=this.getPropertyDescriptor(e,i,t);a!==void 0&&Object.defineProperty(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(a){const o=this[e];this[t]=a,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Hi}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const a of i)this.createProperty(a,t[a])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const a of i)t.unshift(Ya(a))}else e!==void 0&&t.push(Ya(e));return t}static _$Eh(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return jo(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ES(e,t,i=Hi){var a,o;const s=this.constructor._$Eh(e,i);if(s!==void 0&&i.reflect===!0){const l=((o=(a=i.converter)===null||a===void 0?void 0:a.toAttribute)!==null&&o!==void 0?o:oa.toAttribute)(t,i.type);this._$Ei=e,l==null?this.removeAttribute(s):this.setAttribute(s,l),this._$Ei=null}}_$AK(e,t){var i,a,o;const s=this.constructor,l=s._$Eu.get(e);if(l!==void 0&&this._$Ei!==l){const d=s.getPropertyOptions(l),h=d.converter,m=(o=(a=(i=h)===null||i===void 0?void 0:i.fromAttribute)!==null&&a!==void 0?a:typeof h=="function"?h:null)!==null&&o!==void 0?o:oa.fromAttribute;this._$Ei=l,this[l]=m(t,d.type),this._$Ei=null}}requestUpdate(e,t,i){let a=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Or)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):a=!1),!this.isUpdatePending&&a&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((a,o)=>this[o]=a),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$Eg)===null||e===void 0||e.forEach(a=>{var o;return(o=a.hostUpdate)===null||o===void 0?void 0:o.call(a)}),this.update(i)):this._$EU()}catch(a){throw t=!1,this._$EU(),a}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var a;return(a=i.hostUpdated)===null||a===void 0?void 0:a.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$ES(i,this[i],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}ht.finalized=!0,ht.elementProperties=new Map,ht.elementStyles=[],ht.shadowRootOptions={mode:"open"},qa==null||qa({ReactiveElement:ht}),((Bi=globalThis.reactiveElementVersions)!==null&&Bi!==void 0?Bi:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ui;const yt=globalThis.trustedTypes,Xa=yt?yt.createPolicy("lit-html",{createHTML:r=>r}):void 0,ze=`lit$${(Math.random()+"").slice(9)}$`,ya="?"+ze,Go=`<${ya}>`,bt=document,Wt=(r="")=>bt.createComment(r),jt=r=>r===null||typeof r!="object"&&typeof r!="function",Ir=Array.isArray,Lr=r=>{var e;return Ir(r)||typeof((e=r)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},Ft=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Za=/-->/g,Ja=/>/g,Ve=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,er=/'/g,tr=/"/g,Fr=/^(?:script|style|textarea|title)$/i,Rr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),u=Rr(1),O=Rr(2),pe=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),ir=new WeakMap,oi=(r,e,t)=>{var i,a;const o=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let s=o._$litPart$;if(s===void 0){const l=(a=t==null?void 0:t.renderBefore)!==null&&a!==void 0?a:null;o._$litPart$=s=new _t(e.insertBefore(Wt(),l),l,void 0,t!=null?t:{})}return s._$AI(r),s},gt=bt.createTreeWalker(bt,129,null,!1),Nr=(r,e)=>{const t=r.length-1,i=[];let a,o=e===2?"<svg>":"",s=Ft;for(let d=0;d<t;d++){const h=r[d];let m,v,g=-1,b=0;for(;b<h.length&&(s.lastIndex=b,v=s.exec(h),v!==null);)b=s.lastIndex,s===Ft?v[1]==="!--"?s=Za:v[1]!==void 0?s=Ja:v[2]!==void 0?(Fr.test(v[2])&&(a=RegExp("</"+v[2],"g")),s=Ve):v[3]!==void 0&&(s=Ve):s===Ve?v[0]===">"?(s=a!=null?a:Ft,g=-1):v[1]===void 0?g=-2:(g=s.lastIndex-v[2].length,m=v[1],s=v[3]===void 0?Ve:v[3]==='"'?tr:er):s===tr||s===er?s=Ve:s===Za||s===Ja?s=Ft:(s=Ve,a=void 0);const S=s===Ve&&r[d+1].startsWith("/>")?" ":"";o+=s===Ft?h+Go:g>=0?(i.push(m),h.slice(0,g)+"$lit$"+h.slice(g)+ze+S):h+ze+(g===-2?(i.push(void 0),d):S)}const l=o+(r[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Xa!==void 0?Xa.createHTML(l):l,i]};class Qt{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let o=0,s=0;const l=e.length-1,d=this.parts,[h,m]=Nr(e,t);if(this.el=Qt.createElement(h,i),gt.currentNode=this.el.content,t===2){const v=this.el.content,g=v.firstChild;g.remove(),v.append(...g.childNodes)}for(;(a=gt.nextNode())!==null&&d.length<l;){if(a.nodeType===1){if(a.hasAttributes()){const v=[];for(const g of a.getAttributeNames())if(g.endsWith("$lit$")||g.startsWith(ze)){const b=m[s++];if(v.push(g),b!==void 0){const S=a.getAttribute(b.toLowerCase()+"$lit$").split(ze),z=/([.?@])?(.*)/.exec(b);d.push({type:1,index:o,name:z[2],strings:S,ctor:z[1]==="."?Br:z[1]==="?"?Hr:z[1]==="@"?Ur:Kt})}else d.push({type:6,index:o})}for(const g of v)a.removeAttribute(g)}if(Fr.test(a.tagName)){const v=a.textContent.split(ze),g=v.length-1;if(g>0){a.textContent=yt?yt.emptyScript:"";for(let b=0;b<g;b++)a.append(v[b],Wt()),gt.nextNode(),d.push({type:2,index:++o});a.append(v[g],Wt())}}}else if(a.nodeType===8)if(a.data===ya)d.push({type:2,index:o});else{let v=-1;for(;(v=a.data.indexOf(ze,v+1))!==-1;)d.push({type:7,index:o}),v+=ze.length-1}o++}}static createElement(e,t){const i=bt.createElement("template");return i.innerHTML=e,i}}function Xe(r,e,t=r,i){var a,o,s,l;if(e===pe)return e;let d=i!==void 0?(a=t._$Cl)===null||a===void 0?void 0:a[i]:t._$Cu;const h=jt(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==h&&((o=d==null?void 0:d._$AO)===null||o===void 0||o.call(d,!1),h===void 0?d=void 0:(d=new h(r),d._$AT(r,t,i)),i!==void 0?((s=(l=t)._$Cl)!==null&&s!==void 0?s:l._$Cl=[])[i]=d:t._$Cu=d),d!==void 0&&(e=Xe(r,d._$AS(r,e.values),d,i)),e}class Pr{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:a}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:bt).importNode(i,!0);gt.currentNode=o;let s=gt.nextNode(),l=0,d=0,h=a[0];for(;h!==void 0;){if(l===h.index){let m;h.type===2?m=new _t(s,s.nextSibling,this,e):h.type===1?m=new h.ctor(s,h.name,h.strings,this,e):h.type===6&&(m=new Vr(s,this,e)),this.v.push(m),h=a[++d]}l!==(h==null?void 0:h.index)&&(s=gt.nextNode(),l++)}return o}m(e){let t=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class _t{constructor(e,t,i,a){var o;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cg=(o=a==null?void 0:a.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Xe(this,e,t),jt(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==pe&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Lr(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==$&&jt(this._$AH)?this._$AA.nextSibling.data=e:this.k(bt.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:a}=e,o=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=Qt.createElement(a.h,this.options)),a);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.m(i);else{const s=new Pr(o,this),l=s.p(this.options);s.m(i),this.k(l),this._$AH=s}}_$AC(e){let t=ir.get(e.strings);return t===void 0&&ir.set(e.strings,t=new Qt(e)),t}S(e){Ir(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const o of e)a===t.length?t.push(i=new _t(this.M(Wt()),this.M(Wt()),this,this.options)):i=t[a],i._$AI(o),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const a=e.nextSibling;e.remove(),e=a}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Kt{constructor(e,t,i,a,o){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,a){const o=this.strings;let s=!1;if(o===void 0)e=Xe(this,e,t,0),s=!jt(e)||e!==this._$AH&&e!==pe,s&&(this._$AH=e);else{const l=e;let d,h;for(e=o[0],d=0;d<o.length-1;d++)h=Xe(this,l[i+d],t,d),h===pe&&(h=this._$AH[d]),s||(s=!jt(h)||h!==this._$AH[d]),h===$?e=$:e!==$&&(e+=(h!=null?h:"")+o[d+1]),this._$AH[d]=h}s&&!a&&this.C(e)}C(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Br extends Kt{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===$?void 0:e}}const Yo=yt?yt.emptyScript:"";class Hr extends Kt{constructor(){super(...arguments),this.type=4}C(e){e&&e!==$?this.element.setAttribute(this.name,Yo):this.element.removeAttribute(this.name)}}class Ur extends Kt{constructor(e,t,i,a,o){super(e,t,i,a,o),this.type=5}_$AI(e,t=this){var i;if((e=(i=Xe(this,e,t,0))!==null&&i!==void 0?i:$)===pe)return;const a=this._$AH,o=e===$&&a!==$||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,s=e!==$&&(a===$||o);o&&this.element.removeEventListener(this.name,this,a),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Vr{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Xe(this,e)}}const Ko={L:"$lit$",P:ze,V:ya,I:1,N:Nr,R:Pr,j:Lr,D:Xe,H:_t,F:Kt,O:Hr,W:Ur,B:Br,Z:Vr},ar=window.litHtmlPolyfillSupport;ar==null||ar(Qt,_t),((Ui=globalThis.litHtmlVersions)!==null&&Ui!==void 0?Ui:globalThis.litHtmlVersions=[]).push("2.2.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vi,Wi;class I extends ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=oi(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return pe}}I.finalized=!0,I._$litElement$=!0,(Vi=globalThis.litElementHydrateSupport)===null||Vi===void 0||Vi.call(globalThis,{LitElement:I});const rr=globalThis.litElementPolyfillSupport;rr==null||rr({LitElement:I});((Wi=globalThis.litElementVersions)!==null&&Wi!==void 0?Wi:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=r=>e=>typeof e=="function"?((t,i)=>(window.customElements.define(t,i),i))(r,e):((t,i)=>{const{kind:a,elements:o}=i;return{kind:a,elements:o,finisher(s){window.customElements.define(t,s)}}})(r,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qo=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?dt(ce({},e),{finisher(t){t.createProperty(e.key,r)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}};function p(r){return(e,t)=>t!==void 0?((i,a,o)=>{a.constructor.createProperty(o,i)})(r,e,t):qo(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function T(r){return p(dt(ce({},r),{state:!0}))}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wr=({finisher:r,descriptor:e})=>(t,i)=>{var a;if(i===void 0){const o=(a=t.originalKey)!==null&&a!==void 0?a:t.key,s=e!=null?{kind:"method",placement:"prototype",key:o,descriptor:e(t.key)}:dt(ce({},t),{key:o});return r!=null&&(s.finisher=function(l){r(l,o)}),s}{const o=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),r==null||r(o,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function de(r,e){return Wr({descriptor:t=>{const i={get(){var a,o;return(o=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(r))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(e){const a=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var o,s;return this[a]===void 0&&(this[a]=(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(r))!==null&&s!==void 0?s:null),this[a]}}return i}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Xo(r){return Wr({descriptor:e=>({get(){var t,i;return(i=(t=this.renderRoot)===null||t===void 0?void 0:t.querySelectorAll(r))!==null&&i!==void 0?i:[]},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ji;((ji=window.HTMLSlotElement)===null||ji===void 0?void 0:ji.prototype.assignedElements)!=null;class Zo{constructor(){this.resizeObserver=new ResizeObserver(e=>{window.requestAnimationFrame(()=>{for(const t of e){const i=this.resizeHandlers.get(t.target);i==null||i.forEach(a=>{a.handleResize(t)})}})}),this.resizeHandlers=new Map}shutdown(){this.resizeHandlers.forEach((e,t)=>{this.resizeObserver.unobserve(t)}),this.resizeHandlers.clear()}addObserver(e){var t;const i=(t=this.resizeHandlers.get(e.target))!==null&&t!==void 0?t:new Set;i.add(e.handler),this.resizeHandlers.set(e.target,i),this.resizeObserver.observe(e.target,e.options)}removeObserver(e){const t=this.resizeHandlers.get(e.target);!t||(t.delete(e.handler),t.size===0&&(this.resizeObserver.unobserve(e.target),this.resizeHandlers.delete(e.target)))}}class Jo{constructor(e){var t,i,a,o;this.cacheKeyName="collection-name-cache",this.cacheTtl=60*60*24*7,this.defaultLoadDelay=100,this.loadDelay=100,this.defaultPruningAge=1e3*60*60*24*7,this.defaultPruningInterval=1e3*30,this.fetchTimeout=null,this.pendingIdentifierQueue=new Set,this.pendingPromises={},this.collectionNameCache={},this.pruningAge=this.defaultPruningAge,this.maxCacheSize=2500,this.cacheLoaded=!1,this.searchService=e.searchService,this.localCache=e.localCache,this.loadDelay=(t=e.loadDelay)!==null&&t!==void 0?t:this.defaultLoadDelay,this.pruningAge=(i=e.pruningAge)!==null&&i!==void 0?i:this.pruningAge,this.maxCacheSize=(a=e.maxCacheSize)!==null&&a!==void 0?a:this.maxCacheSize,this.pruneCache(),setInterval(async()=>{await this.pruneCache()},(o=e.pruneInterval)!==null&&o!==void 0?o:this.defaultPruningInterval)}async collectionNameFor(e){this.cacheLoaded||await this.loadFromCache();const t=e.toLowerCase(),i=this.collectionNameCache[t];return i?(i.lastAccess=Date.now(),this.collectionNameCache[t]=i,i.name):(this.startPendingIdentifierTimer(),new Promise(a=>{var o;this.pendingIdentifierQueue.add(t);const s=(o=this.pendingPromises[t])!==null&&o!==void 0?o:[],l=async d=>{a(d)};s.push(l),this.pendingPromises[t]=s}))}async preloadIdentifiers(e){this.cacheLoaded||await this.loadFromCache();const t=e.filter(i=>i!==void 0).map(i=>i.toLowerCase());for(const i of t)this.collectionNameCache[i]||this.pendingIdentifierQueue.add(i);this.startPendingIdentifierTimer()}async startPendingIdentifierTimer(){this.fetchTimeout||(this.fetchTimeout=window.setTimeout(()=>{this.loadPendingIdentifiers(),this.fetchTimeout=null},this.loadDelay))}async loadFromCache(){if(!this.localCache||this.cacheLoaded)return;const e=await this.localCache.get(this.cacheKeyName);!e||(this.collectionNameCache=e,this.cacheLoaded=!0)}async loadPendingIdentifiers(){var e,t,i;await this.loadFromCache();const a=Array.from(this.pendingIdentifierQueue).splice(0,100);if(a.length===0)return;a.map(async d=>this.pendingIdentifierQueue.delete(d));const o={query:`identifier:(${a.join(" OR ")})`,fields:["title","identifier"],rows:a.length},l=(t=(e=(await this.searchService.search(o)).success)===null||e===void 0?void 0:e.response)===null||t===void 0?void 0:t.docs;if(l&&l.length>0)for(const d of l){const{identifier:h,title:m}=d;if(!h)continue;const v=h.toLowerCase();a.splice(a.indexOf(v),1);const g=(i=m==null?void 0:m.value)!==null&&i!==void 0?i:null;this.collectionNameCache[v]={name:g,lastAccess:Date.now()};const b=this.pendingPromises[v];if(b){for(const S of b)S(g);delete this.pendingPromises[v]}}for(const d of a){this.collectionNameCache[d]={name:null,lastAccess:Date.now()};const h=this.pendingPromises[d];if(h){for(const m of h)m(null);delete this.pendingPromises[d]}}await this.persistCache()}async pruneCache(){await this.loadFromCache();const e=Date.now(),t=Object.entries(this.collectionNameCache).sort((a,o)=>{var s,l,d,h;const m=(l=(s=a[1])===null||s===void 0?void 0:s.lastAccess)!==null&&l!==void 0?l:0,v=(h=(d=o[1])===null||d===void 0?void 0:d.lastAccess)!==null&&h!==void 0?h:0;return m-v}),i=new Set;for(const[a,o]of t){if(!o)continue;const{lastAccess:s}=o;s<e-this.pruningAge&&i.add(a)}if(t.length>this.maxCacheSize)for(let a=0;a<t.length-this.maxCacheSize;a+=1){const[o]=t[a];i.add(o)}for(const a of i)delete this.collectionNameCache[a];await this.persistCache()}async persistCache(){var e;await((e=this.localCache)===null||e===void 0?void 0:e.set({key:this.cacheKeyName,value:this.collectionNameCache,ttl:this.cacheTtl}))}}let Gt=class extends I{render(){return u` ${this.name?this.name:this.identifier} `}createRenderRoot(){return this}updated(e){(e.has("identifier")||e.has("collectionNameCache"))&&this.fetchName()}async fetchName(){!this.identifier||!this.collectionNameCache||(this.name=await this.collectionNameCache.collectionNameFor(this.identifier))}};n([p({type:Object})],Gt.prototype,"collectionNameCache",void 0);n([p({type:String})],Gt.prototype,"identifier",void 0);n([T()],Gt.prototype,"name",void 0);Gt=n([H("async-collection-name")],Gt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _i=r=>r!=null?r:$;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ba=r=>(...e)=>({_$litDirective$:r,values:e});class wa{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:es}=Ko,ts=r=>r.strings===void 0,or=()=>document.createComment(""),Rt=(r,e,t)=>{var i;const a=r._$AA.parentNode,o=e===void 0?r._$AB:e._$AA;if(t===void 0){const s=a.insertBefore(or(),o),l=a.insertBefore(or(),o);t=new es(s,l,r,r.options)}else{const s=t._$AB.nextSibling,l=t._$AM,d=l!==r;if(d){let h;(i=t._$AQ)===null||i===void 0||i.call(t,r),t._$AM=r,t._$AP!==void 0&&(h=r._$AU)!==l._$AU&&t._$AP(h)}if(s!==o||d){let h=t._$AA;for(;h!==s;){const m=h.nextSibling;a.insertBefore(h,o),h=m}}}return t},We=(r,e,t=r)=>(r._$AI(e,t),r),is={},jr=(r,e=is)=>r._$AH=e,as=r=>r._$AH,Qi=r=>{var e;(e=r._$AP)===null||e===void 0||e.call(r,!1,!0);let t=r._$AA;const i=r._$AB.nextSibling;for(;t!==i;){const a=t.nextSibling;t.remove(),t=a}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sr=(r,e,t)=>{const i=new Map;for(let a=e;a<=t;a++)i.set(r[a],a);return i},Qr=ba(class extends wa{constructor(r){if(super(r),r.type!==Me.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);const a=[],o=[];let s=0;for(const l of r)a[s]=i?i(l,s):s,o[s]=t(l,s),s++;return{values:o,keys:a}}render(r,e,t){return this.dt(r,e,t).values}update(r,[e,t,i]){var a;const o=as(r),{values:s,keys:l}=this.dt(e,t,i);if(!Array.isArray(o))return this.ut=l,s;const d=(a=this.ut)!==null&&a!==void 0?a:this.ut=[],h=[];let m,v,g=0,b=o.length-1,S=0,z=s.length-1;for(;g<=b&&S<=z;)if(o[g]===null)g++;else if(o[b]===null)b--;else if(d[g]===l[S])h[S]=We(o[g],s[S]),g++,S++;else if(d[b]===l[z])h[z]=We(o[b],s[z]),b--,z--;else if(d[g]===l[z])h[z]=We(o[g],s[z]),Rt(r,h[z+1],o[g]),g++,z--;else if(d[b]===l[S])h[S]=We(o[b],s[S]),Rt(r,o[g],o[b]),b--,S++;else if(m===void 0&&(m=sr(l,S,z),v=sr(d,g,b)),m.has(d[g]))if(m.has(d[b])){const E=v.get(l[S]),A=E!==void 0?o[E]:null;if(A===null){const F=Rt(r,o[g]);We(F,s[S]),h[S]=F}else h[S]=We(A,s[S]),Rt(r,o[g],A),o[E]=null;S++}else Qi(o[b]),b--;else Qi(o[g]),g++;for(;S<=z;){const E=Rt(r,h[z+1]);We(E,s[S]),h[S++]=E}for(;g<=b;){const E=o[g++];E!==null&&Qi(E)}return this.ut=l,jr(r,h),pe}});function ti(r,e,t){return Array.from({length:(e-r)/t+1},(i,a)=>r+a*t)}let Le=class extends I{constructor(){super(...arguments),this.itemCount=0,this.scrollOptimizationsDisabled=!1,this.intersectionObserver=new IntersectionObserver(e=>{e.forEach(t=>{if(t.target===this.sentinel){t.isIntersecting&&this.dispatchEvent(new Event("scrollThresholdReached"));return}const a=t.target.dataset.cellIndex;if(!a)return;const o=parseInt(a,10);t.isIntersecting?this.visibleCellIndices.add(o):this.visibleCellIndices.delete(o)}),this.scrollOptimizationsDisabled||this.processVisibleCells()}),this.renderedCellIndices=new Set,this.visibleCellIndices=new Set,this.placeholderCellIndices=new Set}reload(){ti(0,Math.max(0,this.itemCount-1),1).forEach(t=>this.removeCell(t)),this.renderedCellIndices.clear(),this.visibleCellIndices.clear(),this.placeholderCellIndices.clear(),this.setupObservations()}scrollToCell(e,t){const i=this.cellContainers[e];if(!i)return!1;const a=t?"smooth":"auto";return i.scrollIntoView({behavior:a}),!0}getVisibleCellIndices(){return Array.from(this.visibleCellIndices)}updated(e){(e.has("itemCount")||e.has("scrollOptimizationsDisabled"))&&this.setupObservations()}disconnectedCallback(){this.intersectionObserver.disconnect()}setupObservations(){this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver.disconnect(),this.sentinel&&this.intersectionObserver.observe(this.sentinel),this.scrollOptimizationsDisabled?(ti(0,Math.max(0,this.itemCount-1),1).forEach(t=>this.visibleCellIndices.add(t)),this.processVisibleCells()):this.cellContainers.forEach(e=>this.intersectionObserver.observe(e))}render(){const e=this.itemCount-1,t=ti(0,e,1);return u`
      <div id="container">
        <div id="sentinel"></div>
        ${Qr(t,i=>i,i=>u`
            <div
              class="cell-container"
              data-cell-index=${i}
              @click=${a=>this.cellSelected(a,i)}
              @keyup=${a=>{a.key==="Enter"&&this.cellSelected(a,i)}}
            ></div>
          `)}
      </div>
    `}cellSelected(e,t){const i=new CustomEvent("cellSelected",{detail:{index:t,originalEvent:e}});this.dispatchEvent(i)}processVisibleCells(){const e=Array.from(this.visibleCellIndices),t=Math.max(10,e.length),i=e.sort((h,m)=>h>m?1:-1),a=e.length===0,o=a?0:Math.max(i[0]-t,0),s=a?t:Math.min(i[i.length-1]+t,this.itemCount-1),l=ti(o,s,1);this.renderCellBuffer(l),this.removeCellsOutsideBufferRange(l);const d=new CustomEvent("visibleCellsChanged",{detail:{visibleCellIndices:e}});this.dispatchEvent(d)}renderCellBuffer(e){e.forEach(t=>{var i;if(this.renderedCellIndices.has(t))return;const a=this.cellContainerForIndex(t);if(!a)return;const o=(i=this.cellProvider)===null||i===void 0?void 0:i.cellForIndex(t);if(a.style.height="auto",o)oi(o,a),this.renderedCellIndices.add(t),this.placeholderCellIndices.delete(t);else{if(this.placeholderCellIndices.has(t))return;oi(this.placeholderCellTemplate,a),this.placeholderCellIndices.add(t)}})}removeCellsOutsideBufferRange(e){Array.from(this.renderedCellIndices).filter(i=>!e.includes(i)).forEach(i=>{this.removeCell(i)})}removeCell(e){const t=this.cellContainerForIndex(e);if(!t)return;const i=t.offsetHeight;t.style.height=`${i}px`,oi($,t),this.renderedCellIndices.delete(e)}cellContainerForIndex(e){var t;return(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector(`.cell-container[data-cell-index="${e}"]`)}static get styles(){const e=y`var(--infiniteScrollerSentinelDistanceFromEnd, 200rem)`,t=y`var(--infiniteScrollerRowGap, 1.7rem)`,i=y`var(--infiniteScrollerColGap, 1.7rem)`,a=y`var(--infiniteScrollerCellMinWidth, 16rem)`,o=y`var(--infiniteScrollerCellMaxWidth, 1fr)`,s=y`var(--infiniteScrollerCellMinHeight, 22.5rem)`,l=y`var(--infiniteScrollerCellMaxHeight, none)`,d=y`var(--infiniteScrollerCellOutline, 0)`;return y`
      #container {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        grid-row-gap: ${t};
        row-gap: ${t};
        grid-column-gap: ${i};
        column-gap: ${i};
      }

      @supports (display: grid) {
        #container {
          display: grid;
          flex-wrap: nowrap;
          grid-template-columns: repeat(
            auto-fill,
            minmax(${a}, ${o})
          );
        }
      }

      .cell-container {
        outline: ${d};
        min-height: ${s};
        max-height: ${l};
        min-width: ${a};
        max-width: ${o};
      }

      @supports (display: grid) {
        /* the grid takes care of the width */
        .cell-container {
          min-width: auto;
          max-width: none;
        }
      }

      #sentinel {
        position: absolute;
        height: ${e};
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        /**
        Chrome and Firefox try to maintain scroll position when the page increases and
        decreases in size, but the scroll position is being focused on the sentinel
        so it's causing the "load more" event to keep firing because it thinks the
        user has scrolled to the sentinel. "overflow-anchor: none" prevents that anchoring
        */
        overflow-anchor: none;
      }
    `}};n([p({type:Number})],Le.prototype,"itemCount",void 0);n([p({type:Object})],Le.prototype,"cellProvider",void 0);n([p({type:Object})],Le.prototype,"placeholderCellTemplate",void 0);n([p({type:Boolean})],Le.prototype,"scrollOptimizationsDisabled",void 0);n([de("#sentinel")],Le.prototype,"sentinel",void 0);n([Xo(".cell-container")],Le.prototype,"cellContainers",void 0);Le=n([H("infinite-scroller")],Le);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rs=(r,...e)=>({strTag:!0,strings:r,values:e}),ct=rs,os=r=>typeof r!="string"&&"strTag"in r,ss=(r,e,t)=>{let i=r[0];for(let a=1;a<r.length;a++)i+=e[t?t[a-1]:a-1],i+=r[a];return i};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ns=r=>os(r)?ss(r.strings,r.values):r;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ls{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let r=0;r<256;r++)(r>>4&15).toString(16)+(r&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ds=new ls;ds.resolve();/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ge=ns;const Gr=O`
  <svg viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg">
    <path
      class="fill-color"
      d="m280 262.122891v-156.834044c0-4.877026-2.063112-9.1444235-6.189337-12.8021929s-8.220563-5.4866541-12.283013-5.4866541h-225.4946834c-4.4642309 0-8.2524498 1.726748-11.3646565 5.1802441s-4.6683101 7.8230299-4.6683101 13.1086029v156.834044c0 5.279189 1.5210273 9.578505 4.5630818 12.897946 3.0420545 3.319442 6.8653495 4.979163 11.4698848 4.979163h225.4946834c4.06245 0 8.156788-1.726748 12.283013-5.180244s6.189337-7.685784 6.189337-12.696865zm-200.9382244-131.440315v7.918783c0 1.487366-.7780516 3.00984-2.334155 4.567424-1.5561034 1.557585-3.1472828 2.336377-4.7735384 2.336377h-14.8180581c-1.7601825 0-3.4183254-.743683-4.9744288-2.231048-1.5561033-1.487365-2.334155-3.044949-2.334155-4.672753v-7.918783c0-1.761858.8131278-3.964179 2.4393834-6.606966 1.6262555-2.642786 3.2493223-3.964179 4.8692004-3.964179h14.8180581c1.4859512 0 3.0420545 1.321393 4.6683101 3.964179 1.6262556 2.642787 2.4393833 4.845108 2.4393833 6.606966zm169.2740724 0v7.918783c0 1.627804-.711089 3.185388-2.133265 4.672753-1.422177 1.487365-3.080319 2.231048-4.974429 2.231048h-131.114463c-2.028037 0-3.753143-.743683-5.175319-2.231048-1.422177-1.487365-2.133265-3.044949-2.133265-4.672753v-7.918783c0-1.895912.742975-4.130152 2.228927-6.702719 1.485951-2.572567 3.175981-3.858851 5.070091-3.858851h131.114463c1.760182 0 3.383249 1.286284 4.8692 3.858851 1.485952 2.572567 2.228927 4.806807 2.228927 6.702719zm-169.2740724 50.988539v7.918784c0 1.487365-.7780516 2.977922-2.334155 4.471671s-3.1472828 2.237431-4.7735384 2.231088h-14.8180581c-1.7601825 0-3.4183254-.743723-4.9744288-2.231088-1.5561033-1.487365-2.334155-2.977922-2.334155-4.471671v-7.918784c0-1.895912.8131278-4.165261 2.4393834-6.808047 1.6262555-2.642786 3.2493223-3.964179 4.8692004-3.964179h14.8180581c1.4859512 0 3.0420545 1.353311 4.6683101 4.059932 1.6262556 2.706622 2.4393833 4.940861 2.4393833 6.702719zm169.2740724 0v7.918784c0 1.487365-.711089 2.977922-2.133265 4.471671-1.422177 1.493749-3.080319 2.237431-4.974429 2.231088h-131.114463c-2.028037 0-3.753143-.743723-5.175319-2.231088-1.422177-1.487365-2.133265-2.977922-2.133265-4.471671v-7.918784c0-2.029966.742975-4.331233 2.228927-6.9038 1.485951-2.572567 3.175981-3.858851 5.070091-3.858851h131.114463c1.760182 0 3.383249 1.321393 4.8692 3.964179 1.485952 2.642787 2.228927 4.912136 2.228927 6.808048zm-169.2740724 51.400278v6.9038c0 1.761858-.7780516 3.421579-2.334155 4.979163s-3.1472828 2.336376-4.7735384 2.336376h-14.8180581c-1.7601825 0-3.4183254-.778792-4.9744288-2.336376-1.5561033-1.557584-2.334155-3.217305-2.334155-4.979163v-6.9038c0-2.029966.7780517-4.366342 2.334155-7.009129 1.5561034-2.642786 3.2142463-3.964179 4.9744288-3.964179h14.8180581c1.4859512 0 3.0420545 1.321393 4.6683101 3.964179 1.6262556 2.642787 2.4393833 4.979163 2.4393833 7.009129zm169.2740724 0v6.9038c0 1.761858-.711089 3.421579-2.133265 4.979163-1.422177 1.557584-3.080319 2.336376-4.974429 2.336376h-131.114463c-2.028037 0-3.753143-.778792-5.175319-2.336376-1.422177-1.557584-2.133265-3.217305-2.133265-4.979163v-6.9038c0-2.170404.742975-4.54189 2.228927-7.114457 1.485951-2.572567 3.175981-3.858851 5.070091-3.858851h131.114463c1.760182 0 3.383249 1.321393 4.8692 3.964179 1.485952 2.642787 2.228927 4.979163 2.228927 7.009129z"
      fill="black"
    />
  </svg>
`;let sa=class extends I{render(){var e,t,i;return u`
      <div id="container">
        <div id="collection-image-title">
          <div id="collection-title">${(e=this.model)===null||e===void 0?void 0:e.title}</div>
          <div id="collection-image-container">
            <div
              id="collection-image"
              style="background-image:url('https://archive.org/services/img/${(t=this.model)===null||t===void 0?void 0:t.identifier}')"
            ></div>
          </div>
        </div>
        <div id="item-count-container">
          <div id="item-count-image-container">${Gr}</div>
          <div id="item-count-stacked-text">
            <div id="item-count">${(i=this.model)===null||i===void 0?void 0:i.itemCount.toLocaleString()}</div>
            <div id="items-text">${Ge("items")}</div>
          </div>
        </div>
      </div>
    `}static get styles(){const e=y`var(--collectionTileCornerRadius, 4px)`;return y`
      #collection-image-container {
        display: flex;
        justify-content: center;
        flex: 1;
      }

      #collection-image {
        width: 16rem;
        height: 16rem;
        border-radius: 0.8rem;
        overflow: hidden;
        box-shadow: 1px 1px 2px 0px;
        object-fit: cover;
        background-position: center;
        background-size: cover;
      }

      #item-count-image-container svg {
        filter: invert(100%);
      }

      #collection-image-title {
        background-color: #666;
        border: 1px solid #2c2c2c;
        padding: 0.5rem;
        border-top-left-radius: ${e};
        border-top-right-radius: ${e};
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      #collection-title {
        font-weight: bold;
        color: #fff;
        font-size: 1.6rem;
        text-align: center;
        margin-bottom: 0.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 2rem;
        height: 4rem;
      }

      #container {
        box-shadow: 1px 1px 2px 0px;
        border-radius: ${e};
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      #container:hover > #collection-image-title > #collection-title {
        text-decoration: underline;
      }

      /* this is a workaround for Safari 15 where the hover effects are not working */
      #collection-image-title:hover > #collection-title {
        text-decoration: underline;
      }

      #container:hover > #collection-image-title {
        background-color: #757575;
      }

      #item-count-container {
        background-color: #444;
        border-bottom: 1px solid #2c2c2c;
        border-left: 1px solid #2c2c2c;
        border-right: 1px solid #2c2c2c;
        border-bottom-left-radius: ${e};
        border-bottom-right-radius: ${e};
        display: flex;
        padding: 0rem 0.5rem;
        height: 5.5rem;
        align-items: center;
      }

      #item-count-image-container {
        margin-right: 0.5rem;
      }

      #item-count-stacked-text {
        display: flex;
        align-items: baseline;
        color: #fff;
      }
      #item-count-image-container svg {
        height: 2.5rem;
        align-items: baseline;
      }

      #container:hover > #item-count-container {
        background-color: #575757;
      }

      #item-count {
        font-size: 1.4rem;
        font-weight: bold;
      }

      #item-count-image {
        width: 3rem;
        height: 3rem;
        margin-right: 1rem;
      }

      #items-text {
        font-size: 1.4rem;
        font-weight: bold;
        margin-left: 0.5rem;
      }
    `}};n([p({type:Object})],sa.prototype,"model",void 0);sa=n([H("collection-tile")],sa);function ui(r,e="short",t="en-US"){if(!r)return"";const i={timeZone:"UTC"};switch(e){case"short":i.month="short",i.year="numeric";break;case"long":i.year="numeric",i.month="short",i.day="2-digit";break}return new Intl.DateTimeFormat(t,i).format(r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const na=ba(class extends wa{constructor(r){var e;if(super(r),r.type!==Me.ATTRIBUTE||r.name!=="class"||((e=r.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var t,i;if(this.et===void 0){this.et=new Set,r.strings!==void 0&&(this.st=new Set(r.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!(!((t=this.st)===null||t===void 0)&&t.has(o))&&this.et.add(o);return this.render(e)}const a=r.element.classList;this.et.forEach(o=>{o in e||(a.remove(o),this.et.delete(o))});for(const o in e){const s=!!e[o];s===this.et.has(o)||((i=this.st)===null||i===void 0?void 0:i.has(o))||(s?(a.add(o),this.et.add(o)):(a.remove(o),this.et.delete(o)))}return pe}}),cs=O`
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      fill="none"
      fill-rule="evenodd"
    >
    <path
      d="m56.4612493 8.80450354 41.8901185 75.94632926c1.7706782 2.8433173 2.1150372 5.2623412 1.0330766 7.2570716-1.0819604 1.9947304-3.26978 2.9920956-6.5634587 2.9920956h-85.69973905c-3.29367873 0-5.46954894-.9973652-6.52761065-2.9920956-1.0580617-1.9947304-.70175345-4.4137543 1.06892476-7.2570716l41.89011844-75.12308969c1.8184757-2.84331737 3.9693609-4.37738627 6.4526556-4.60220671s4.6341799 1.03483527 6.4526556 3.77896714z"
      fill="#000"
      fill-rule="nonzero"
    />
    <path
      d="m94.0140845 90-44.5547054-79-44.4593791 79z"
      fill="#f8e71c"
      fill-rule="nonzero"
    />
    <path
      d="m54 69v8h-8v-8zm0-30v10.2515641l-2.0923567 14.7484359h-3.8184713l-2.089172-14.7484359v-10.2515641z"
      fill="#000"
    />
    </g>
    <title>Content may be inappropriate</title>
  </svg>
`,hs=O`
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fill-rule="nonzero">
      <path
        d="m11 48h11c-.0377367 5.0230706-.0377367 17.6897373 0 38h28v-38h12c-14.7643578-21.746483-22.9310245-33.4131497-24.5-35z"
        fill="#fff"
        transform="matrix(0 1 -1 0 86 13)"
      />
      <path
        d="m17 44h9c-.0377367 5.0230706-.0377367 17.0230706 0 36h18v-36h10c-10.0976911-15.0798163-15.9310245-23.4131497-17.5-25z"
        fill="#000"
        transform="matrix(0 1 -1 0 85 14)"
      />
      <path
        d="m84.3595506 0h-55.7191012c-8.6379817 0-15.6404494 6.39593215-15.6404494 14.2857143v15.7142857h20v-11h47v62l-47-1v-11h-20v16.7142857c0 7.8897822 7.0024677 14.2857143 15.6404494 14.2857143h55.7191012c8.6379817 0 15.6404494-6.3959321 15.6404494-14.2857143v-71.4285714c0-7.88978215-7.0024677-14.2857143-15.6404494-14.2857143z"
        fill="#fff"
      />
      <path
        d="m84.2597403 5c5.3793969 0 9.7402597 4.02943725 9.7402597 9v72c0 4.9705627-4.3608628 9-9.7402597 9h-55.5194806c-5.3793969 0-9.7402597-4.0294373-9.7402597-9v-12h8v7.5c0 2.4198792 1.8593897 4.3936363 4.4510815 4.4958424l48.9709964.0041576c2.6189169 0 4.4673094-2.6052767 4.5779221-5v-62c0-2.4852814-2.3103015-5-5-5h-48.3376623c-2.618917 0-4.551725 1.6052767-4.6623377 4v7h-8v-11c0-4.97056275 4.3608628-9 9.7402597-9z"
        fill="#000"
      />
    </g>
    <title>Log in to view this item</title>
  </svg>
`;let mi=class extends I{constructor(){super(...arguments),this.loggedIn=!1,this.loginRequired=!1}render(){return this.loginRequired&&!this.loggedIn?u`${hs} `:u`${cs}`}static get styles(){return y`
      :host {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        width: 50%;
        height: 50%;
        z-index: 2;
      }
    `}};n([p({type:Boolean})],mi.prototype,"loggedIn",void 0);n([p({type:Boolean})],mi.prototype,"loginRequired",void 0);mi=n([H("icon-overlay")],mi);let vi=class extends I{constructor(){super(...arguments),this.loggedIn=!1,this.loginRequired=!1}render(){return u` <div class="overlay no-preview">${this.textDisplay}</div> `}get textDisplay(){return this.loginRequired&&!this.loggedIn?`Log in
to view this item`:"Content may be inappropriate"}static get styles(){return y`
      :host {
        align-items: center;
        display: flex;
      }

      .overlay {
        border: 1px solid #2c2c2c;
        border-radius: 1px;
        position: absolute;
        right: 0;
        left: 0;
        width: auto;
        height: auto;
        padding: 5px;
      }

      .no-preview {
        background-color: #fffecb;
        color: #2c2c2c;
        font-size: 1.4rem;
        line-height: 2rem;
        text-align: center;
        white-space: pre-wrap; // for the newline character
      }
    `}};n([p({type:Boolean})],vi.prototype,"loggedIn",void 0);n([p({type:Boolean})],vi.prototype,"loginRequired",void 0);vi=n([H("text-overlay")],vi);let Fe=class extends I{constructor(){super(...arguments),this.isCompactTile=!1,this.isListTile=!1,this.loggedIn=!1,this.viewSize="desktop"}render(){var e;return!((e=this.model)===null||e===void 0)&&e.identifier?u`
      <div class=${na(this.baseClass)}>
        <item-image
          .model=${this.model}
          .baseImageUrl=${this.baseImageUrl}
          .isListTile=${this.isListTile}
          .isCompactTile=${this.isCompactTile}
          .loggedIn=${this.loggedIn}
          style="--imgHeight: 100%; --imgWidth: 100%"
        >
        </item-image>
        ${this.textOverlayTemplate} ${this.iconOverlayTemplate}
      </div>
    `:$}get baseClass(){return{list:this.isListTile&&!this.isCompactTile,"list-compact":this.isListTile&&this.isCompactTile,[this.viewSize]:!0}}get iconOverlayTemplate(){var e,t,i;return!this.isListTile||!(!((e=this.model)===null||e===void 0)&&e.loginRequired)&&!(!((t=this.model)===null||t===void 0)&&t.contentWarning)?$:u`
      <icon-overlay
        .loggedIn=${this.loggedIn}
        .loginRequired=${(i=this.model)===null||i===void 0?void 0:i.loginRequired}
      >
      </icon-overlay>
    `}get textOverlayTemplate(){var e,t,i;return this.isListTile||!(!((e=this.model)===null||e===void 0)&&e.loginRequired)&&!(!((t=this.model)===null||t===void 0)&&t.contentWarning)?$:u`
      <text-overlay
        .loggedIn=${this.loggedIn}
        .loginRequired=${(i=this.model)===null||i===void 0?void 0:i.loginRequired}
      >
      </text-overlay>
    `}static get styles(){return y`
      div {
        display: flex;
        justify-content: center;
        position: relative;
      }

      .grid {
        height: var(--imgBlockHeight, 16rem);
        flex: 1;
      }

      /** tile-list view */
      .list.desktop {
        width: 100px;
        height: 100px;
      }

      .list.mobile {
        width: 90px;
        height: 90px;
      }

      /** tile-list-compact view */
      .list-compact {
        display: block;
      }

      .list-compact.desktop {
        width: 45px;
        height: 45px;
      }

      .list-compact.mobile {
        width: 30px;
        height: 30px;
      }
    `}};n([p({type:String})],Fe.prototype,"baseImageUrl",void 0);n([p({type:Boolean})],Fe.prototype,"isCompactTile",void 0);n([p({type:Boolean})],Fe.prototype,"isListTile",void 0);n([p({type:Boolean})],Fe.prototype,"loggedIn",void 0);n([p({type:Object})],Fe.prototype,"model",void 0);n([p({type:String})],Fe.prototype,"viewSize",void 0);Fe=n([H("image-block")],Fe);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*si(r,e){const t=typeof e=="function";if(r!==void 0){let i=-1;for(const a of r)i>-1&&(yield t?e(i):e),i++,yield a}}let fi=class extends I{constructor(){super(...arguments),this.snippets=[],this.viewSize="desktop"}render(){var e;return!((e=this.snippets)===null||e===void 0)&&e.length?u`
      <div class="${this.containerClasses}">${this.ellipsisJoinedSnippets}</div>

      ${this.viewSize==="grid"?u`<div class="separator"></div>`:$}
    `:u`${$}`}get viewSizeClass(){return this.viewSize==="grid"?"grid":"list"}get containerClasses(){return`container ${this.viewSizeClass}`}get ellipsisJoinedSnippets(){return u`
      &hellip; ${si(this.snippetTemplates,u` &hellip; `)} &hellip;
    `}get snippetTemplates(){var e;return(e=this.snippets)===null||e===void 0?void 0:e.map(t=>{const i=t.matchAll(/{{{(.+?)}}}/g),a=[];let o=0;for(const s of i)s.index!=null&&(a.push(u`
            ${t.slice(o,s.index)}
            <mark>${s[1]}</mark>
          `),o=s.index+s[0].length);return a.push(u`${t.slice(o)}`),u`<span>${a}</span>`})}static get styles(){return y`
      .container {
        display: -webkit-box;
        font-family: 'Times New Roman', serif;
        overflow: hidden;
        overflow-wrap: break-word;
        -webkit-line-clamp: var(--maxLines, 3);
        -webkit-box-orient: vertical;
      }

      .separator {
        /* Border line should extend to the edges of the tile */
        margin: 0 -5px;
        border-bottom: 1px solid #bbb;
      }

      .grid {
        /* Bottom margin reduced by 1px to account for the separator */
        margin: 0.5rem 0 0.4rem;
        font-size: 1.2rem;
        line-height: 1.5rem;
      }

      .list {
        margin: 1rem 0 0;
        padding: 0 0 0 1.5rem;
        border-left: 0.5rem solid #194880;
        border-radius: 3px;
        font-size: 1.4rem;
        line-height: 2rem;
      }

      mark {
        /* blue, 20% transparency */
        background-color: #0000ff33;
        color: inherit;
      }
    `}};n([p({type:Array})],fi.prototype,"snippets",void 0);n([p({type:String})],fi.prototype,"viewSize",void 0);fi=n([H("text-snippet-block")],fi);const ps=y`
  .drop-shadow {
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.8));
    overflow: hidden;
    height: 100%;
  }

  .list-box {
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    position: relative;
    max-width: 100px;
  }

  .contain {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }

  .cover {
    object-fit: cover;
  }

  .blur {
    filter: blur(5px);
  }
`,us=y`
  .waveform {
    mix-blend-mode: screen;
    position: relative;
    height: 62.5%;
    top: 50%;
    transform: translateY(-50%);
  }

  .waveform-grad0 {
    background: linear-gradient(
      hsl(340, 80%, 55%),
      hsl(0, 80%, 33%) 35%,
      hsl(0, 80%, 22%) 70%,
      hsl(0, 0%, 0%)
    );
  }

  .waveform-grad1 {
    background: linear-gradient(
      hsl(300, 80%, 55%),
      hsl(330, 80%, 33%) 35%,
      hsl(330, 80%, 22%) 70%,
      hsl(0, 0%, 0%)
    );
  }

  .waveform-grad2 {
    background: linear-gradient(
      hsl(200, 80%, 55%),
      hsl(230, 80%, 33%) 35%,
      hsl(230, 80%, 22%) 70%,
      hsl(0, 0%, 0%)
    );
  }

  .waveform-grad3 {
    background: linear-gradient(
      hsl(160, 80%, 55%),
      hsl(190, 80%, 33%) 35%,
      hsl(190, 80%, 22%) 70%,
      hsl(0, 0%, 0%)
    );
  }

  .waveform-grad4 {
    background: linear-gradient(
      hsl(250, 80%, 55%),
      hsl(280, 80%, 33%) 35%,
      hsl(280, 80%, 22%) 70%,
      hsl(0, 0%, 0%)
    );
  }

  .waveform-grad5 {
    background: linear-gradient(
      hsl(280, 80%, 55%),
      hsl(310, 80%, 33%) 35%,
      hsl(310, 80%, 22%) 70%,
      hsl(0, 0%, 0%)
    );
  }
`;let ke=class extends I{constructor(){super(...arguments),this.isListTile=!1,this.isCompactTile=!1,this.loggedIn=!1,this.isWaveform=!1}render(){return u`
      <div class=${na(this.itemBaseClass)}>
        <img
          class=${na(this.itemImageClass)}
          src="${this.imageSrc}"
          alt=""
          @load=${this.onLoad}
        />
      </div>
    `}get imageSrc(){var e;return`${this.baseImageUrl}/services/img/${(e=this.model)===null||e===void 0?void 0:e.identifier}`}get hashBasedGradient(){var e;return!((e=this.model)===null||e===void 0)&&e.identifier?`waveform-grad${this.hashStrToInt(this.model.identifier)%6}`:"waveform-grad0"}hashStrToInt(e){return e.split("").reduce((t,i)=>t+i.charCodeAt(0),0)}get itemBaseClass(){return{"drop-shadow":!0,"list-box":this.isListTile,[this.hashBasedGradient]:this.isWaveform}}get itemImageClass(){var e,t;const i=((e=this.model)===null||e===void 0?void 0:e.contentWarning)||((t=this.model)===null||t===void 0?void 0:t.loginRequired);return{contain:!this.isCompactTile&&!this.isWaveform,cover:this.isCompactTile,blur:i||!1,waveform:this.isWaveform}}onLoad(){var e,t;(((e=this.model)===null||e===void 0?void 0:e.mediatype)==="audio"||((t=this.model)===null||t===void 0?void 0:t.mediatype)==="etree")&&this.baseImage.naturalWidth/this.baseImage.naturalHeight===4&&(this.isWaveform=!0)}static get styles(){return[ps,us,y`
        img {
          height: var(--imgHeight, 16rem);
          width: var(--imgWidth, 16rem);
        }
      `]}};n([p({type:Object})],ke.prototype,"model",void 0);n([p({type:String})],ke.prototype,"baseImageUrl",void 0);n([p({type:Boolean})],ke.prototype,"isListTile",void 0);n([p({type:Boolean})],ke.prototype,"isCompactTile",void 0);n([p({type:Boolean})],ke.prototype,"loggedIn",void 0);n([T()],ke.prototype,"isWaveform",void 0);n([de("img")],ke.prototype,"baseImage",void 0);ke=n([H("item-image")],ke);const ms=O`
  <svg viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="m89.6854559 79.6500588c1.7300364 6.4823648 2.180423 13.3122689 3.3145441 20.3499412h-86c.5683151-15.8558542 2.98334063-30.7849367 15.1676149-41.6581341 22.9948067-20.518674 59.250299-9.0032844 67.517841 21.3081929zm-40.0998307-79.6500588c10.872402.0493248 19.9700408 9.25722341 19.917959 20.1421788-.0829413 11.042868-8.9616237 19.8492523-20.0602807 19.8578212-11.1181198 0-19.9397193-8.7904706-19.9397193-19.8908727-.0327543-11.11998815 9.0125781-20.17487063 20.082041-20.1091273z"
      fill="black"
      class="fill-color"
      fill-rule="evenodd"
    />
    <title>Icon of a person</title>
  </svg>
`,vs=O`
  <svg viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg">
    <path
      class="fill-color"
      d="m225.568345 20c20.949641 0 28.431655 8.5714286 28.431655 28.5714286-.928802 21.2807881-.704608 42.5615763-.400898 63.8423644l.153512 10.640394c.13351 9.458128.247386 18.916256.247386 28.374384v100c0 18.571429-5.985612 28.571429-28.431655 28.571429-50.877698-1.428571-100.258992-1.428571-151.1366903 0-20.9496403 0-28.4316547-8.571429-28.4316547-28.571429v-202.8571424c0-18.5714286 5.9856115-28.5714286 28.4316547-28.5714286 50.8776983 1.4285714 100.2589923 1.4285714 151.1366903 0zm-74.268345 127.4c-30.251351 0-53.3 24.489189-53.3 53.3 0 30.251351 24.489189 53.3 53.3 53.3 30.251351 0 53.3-24.489189 53.3-53.3s-24.489189-53.3-53.3-53.3zm0 39c7.897672 0 14.3 6.402328 14.3 14.3s-6.402328 14.3-14.3 14.3-14.3-6.402328-14.3-14.3 6.402328-14.3 14.3-14.3zm-1.3-137.8c-20.384 0-36.4 16.016-36.4 36.4s16.016 36.4 36.4 36.4 36.4-16.016 36.4-36.4-17.472-36.4-36.4-36.4z"
      fill="black"
      fill-rule="evenodd"
    />
    <title>Icon of a speaker</title>
  </svg>
`,fs=O`
  <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>icon/data(folder)</title>
    <g id="icon/data(folder)" stroke="none" stroke-fill="none" fill-rule="evenodd">
      <path
        class="fill-color"
        d="M100,41.0384365 L77.7420275,86 L0,86 L22.2588638,41.0384365 L100,41.0384365 Z M28.0641366,15 L28.1546605,15.0596181 L28.2341398,15.1242873 L28.3328904,15.2177465 L28.4472762,15.3436376 C28.6690939,15.606393 28.9514073,16.0510217 29.1933903,16.7785146 L29.1933903,16.7785146 L29.1933903,22.0756281 L78.7495321,22.0756281 L78.7495321,35.9042492 L17.4213444,35.9042492 L0.000356512594,72.0402693 L0.000356512594,23.7334897 L6.77320451,15 L28.0641366,15 Z"
        id="Combined-Shape"
        fill="#000000">
      </path>
    </g>
  </svg>
`,gs=O`
  <svg viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="m136.125893 117.288073c14.41013-4.850562 27.83316-2.109766 39.480173 7.796632 10.335962 8.792594 14.330094 20.428621 14.288498 33.809481-.091795 25.476855-.015572 50.965113-.049872 76.441968-.003811 2.805419-.034301 5.648851-.457344 8.401051-3.376719 21.854139-21.133078 36.299386-43.127486 35.204588-20.210769-1.003564-37.307792-18.132586-37.799436-38.393946-.346818-14.513672-.060979-29.057755-.301084-43.586633 0-12.597776-.06479-25.191751.034301-37.789527.0343-3.656928.16007-7.401288.903253-10.963182 3.18997-15.36138 12.272049-25.963431 27.028997-30.920432zm69.082871-95.288073v20.8201628h-42.6892v27.2482979s2.61448.5740085 3.574902.8363038c23.797103 6.5155667 41.073252 15.8669636 55.262332 37.0824705 8.594246 12.852468 11.643202 31.380398 11.643202 46.760785v15.304359h-20.889162c0-5.538611.099091-10.750305-.038112-15.961998-.099091-3.896415-.167692-7.857454-.842274-11.689246-5.328051-30.262793-30.775402-49.8170956-57.026916-51.5315184-29.311903-1.9120945-57.1907972 18.1858064-64.1500399 46.8520184-1.6657464 6.843753-1.7799637 13.736569-1.7780383 20.63947l.0023262 1.88283c.0030489 1.883022.0050308 3.76653-.0231721 5.649734-.0228671 1.364696 0 2.72559 0 4.052272h-20.5918884c-5.5529117-51.542923 24.3078039-93.7420516 70.1221835-99.8660762v-27.3889489h-42.6205979v-20.6909159z"
      class="fill-color"
      fill="black"
      fill-rule="evenodd"
      transform="matrix(1 0 0 -1 0 301)"
    />
  </svg>
`,ys=O`
  <svg viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg">
    <path
      class="fill-color"
      d="m43.0952612 181.159979c2.1744514 0 21.7161099 3.336499 21.7161099 3.336499v21.030628l-44.8113711-6.289709c4.5382599-51.29161 9.6729948-105.5332879 14.6089046-156.237397 66.1329874 6.484496 144.5110704 16.1138469 211.0385514 22.4035567-.987813 6.4876377-1.581132 21.8160564-1.972471 28.3005524-4.939065-.5906421-15.599873 0-20.535783-.5906421v-9.0418506c-56.065498-5.3032118-112.326666-12.180422-168.3953197-17.6847035 0 0-7.7005244 74.2858081-11.6486211 114.7730661zm31.7867547-81.562016h205.1179841v158.402037h-205.1179841zm18.9514955 140.126691h167.8051566v-64.461671l-21.122791 35.963191-28.428821-67.408598-24.2819 28.891194-66.530637-54.634392h-27.4410076zm64.5550106-40.487257c0-11.394994-9.082832-20.436845-20.731453-20.436845-11.250971 0-20.923965 9.041851-20.923965 20.436845 0 11.203349 9.672994 20.439986 20.923965 20.439986 11.648621 0 20.731453-9.236637 20.731453-20.439986z"
      fill="black"
      transform="matrix(1 0 0 -1 0 301)"
    />
  </svg>
`,nr=O`
  <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
    <path
      class="fill-color"
      d="m272 280h-9.268431c.276116-.74734.440961-1.53597.440961-2.365889v-6.775607c0-3.831666-3.082608-6.920121-6.882294-6.920121h-12.701336c-3.795565 0-6.882294 3.100842-6.882294 6.920121v6.775607c0 .829919.164845 1.626807.432719 2.365889h-172.3623223c.2678738-.74734.4368403-1.53597.4368403-2.365889v-6.775607c0-3.831666-3.0826085-6.920121-6.8864155-6.920121h-12.6930937c-3.803807 0-6.8905366 3.100842-6.8905366 6.920121v6.775607c0 .829919.1689665 1.626807.4368402 2.365889h-11.1806374v-260h11.1806374c-.2678737.74734-.4368402 1.5359695-.4368402 2.3700175v6.7673495c0 3.8399238 3.0826085 6.9242496 6.8905366 6.9242496h12.6930937c3.7955647 0 6.8864155-3.0967127 6.8864155-6.9242496v-6.7673495c0-.8381769-.1689665-1.6309354-.4368403-2.3700175h172.3664433c-.271995.74734-.43684 1.5359695-.43684 2.3700175v6.7673495c0 3.8399238 3.078487 6.9242496 6.882294 6.9242496h12.701336c3.795565 0 6.882294-3.0967127 6.882294-6.9242496v-6.7673495c0-.8381769-.164845-1.6309354-.43684-2.3700175h9.26431zm-206.786157-222.1333969c0-3.8357948-3.0826085-6.9242496-6.8864155-6.9242496h-12.6930937c-3.803807 0-6.8905366 3.1008417-6.8905366 6.9242496v6.7714785c0 3.8399238 3.0826085 6.9283786 6.8905366 6.9283786h12.6930937c3.7955647 0 6.8864155-3.1008417 6.8864155-6.9283786zm0 35.5007147c0-3.8357949-3.0826085-6.9242497-6.8864155-6.9242497h-12.6930937c-3.803807 0-6.8905366 3.1008417-6.8905366 6.9242497v6.7714782c0 3.835795 3.0826085 6.920121 6.8905366 6.920121h12.6930937c3.7955647 0 6.8864155-3.096713 6.8864155-6.920121zm0 35.4965852c0-3.839923-3.0826085-6.924249-6.8864155-6.924249h-12.6930937c-3.803807 0-6.8905366 3.100841-6.8905366 6.924249v6.771479c0 3.839924 3.0826085 6.92425 6.8905366 6.92425h12.6930937c3.7955647 0 6.8864155-3.100842 6.8864155-6.92425zm0 35.500715c0-3.839924-3.0826085-6.92425-6.8864155-6.92425h-12.6930937c-3.803807 0-6.8905366 3.096713-6.8905366 6.92425v6.771479c0 3.839923 3.0826085 6.928378 6.8905366 6.928378h12.6930937c3.7955647 0 6.8864155-3.10497 6.8864155-6.928378zm0 35.496586c0-3.827537-3.0826085-6.92425-6.8864155-6.92425h-12.6930937c-3.803807 0-6.8905366 3.104971-6.8905366 6.92425v6.771478c0 3.839924 3.0826085 6.928379 6.8905366 6.928379h12.6930937c3.7955647 0 6.8864155-3.104971 6.8864155-6.928379zm0 35.500714c0-3.835794-3.0826085-6.924249-6.8864155-6.924249h-12.6930937c-3.803807 0-6.8905366 3.10497-6.8905366 6.924249v6.771479c0 3.835795 3.0826085 6.928378 6.8905366 6.928378h12.6930937c3.7955647 0 6.8864155-3.10497 6.8864155-6.928378zm155.247251-186.2734632c0-5.8672383-4.805242-10.6692075-10.673738-10.6692075h-119.5788334c-5.8684952 0-10.6737379 4.8019692-10.6737379 10.6692075v74.7009692c0 5.867238 4.8052427 10.665078 10.6737379 10.665078h119.5788334c5.868496 0 10.673738-4.79784 10.673738-10.665078zm.366781 121.3663652c0-5.90027-4.83409-10.727013-10.731434-10.727013h-120.1970034c-5.8973433 0-10.7273127 4.826743-10.7273127 10.727013v75.084961c0 5.896141 4.8299694 10.718755 10.7273127 10.718755h120.1970034c5.897344 0 10.731434-4.822614 10.731434-10.718755zm42.344655-112.5882169c0-3.8357948-3.082608-6.9242496-6.882294-6.9242496h-12.701336c-3.795565 0-6.882294 3.1008417-6.882294 6.9242496v6.7714785c0 3.8399238 3.078487 6.9283786 6.882294 6.9283786h12.701336c3.795565 0 6.882294-3.1008417 6.882294-6.9283786zm0 35.5007147c0-3.8357949-3.082608-6.9242497-6.882294-6.9242497h-12.701336c-3.795565 0-6.882294 3.1008417-6.882294 6.9242497v6.7714782c0 3.835795 3.078487 6.920121 6.882294 6.920121h12.701336c3.795565 0 6.882294-3.096713 6.882294-6.920121zm0 35.4965852c0-3.839923-3.082608-6.924249-6.882294-6.924249h-12.701336c-3.795565 0-6.882294 3.100841-6.882294 6.924249v6.771479c0 3.839924 3.078487 6.92425 6.882294 6.92425h12.701336c3.795565 0 6.882294-3.100842 6.882294-6.92425zm0 35.500715c0-3.839924-3.082608-6.92425-6.882294-6.92425h-12.701336c-3.795565 0-6.882294 3.096713-6.882294 6.92425v6.771479c0 3.839923 3.078487 6.928378 6.882294 6.928378h12.701336c3.795565 0 6.882294-3.10497 6.882294-6.928378zm0 35.496586c0-3.827537-3.082608-6.92425-6.882294-6.92425h-12.701336c-3.795565 0-6.882294 3.104971-6.882294 6.92425v6.771478c0 3.839924 3.078487 6.928379 6.882294 6.928379h12.701336c3.795565 0 6.882294-3.104971 6.882294-6.928379zm0 35.500714c0-3.835794-3.082608-6.924249-6.882294-6.924249h-12.701336c-3.795565 0-6.882294 3.10497-6.882294 6.924249v6.771479c0 3.835795 3.078487 6.928378 6.882294 6.928378h12.701336c3.795565 0 6.882294-3.10497 6.882294-6.928378z"
      fill="black"
      fill-rule="evenodd"
      transform="matrix(1 0 0 -1 0 300)"
    />
    <title>Icon of a film</title>
  </svg>
`,bs=O`
  <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>icon/radio</title>
    <g id="icon/radio" stroke="none" stroke-fill="none" fill-rule="evenodd">
      <path
        class="fill-color"
        d="M64.1512549,2.64739434 C66.1587977,1.39734524 68.798514,2.01257316 70.0484935,4.01892156 C71.2997791,6.02526996 70.6858916,8.66513331 68.6770426,9.9151824 C68.4249569,10.0719284 68.1637282,10.1999376 67.8959687,10.2979038 L67.8959687,10.2979038 L34.8074317,31.1764668 L35.0020471,31.1647109 C52.2287757,30.3692251 69.4411367,30.9217546 86.5973335,32.7295581 C88.6492852,32.94639 90.6947061,33.2494322 92.7335963,33.5903547 C96.8727656,34.2826494 99.9748567,37.8982564 99.9839997,42.1290913 C100.006204,58.2399645 100.003592,74.3443065 99.986612,90.4486486 C99.9800813,95.0478365 97.0242782,97.9084504 92.2411802,97.9175939 C87.5303554,97.9267375 82.8202563,97.9308012 78.1104474,97.9321558 L78.1104474,97.9321558 L49.8515942,97.9267375 C48.1320561,97.9267375 46.4123956,97.9245128 44.6926508,97.9210381 L44.6926508,97.9210381 L34.3734782,97.892985 C25.7738361,97.8701007 17.1740026,97.8646922 8.5787611,97.9985794 C3.01458916,98.0834834 -0.0731344263,94.3529294 0.00131576168,89.4284935 C0.129027585,80.8118193 0.140637751,72.1935325 0.126178794,63.5736331 L0.126178794,63.5736331 L0.0914450485,48.0560725 L0.0875212425,42.8827782 C0.0875212425,37.6931804 2.77164644,34.1128413 7.8695251,33.5328812 C10.8227159,33.1945711 13.7772128,32.8784668 16.7356282,32.578037 L16.7356282,32.578037 L64.1055399,2.57424622 Z M12.7505839,77.7247946 C11.0094944,77.7247946 9.46432649,78.2276879 9.5544504,80.4169066 C9.62881352,82.3029089 10.9422367,82.7552081 12.4614494,82.7996984 L12.4614494,82.7996984 L12.7897682,82.8033639 C15.5594458,82.7772396 18.3314092,82.7720147 21.1041889,82.773321 L21.1041889,82.773321 L29.4235076,82.7824645 L37.7418467,82.7723413 C40.5139733,82.7700554 43.2856101,82.773321 46.0572469,82.7955266 L46.0572469,82.7955266 L46.3771692,82.7934404 L46.6910226,82.7816532 C48.1384034,82.7002545 49.3222811,82.2230773 49.3291612,80.2457922 C49.333384,78.3566767 48.2339358,77.8765708 46.9366545,77.7629453 L46.9366545,77.7629453 L46.6341823,77.742755 C46.5833225,77.7403161 46.532273,77.7383006 46.4810855,77.7366494 L46.4810855,77.7366494 L46.1727164,77.7306375 L23.8394532,77.7342767 Z M72.5758814,48.314026 C63.8625972,48.2434903 56.222963,55.7385601 56.1119407,64.4732291 C55.9917755,73.5122467 63.4080592,81.0843832 72.4439609,81.1549188 C81.6522736,81.228067 88.9418613,74.0412643 89.0123931,64.8324387 C89.0816187,55.7268041 81.7802757,48.3950114 72.5758814,48.314026 Z M43.2828538,67.741865 L43.1158114,67.7413826 L38.8529055,67.7642822 C37.43176,67.7683233 36.0104716,67.769303 34.5891424,67.7688131 L34.5891424,67.7688131 L26.0614938,67.7609758 L14.6889495,67.7652331 L8.84172485,67.7569866 C7.40173575,67.7858956 6.34240993,68.3050616 6.30084658,70.1226151 C6.25251926,72.1341884 7.4175994,72.693249 9.04244209,72.693249 C20.4137287,72.681493 31.7863214,72.6736557 43.157608,72.6958614 L43.157608,72.6958614 L43.325337,72.6944626 C44.8758145,72.661732 45.9981125,72.069328 45.9881554,70.1800886 C45.976266,68.2181516 44.7445726,67.7283204 43.1158114,67.7413826 Z M72.582393,57.9750172 C76.6548848,58.0954055 79.8665352,61.5077032 79.7215514,65.56725 C79.5843346,69.4235606 75.9752732,72.8358582 72.2367619,72.645567 C68.1008397,72.4280913 65.0406456,69.125826 65.140322,64.9911982 C65.2425874,61.0455673 68.6251116,57.8507453 72.582393,57.9750172 Z M43.1249544,57.4692968 C41.2314815,57.4740863 39.3375733,57.475973 37.4433747,57.47636 L37.4433747,57.47636 L26.0758614,57.4719092 C20.3862997,57.4719092 14.7032687,57.4692968 9.02023765,57.4771341 C7.51033559,57.4771341 6.39227663,58.074075 6.30084658,59.902778 C6.20811038,61.7745861 7.29743418,62.4982299 8.81256081,62.5034548 C20.3301355,62.5230481 31.8450979,62.516517 43.3613664,62.5099859 C44.7693893,62.5034548 45.903122,61.9156574 45.9841029,60.2254134 C46.0820637,58.1393858 44.8490641,57.4692968 43.1249544,57.4692968 Z M46.2168861,47.4009001 L40.5790386,47.4140429 L29.6377151,47.4088181 L18.2454335,47.4123013 L12.5520501,47.4009808 C10.9546364,47.3931435 9.74384123,47.9548165 9.52571524,49.829237 C9.32848755,51.5364619 10.6202636,52.5618418 12.9582608,52.5657604 C23.9742763,52.5840474 34.9942102,52.5762101 46.0154503,52.5683728 L46.0154503,52.5683728 L46.1775177,52.5672124 L46.4993249,52.5570056 C47.9909315,52.4819668 49.3130496,51.9964186 49.3214617,49.9742271 C49.3331052,47.9543951 48.0608789,47.4733378 46.5450549,47.4087712 L46.5450549,47.4087712 L46.2168861,47.4009001 Z"
        id="Combined-Shape"
        fill="#000000">
      </path>
    </g>
  </svg>
`,ws=O`
  <svg viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg">
    <path
      class="fill-color"
      d="m266.443951 20c8.716971 0 13.539477 4.8435881 13.556049 13.5985084v116.3828466 116.072094c0 9.214834-4.702358 13.946551-13.854348 13.946551h-232.4332033c-8.9489808 0-13.6969123-4.793868-13.6969123-13.768386-.0207152-77.476694-.0207152-154.961674 0-232.4590845 0-8.9662316 4.7479315-13.7725295 13.672054-13.7725295zm-197.7807608 138.512534c-2.3822518 0-5.1000904 1.052413-7.0887528 2.444582-4.1223314 2.871349-5.2575262 7.383468-5.2575262 12.227056l.0000647 20.524783c.0000093.952732.0000199 1.902825.0000319 2.850655l.0008306 25.31649c.0000546.937648.0001123 1.876427.0001735 2.816715l.0009089 11.379992c.0000914.958389.0001869 1.919795.0002867 2.884595l.0006526 5.832546c.0003539 2.939654.0007502 5.916643.0011941 8.941148 0 1.052413.0952901 2.092397.1574358 3.298115h183.648829l.28587-1.143568c.016572-29.633312.111862-55.119121-.033144-84.760721-.041431-7.391754-5.522681-12.703542-12.350422-12.703542-53.113858-.008287-106.236002-.045577-159.3664328.091154zm146.0755388-113.992128h-129.8596542l-.2444397 1.1601409c-.0082861 22.2001243-.0662888 44.3961053.0331443 66.6003731.0207153 5.676403 4.0228983 9.264553 9.7485888 9.264553 36.5333858.008287 73.0460558.008287 109.5835838.008287 7.391195 0 10.734634-3.372695 10.738777-10.876321zm-20.434335 9.1887301v53.7103789h-32.709353v-53.7103789z"
      fill="black"
      fill-rule="evenodd"
    />
  </svg>
`,xs=O`
  <svg viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg">
    <path
      class="fill-color"
      d="m30.7264159 91.3202111 1.6974686 166.4298289s93.0569425-.896348 99.7147175 6.469589c4.752251 5.262329 29.15749 5.35494 31.185205 2.06061 5.607591-9.099099 85.824537-7.696693 102.729871-8.530199l1.905524-164.9480418 12.040798 4.2865984v175.2610164s-105.576598-1.796006-108.707338 4.190679c-.369876.714433-11.030243 3.459708-17.354469 3.459708l-.365424-.000017-.751764-.000432c-7.778071-.009122-19.543206-.203741-22.971013-4.355608-5.663733-6.863188-109.849992-4.187372-109.849992-4.187372v-175.5388508zm222.4119701-5.3202111v146.683693s-1.32429 4.845576-4.61685 8.004297c-2.777376 2.665893-8.834102 2.768428-8.834102 2.768428h-59.100966s-15.366384 3.883076-18.041383 8.146521l-7.21259-.046306v-156.044089c4.785276-5.1035658 12.024286-9.512544 22.929035-9.512544zm-132.891971 0c10.736323 0 17.929098 4.2766757 22.714375 9.2909375v156.2656955l-7.001233.046306c-5.165059-5.067182-18.044684-8.146521-18.044684-8.146521l-61.8453708-.000141c-.1987476-.00456-4.8027407-.135182-7.8201913-2.503683-2.7517631-2.168142-2.8740636-6.281222-2.8794992-6.642546l-.0002528-148.310048z"
      fill="black"
      fill-rule="evenodd"
    />
  </svg>
`,Ss=O`
  <svg viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg">
    <path
      class="fill-color"
      d="m237.917039 64.413845c0-9.2252653-7.280839-16.7597371-16.145202-16.7597371h-143.5076619c-8.8913162 0-16.1755245 7.5344718-16.1755245 16.7597371v90.110532c0 9.218529 7.2842083 16.756369 16.1755245 16.756369h143.5076619c8.864363 0 16.145202-7.53784 16.145202-16.756369zm26.070862 112.508493c.347027 17.780275-6.761982 22.667409-22.50288 21.923056-19.861428-.943072-39.773394-.2324-59.668515-.2324h-3.584827c0 .121252.067384.222296.067384.343548 0 5.530444-3.416368 10.161601-8.163569 11.970278l34.729703 56.607899c2.368547 3.859859 1.165743 8.905294-2.712205 11.246134-3.867841 2.37452-8.894686 1.175471-11.243017-2.684388l-39.436475-64.283831h-7.280839l-37.556461 61.255897c-2.378655 3.856491-7.3987611 5.055539-11.2666016 2.687755-3.8577329-2.35768-5.0639061-7.403116-2.708836-11.259607l34.0558636-55.503156c-2.951418-2.344208-5.003261-5.884096-5.003261-10.036981 0-.134725.064015-.242504.064015-.370493-26.0169545-.07073-45.1472665-.740985-64.1124877.296394-16.711227.879078-21.9402239-6.069342-21.653842-22.839183.8153462-44.310913.7917618-88.6218257.033692-132.9327384-.2931203-16.5138648 4.4945115-23.3275602 21.3775677-23.1052646 61.993262.7544576 124.003369.6332055 186.023585.0505217 15.302902-.1481971 20.723943 5.6011742 20.477991 21.3572132-.636778 45.1563095-.808608 90.3564041.064015 135.5093461z"
      fill="black"
      fill-rule="evenodd"
      transform="matrix(1 0 0 -1 0 300)"
    />
  </svg>
`,$s=O`
  <svg viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg">
    <path
      class="fill-color"
      d="m272 280h-9.268431c.276116-.74734.440961-1.53597.440961-2.365889v-6.775607c0-3.831666-3.082608-6.920121-6.882294-6.920121h-12.701336c-3.795565 0-6.882294 3.100842-6.882294 6.920121v6.775607c0 .829919.164845 1.626807.432719 2.365889h-172.3623223c.2678738-.74734.4368403-1.53597.4368403-2.365889v-6.775607c0-3.831666-3.0826085-6.920121-6.8864155-6.920121h-12.6930937c-3.803807 0-6.8905366 3.100842-6.8905366 6.920121v6.775607c0 .829919.1689665 1.626807.4368402 2.365889h-11.1806374v-260h11.1806374c-.2678737.74734-.4368402 1.5359695-.4368402 2.3700175v6.7673495c0 3.8399238 3.0826085 6.9242496 6.8905366 6.9242496h12.6930937c3.7955647 0 6.8864155-3.0967127 6.8864155-6.9242496v-6.7673495c0-.8381769-.1689665-1.6309354-.4368403-2.3700175h172.3664433c-.271995.74734-.43684 1.5359695-.43684 2.3700175v6.7673495c0 3.8399238 3.078487 6.9242496 6.882294 6.9242496h12.701336c3.795565 0 6.882294-3.0967127 6.882294-6.9242496v-6.7673495c0-.8381769-.164845-1.6309354-.43684-2.3700175h9.26431zm-206.786157-222.1333969c0-3.8357948-3.0826085-6.9242496-6.8864155-6.9242496h-12.6930937c-3.803807 0-6.8905366 3.1008417-6.8905366 6.9242496v6.7714785c0 3.8399238 3.0826085 6.9283786 6.8905366 6.9283786h12.6930937c3.7955647 0 6.8864155-3.1008417 6.8864155-6.9283786zm0 35.5007147c0-3.8357949-3.0826085-6.9242497-6.8864155-6.9242497h-12.6930937c-3.803807 0-6.8905366 3.1008417-6.8905366 6.9242497v6.7714782c0 3.835795 3.0826085 6.920121 6.8905366 6.920121h12.6930937c3.7955647 0 6.8864155-3.096713 6.8864155-6.920121zm0 35.4965852c0-3.839923-3.0826085-6.924249-6.8864155-6.924249h-12.6930937c-3.803807 0-6.8905366 3.100841-6.8905366 6.924249v6.771479c0 3.839924 3.0826085 6.92425 6.8905366 6.92425h12.6930937c3.7955647 0 6.8864155-3.100842 6.8864155-6.92425zm0 35.500715c0-3.839924-3.0826085-6.92425-6.8864155-6.92425h-12.6930937c-3.803807 0-6.8905366 3.096713-6.8905366 6.92425v6.771479c0 3.839923 3.0826085 6.928378 6.8905366 6.928378h12.6930937c3.7955647 0 6.8864155-3.10497 6.8864155-6.928378zm0 35.496586c0-3.827537-3.0826085-6.92425-6.8864155-6.92425h-12.6930937c-3.803807 0-6.8905366 3.104971-6.8905366 6.92425v6.771478c0 3.839924 3.0826085 6.928379 6.8905366 6.928379h12.6930937c3.7955647 0 6.8864155-3.104971 6.8864155-6.928379zm0 35.500714c0-3.835794-3.0826085-6.924249-6.8864155-6.924249h-12.6930937c-3.803807 0-6.8905366 3.10497-6.8905366 6.924249v6.771479c0 3.835795 3.0826085 6.928378 6.8905366 6.928378h12.6930937c3.7955647 0 6.8864155-3.10497 6.8864155-6.928378zm155.247251-186.2734632c0-5.8672383-4.805242-10.6692075-10.673738-10.6692075h-119.5788334c-5.8684952 0-10.6737379 4.8019692-10.6737379 10.6692075v74.7009692c0 5.867238 4.8052427 10.665078 10.6737379 10.665078h119.5788334c5.868496 0 10.673738-4.79784 10.673738-10.665078zm.366781 121.3663652c0-5.90027-4.83409-10.727013-10.731434-10.727013h-120.1970034c-5.8973433 0-10.7273127 4.826743-10.7273127 10.727013v75.084961c0 5.896141 4.8299694 10.718755 10.7273127 10.718755h120.1970034c5.897344 0 10.731434-4.822614 10.731434-10.718755zm42.344655-112.5882169c0-3.8357948-3.082608-6.9242496-6.882294-6.9242496h-12.701336c-3.795565 0-6.882294 3.1008417-6.882294 6.9242496v6.7714785c0 3.8399238 3.078487 6.9283786 6.882294 6.9283786h12.701336c3.795565 0 6.882294-3.1008417 6.882294-6.9283786zm0 35.5007147c0-3.8357949-3.082608-6.9242497-6.882294-6.9242497h-12.701336c-3.795565 0-6.882294 3.1008417-6.882294 6.9242497v6.7714782c0 3.835795 3.078487 6.920121 6.882294 6.920121h12.701336c3.795565 0 6.882294-3.096713 6.882294-6.920121zm0 35.4965852c0-3.839923-3.082608-6.924249-6.882294-6.924249h-12.701336c-3.795565 0-6.882294 3.100841-6.882294 6.924249v6.771479c0 3.839924 3.078487 6.92425 6.882294 6.92425h12.701336c3.795565 0 6.882294-3.100842 6.882294-6.92425zm0 35.500715c0-3.839924-3.082608-6.92425-6.882294-6.92425h-12.701336c-3.795565 0-6.882294 3.096713-6.882294 6.92425v6.771479c0 3.839923 3.078487 6.928378 6.882294 6.928378h12.701336c3.795565 0 6.882294-3.10497 6.882294-6.928378zm0 35.496586c0-3.827537-3.082608-6.92425-6.882294-6.92425h-12.701336c-3.795565 0-6.882294 3.104971-6.882294 6.92425v6.771478c0 3.839924 3.078487 6.928379 6.882294 6.928379h12.701336c3.795565 0 6.882294-3.104971 6.882294-6.928379zm0 35.500714c0-3.835794-3.082608-6.924249-6.882294-6.924249h-12.701336c-3.795565 0-6.882294 3.10497-6.882294 6.924249v6.771479c0 3.835795 3.078487 6.928378 6.882294 6.928378h12.701336c3.795565 0 6.882294-3.10497 6.882294-6.928378z"
      fill="black"
      fill-rule="evenodd"
      transform="matrix(1 0 0 -1 0 300)"
    />
  </svg>
`,Cs=O`
  <svg viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg">
    <path
      class="fill-color"
      d="m261.437982 261.890554h-28.778763v-28.083112h28.778763zm-42.442013 0h-28.793735v-28.083112h28.793735zm40.645399-150.356298v75.703472 19.821613h-219.2617757v-19.821613-75.703472zm-84.228262 150.356298h-134.608315v-27.499419h134.608315zm-155.413106-169.890554v87.643734 100.356266h260v-100.356266-87.643734z"
      fill="black"
      transform="matrix(1 0 0 -1 0 372)"
    />
  </svg>
`,_s={account:{color:"#000000",icon:ms,text:"Account"},audio:{color:"#00adef",icon:vs,text:"Audio"},collection:{color:"#4666ff",icon:Gr,text:"Collection"},data:{color:"#333333",icon:fs,text:"Data"},etree:{color:"#00adef",icon:gs,text:"E-tree"},film:{color:"#bf1b2c",icon:nr,text:"Film"},image:{color:"#aa99c9",icon:ys,text:"Image"},movies:{color:"#f1644b",icon:nr,text:"Movie"},radio:{color:"#8fdaef",icon:bs,text:"Radio"},software:{color:"#9ecc4f",icon:ws,text:"Software"},texts:{color:"#faab3c",icon:xs,text:"Text"},tv:{color:"#f1644b",icon:Ss,text:"TV"},video:{color:"#f1644b",icon:$s,text:"Video"},web:{color:"#ffcd27",icon:Cs,text:"Web"}};let Yt=class extends I{constructor(){super(...arguments),this.showText=!1}get displayMediatype(){var e,t;const i=["tvnews","tvarchive","television"],a=["radio","radioprogram"];return this.mediatype==="movies"&&((e=this.collections)===null||e===void 0?void 0:e.some(o=>i.indexOf(o)>=0))?"tv":this.mediatype==="audio"&&((t=this.collections)===null||t===void 0?void 0:t.some(o=>a.indexOf(o)>=0))?"radio":this.mediatype||""}render(){const e=_s[this.displayMediatype];return e?u`
      <div
        id="icon"
        class="${this.showText?"show-text":"hide-text"}"
        style="--iconFillColor: ${e.color}"
      >
        ${e.icon}
        <p class="status-text">${e.text}</p>
      </div>
    `:u``}static get styles(){return y`
      #icon {
        height: var(--iconHeight, 25px);
      }

      .status-text {
        font-size: 14px;
        color: #2c2c2c;
        margin: auto;
        display: block;
        text-align: var(--iconTextAlign, center);
      }

      #icon.hide-text p {
        display: none;
      }

      svg {
        height: var(--iconHeight, 10px);
        width: var(--iconWidth, 10px);
      }

      .fill-color {
        fill: var(--iconFillColor, '#000000');
      }
    `}};n([p({type:String})],Yt.prototype,"mediatype",void 0);n([p({type:Array})],Yt.prototype,"collections",void 0);n([p({type:Boolean})],Yt.prototype,"showText",void 0);Yt=n([H("mediatype-icon")],Yt);const zs=O`
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m81.0388846 100-30.9636029-22.5595033-30.7410319 22.5595033 10.6670595-37.3922042-30.0013093-25.2155916h37.5556428l12.5196389-37.3922042 12.3690754 37.3922042h37.5556429l-29.7034563 25.2155916z"
      fill="#333"
    />
    <title>Icon of a star, filled in</title>
  </svg>
`,ks=O`
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m100 7.78013601c0-2.14552613-.7593357-3.978597-2.278007-5.4992126-1.5186713-1.52061561-3.3493984-2.28092341-5.4921813-2.28092341h-84.54977287c-2.08268321 0-3.88336049.7603078-5.40203183 2.28092341-1.51867133 1.5206156-2.278007 3.35368647-2.278007 5.4992126v51.49262709c0 2.0853495.75933567 3.8883321 2.278007 5.4089477 1.51867134 1.5206156 3.31934862 2.2809234 5.40203183 2.2809234h10.53361537l.3571304 33.0373658 32.4087237-33.0373658h41.2468361c2.1427829 0 3.97351-.7603078 5.4921813-2.2809234s2.278007-3.3235982 2.278007-5.4089477z"
      fill="#333"
    />
    <title>Icon of a speech bubble</title>
  </svg>
`,Ts=O`
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m50 20 33.3333333 43.3333333h-20v36.6666667h-26.6666666v-36.6666667h-20zm50-20v13.3333333h-100v-13.3333333z"
      fill="#333"
      fill-rule="evenodd"
    />
    <title>Icon of an arrow pointing upwards</title>
  </svg>
`,Ds=O`
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m98 50.5704143c-.2830293-.471515-.671154-1.1088947-1.1643742-1.9121392s-1.6003642-2.3617474-3.3214321-4.6755089c-1.7210678-2.3137614-3.522258-4.5325939-5.4035703-6.6564975-1.8813124-2.1239037-4.2828993-4.473133-7.2047606-7.0476881-2.9218612-2.5745551-5.8895067-4.7933876-8.9029363-6.6564976-3.0134295-1.86311-6.4628491-3.4330878-10.3482587-4.7099336-3.8854095-1.2768458-7.7822651-1.9142256-11.6905667-1.9121443-3.9083017.0020914-7.8051573.6154781-11.6905668 1.8401652-3.8854096 1.2246871-7.3702078 2.8301329-10.4543947 4.8163375-3.0841869 1.9862045-6.0278997 4.1695691-8.8311384 6.5500937s-5.2048256 4.7652219-7.2047605 7.1540919c-1.99993501 2.38887-3.75430043 4.5722346-5.26309632 6.5500938s-2.63883199 3.583305-3.39010829 4.8163374l-1.13003609 1.8401602c.2830293.4715149.67115403 1.1088946 1.16437421 1.9121391.49322017.8032445 1.5878776 2.3617475 3.28397229 4.6755089s3.47439274 4.521119 5.3348942 6.6220728c1.8605014 2.1009538 4.2506422 4.4387083 7.1704224 7.0132633 2.9197801 2.5745551 5.8874256 4.7819127 8.9029363 6.6220729 3.0155106 1.8401601 6.4774168 3.398663 10.3857184 4.6755088 3.9083017 1.2768458 7.8176438 1.9142256 11.7280266 1.9121443 3.9103827-.0020914 7.7957922-.6154781 11.6562286-1.8401652s7.3337886-2.818658 10.4200566-4.7819127 6.0299808-4.1351444 8.8311384-6.515669 5.2152311-4.7652219 7.2422203-7.1540919 3.8052873-4.5607597 5.3348942-6.515669c1.5296068-1.9549093 2.6721295-3.5488802 3.427568-4.7819127zm-24.5142913 0c0 6.467683-2.3079374 12.0152859-6.9238123 16.6428087s-10.1495139 6.9412843-16.600917 6.9412843c-6.4992683 0-12.0453939-2.3137615-16.6383767-6.9412843s-6.8894742-10.1751257-6.8894742-16.6428087 2.2964914-12.003811 6.8894742-16.608384 10.1391084-6.9068595 16.6383767-6.9068595c6.4534842 0 11.9871232 2.3022865 16.600917 6.9068595s6.9217312 10.140701 6.9238123 16.608384zm-23.5247293-10.552755c2.8261308 0 5.2870289 1.0619518 7.3826944 3.1858555 2.0956655 2.1239036 3.1434982 4.5795368 3.1434982 7.3668995 0 2.8332624-1.0478327 5.2888956-3.1434982 7.3668995-2.0956655 2.078004-4.5565636 3.1170059-7.3826944 3.1170059-2.873996 0-5.3348941-1.0264838-7.3826944-3.0794516-2.0478002-2.0529677-3.0717003-4.5200758-3.0717003-7.4013243 0-2.8332624 1.0239001-5.3003705 3.0717003-7.4013243 2.0478003-2.1009538 4.5086984-3.1514307 7.3826944-3.1514307z"
      fill="#333"
    />
    <title>Eye icon</title>
  </svg>
`;function Ms(r,e){let t=1;return r>=1e9?t=1e9:r>=1e6?t=1e6:r>=1e3&&e==="short"&&(t=1e3),t}function As(r=0,e){const t=r/e,i=t<10;let a=0;return i?a=Math.round((t+Number.EPSILON)*10)/10:a=Math.round(t),a}function Es(r,e,t,i){switch(e){case 1e9:return Ge(t==="short"?ct`${r}B`:ct`${r} billion`);case 1e6:return Ge(t==="short"?ct`${r}M`:ct`${r} million`);case 1e3:return Ge(t==="short"?ct`${r}K`:ct`${r} thousand`);default:return new Intl.NumberFormat(i).format(r)}}function Bt(r,e="long",t="short",i="en-US"){const a=r!=null?r:-1;if(a<0)return"";const o=Ms(a,e),s=As(a,o);return Es(s,o,t,i)}let Ze=class extends I{render(){return u`
      <div class="item-stats">
        <p class="sr-only">
          ${this.mediatype==="account"?"Account Stats":"Item Stats"}
        </p>
        <ul id="stats-row">
          <li class="col">
            <p class="sr-only">Mediatype:</p>
            <mediatype-icon .mediatype=${this.mediatype}></mediatype-icon>
          </li>
          <li class="col">
            ${this.mediatype==="account"?Ts:Ds}
            <p class="status-text">
              <span class="sr-only">
                ${this.mediatype==="account"?"Uploads:":"Views:"}
              </span>
              ${Bt(this.mediatype==="account"?this.itemCount:this.viewCount,"short","short")}
            </p>
          </li>
          <li class="col">
            ${zs}
            <p class="status-text">
              <span class="sr-only">Favorites:</span>
              ${Bt(this.favCount,"short","short")}
            </p>
          </li>
          <li class="col">
            ${ks}
            <p class="status-text">
              <span class="sr-only">Reviews:</span>
              ${Bt(this.commentCount,"short","short")}
            </p>
          </li>
        </ul>
      </div>
    `}static get styles(){return y`
      mediatype-icon {
        --iconHeight: 25px;
        --iconWidth: 25px;
      }

      ul {
        all: unset; // unset all property values
        list-style-type: none; // remove default list-style
      }

      li {
        list-style-type: none; // remove default list-style
      }

      .item-stats {
        height: 35px;
      }

      #stats-row {
        border-top: 1px solid #bbb;
        align-items: center;
        display: flex;
        flex: 1;
        justify-content: space-evenly;
        text-align: center;
        width: 100%;
        padding-top: 5px;
        padding-bottom: 5px;
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }

      .col {
        width: 25%;
        height: 25px;
      }

      svg {
        height: 10px;
        width: 10px;
        display: block;
        margin: auto;
      }

      .status-text {
        font-size: 14px;
        height: 15px;
        color: #2c2c2c;
        line-height: 20px;
        margin: auto;
        display: block;
        text-align: center;
      }
    `}};n([p({type:String})],Ze.prototype,"mediatype",void 0);n([p({type:Number})],Ze.prototype,"itemCount",void 0);n([p({type:Number})],Ze.prototype,"viewCount",void 0);n([p({type:Number})],Ze.prototype,"favCount",void 0);n([p({type:Number})],Ze.prototype,"commentCount",void 0);Ze=n([H("tile-stats")],Ze);let wt=class extends I{constructor(){super(...arguments),this.loggedIn=!1}render(){var e,t,i,a,o;const s=(e=this.model)===null||e===void 0?void 0:e.title;return u`
      <div class="container">
        <div class="item-info">
          <div id="title">
            <h1 class="truncated" title=${_i(s)}>
              ${s}
            </h1>
          </div>

          <image-block 
            class=${this.hasSnippets?"has-snippets":$}
            .model=${this.model}
            .baseImageUrl=${this.baseImageUrl}
            .loggedIn=${this.loggedIn}
            .isCompactTile=${!1}
            .isListTile=${!1}
            .viewSize=${"grid"}>
          </image-block>

          ${this.textSnippetsTemplate}

          ${this.doesSortedByDate?this.sortedDateInfoTemplate:this.creatorTemplate}
        </div>

        <tile-stats 
          .mediatype=${(t=this.model)===null||t===void 0?void 0:t.mediatype}
          .viewCount=${(i=this.model)===null||i===void 0?void 0:i.viewCount}
          .favCount=${(a=this.model)===null||a===void 0?void 0:a.favCount}
          .commentCount=${(o=this.model)===null||o===void 0?void 0:o.commentCount}>
        </tile-stats>
        </div>
      </div>
    `}get doesSortedByDate(){var e;return["date","reviewdate","addeddate","publicdate"].includes((e=this.sortParam)===null||e===void 0?void 0:e.field)}get sortedDateInfoTemplate(){var e,t,i,a,o;let s;switch((e=this.sortParam)===null||e===void 0?void 0:e.field){case"date":s={field:"published",value:(t=this.model)===null||t===void 0?void 0:t.datePublished};break;case"reviewdate":s={field:"reviewed",value:(i=this.model)===null||i===void 0?void 0:i.dateReviewed};break;case"addeddate":s={field:"added",value:(a=this.model)===null||a===void 0?void 0:a.dateAdded};break;case"publicdate":s={field:"archived",value:(o=this.model)===null||o===void 0?void 0:o.dateArchived};break}return u`
      <div class="date-sorted-by truncated">
        <span>
          ${s==null?void 0:s.field} ${ui(s==null?void 0:s.value,"long")}
        </span>
      </div>
    `}get creatorTemplate(){var e,t;return u`
      <div class="created-by truncated">
        ${!((e=this.model)===null||e===void 0)&&e.creator?u`<span>by&nbsp;${(t=this.model)===null||t===void 0?void 0:t.creator}</span>`:$}
      </div>
    `}get textSnippetsTemplate(){var e;return this.hasSnippets?u`<text-snippet-block
      viewsize="grid"
      .snippets=${(e=this.model)===null||e===void 0?void 0:e.snippets}
    ></text-snippet-block>`:$}get hasSnippets(){var e,t;return!!(!((t=(e=this.model)===null||e===void 0?void 0:e.snippets)===null||t===void 0)&&t.length)}static get styles(){return y`
      .container {
        background-color: #ffffff;
        border-radius: var(--collectionTileCornerRadius, 4px);
        box-shadow: 1px 1px 2px 0px;
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .item-info {
        padding: 5px 5px 0 5px;
        flex-grow: 1;
      }

      #title {
        flex-shrink: 0;
      }

      .hidden {
        display: none;
      }

      .container:hover > .item-info > #title > .truncated {
        text-decoration: underline;
      }

      /** this is a workaround for Safari 15 where the hover effects are not working */
      #title:hover > .truncated {
        text-decoration: underline;
      }

      image-block {
        display: block;
        margin-bottom: 5px;
      }

      image-block.has-snippets {
        /* If there is a text snippet block present, the image block needs to shrink */
        --imgBlockHeight: 11rem;
      }

      .created-by,
      .date-sorted-by {
        display: flex;
        justify-content: center;
        align-items: flex-end; /* Important to start text from bottom */
        height: 3rem;
        padding-top: 1rem;
      }

      .truncated {
        flex: 1;
        color: #2c2c2c;
        min-width: 0; /* Important for long words! */
        text-align: center;
        line-height: 2rem;
        text-overflow: ellipsis;
        overflow: hidden;
        word-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .truncated span {
        font-size: 1.4rem;
        display: -webkit-box;
      }

      h1.truncated {
        margin-top: 0rem;
        margin-bottom: 0.5rem;
        font-size: 1.6rem;
        height: 4rem;
        display: -webkit-box;
      }
    `}};n([p({type:String})],wt.prototype,"baseImageUrl",void 0);n([p({type:Boolean})],wt.prototype,"loggedIn",void 0);n([p({type:Object})],wt.prototype,"model",void 0);n([p({type:Object})],wt.prototype,"sortParam",void 0);wt=n([H("item-tile")],wt);let la=class extends I{render(){var e,t,i,a,o,s,l,d;return u`
      <div class="account-tile-main">
        <div id="title">
          <h1 class="truncated">${(e=this.model)===null||e===void 0?void 0:e.identifier}</h1>
        </div>

        <div class="account-info">
          <div id="avatar-info">
            <img
              id="avatar"
              alt="patron-avatar"
              src="https://archive.org/services/img/${(t=this.model)===null||t===void 0?void 0:t.identifier}"
            />
          </div>

          <span id="archivist-since">
            Archivist since ${(a=(i=this.model)===null||i===void 0?void 0:i.dateAdded)===null||a===void 0?void 0:a.getFullYear()}
          </span>
        </div>

        <tile-stats
          .mediatype=${(o=this.model)===null||o===void 0?void 0:o.mediatype}
          .itemCount=${(s=this.model)===null||s===void 0?void 0:s.itemCount}
          .favCount=${(l=this.model)===null||l===void 0?void 0:l.favCount}
          .commentCount=${(d=this.model)===null||d===void 0?void 0:d.commentCount}
        >
        </tile-stats>
      </div>
    `}static get styles(){return y`
      h1 {
        color: black;
        font-size: 16px;
        margin: 0;
      }

      span {
        font-size: 14px;
        color: #2c2c2c;
        margin: 0px;
      }

      .account-tile-main {
        background-color: #fcf5e6;
        border: 1px #2c2c2c;
        border-radius: 4px;
        box-shadow: 1px 1px 2px 0px;
        height: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 100%;
      }

      .account-info {
        flex-grow: 1;
      }

      #title {
        padding: 5px 5px 0px 5px;
        flex-shrink: 0;
        height: 40px;
      }

      .account-tile-main:hover > #title > .truncated {
        text-decoration: underline;
      }

      /** this is a workaround for Safari 15 where the hover effects are not working */
      #title:hover > .truncated {
        text-decoration: underline;
      }

      #avatar-info {
        margin-top: 5px;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #avatar {
        background-position: 50% 50%;
        border-radius: 50%;
        width: 160px;
        height: 160px;
        box-shadow: 1px 1px 2px #888888;
      }

      #archivist-since {
        margin-bottom: 5px;
        height: 40px;
      }

      .truncated {
        flex: 1;
        min-width: 0; /* Important for long words! */
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        line-height: 2rem;
        text-align: center;
      }
    `}};n([p({type:Object})],la.prototype,"model",void 0);la=n([H("account-tile")],la);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*lr(r,e){if(r!==void 0){let t=0;for(const i of r)yield e(i,t++)}}/*! @license DOMPurify 2.3.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.8/LICENSE */function Ye(r){return Ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ye(r)}function da(r,e){return da=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},da(r,e)}function Os(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ni(r,e,t){return Os()?ni=Reflect.construct:ni=function(a,o,s){var l=[null];l.push.apply(l,o);var d=Function.bind.apply(a,l),h=new d;return s&&da(h,s.prototype),h},ni.apply(null,arguments)}function me(r){return Is(r)||Ls(r)||Fs(r)||Rs()}function Is(r){if(Array.isArray(r))return ca(r)}function Ls(r){if(typeof Symbol!="undefined"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function Fs(r,e){if(!!r){if(typeof r=="string")return ca(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ca(r,e)}}function ca(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=r[t];return i}function Rs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ns=Object.hasOwnProperty,dr=Object.setPrototypeOf,Ps=Object.isFrozen,Bs=Object.getPrototypeOf,Hs=Object.getOwnPropertyDescriptor,te=Object.freeze,we=Object.seal,Us=Object.create,Yr=typeof Reflect!="undefined"&&Reflect,gi=Yr.apply,ha=Yr.construct;gi||(gi=function(e,t,i){return e.apply(t,i)});te||(te=function(e){return e});we||(we=function(e){return e});ha||(ha=function(e,t){return ni(e,me(t))});var Vs=fe(Array.prototype.forEach),cr=fe(Array.prototype.pop),Nt=fe(Array.prototype.push),li=fe(String.prototype.toLowerCase),Ws=fe(String.prototype.match),De=fe(String.prototype.replace),js=fe(String.prototype.indexOf),Qs=fe(String.prototype.trim),ee=fe(RegExp.prototype.test),Gi=Gs(TypeError);function fe(r){return function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];return gi(r,e,i)}}function Gs(r){return function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return ha(r,t)}}function D(r,e){dr&&dr(r,null);for(var t=e.length;t--;){var i=e[t];if(typeof i=="string"){var a=li(i);a!==i&&(Ps(e)||(e[t]=a),i=a)}r[i]=!0}return r}function je(r){var e=Us(null),t;for(t in r)gi(Ns,r,[t])&&(e[t]=r[t]);return e}function ii(r,e){for(;r!==null;){var t=Hs(r,e);if(t){if(t.get)return fe(t.get);if(typeof t.value=="function")return fe(t.value)}r=Bs(r)}function i(a){return console.warn("fallback value for",a),null}return i}var hr=te(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Yi=te(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ki=te(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ys=te(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),qi=te(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Ks=te(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),pr=te(["#text"]),ur=te(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Xi=te(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),mr=te(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ai=te(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),qs=we(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Xs=we(/<%[\w\W]*|[\w\W]*%>/gm),Zs=we(/^data-[\-\w.\u00B7-\uFFFF]/),Js=we(/^aria-[\-\w]+$/),en=we(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),tn=we(/^(?:\w+script|data):/i),an=we(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),rn=we(/^html$/i),on=function(){return typeof window=="undefined"?null:window},sn=function(e,t){if(Ye(e)!=="object"||typeof e.createPolicy!="function")return null;var i=null,a="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(a)&&(i=t.currentScript.getAttribute(a));var o="dompurify"+(i?"#"+i:"");try{return e.createPolicy(o,{createHTML:function(l){return l}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function Kr(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:on(),e=function(c){return Kr(c)};if(e.version="2.3.8",e.removed=[],!r||!r.document||r.document.nodeType!==9)return e.isSupported=!1,e;var t=r.document,i=r.document,a=r.DocumentFragment,o=r.HTMLTemplateElement,s=r.Node,l=r.Element,d=r.NodeFilter,h=r.NamedNodeMap,m=h===void 0?r.NamedNodeMap||r.MozNamedAttrMap:h,v=r.HTMLFormElement,g=r.DOMParser,b=r.trustedTypes,S=l.prototype,z=ii(S,"cloneNode"),E=ii(S,"nextSibling"),A=ii(S,"childNodes"),F=ii(S,"parentNode");if(typeof o=="function"){var L=i.createElement("template");L.content&&L.content.ownerDocument&&(i=L.content.ownerDocument)}var N=sn(b,t),K=N?N.createHTML(""):"",ne=i,ye=ne.implementation,zt=ne.createNodeIterator,kt=ne.createDocumentFragment,Tt=ne.getElementsByTagName,Dt=t.importNode,Je={};try{Je=je(i).documentMode?i.documentMode:{}}catch{}var ie={};e.isSupported=typeof F=="function"&&ye&&typeof ye.createHTMLDocument!="undefined"&&Je!==9;var Re=qs,Ne=Xs,Mt=Zs,At=Js,Et=tn,et=an,Pe=en,W=null,tt=D({},[].concat(me(hr),me(Yi),me(Ki),me(qi),me(pr))),j=null,it=D({},[].concat(me(ur),me(Xi),me(mr),me(ai))),U=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Se=null,Be=null,Ot=!0,ki=!0,za=!1,at=!1,He=!1,Ti=!1,Di=!1,rt=!1,qt=!1,Xt=!1,ka=!0,Mi=!0,It=!1,ot={},st=null,Ta=D({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Da=null,Ma=D({},["audio","video","img","source","image","track"]),Ai=null,Aa=D({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ei="http://www.w3.org/1998/Math/MathML",Oi="http://www.w3.org/2000/svg",Te="http://www.w3.org/1999/xhtml",Zt=Te,Ii=!1,nt,lo=["application/xhtml+xml","text/html"],co="text/html",Ue,lt=null,ho=i.createElement("form"),Ea=function(c){return c instanceof RegExp||c instanceof Function},Li=function(c){lt&&lt===c||((!c||Ye(c)!=="object")&&(c={}),c=je(c),W="ALLOWED_TAGS"in c?D({},c.ALLOWED_TAGS):tt,j="ALLOWED_ATTR"in c?D({},c.ALLOWED_ATTR):it,Ai="ADD_URI_SAFE_ATTR"in c?D(je(Aa),c.ADD_URI_SAFE_ATTR):Aa,Da="ADD_DATA_URI_TAGS"in c?D(je(Ma),c.ADD_DATA_URI_TAGS):Ma,st="FORBID_CONTENTS"in c?D({},c.FORBID_CONTENTS):Ta,Se="FORBID_TAGS"in c?D({},c.FORBID_TAGS):{},Be="FORBID_ATTR"in c?D({},c.FORBID_ATTR):{},ot="USE_PROFILES"in c?c.USE_PROFILES:!1,Ot=c.ALLOW_ARIA_ATTR!==!1,ki=c.ALLOW_DATA_ATTR!==!1,za=c.ALLOW_UNKNOWN_PROTOCOLS||!1,at=c.SAFE_FOR_TEMPLATES||!1,He=c.WHOLE_DOCUMENT||!1,rt=c.RETURN_DOM||!1,qt=c.RETURN_DOM_FRAGMENT||!1,Xt=c.RETURN_TRUSTED_TYPE||!1,Di=c.FORCE_BODY||!1,ka=c.SANITIZE_DOM!==!1,Mi=c.KEEP_CONTENT!==!1,It=c.IN_PLACE||!1,Pe=c.ALLOWED_URI_REGEXP||Pe,Zt=c.NAMESPACE||Te,c.CUSTOM_ELEMENT_HANDLING&&Ea(c.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(U.tagNameCheck=c.CUSTOM_ELEMENT_HANDLING.tagNameCheck),c.CUSTOM_ELEMENT_HANDLING&&Ea(c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(U.attributeNameCheck=c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),c.CUSTOM_ELEMENT_HANDLING&&typeof c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(U.allowCustomizedBuiltInElements=c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),nt=lo.indexOf(c.PARSER_MEDIA_TYPE)===-1?nt=co:nt=c.PARSER_MEDIA_TYPE,Ue=nt==="application/xhtml+xml"?function(f){return f}:li,at&&(ki=!1),qt&&(rt=!0),ot&&(W=D({},me(pr)),j=[],ot.html===!0&&(D(W,hr),D(j,ur)),ot.svg===!0&&(D(W,Yi),D(j,Xi),D(j,ai)),ot.svgFilters===!0&&(D(W,Ki),D(j,Xi),D(j,ai)),ot.mathMl===!0&&(D(W,qi),D(j,mr),D(j,ai))),c.ADD_TAGS&&(W===tt&&(W=je(W)),D(W,c.ADD_TAGS)),c.ADD_ATTR&&(j===it&&(j=je(j)),D(j,c.ADD_ATTR)),c.ADD_URI_SAFE_ATTR&&D(Ai,c.ADD_URI_SAFE_ATTR),c.FORBID_CONTENTS&&(st===Ta&&(st=je(st)),D(st,c.FORBID_CONTENTS)),Mi&&(W["#text"]=!0),He&&D(W,["html","head","body"]),W.table&&(D(W,["tbody"]),delete Se.tbody),te&&te(c),lt=c)},Oa=D({},["mi","mo","mn","ms","mtext"]),Ia=D({},["foreignobject","desc","title","annotation-xml"]),po=D({},["title","style","font","a","script"]),Jt=D({},Yi);D(Jt,Ki),D(Jt,Ys);var Fi=D({},qi);D(Fi,Ks);var uo=function(c){var f=F(c);(!f||!f.tagName)&&(f={namespaceURI:Te,tagName:"template"});var x=li(c.tagName),R=li(f.tagName);return c.namespaceURI===Oi?f.namespaceURI===Te?x==="svg":f.namespaceURI===Ei?x==="svg"&&(R==="annotation-xml"||Oa[R]):Boolean(Jt[x]):c.namespaceURI===Ei?f.namespaceURI===Te?x==="math":f.namespaceURI===Oi?x==="math"&&Ia[R]:Boolean(Fi[x]):c.namespaceURI===Te?f.namespaceURI===Oi&&!Ia[R]||f.namespaceURI===Ei&&!Oa[R]?!1:!Fi[x]&&(po[x]||!Jt[x]):!1},$e=function(c){Nt(e.removed,{element:c});try{c.parentNode.removeChild(c)}catch{try{c.outerHTML=K}catch{c.remove()}}},La=function(c,f){try{Nt(e.removed,{attribute:f.getAttributeNode(c),from:f})}catch{Nt(e.removed,{attribute:null,from:f})}if(f.removeAttribute(c),c==="is"&&!j[c])if(rt||qt)try{$e(f)}catch{}else try{f.setAttribute(c,"")}catch{}},Fa=function(c){var f,x;if(Di)c="<remove></remove>"+c;else{var R=Ws(c,/^[\r\n\t ]+/);x=R&&R[0]}nt==="application/xhtml+xml"&&(c='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+c+"</body></html>");var ae=N?N.createHTML(c):c;if(Zt===Te)try{f=new g().parseFromString(ae,nt)}catch{}if(!f||!f.documentElement){f=ye.createDocument(Zt,"template",null);try{f.documentElement.innerHTML=Ii?"":ae}catch{}}var X=f.body||f.documentElement;return c&&x&&X.insertBefore(i.createTextNode(x),X.childNodes[0]||null),Zt===Te?Tt.call(f,He?"html":"body")[0]:He?f.documentElement:X},Ra=function(c){return zt.call(c.ownerDocument||c,c,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT,null,!1)},mo=function(c){return c instanceof v&&(typeof c.nodeName!="string"||typeof c.textContent!="string"||typeof c.removeChild!="function"||!(c.attributes instanceof m)||typeof c.removeAttribute!="function"||typeof c.setAttribute!="function"||typeof c.namespaceURI!="string"||typeof c.insertBefore!="function")},Lt=function(c){return Ye(s)==="object"?c instanceof s:c&&Ye(c)==="object"&&typeof c.nodeType=="number"&&typeof c.nodeName=="string"},Ce=function(c,f,x){!ie[c]||Vs(ie[c],function(R){R.call(e,f,x,lt)})},Na=function(c){var f;if(Ce("beforeSanitizeElements",c,null),mo(c)||ee(/[\u0080-\uFFFF]/,c.nodeName))return $e(c),!0;var x=Ue(c.nodeName);if(Ce("uponSanitizeElement",c,{tagName:x,allowedTags:W}),c.hasChildNodes()&&!Lt(c.firstElementChild)&&(!Lt(c.content)||!Lt(c.content.firstElementChild))&&ee(/<[/\w]/g,c.innerHTML)&&ee(/<[/\w]/g,c.textContent)||x==="select"&&ee(/<template/i,c.innerHTML))return $e(c),!0;if(!W[x]||Se[x]){if(!Se[x]&&Ba(x)&&(U.tagNameCheck instanceof RegExp&&ee(U.tagNameCheck,x)||U.tagNameCheck instanceof Function&&U.tagNameCheck(x)))return!1;if(Mi&&!st[x]){var R=F(c)||c.parentNode,ae=A(c)||c.childNodes;if(ae&&R)for(var X=ae.length,q=X-1;q>=0;--q)R.insertBefore(z(ae[q],!0),E(c))}return $e(c),!0}return c instanceof l&&!uo(c)||(x==="noscript"||x==="noembed")&&ee(/<\/no(script|embed)/i,c.innerHTML)?($e(c),!0):(at&&c.nodeType===3&&(f=c.textContent,f=De(f,Re," "),f=De(f,Ne," "),c.textContent!==f&&(Nt(e.removed,{element:c.cloneNode()}),c.textContent=f)),Ce("afterSanitizeElements",c,null),!1)},Pa=function(c,f,x){if(ka&&(f==="id"||f==="name")&&(x in i||x in ho))return!1;if(!(ki&&!Be[f]&&ee(Mt,f))){if(!(Ot&&ee(At,f))){if(!j[f]||Be[f]){if(!(Ba(c)&&(U.tagNameCheck instanceof RegExp&&ee(U.tagNameCheck,c)||U.tagNameCheck instanceof Function&&U.tagNameCheck(c))&&(U.attributeNameCheck instanceof RegExp&&ee(U.attributeNameCheck,f)||U.attributeNameCheck instanceof Function&&U.attributeNameCheck(f))||f==="is"&&U.allowCustomizedBuiltInElements&&(U.tagNameCheck instanceof RegExp&&ee(U.tagNameCheck,x)||U.tagNameCheck instanceof Function&&U.tagNameCheck(x))))return!1}else if(!Ai[f]){if(!ee(Pe,De(x,et,""))){if(!((f==="src"||f==="xlink:href"||f==="href")&&c!=="script"&&js(x,"data:")===0&&Da[c])){if(!(za&&!ee(Et,De(x,et,"")))){if(x)return!1}}}}}}return!0},Ba=function(c){return c.indexOf("-")>0},Ha=function(c){var f,x,R,ae;Ce("beforeSanitizeAttributes",c,null);var X=c.attributes;if(!!X){var q={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:j};for(ae=X.length;ae--;){f=X[ae];var ei=f,J=ei.name,Ua=ei.namespaceURI;if(x=J==="value"?f.value:Qs(f.value),R=Ue(J),q.attrName=R,q.attrValue=x,q.keepAttr=!0,q.forceKeepAttr=void 0,Ce("uponSanitizeAttribute",c,q),x=q.attrValue,!q.forceKeepAttr&&(La(J,c),!!q.keepAttr)){if(ee(/\/>/i,x)){La(J,c);continue}at&&(x=De(x,Re," "),x=De(x,Ne," "));var fo=Ue(c.nodeName);if(!!Pa(fo,R,x))try{Ua?c.setAttributeNS(Ua,J,x):c.setAttribute(J,x),cr(e.removed)}catch{}}}Ce("afterSanitizeAttributes",c,null)}},vo=function _(c){var f,x=Ra(c);for(Ce("beforeSanitizeShadowDOM",c,null);f=x.nextNode();)Ce("uponSanitizeShadowNode",f,null),!Na(f)&&(f.content instanceof a&&_(f.content),Ha(f));Ce("afterSanitizeShadowDOM",c,null)};return e.sanitize=function(_,c){var f,x,R,ae,X;if(Ii=!_,Ii&&(_="<!-->"),typeof _!="string"&&!Lt(_)){if(typeof _.toString!="function")throw Gi("toString is not a function");if(_=_.toString(),typeof _!="string")throw Gi("dirty is not a string, aborting")}if(!e.isSupported){if(Ye(r.toStaticHTML)==="object"||typeof r.toStaticHTML=="function"){if(typeof _=="string")return r.toStaticHTML(_);if(Lt(_))return r.toStaticHTML(_.outerHTML)}return _}if(Ti||Li(c),e.removed=[],typeof _=="string"&&(It=!1),It){if(_.nodeName){var q=Ue(_.nodeName);if(!W[q]||Se[q])throw Gi("root node is forbidden and cannot be sanitized in-place")}}else if(_ instanceof s)f=Fa("<!---->"),x=f.ownerDocument.importNode(_,!0),x.nodeType===1&&x.nodeName==="BODY"||x.nodeName==="HTML"?f=x:f.appendChild(x);else{if(!rt&&!at&&!He&&_.indexOf("<")===-1)return N&&Xt?N.createHTML(_):_;if(f=Fa(_),!f)return rt?null:Xt?K:""}f&&Di&&$e(f.firstChild);for(var ei=Ra(It?_:f);R=ei.nextNode();)R.nodeType===3&&R===ae||Na(R)||(R.content instanceof a&&vo(R.content),Ha(R),ae=R);if(ae=null,It)return _;if(rt){if(qt)for(X=kt.call(f.ownerDocument);f.firstChild;)X.appendChild(f.firstChild);else X=f;return j.shadowroot&&(X=Dt.call(t,X,!0)),X}var J=He?f.outerHTML:f.innerHTML;return He&&W["!doctype"]&&f.ownerDocument&&f.ownerDocument.doctype&&f.ownerDocument.doctype.name&&ee(rn,f.ownerDocument.doctype.name)&&(J="<!DOCTYPE "+f.ownerDocument.doctype.name+`>
`+J),at&&(J=De(J,Re," "),J=De(J,Ne," ")),N&&Xt?N.createHTML(J):J},e.setConfig=function(_){Li(_),Ti=!0},e.clearConfig=function(){lt=null,Ti=!1},e.isValidAttribute=function(_,c,f){lt||Li({});var x=Ue(_),R=Ue(c);return Pa(x,R,f)},e.addHook=function(_,c){typeof c=="function"&&(ie[_]=ie[_]||[],Nt(ie[_],c))},e.removeHook=function(_){if(ie[_])return cr(ie[_])},e.removeHooks=function(_){ie[_]&&(ie[_]=[])},e.removeAllHooks=function(){ie={}},e}var Ht=Kr();function qr(r){switch(r){case"date":return"Published";case"reviewdate":return"Reviewed";case"addeddate":return"Added";default:return"Archived"}}function Xr(r){return r?`Archivist since ${r.getFullYear()}`:""}let ue=class extends I{constructor(){super(...arguments),this.sortParam=null,this.collectionLinks=[],this.loggedIn=!1}updated(e){e.has("model")&&this.fetchCollectionNames()}async fetchCollectionNames(){var e,t;if(!(!((e=this.model)===null||e===void 0)&&e.collections)||this.model.collections.length===0||!this.collectionNameCache)return;this.collectionLinks=[];const i=[],a=[];for(const o of this.model.collections)a.push((t=this.collectionNameCache)===null||t===void 0?void 0:t.collectionNameFor(o).then(s=>{i.push(this.detailsLink(o,s!=null?s:o))}));await Promise.all(a),this.collectionLinks=i}render(){return u`
      <div id="list-line" class="${this.classSize}">
        ${this.classSize==="mobile"?this.mobileTemplate:this.desktopTemplate}
      </div>
    `}get mobileTemplate(){return u`
      <div id="list-line-top">
        <div id="list-line-left">${this.imageBlockTemplate}</div>
        <div id="list-line-right">
          <div id="title-line">
            <div id="title">${this.titleTemplate}</div>
            ${this.iconRightTemplate}
          </div>
        </div>
      </div>
      <div id="list-line-bottom">${this.detailsTemplate}</div>
    `}get desktopTemplate(){return u`
      <div id="list-line-left">${this.imageBlockTemplate}</div>
      <div id="list-line-right">
        <div id="title-line">
          <div id="title">${this.titleTemplate}</div>
          ${this.iconRightTemplate}
        </div>
        ${this.detailsTemplate}
      </div>
    `}get imageBlockTemplate(){return u`
      <image-block
        .model=${this.model}
        .baseImageUrl=${this.baseImageUrl}
        .isCompactTile=${!1}
        .isListTile=${!0}
        .viewSize=${this.classSize}
      >
      </image-block>
    `}get detailsTemplate(){return u`
      ${this.itemLineTemplate} ${this.creatorTemplate}
      <div id="dates-line">
        ${this.datePublishedTemplate} ${this.dateSortByTemplate}
      </div>
      <div id="views-line">
        ${this.viewsTemplate} ${this.ratingTemplate} ${this.reviewsTemplate}
      </div>
      ${this.topicsTemplate} ${this.collectionsTemplate}
      ${this.descriptionTemplate} ${this.textSnippetsTemplate}
    `}get iconRightTemplate(){var e,t;return u`
      <div id="icon-right">
        <mediatype-icon
          .mediatype=${(e=this.model)===null||e===void 0?void 0:e.mediatype}
          .collections=${(t=this.model)===null||t===void 0?void 0:t.collections}
        >
        </mediatype-icon>
      </div>
    `}get titleTemplate(){var e;return!((e=this.model)===null||e===void 0)&&e.title?u` ${this.detailsLink(this.model.identifier,this.model.title)} `:$}get itemLineTemplate(){const e=this.sourceTemplate,t=this.volumeTemplate,i=this.issueTemplate;return!e&&!t&&!i?$:u` <div id="item-line">${e} ${t} ${i}</div> `}get sourceTemplate(){var e;return!((e=this.model)===null||e===void 0)&&e.source?u`
      <div id="source" class="metadata">
        ${this.labelTemplate("Source")}
        ${this.searchLink("source",this.model.source)}
      </div>
    `:$}get volumeTemplate(){var e;return this.metadataTemplate((e=this.model)===null||e===void 0?void 0:e.volume,"Volume")}get issueTemplate(){var e;return this.metadataTemplate((e=this.model)===null||e===void 0?void 0:e.issue,"Issue")}get creatorTemplate(){var e,t,i;return((e=this.model)===null||e===void 0?void 0:e.mediatype)==="account"?u`
        <div id="creator" class="metadata">
          <span class="label"> ${Xr((t=this.model)===null||t===void 0?void 0:t.dateAdded)} </span>
        </div>
      `:!(!((i=this.model)===null||i===void 0)&&i.creators)||this.model.creators.length===0?$:u`
      <div id="creator" class="metadata">
        ${this.labelTemplate("By")}
        ${si(lr(this.model.creators,a=>this.searchLink("creator",a)),u`, `)}
      </div>
    `}get datePublishedTemplate(){var e;return this.metadataTemplate(ui((e=this.model)===null||e===void 0?void 0:e.datePublished,"long"),"Published")}get dateSortByTemplate(){return this.sortParam&&(this.sortParam.field==="addeddate"||this.sortParam.field==="reviewdate"||this.sortParam.field==="publicdate")?this.metadataTemplate(ui(this.date,"long"),qr(this.sortParam.field)):$}get viewsTemplate(){var e,t;return this.metadataTemplate(`${Bt((t=(e=this.model)===null||e===void 0?void 0:e.viewCount)!==null&&t!==void 0?t:0,this.formatSize)}`,"Views")}get ratingTemplate(){var e;return this.metadataTemplate((e=this.model)===null||e===void 0?void 0:e.averageRating,"Avg Rating")}get reviewsTemplate(){var e;return this.metadataTemplate((e=this.model)===null||e===void 0?void 0:e.commentCount,"Reviews")}get topicsTemplate(){var e;return!(!((e=this.model)===null||e===void 0)&&e.subjects)||this.model.subjects.length===0?$:u`
      <div id="topics" class="metadata">
        ${this.labelTemplate("Topics")}
        ${si(lr(this.model.subjects,t=>this.searchLink("subject",t)),u`, `)}
      </div>
    `}get collectionsTemplate(){return!this.collectionLinks||this.collectionLinks.length===0?$:u`
      <div id="collections" class="metadata">
        ${this.labelTemplate("Collections")}
        ${si(this.collectionLinks,u`, `)}
      </div>
    `}get descriptionTemplate(){var e,t;return this.metadataTemplate(Ht.sanitize((t=(e=this.model)===null||e===void 0?void 0:e.description)!==null&&t!==void 0?t:""),"","description")}get textSnippetsTemplate(){var e;return this.hasSnippets?u`<text-snippet-block
      viewsize="list"
      .snippets=${(e=this.model)===null||e===void 0?void 0:e.snippets}
    ></text-snippet-block>`:$}get hasSnippets(){var e,t;return!!(!((t=(e=this.model)===null||e===void 0?void 0:e.snippets)===null||t===void 0)&&t.length)}metadataTemplate(e,t="",i){return e?u`
      <div id=${_i(i)} class="metadata">
        ${this.labelTemplate(t)} ${e}
      </div>
    `:$}labelTemplate(e){return u` ${e?u`<span class="label">${e}: </span>`:$}`}searchLink(e,t){if(!e||!t)return $;const i=encodeURIComponent(`${e}:"${t}"`);return u`<a href="${this.baseNavigationUrl}/search.php?query=${i}">
      ${Ht.sanitize(t)}</a
    >`}detailsLink(e,t){const i=t!=null?t:e;return u`<a
      href="${this.baseNavigationUrl}/details/${encodeURI(e)}"
      >${Ht.sanitize(i)}</a
    >`}get date(){var e,t,i,a,o;switch((e=this.sortParam)===null||e===void 0?void 0:e.field){case"date":return(t=this.model)===null||t===void 0?void 0:t.datePublished;case"reviewdate":return(i=this.model)===null||i===void 0?void 0:i.dateReviewed;case"addeddate":return(a=this.model)===null||a===void 0?void 0:a.dateAdded;default:return(o=this.model)===null||o===void 0?void 0:o.dateArchived}}get classSize(){return this.mobileBreakpoint&&this.currentWidth&&this.currentWidth<this.mobileBreakpoint?"mobile":"desktop"}get formatSize(){return this.mobileBreakpoint&&this.currentWidth&&this.currentWidth<this.mobileBreakpoint?"short":"long"}static get styles(){return y`
      html {
        font-size: unset;
      }

      div {
        font-size: 14px;
      }

      div a {
        text-decoration: none;
      }

      .label {
        font-weight: bold;
      }

      #list-line.mobile {
        --infiniteScrollerRowGap: 20px;
        --infiniteScrollerRowHeight: auto;
      }

      #list-line.desktop {
        --infiniteScrollerRowGap: 30px;
        --infiniteScrollerRowHeight: auto;
      }

      /* fields */
      #icon-right {
        width: 20px;
        padding-top: 5px;
        --iconHeight: 20px;
        --iconWidth: 20px;
        --iconTextAlign: right;
        margin-top: -8px;
        text-align: right;
      }

      #title {
        color: #4b64ff;
        text-decoration: none;
        font-size: 22px;
        font-weight: bold;
        /* align top of text with image */
        line-height: 25px;
        margin-top: -4px;
        padding-bottom: 2px;
        flex-grow: 1;
      }

      .metadata {
        line-height: 20px;
      }

      #description,
      #creator,
      #topics,
      #source {
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        word-break: break-word;
        -webkit-line-clamp: 3; /* number of lines to show */
        line-clamp: 3;
      }

      #icon {
        padding-top: 5px;
      }

      #description {
        padding-top: 10px;
      }

      /* Top level container */
      #list-line {
        display: flex;
      }

      #list-line.mobile {
        flex-direction: column;
      }

      #list-line.desktop {
        column-gap: 10px;
      }

      #list-line-top {
        display: flex;
        column-gap: 7px;
      }

      #list-line-bottom {
        padding-top: 4px;
      }

      #list-line-right,
      #list-line-top,
      #list-line-bottom {
        width: 100%;
      }

      div a:hover {
        text-decoration: underline;
      }

      /* Lines containing multiple div as row */
      #item-line,
      #dates-line,
      #views-line,
      #title-line {
        display: flex;
        flex-direction: row;
        gap: 10px;
      }
    `}};n([p({type:Object})],ue.prototype,"model",void 0);n([p({type:String})],ue.prototype,"baseNavigationUrl",void 0);n([p({type:Object})],ue.prototype,"collectionNameCache",void 0);n([p({type:Number})],ue.prototype,"currentWidth",void 0);n([p({type:Number})],ue.prototype,"currentHeight",void 0);n([p({type:Object})],ue.prototype,"sortParam",void 0);n([p({type:Number})],ue.prototype,"mobileBreakpoint",void 0);n([T()],ue.prototype,"collectionLinks",void 0);n([p({type:String})],ue.prototype,"baseImageUrl",void 0);n([p({type:Boolean})],ue.prototype,"loggedIn",void 0);ue=n([H("tile-list")],ue);let xe=class extends I{constructor(){super(...arguments),this.sortParam=null,this.loggedIn=!1}render(){var e,t,i,a,o,s,l,d,h,m;return u`
      <div id="list-line" class="${this.classSize}">
        <image-block
          .model=${this.model}
          .baseImageUrl=${this.baseImageUrl}
          .isCompactTile=${!0}
          .isListTile=${!0}
          .viewSize=${this.classSize}
        >
        </image-block>
        <div id="title">${Ht.sanitize((t=(e=this.model)===null||e===void 0?void 0:e.title)!==null&&t!==void 0?t:"")}</div>
        <div id="creator">
          ${((i=this.model)===null||i===void 0?void 0:i.mediatype)==="account"?Xr((a=this.model)===null||a===void 0?void 0:a.dateAdded):Ht.sanitize((s=(o=this.model)===null||o===void 0?void 0:o.creator)!==null&&s!==void 0?s:"")}
        </div>
        <div id="date">${ui(this.date,this.formatSize)}</div>
        <div id="icon">
          <mediatype-icon
            .mediatype=${(l=this.model)===null||l===void 0?void 0:l.mediatype}
            .collections=${(d=this.model)===null||d===void 0?void 0:d.collections}
          >
          </mediatype-icon>
        </div>
        <div id="views">
          ${Bt((m=(h=this.model)===null||h===void 0?void 0:h.viewCount)!==null&&m!==void 0?m:0,this.formatSize)}
        </div>
      </div>
    `}get date(){var e,t,i,a,o;switch((e=this.sortParam)===null||e===void 0?void 0:e.field){case"date":return(t=this.model)===null||t===void 0?void 0:t.datePublished;case"reviewdate":return(i=this.model)===null||i===void 0?void 0:i.dateReviewed;case"addeddate":return(a=this.model)===null||a===void 0?void 0:a.dateAdded;default:return(o=this.model)===null||o===void 0?void 0:o.dateArchived}}get classSize(){return this.mobileBreakpoint&&this.currentWidth&&this.currentWidth<this.mobileBreakpoint?"mobile":"desktop"}get formatSize(){return this.mobileBreakpoint&&this.currentWidth&&this.currentWidth<this.mobileBreakpoint?"short":"long"}static get styles(){return y`
      html {
        font-size: unset;
      }

      div {
        font-size: 14px;
      }

      #list-line {
        display: grid;
        column-gap: 10px;
        border-top: 1px solid #ddd;
        align-items: center;
        line-height: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
      }

      #list-line.mobile {
        grid-template-columns: 36px 3fr 2fr 62px 19px;
      }

      #list-line.desktop {
        grid-template-columns: 51px 3fr 2fr 100px 20px 60px;
      }

      #list-line:hover #title {
        text-decoration: underline;
      }

      #title {
        color: #4b64ff;
        text-decoration: none;
      }

      #title,
      #creator {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      #views {
        text-align: right;
        padding-right: 8px;
      }

      .mobile #views {
        display: none;
      }

      .mobile mediatype-icon {
        --iconHeight: 14px;
        --iconWidth: 14px;
      }

      .desktop #icon {
        --iconHeight: 20px;
        --iconWidth: 20px;
      }

      item-image {
        --imgHeight: 100%;
        --imgWidth: 100%;
      }
    `}};n([p({type:Object})],xe.prototype,"model",void 0);n([p({type:String})],xe.prototype,"baseNavigationUrl",void 0);n([p({type:Number})],xe.prototype,"currentWidth",void 0);n([p({type:Number})],xe.prototype,"currentHeight",void 0);n([p({type:Object})],xe.prototype,"sortParam",void 0);n([p({type:Number})],xe.prototype,"mobileBreakpoint",void 0);n([p({type:String})],xe.prototype,"baseImageUrl",void 0);n([p({type:Boolean})],xe.prototype,"loggedIn",void 0);xe=n([H("tile-list-compact")],xe);let xt=class extends I{constructor(){super(...arguments),this.sortParam=null}render(){var e;return u`
      <div id="list-line-header" class="${this.classSize}">
        <div id="thumb"></div>
        <div id="title">Title</div>
        <div id="creator">Creator</div>
        <div id="date">${qr((e=this.sortParam)===null||e===void 0?void 0:e.field)}</div>
        <div id="icon"></div>
        <div id="views">Views</div>
      </div>
    `}get classSize(){return this.mobileBreakpoint&&this.currentWidth&&this.currentWidth<this.mobileBreakpoint?"mobile":"desktop"}static get styles(){return y`
      html {
        font-size: unset;
      }

      div {
        font-size: 14px;
        font-weight: bold;
        line-height: 20px;
      }

      .mobile #views {
        display: none;
      }

      #views {
        text-align: right;
      }

      #list-line-header {
        display: grid;
        column-gap: 10px;
        align-items: flex-end;
        padding-bottom: 2px;
      }

      #list-line-header.mobile {
        grid-template-columns: 36px 3fr 2fr 91px;
      }

      #list-line-header.desktop {
        grid-template-columns: 51px 3fr 2fr 100px 20px 60px;
      }
    `}};n([p({type:Object})],xt.prototype,"model",void 0);n([p({type:Number})],xt.prototype,"currentWidth",void 0);n([p({type:Object})],xt.prototype,"sortParam",void 0);n([p({type:Number})],xt.prototype,"mobileBreakpoint",void 0);xt=n([H("tile-list-compact-header")],xt);let oe=class extends I{constructor(){super(...arguments),this.sortParam=null,this.loggedIn=!1}render(){return u`
      <div id="container">
        ${this.tileDisplayMode==="list-header"?this.headerTemplate:this.tileTemplate}
      </div>
    `}get headerTemplate(){const{currentWidth:e,sortParam:t,mobileBreakpoint:i}=this;return u`
      <tile-list-compact-header
        class="header"
        .currentWidth=${e}
        .sortParam=${t}
        .mobileBreakpoint=${i}
      >
      </tile-list-compact-header>
    `}get tileTemplate(){return u`
      ${this.tileDisplayMode==="list-detail"?this.tile:this.linkTileTemplate}
    `}get linkTileTemplate(){var e,t;return u`
      <a
        href="${this.baseNavigationUrl}/details/${(e=this.model)===null||e===void 0?void 0:e.identifier}"
        title=${_i((t=this.model)===null||t===void 0?void 0:t.title)}
        @click=${()=>this.dispatchEvent(new CustomEvent("resultSelected",{detail:this.model}))}
      >
        ${this.tile}
      </a>
    `}handleResize(e){this.currentWidth=e.contentRect.width,this.currentHeight=e.contentRect.height}disconnectedCallback(){this.stopResizeObservation(this.resizeObserver)}stopResizeObservation(e){e==null||e.removeObserver({handler:this,target:this.container})}startResizeObservation(){var e;this.stopResizeObservation(this.resizeObserver),(e=this.resizeObserver)===null||e===void 0||e.addObserver({handler:this,target:this.container})}updated(e){if(e.has("resizeObserver")){const t=e.get("resizeObserver");this.stopResizeObservation(t),this.startResizeObservation()}}get tile(){const{model:e,baseNavigationUrl:t,currentWidth:i,currentHeight:a,sortParam:o,mobileBreakpoint:s}=this;if(!e)return $;switch(this.tileDisplayMode){case"grid":switch(e.mediatype){case"collection":return u`<collection-tile
              .model=${e}
              .currentWidth=${i}
              .currentHeight=${a}
            >
            </collection-tile>`;case"account":return u`<account-tile
              .model=${e}
              .currentWidth=${i}
              .currentHeight=${a}
            >
            </account-tile>`;default:return u`<item-tile
              .model=${e}
              .currentWidth=${this.currentWidth}
              .currentHeight=${this.currentHeight}
              .collectionNameCache=${this.collectionNameCache}
              .baseImageUrl=${this.baseImageUrl}
              .sortParam=${o}
              .loggedIn=${this.loggedIn}
            >
            </item-tile>`}case"list-compact":return u`<tile-list-compact
          .model=${e}
          .currentWidth=${i}
          .currentHeight=${a}
          .baseNavigationUrl=${t}
          .sortParam=${o}
          .mobileBreakpoint=${s}
          .baseImageUrl=${this.baseImageUrl}
          .loggedIn=${this.loggedIn}
        >
        </tile-list-compact>`;case"list-detail":return u`<tile-list
          .model=${e}
          .collectionNameCache=${this.collectionNameCache}
          .currentWidth=${i}
          .currentHeight=${a}
          .baseNavigationUrl=${t}
          .sortParam=${o}
          .mobileBreakpoint=${s}
          .baseImageUrl=${this.baseImageUrl}
          .loggedIn=${this.loggedIn}
        >
        </tile-list>`;default:return $}}static get styles(){return y`
      :host {
        display: block;
        height: 100%;
      }

      #container {
        height: 100%;
      }

      #delete-button {
        float: right;
      }

      a {
        display: block;
        height: 100%;
        color: unset;
        text-decoration: none;
      }

      a :first-child {
        display: block;
        height: 100%;
      }
    `}};n([p({type:String})],oe.prototype,"tileDisplayMode",void 0);n([p({type:Object})],oe.prototype,"model",void 0);n([p({type:String})],oe.prototype,"baseNavigationUrl",void 0);n([p({type:Number})],oe.prototype,"currentWidth",void 0);n([p({type:Number})],oe.prototype,"currentHeight",void 0);n([p({type:Object})],oe.prototype,"resizeObserver",void 0);n([p({type:Object})],oe.prototype,"collectionNameCache",void 0);n([p({type:Object})],oe.prototype,"sortParam",void 0);n([de("#container")],oe.prototype,"container",void 0);n([p({type:Number})],oe.prototype,"mobileBreakpoint",void 0);n([p({type:String})],oe.prototype,"baseImageUrl",void 0);n([p({type:Boolean})],oe.prototype,"loggedIn",void 0);oe=n([H("tile-dispatcher")],oe);let vr=class extends I{render(){return u` <div id="container"></div> `}static get styles(){return y`
      :host {
        display: block;
        height: 100%;
      }

      #container {
        background: linear-gradient(to right bottom, #dddddd, #d8d8d8);
        border-radius: var(--collectionTileCornerRadius, 4px);
        background-size: 100% 100%;
        display: block;
        height: 100%;
      }
    `}};vr=n([H("collection-browser-loading-tile")],vr);var M;(function(r){r.relevance="relevance",r.alltimeview="alltimeview",r.weeklyview="weeklyview",r.title="title",r.datearchived="datearchived",r.date="date",r.datereviewed="datereviewed",r.dateadded="dateadded",r.creator="creator"})(M||(M={}));const Qe={relevance:"Relevance",alltimeview:"All-time Views",weeklyview:"Weekly Views",title:"Title",datearchived:"Date Archived",date:"Date Published",datereviewed:"Date Reviewed",dateadded:"Date Added",creator:"Creator"},nn={relevance:null,alltimeview:"downloads",weeklyview:"week",title:"titleSorter",datearchived:"publicdate",date:"date",datereviewed:"reviewdate",dateadded:"addeddate",creator:"creatorSorter"},fr={week:M.weeklyview,downloads:M.alltimeview,titleSorter:M.title,date:M.date,publicdate:M.datearchived,reviewdate:M.datereviewed,addeddate:M.dateadded,creatorSorter:M.creator},yi={subject:{},mediatype:{},language:{},creator:{},collection:{},year:{}};let bi=class extends I{constructor(){super(...arguments),this.selectedLetter=null,this.alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")}get selectedUppercaseLetter(){var e;return(e=this.selectedLetter)===null||e===void 0?void 0:e.toUpperCase()}render(){return u`
      <div id="container">
        <ul>
          ${this.alphabet.map(e=>u`
                <li
                  class=${e===this.selectedUppercaseLetter?"selected":""}
                >
                  <a
                    href="#"
                    @click=${t=>{t.preventDefault(),this.letterClicked(e)}}
                  >
                    ${e}
                  </a>
                </li>
              `)}
        </ul>
      </div>
    `}letterClicked(e){e===this.selectedUppercaseLetter?this.selectedLetter=null:this.selectedLetter=e,this.dispatchEvent(new CustomEvent("letterChanged",{detail:{selectedLetter:this.selectedUppercaseLetter}}))}};bi.styles=y`
    h1 {
      font-size: 1.2rem;
    }

    #container {
      background-color: #ddd;
      color: #333;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    }

    ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0.5rem 1rem;
      justify-content: space-between;
    }

    ul li {
      flex: 1;
      text-align: center;
      max-width: 2.5rem;
    }

    a {
      color: #333;
      text-decoration: none;
      padding: 0.5rem 0;
      display: block;
    }

    .selected {
      background-color: darkgray;
    }

    .selected a {
      color: white;
    }
  `;n([p({type:String})],bi.prototype,"selectedLetter",void 0);bi=n([H("alpha-bar")],bi);const gr=O`
<svg viewBox="0 0 100 55" xmlns="http://www.w3.org/2000/svg"><path d="m50 0 50 55h-100z"/></svg>
`,ln=O`
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m64 54v46h-28v-46zm36 0v46h-28v-46zm-72 0v46h-28v-46zm36-54v46h-28v-46zm36 0v46h-28v-46zm-72 0v46h-28v-46z"/></svg>
`,dn=O`
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="m97.8975061 6h-65.7343743c-.6409315 0-1.1612995-.29021372-1.5611039-.87064117-.3998043-.58042745-.6004844-1.3048369-.60204-2.17322835 0-.81214848.20068-1.50731158.60204-2.08548931.4013601-.57817773.921728-.86839145 1.5611039-.87064117h65.7343743c.5600372 0 1.0508477.29021372 1.4724313.87064117s.6315976 1.27559055.6300505 2.08548931c0 .86839145-.2100226 1.5928009-.6300505 2.17322835-.420028.58042745-.9108384.87064117-1.4724313.87064117z"/><path d="m97.8975061 61h-65.7343743c-.6409315 0-1.1612995-.2902137-1.5611039-.8706412-.3998043-.5804274-.6004844-1.3048369-.60204-2.1732283 0-.8121485.20068-1.5073116.60204-2.0854893.4013601-.5781778.921728-.8683915 1.5611039-.8706412h65.7343743c.5600372 0 1.0508477.2902137 1.4724313.8706412.4215836.5804274.6315976 1.2755905.6300505 2.0854893 0 .8683914-.2100226 1.5928009-.6300505 2.1732283-.420028.5804275-.9108384.8706412-1.4724313.8706412z"/><path d="m97.8975061 19h-65.7343743c-.6409315 0-1.1612995-.2902137-1.5611039-.8706412-.3998043-.5804274-.6004844-1.3048369-.60204-2.1732283 0-.8121485.20068-1.5073116.60204-2.0854893.4013601-.5781778.921728-.8683915 1.5611039-.8706412h65.7343743c.5600372 0 1.0508477.2902137 1.4724313.8706412.4215836.5804274.6315976 1.2755905.6300505 2.0854893 0 .8683914-.2100226 1.5928009-.6300505 2.1732283-.420028.5804275-.9108384.8706412-1.4724313.8706412z"/><path d="m97.8975061 74h-65.7343743c-.6409315 0-1.1612995-.2902137-1.5611039-.8706412-.3998043-.5804274-.6004844-1.3048369-.60204-2.1732283 0-.8121485.20068-1.5073116.60204-2.0854893.4013601-.5781778.921728-.8683915 1.5611039-.8706412h65.7343743c.5600372 0 1.0508477.2902137 1.4724313.8706412.4215836.5804274.6315976 1.2755905.6300505 2.0854893 0 .8683914-.2100226 1.5928009-.6300505 2.1732283-.420028.5804275-.9108384.8706412-1.4724313.8706412z"/><path d="m97.8975061 32h-65.7343743c-.6409315 0-1.1612995-.2902137-1.5611039-.8706412-.3998043-.5804274-.6004844-1.3048369-.60204-2.1732283 0-.8121485.20068-1.5073116.60204-2.0854893.4013601-.5781778.921728-.8683915 1.5611039-.8706412h65.7343743c.5600372 0 1.0508477.2902137 1.4724313.8706412.4215836.5804274.6315976 1.2755905.6300505 2.0854893 0 .8683914-.2100226 1.5928009-.6300505 2.1732283-.420028.5804275-.9108384.8706412-1.4724313.8706412z"/><path d="m97.8975061 87h-65.7343743c-.6409315 0-1.1612995-.2902137-1.5611039-.8706412-.3998043-.5804274-.6004844-1.3048369-.60204-2.1732283 0-.8121485.20068-1.5073116.60204-2.0854893.4013601-.5781778.921728-.8683915 1.5611039-.8706412h65.7343743c.5600372 0 1.0508477.2902137 1.4724313.8706412.4215836.5804274.6315976 1.2755905.6300505 2.0854893 0 .8683914-.2100226 1.5928009-.6300505 2.1732283-.420028.5804275-.9108384.8706412-1.4724313.8706412z"/><path d="m97.8975061 45h-65.7343743c-.6409315 0-1.1612995-.2902137-1.5611039-.8706412-.3998043-.5804274-.6004844-1.3048369-.60204-2.1732283 0-.8121485.20068-1.5073116.60204-2.0854893.4013601-.5781778.921728-.8683915 1.5611039-.8706412h65.7343743c.5600372 0 1.0508477.2902137 1.4724313.8706412.4215836.5804274.6315976 1.2755905.6300505 2.0854893 0 .8683914-.2100226 1.5928009-.6300505 2.1732283-.420028.5804275-.9108384.8706412-1.4724313.8706412z"/><path d="m97.8975061 100h-65.7343743c-.6409315 0-1.1612995-.2902137-1.5611039-.8706412-.3998043-.5804274-.6004844-1.3048369-.60204-2.1732283 0-.8121485.20068-1.5073116.60204-2.0854893.4013601-.5781778.921728-.8683915 1.5611039-.8706412h65.7343743c.5600372 0 1.0508477.2902137 1.4724313.8706412.4215836.5804274.6315976 1.2755905.6300505 2.0854893 0 .8683914-.2100226 1.5928009-.6300505 2.1732283-.420028.5804275-.9108384.8706412-1.4724313.8706412z"/><path d="m0 0h25v25h-25z"/><path d="m0 55h25v25h-25z"/></g></svg>
`,cn=O`
<svg viewBox="0 0 100 100" xmlns = "http://www.w3.org/2000/svg" > <path d="m96.9964435 6h-93.90621462c-.91561615 0-1.65899868-.29021372-2.23014758-.87064117-.57114891-.58042745-.85783455-1.3048369-.86005692-2.17322835 0-.81214848.28668564-1.50731158.86005692-2.08548931.57337127-.57817773 1.3167538-.86839145 2.23014758-.87064117h93.90621462c.800053 0 1.5012105.29021372 2.1034726.87064117.602262.58042745.9022819 1.27559055.9000718 2.08548931 0 .86839145-.3000321 1.5928009-.9000718 2.17322835-.6000398.58042745-1.3011973.87064117-2.1034726.87064117zm-93.90621462 9.6666667h93.90621462c.800053 0 1.5012105.2861891 2.1034726.8585673.602262.5723782.9022819 1.2579009.9000718 2.0565682 0 .8563487-.3000321 1.5851326-.9000718 2.1863516-.6000398.6012189-1.3011973.9007192-2.1034726.8985129h-93.90621462c-.91561615 0-1.65899868-.2995125-2.23014758-.8985129-.57114891-.5990005-.85783455-1.3277843-.86005692-2.1863516 0-.8008858.28668564-1.4864086.86005692-2.0565682.57337127-.5701597 1.3167538-.8563488 2.23014758-.8585673zm0 15.6700431h93.90621462c.800053 0 1.5012105.303883 2.1034726.9116489.602262.6077659.9022819 1.2886888.9000718 2.0427687-.0022346.7540799-.3022545 1.4496342-.9000718 2.0866629-.5978174.6370287-1.2989749.955543-2.1034726.955543h-93.90621462c-.85783454 0-1.58788286-.3038829-2.19014494-.9116488s-.90228193-1.3179516-.90007182-2.1305571c.00223463-.8126055.30225448-1.5081599.90007182-2.0866629.59781734-.5785031 1.32786566-.8688802 2.19014494-.8711312zm0 15.6632902h93.90621462c.800053 0 1.5012105.2861892 2.1034726.8585675.602262.5723783.9022819 1.2290603.9000718 1.9700462 0 .7986674-.3144775 1.5274514-.943408 2.186352-.6289306.6589006-1.3156427.9872417-2.0601364.9850343h-93.90621462c-.85783454 0-1.58788286-.3139318-2.19014494-.9417731-.60226208-.6278414-.90228193-1.3699365-.90007182-2.2262854 0-.7986674.2866979-1.4697699.86006918-2.0133074.57337127-.5435376 1.3167538-.8153063 2.23014758-.8153063zm0 15.6666667h93.90621462c.800053 0 1.5012105.3038947 2.1034726.9116593.602262.6077647.9022819 1.3472117.9000718 2.218341 0 .7540783-.3000321 1.4203685-.9000718 1.9988703-.6000398.5785019-1.3011973.8688784-2.1034726.8711294h-93.90621462c-.91561615 0-1.65899868-.2757451-2.23014758-.8272352-.57114891-.5514902-.85783455-1.2324117-.86005692-2.0427645 0-.8688784.28668564-1.6083253.86005692-2.218341.57337127-.6100156 1.3167538-.9138979 2.23014758-.9116593zm0 15.6666666h93.90621462c.800053 0 1.5012105.3038948 2.1034726.9116594.602262.6077646.9022819 1.3472116.9000718 2.2183409 0 .7540784-.3000321 1.4203685-.9000718 1.9988704-.6000398.5785019-1.3011973.8688784-2.1034726.8711293h-93.90621462c-.91561615 0-1.65899868-.275745-2.23014758-.8272352-.57114891-.5514901-.85783455-1.2324116-.86005692-2.0427645 0-.8688783.28668564-1.6083253.86005692-2.2183409.57337127-.6100156 1.3167538-.9138979 2.23014758-.9116594zm0 15.6666667h93.90621462c.800053 0 1.5012105.3038947 2.1034726.9116594.602262.6077646.9022819 1.3472116.9000718 2.2183409 0 .7540784-.3000321 1.4203685-.9000718 1.9988704-.6000398.5785019-1.3011973.8688783-2.1034726.8711293h-93.90621462c-.91561615 0-1.65899868-.2757451-2.23014758-.8272352-.57114891-.5514901-.85783455-1.2324116-.86005692-2.0427645 0-.8688783.28668564-1.6083253.86005692-2.2183409.57337127-.6100156 1.3167538-.913898 2.23014758-.9116594z" /> </svg>
`;let Y=class extends I{constructor(){super(...arguments),this.sortDirection=null,this.selectedSort=M.relevance,this.selectedTitleFilter=null,this.selectedCreatorFilter=null,this.showRelevance=!0,this.alphaSelectorVisible=null,this.dateSortSelectorVisible=!1,this.viewSortSelectorVisible=!1,this.desktopSelectorBarWidth=0,this.selectorBarContainerWidth=0,this.hoveringOverDateSortOptions=!1,this.boundSortBarSelectorEscapeListener=e=>{e.key==="Escape"&&(this.viewSortSelectorVisible=!1,this.dateSortSelectorVisible=!1)}}render(){return u`
      <div id="container">
        <div id="sort-bar">
          <div id="sort-direction-container">
            ${this.sortDirectionSelectorTemplate}
          </div>

          <div id="sort-selector-container">
            ${this.mobileSortSelectorTemplate}
            ${this.desktopSortSelectorTemplate}
          </div>

          <div id="display-style-selector">${this.displayOptionTemplate}</div>
        </div>

        ${this.viewSortSelectorVisible&&!this.mobileSelectorVisible?this.viewSortSelector:$}
        ${this.dateSortSelectorVisible&&!this.mobileSelectorVisible?this.dateSortSelector:$}
        ${this.alphaBarTemplate}

        <div id="bottom-shadow"></div>
      </div>
    `}updated(e){if(e.has("displayMode")&&this.displayModeChanged(),e.has("selectedSort")&&this.sortDirection===null&&(this.sortDirection="desc"),e.has("selectedTitleFilter")&&this.selectedTitleFilter&&(this.alphaSelectorVisible="title"),e.has("selectedCreatorFilter")&&this.selectedCreatorFilter&&(this.alphaSelectorVisible="creator"),(e.has("dateSortSelectorVisible")||e.has("viewSortSelectorVisible"))&&this.setupEscapeListeners(),e.has("resizeObserver")){const t=e.get("resizeObserver");t&&this.disconnectResizeObserver(t),this.setupResizeObserver()}}setupEscapeListeners(){this.dateSortSelectorVisible||this.viewSortSelectorVisible?document.addEventListener("keydown",this.boundSortBarSelectorEscapeListener):document.removeEventListener("keydown",this.boundSortBarSelectorEscapeListener)}disconnectedCallback(){this.resizeObserver&&this.disconnectResizeObserver(this.resizeObserver)}disconnectResizeObserver(e){e.removeObserver({target:this.sortSelectorContainer,handler:this}),e.removeObserver({target:this.desktopSortSelector,handler:this})}setupResizeObserver(){!this.resizeObserver||(this.resizeObserver.addObserver({target:this.sortSelectorContainer,handler:this}),this.resizeObserver.addObserver({target:this.desktopSortSelector,handler:this}))}get mobileSelectorVisible(){return this.selectorBarContainerWidth-10<this.desktopSelectorBarWidth}get alphaBarTemplate(){if(!["title","creator"].includes(this.selectedSort))return $;if(this.alphaSelectorVisible===null){if(this.selectedSort==="creator")return this.creatorSelectorBar;if(this.selectedSort==="title")return this.titleSelectorBar}else return this.alphaSelectorVisible==="creator"?this.creatorSelectorBar:this.titleSelectorBar;return $}handleResize(e){e.target===this.desktopSortSelector?this.desktopSelectorBarWidth=e.contentRect.width:e.target===this.sortSelectorContainer&&(this.selectorBarContainerWidth=e.contentRect.width)}get sortDirectionSelectorTemplate(){return u`
      <div id="sort-direction-selector">
        <button
          id="sort-ascending-btn"
          class="sort-button ${this.sortDirection==="asc"?"selected":""}"
          ?disabled=${this.selectedSort==="relevance"}
          @click=${()=>{this.setSortDirections("asc")}}
        >
          ${gr}
        </button>
        <button
          id="sort-descending-btn"
          class="sort-button ${this.sortDirection==="desc"?"selected":""}"
          ?disabled=${this.selectedSort==="relevance"}
          @click=${()=>{this.setSortDirections("desc")}}
        >
          ${gr}
        </button>
      </div>
    `}get desktopSortSelectorTemplate(){return u`
      <ul
        id="desktop-sort-selector"
        class=${this.mobileSelectorVisible?"hidden":"visible"}
      >
        <li id="sort-by-text">Sort By</li>
        <li>
          ${this.showRelevance?this.getSortDisplayOption(M.relevance):$}
        </li>
        <li>
          ${this.getSortDisplayOption(M.weeklyview,{clickEvent:()=>{this.viewOptionSelected||this.setSelectedSort(M.weeklyview),this.viewSortSelectorVisible=!this.viewSortSelectorVisible,this.dateSortSelectorVisible=!1,this.alphaSelectorVisible=null,this.selectedTitleFilter=null,this.selectedCreatorFilter=null,this.emitTitleLetterChangedEvent(),this.emitCreatorLetterChangedEvent()},displayName:u`${this.viewSortField}`,isSelected:()=>this.viewOptionSelected})}
        </li>
        <li>
          ${this.getSortDisplayOption(M.title,{clickEvent:()=>{this.alphaSelectorVisible="title",this.selectedCreatorFilter=null,this.dateSortSelectorVisible=!1,this.viewSortSelectorVisible=!1,this.setSelectedSort(M.title),this.emitCreatorLetterChangedEvent()}})}
        </li>
        <li>
          ${this.getSortDisplayOption(M.date,{clickEvent:()=>{this.dateOptionSelected||this.setSelectedSort(M.date),this.dateSortSelectorVisible=!this.dateSortSelectorVisible,this.viewSortSelectorVisible=!1,this.alphaSelectorVisible=null,this.selectedTitleFilter=null,this.selectedCreatorFilter=null,this.emitTitleLetterChangedEvent(),this.emitCreatorLetterChangedEvent()},displayName:u`${this.dateSortField}`,isSelected:()=>this.dateOptionSelected})}
        </li>
        <li>
          ${this.getSortDisplayOption(M.creator,{clickEvent:()=>{this.alphaSelectorVisible="creator",this.selectedTitleFilter=null,this.dateSortSelectorVisible=!1,this.setSelectedSort(M.creator),this.emitTitleLetterChangedEvent()}})}
        </li>
      </ul>
    `}getSortDisplayOption(e,t){var i,a;const o=(i=t==null?void 0:t.isSelected)!==null&&i!==void 0?i:()=>this.selectedSort===e,s=(a=t==null?void 0:t.displayName)!==null&&a!==void 0?a:Qe[e];return u`
      <a
        href="#"
        @click=${l=>{l.preventDefault(),t!=null&&t.clickEvent?t.clickEvent(l):(this.alphaSelectorVisible=null,this.dateSortSelectorVisible=!1,this.selectedTitleFilter=null,this.selectedCreatorFilter=null,this.setSelectedSort(e),this.emitTitleLetterChangedEvent(),this.emitCreatorLetterChangedEvent())}}
        class=${o()?"selected":""}
      >
        ${s}
      </a>
    `}get mobileSortSelectorTemplate(){return u`
      <select
        id="mobile-sort-selector"
        @change=${this.mobileSortChanged}
        class=${this.mobileSelectorVisible?"visible":"hidden"}
      >
        ${Object.keys(M).map(e=>u`
            <option value="${e}" ?selected=${this.selectedSort===e}>
              ${Qe[e]}
            </option>
          `)}
      </select>
    `}mobileSortChanged(e){const t=e.target;this.setSelectedSort(t.value)}get displayOptionTemplate(){return u`
      <ul>
        <li>
          <button
            id="grid-button"
            @click=${()=>{this.displayMode="grid"}}
            class=${this.displayMode==="grid"?"active":""}
            title="Tile view"
          >
            ${ln}
          </button>
        </li>
        <li>
          <button
            id="list-detail-button"
            @click=${()=>{this.displayMode="list-detail"}}
            class=${this.displayMode==="list-detail"?"active":""}
            title="List view"
          >
            ${dn}
          </button>
        </li>
        <li>
          <button
            id="list-compact-button"
            @click=${()=>{this.displayMode="list-compact"}}
            class=${this.displayMode==="list-compact"?"active":""}
            title="Compact list view"
          >
            ${cn}
          </button>
        </li>
      </ul>
    `}get dateSortSelector(){return u`
      <div
        id="date-sort-selector-backdrop"
        @keyup=${()=>{this.dateSortSelectorVisible=!1}}
        @click=${()=>{this.dateSortSelectorVisible=!1}}
      ></div>
      <div id="date-sort-selector">
        <ul>
          <li>${this.getDateSortButton(M.datearchived)}</li>
          <li>${this.getDateSortButton(M.date)}</li>
          <li>${this.getDateSortButton(M.datereviewed)}</li>
          <li>${this.getDateSortButton(M.dateadded)}</li>
        </ul>
      </div>
    `}get viewSortSelector(){return u`
      <div
        id="view-sort-selector-backdrop"
        @keyup=${()=>{this.viewSortSelectorVisible=!1}}
        @click=${()=>{this.viewSortSelectorVisible=!1}}
      ></div>
      <div id="view-sort-selector">
        <ul>
          <li>${this.getDateSortButton(M.alltimeview)}</li>
          <li>${this.getDateSortButton(M.weeklyview)}</li>
        </ul>
      </div>
    `}getDateSortButton(e){return u`
      <button
        @click=${()=>{this.selectDateSort(e)}}
        class=${this.selectedSort===e?"selected":""}
      >
        ${Qe[e]}
      </button>
    `}selectDateSort(e){this.dateSortSelectorVisible=!1,this.viewSortSelectorVisible=!1,this.setSelectedSort(e)}setSortDirections(e){this.sortDirection=e,this.emitSortChangedEvent()}setSelectedSort(e){this.selectedSort=e,this.emitSortChangedEvent()}get dateOptionSelected(){return[M.datearchived,M.date,M.datereviewed,M.dateadded].includes(this.selectedSort)}get viewOptionSelected(){return[M.alltimeview,M.weeklyview].includes(this.selectedSort)}get dateSortField(){var e;const t=Qe[M.date];return this.dateOptionSelected&&(e=Qe[this.selectedSort])!==null&&e!==void 0?e:t}get viewSortField(){var e;const t=Qe[M.weeklyview];return this.viewOptionSelected&&(e=Qe[this.selectedSort])!==null&&e!==void 0?e:t}get titleSelectorBar(){return u` <alpha-bar
      .selectedLetter=${this.selectedTitleFilter}
      @letterChanged=${this.titleLetterChanged}
    ></alpha-bar>`}get creatorSelectorBar(){return u` <alpha-bar
      .selectedLetter=${this.selectedCreatorFilter}
      @letterChanged=${this.creatorLetterChanged}
    ></alpha-bar>`}titleLetterChanged(e){var t;this.selectedTitleFilter=(t=e.detail.selectedLetter)!==null&&t!==void 0?t:null,this.emitTitleLetterChangedEvent()}creatorLetterChanged(e){var t;this.selectedCreatorFilter=(t=e.detail.selectedLetter)!==null&&t!==void 0?t:null,this.emitCreatorLetterChangedEvent()}emitTitleLetterChangedEvent(){const e=new CustomEvent("titleLetterChanged",{detail:{selectedLetter:this.selectedTitleFilter}});this.dispatchEvent(e)}emitCreatorLetterChangedEvent(){const e=new CustomEvent("creatorLetterChanged",{detail:{selectedLetter:this.selectedCreatorFilter}});this.dispatchEvent(e)}displayModeChanged(){const e=new CustomEvent("displayModeChanged",{detail:{displayMode:this.displayMode}});this.dispatchEvent(e)}emitSortChangedEvent(){const e=new CustomEvent("sortChanged",{detail:{selectedSort:this.selectedSort,sortDirection:this.sortDirection}});this.dispatchEvent(e)}};Y.styles=y`
    #container {
      position: relative;
    }

    #sort-bar {
      display: flex;
      justify-content: space-between;
      border: 1px solid rgb(232, 232, 232);
      align-items: center;
      padding: 0.5rem 1.5rem;
    }

    #sort-direction-container {
      flex: 0;
    }

    #sort-by-text {
      text-transform: uppercase;
    }

    #bottom-shadow {
      height: 1px;
      width: 100%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
      background-color: #bbb;
    }

    ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
      align-items: center;
    }

    li {
      padding: 0;
    }

    .sort-button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      cursor: pointer;
      outline: inherit;
      width: 12px;
      height: 12px;
      opacity: 0.5;
    }

    .sort-button.selected {
      opacity: 1;
    }

    .sort-button:disabled {
      opacity: 0.25;
      cursor: default;
    }

    #date-sort-selector,
    #view-sort-selector {
      position: absolute;
      left: 150px;
      top: 45px;

      z-index: 1;
      padding: 1rem;
      background-color: white;
      border-radius: 2.5rem;
      border: 1px solid #404142;
    }

    #date-sort-selector button,
    #view-sort-selector button {
      background: none;
      border-radius: 15px;
      color: #404142;
      border: none;
      appearance: none;
      cursor: pointer;
      -webkit-appearance: none;
      font-size: 1.4rem;
      font-weight: 400;
      padding: 0.5rem 1.2rem;
    }

    #date-sort-selector button.selected,
    #view-sort-selector button.selected {
      background-color: #404142;
      color: white;
    }

    #show-details {
      text-transform: uppercase;
      cursor: pointer;
      display: flex;
    }

    #show-details input {
      margin-right: 0.5rem;
      flex: 0 0 12px;
    }

    #sort-descending-btn {
      transform: rotate(180deg);
    }

    #sort-direction-selector {
      display: flex;
      flex-direction: column;
      gap: 3px;
      margin-right: 1rem;
    }

    #sort-selector-container {
      flex: 1;
    }

    /*
      we move the desktop sort selector offscreen instead of display: none
      because we need to observe the width of it vs its container to determine
      if it's wide enough to display the desktop version and if you displY: none,
      the width becomes 0
    */
    #desktop-sort-selector.hidden {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    #mobile-sort-selector.hidden {
      display: none;
    }

    #date-sort-selector-backdrop,
    #view-sort-selector-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-color: rgba(255, 255, 255, 0.5);
    }

    #desktop-sort-selector {
      display: inline-flex;
    }

    #desktop-sort-selector li {
      display: flex;
      align-items: center;
    }

    #desktop-sort-selector li a {
      text-decoration: none;
      text-transform: uppercase;
      font-size: 1.4rem;
      color: #333;
      line-height: 2.5;
    }

    #desktop-sort-selector li a.selected {
      font-weight: bold;
    }

    #desktop-sort-selector li::after {
      content: '•';
      padding-left: 1rem;
      padding-right: 1rem;
    }

    #desktop-sort-selector li:first-child::after {
      content: '';
    }

    #desktop-sort-selector li:last-child::after {
      content: '';
    }

    #display-style-selector {
      flex: 0;
    }

    #display-style-selector button {
      background: none;
      color: inherit;
      border: none;
      appearance: none;
      cursor: pointer;
      -webkit-appearance: none;
      opacity: 0.5;
    }

    #display-style-selector button.active {
      opacity: 1;
    }

    #display-style-selector button svg {
      width: 24px;
      height: 24px;
    }
  `;n([p({type:String})],Y.prototype,"displayMode",void 0);n([p({type:String})],Y.prototype,"sortDirection",void 0);n([p({type:String})],Y.prototype,"selectedSort",void 0);n([p({type:String})],Y.prototype,"selectedTitleFilter",void 0);n([p({type:String})],Y.prototype,"selectedCreatorFilter",void 0);n([p({type:Boolean})],Y.prototype,"showRelevance",void 0);n([p({type:Object})],Y.prototype,"resizeObserver",void 0);n([T()],Y.prototype,"alphaSelectorVisible",void 0);n([T()],Y.prototype,"dateSortSelectorVisible",void 0);n([T()],Y.prototype,"viewSortSelectorVisible",void 0);n([T()],Y.prototype,"desktopSelectorBarWidth",void 0);n([T()],Y.prototype,"selectorBarContainerWidth",void 0);n([T()],Y.prototype,"hoveringOverDateSortOptions",void 0);n([de("#desktop-sort-selector")],Y.prototype,"desktopSortSelector",void 0);n([de("#sort-selector-container")],Y.prototype,"sortSelectorContainer",void 0);Y=n([H("sort-filter-bar")],Y);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yr=ba(class extends wa{constructor(r){if(super(r),r.type!==Me.PROPERTY&&r.type!==Me.ATTRIBUTE&&r.type!==Me.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ts(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(r,[e]){if(e===pe||e===$)return e;const t=r.element,i=r.name;if(r.type===Me.PROPERTY){if(e===t[i])return pe}else if(r.type===Me.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(i))return pe}else if(r.type===Me.ATTRIBUTE&&t.getAttribute(i)===e+"")return pe;return jr(r),e}});var Zr=60,Jr=Zr*60,eo=Jr*24,hn=eo*7,St=1e3,Zi=Zr*St,br=Jr*St,pn=eo*St,un=hn*St,xa="millisecond",ut="second",mt="minute",vt="hour",Ae="day",di="week",ve="month",to="quarter",Ee="year",ft="date",mn="YYYY-MM-DDTHH:mm:ssZ",wr="Invalid Date",vn=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,fn=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,gn={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},pa=function(e,t,i){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(i)+e},yn=function(e){var t=-e.utcOffset(),i=Math.abs(t),a=Math.floor(i/60),o=i%60;return(t<=0?"+":"-")+pa(a,2,"0")+":"+pa(o,2,"0")},bn=function r(e,t){if(e.date()<t.date())return-r(t,e);var i=(t.year()-e.year())*12+(t.month()-e.month()),a=e.clone().add(i,ve),o=t-a<0,s=e.clone().add(i+(o?-1:1),ve);return+(-(i+(t-a)/(o?a-s:s-a))||0)},wn=function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},xn=function(e){var t={M:ve,y:Ee,w:di,d:Ae,D:ft,h:vt,m:mt,s:ut,ms:xa,Q:to};return t[e]||String(e||"").toLowerCase().replace(/s$/,"")},Sn=function(e){return e===void 0},$n={s:pa,z:yn,m:bn,a:wn,p:xn,u:Sn},Ut="en",qe={};qe[Ut]=gn;var Sa=function(e){return e instanceof zi},wi=function r(e,t,i){var a;if(!e)return Ut;if(typeof e=="string"){var o=e.toLowerCase();qe[o]&&(a=o),t&&(qe[o]=t,a=o);var s=e.split("-");if(!a&&s.length>1)return r(s[0])}else{var l=e.name;qe[l]=e,a=l}return!i&&a&&(Ut=a),a||!i&&Ut},G=function(e,t){if(Sa(e))return e.clone();var i=typeof t=="object"?t:{};return i.date=e,i.args=arguments,new zi(i)},Cn=function(e,t){return G(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},B=$n;B.l=wi;B.i=Sa;B.w=Cn;var _n=function(e){var t=e.date,i=e.utc;if(t===null)return new Date(NaN);if(B.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var a=t.match(vn);if(a){var o=a[2]-1||0,s=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,s)):new Date(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,s)}}return new Date(t)},zi=function(){function r(t){this.$L=wi(t.locale,null,!0),this.parse(t)}var e=r.prototype;return e.parse=function(i){this.$d=_n(i),this.$x=i.x||{},this.init()},e.init=function(){var i=this.$d;this.$y=i.getFullYear(),this.$M=i.getMonth(),this.$D=i.getDate(),this.$W=i.getDay(),this.$H=i.getHours(),this.$m=i.getMinutes(),this.$s=i.getSeconds(),this.$ms=i.getMilliseconds()},e.$utils=function(){return B},e.isValid=function(){return this.$d.toString()!==wr},e.isSame=function(i,a){var o=G(i);return this.startOf(a)<=o&&o<=this.endOf(a)},e.isAfter=function(i,a){return G(i)<this.startOf(a)},e.isBefore=function(i,a){return this.endOf(a)<G(i)},e.$g=function(i,a,o){return B.u(i)?this[a]:this.set(o,i)},e.unix=function(){return Math.floor(this.valueOf()/1e3)},e.valueOf=function(){return this.$d.getTime()},e.startOf=function(i,a){var o=this,s=B.u(a)?!0:a,l=B.p(i),d=function(A,F){var L=B.w(o.$u?Date.UTC(o.$y,F,A):new Date(o.$y,F,A),o);return s?L:L.endOf(Ae)},h=function(A,F){var L=[0,0,0,0],N=[23,59,59,999];return B.w(o.toDate()[A].apply(o.toDate("s"),(s?L:N).slice(F)),o)},m=this.$W,v=this.$M,g=this.$D,b="set"+(this.$u?"UTC":"");switch(l){case Ee:return s?d(1,0):d(31,11);case ve:return s?d(1,v):d(0,v+1);case di:{var S=this.$locale().weekStart||0,z=(m<S?m+7:m)-S;return d(s?g-z:g+(6-z),v)}case Ae:case ft:return h(b+"Hours",0);case vt:return h(b+"Minutes",1);case mt:return h(b+"Seconds",2);case ut:return h(b+"Milliseconds",3);default:return this.clone()}},e.endOf=function(i){return this.startOf(i,!1)},e.$set=function(i,a){var o,s=B.p(i),l="set"+(this.$u?"UTC":""),d=(o={},o[Ae]=l+"Date",o[ft]=l+"Date",o[ve]=l+"Month",o[Ee]=l+"FullYear",o[vt]=l+"Hours",o[mt]=l+"Minutes",o[ut]=l+"Seconds",o[xa]=l+"Milliseconds",o)[s],h=s===Ae?this.$D+(a-this.$W):a;if(s===ve||s===Ee){var m=this.clone().set(ft,1);m.$d[d](h),m.init(),this.$d=m.set(ft,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d](h);return this.init(),this},e.set=function(i,a){return this.clone().$set(i,a)},e.get=function(i){return this[B.p(i)]()},e.add=function(i,a){var o=this,s;i=Number(i);var l=B.p(a),d=function(g){var b=G(o);return B.w(b.date(b.date()+Math.round(g*i)),o)};if(l===ve)return this.set(ve,this.$M+i);if(l===Ee)return this.set(Ee,this.$y+i);if(l===Ae)return d(1);if(l===di)return d(7);var h=(s={},s[mt]=Zi,s[vt]=br,s[ut]=St,s)[l]||1,m=this.$d.getTime()+i*h;return B.w(m,this)},e.subtract=function(i,a){return this.add(i*-1,a)},e.format=function(i){var a=this,o=this.$locale();if(!this.isValid())return o.invalidDate||wr;var s=i||mn,l=B.z(this),d=this.$H,h=this.$m,m=this.$M,v=o.weekdays,g=o.months,b=o.meridiem,S=function(L,N,K,ne){return L&&(L[N]||L(a,s))||K[N].slice(0,ne)},z=function(L){return B.s(d%12||12,L,"0")},E=b||function(F,L,N){var K=F<12?"AM":"PM";return N?K.toLowerCase():K},A={YY:String(this.$y).slice(-2),YYYY:this.$y,M:m+1,MM:B.s(m+1,2,"0"),MMM:S(o.monthsShort,m,g,3),MMMM:S(g,m),D:this.$D,DD:B.s(this.$D,2,"0"),d:String(this.$W),dd:S(o.weekdaysMin,this.$W,v,2),ddd:S(o.weekdaysShort,this.$W,v,3),dddd:v[this.$W],H:String(d),HH:B.s(d,2,"0"),h:z(1),hh:z(2),a:E(d,h,!0),A:E(d,h,!1),m:String(h),mm:B.s(h,2,"0"),s:String(this.$s),ss:B.s(this.$s,2,"0"),SSS:B.s(this.$ms,3,"0"),Z:l};return s.replace(fn,function(F,L){return L||A[F]||l.replace(":","")})},e.utcOffset=function(){return-Math.round(this.$d.getTimezoneOffset()/15)*15},e.diff=function(i,a,o){var s,l=B.p(a),d=G(i),h=(d.utcOffset()-this.utcOffset())*Zi,m=this-d,v=B.m(this,d);return v=(s={},s[Ee]=v/12,s[ve]=v,s[to]=v/3,s[di]=(m-h)/un,s[Ae]=(m-h)/pn,s[vt]=m/br,s[mt]=m/Zi,s[ut]=m/St,s)[l]||m,o?v:B.a(v)},e.daysInMonth=function(){return this.endOf(ve).$D},e.$locale=function(){return qe[this.$L]},e.locale=function(i,a){if(!i)return this.$L;var o=this.clone(),s=wi(i,a,!0);return s&&(o.$L=s),o},e.clone=function(){return B.w(this.$d,this)},e.toDate=function(){return new Date(this.valueOf())},e.toJSON=function(){return this.isValid()?this.toISOString():null},e.toISOString=function(){return this.$d.toISOString()},e.toString=function(){return this.$d.toUTCString()},r}(),io=zi.prototype;G.prototype=io;[["$ms",xa],["$s",ut],["$m",mt],["$H",vt],["$W",Ae],["$M",ve],["$y",Ee],["$D",ft]].forEach(function(r){io[r[1]]=function(e){return this.$g(e,r[0],r[1])}});G.extend=function(r,e){return r.$i||(r(e,zi,G),r.$i=!0),G};G.locale=wi;G.isDayjs=Sa;G.unix=function(r){return G(r*1e3)};G.en=qe[Ut];G.Ls=qe;G.p={};var zn=function(e){return e.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(t,i,a){return i||a.slice(1)})},kn={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Tn=function(e,t){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(i,a,o){var s=o&&o.toUpperCase();return a||t[o]||kn[o]||zn(t[s])})},Dn=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,Mn=/\d/,ri=/\d\d/,An=/\d{3}/,En=/\d{4}/,be=/\d\d?/,On=/[+-]?\d+/,In=/[+-]\d\d:?(\d\d)?|Z/,Pt=/\d*[^\s\d-_:/()]+/,Ie={},ao=function(e){return e=+e,e+(e>68?1900:2e3)};function Ln(r){if(!r||r==="Z")return 0;var e=r.match(/([+-]|\d\d)/g),t=+(e[1]*60)+(+e[2]||0);return t===0?0:e[0]==="+"?-t:t}var re=function(e){return function(t){this[e]=+t}},xr=[In,function(r){var e=this.zone||(this.zone={});e.offset=Ln(r)}],Ji=function(e){var t=Ie[e];return t&&(t.indexOf?t:t.s.concat(t.f))},Sr=function(e,t){var i,a=Ie,o=a.meridiem;if(!o)i=e===(t?"pm":"PM");else for(var s=1;s<=24;s+=1)if(e.indexOf(o(s,0,t))>-1){i=s>12;break}return i},Fn={A:[Pt,function(r){this.afternoon=Sr(r,!1)}],a:[Pt,function(r){this.afternoon=Sr(r,!0)}],S:[Mn,function(r){this.milliseconds=+r*100}],SS:[ri,function(r){this.milliseconds=+r*10}],SSS:[An,function(r){this.milliseconds=+r}],s:[be,re("seconds")],ss:[be,re("seconds")],m:[be,re("minutes")],mm:[be,re("minutes")],H:[be,re("hours")],h:[be,re("hours")],HH:[be,re("hours")],hh:[be,re("hours")],D:[be,re("day")],DD:[ri,re("day")],Do:[Pt,function(r){var e=Ie,t=e.ordinal,i=r.match(/\d+/);if(this.day=i[0],!!t)for(var a=1;a<=31;a+=1)t(a).replace(/\[|\]/g,"")===r&&(this.day=a)}],M:[be,re("month")],MM:[ri,re("month")],MMM:[Pt,function(r){var e=Ji("months"),t=Ji("monthsShort"),i=(t||e.map(function(a){return a.slice(0,3)})).indexOf(r)+1;if(i<1)throw new Error;this.month=i%12||i}],MMMM:[Pt,function(r){var e=Ji("months"),t=e.indexOf(r)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[On,re("year")],YY:[ri,function(r){this.year=ao(r)}],YYYY:[En,re("year")],Z:xr,ZZ:xr};function Rn(r){var e=r.afternoon;if(e!==void 0){var t=r.hours;e?t<12&&(r.hours+=12):t===12&&(r.hours=0),delete r.afternoon}}function Nn(r){r=Tn(r,Ie&&Ie.formats);for(var e=r.match(Dn),t=e.length,i=0;i<t;i+=1){var a=e[i],o=Fn[a],s=o&&o[0],l=o&&o[1];l?e[i]={regex:s,parser:l}:e[i]=a.replace(/^\[|\]$/g,"")}return function(d){for(var h={},m=0,v=0;m<t;m+=1){var g=e[m];if(typeof g=="string")v+=g.length;else{var b=g.regex,S=g.parser,z=d.slice(v),E=b.exec(z),A=E[0];S.call(h,A),d=d.replace(A,"")}}return Rn(h),h}}var Pn=function(e,t,i){try{if(["x","X"].indexOf(t)>-1)return new Date((t==="X"?1e3:1)*e);var a=Nn(t),o=a(e),s=o.year,l=o.month,d=o.day,h=o.hours,m=o.minutes,v=o.seconds,g=o.milliseconds,b=o.zone,S=new Date,z=d||(!s&&!l?S.getDate():1),E=s||S.getFullYear(),A=0;s&&!l||(A=l>0?l-1:S.getMonth());var F=h||0,L=m||0,N=v||0,K=g||0;return b?new Date(Date.UTC(E,A,z,F,L,N,K+b.offset*60*1e3)):i?new Date(Date.UTC(E,A,z,F,L,N,K)):new Date(E,A,z,F,L,N,K)}catch{return new Date("")}},Bn=function(r,e,t){t.p.customParseFormat=!0,r&&r.parseTwoDigitYear&&(ao=r.parseTwoDigitYear);var i=e.prototype,a=i.parse;i.parse=function(o){var s=o.date,l=o.utc,d=o.args;this.$u=l;var h=d[1];if(typeof h=="string"){var m=d[2]===!0,v=d[3]===!0,g=m||v,b=d[2];v&&(b=d[2]),Ie=this.$locale(),!m&&b&&(Ie=t.Ls[b]),this.$d=Pn(s,h,l),this.init(),b&&b!==!0&&(this.$L=this.locale(b).$L),g&&s!=this.format(h)&&(this.$d=new Date("")),Ie={}}else if(h instanceof Array)for(var S=h.length,z=1;z<=S;z+=1){d[1]=h[z-1];var E=t.apply(this,d);if(E.isValid()){this.$d=E.$d,this.$L=E.$L,this.init();break}z===S&&(this.$d=new Date(""))}else a.call(this,o)}};const Hn=Object.freeze({processing:"processing",complete:"complete"});class Un extends I{static get properties(){return{mode:{type:String}}}constructor(){super(),this.mode=Hn.processing}render(){return u`
      <div class="${this.mode}">
        <svg
          viewBox="0 0 120 120"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-labelledby="indicatorTitle indicatorDescription"
        >
          <title id="indicatorTitle">Activity Indicator</title>
          <desc id="indicatorDescription">
            A rotating activity indicator with three dots in the middle.
          </desc>
          <g
            id="icons/check-ring---squared"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <path
              id="completed-ring"
              class="loaded-indicator"
              d="M60,10 C70.5816709,10 80.3955961,13.2871104 88.4763646,18.8959201 L78.3502633,29.0214223 C72.9767592,25.8315427 66.7022695,24 60,24 C40.117749,24 24,40.117749 24,60 C24,79.882251 40.117749,96 60,96 C79.882251,96 96,79.882251 96,60 L95.995,59.46 L108.327675,47.128668 C109.350926,50.9806166 109.925886,55.015198 109.993301,59.1731586 L110,60 C110,87.6142375 87.6142375,110 60,110 C32.3857625,110 10,87.6142375 10,60 C10,32.3857625 32.3857625,10 60,10 Z"
            ></path>
            <polygon
              id="check"
              class="loaded-indicator"
              transform="translate(75.000000, 41.500000) rotate(44.000000) translate(-75.000000, -41.500000) "
              points="96 85 54 85 54 65 76 64.999 76 -2 96 -2"
            ></polygon>
            <path
              id="activity-ring"
              class="activity-indicator"
              d="M60,10 C69.8019971,10 78.9452178,12.8205573 86.6623125,17.6943223 L76.4086287,27.9484118 C71.4880919,25.4243078 65.9103784,24 60,24 C40.117749,24 24,40.117749 24,60 C24,79.882251 40.117749,96 60,96 C79.882251,96 96,79.882251 96,60 C96,53.3014663 94.1704984,47.0302355 90.9839104,41.6587228 L101.110332,31.5326452 C106.715332,39.6116982 110,49.4222615 110,60 C110,87.6142375 87.6142375,110 60,110 C32.3857625,110 10,87.6142375 10,60 C10,32.3857625 32.3857625,10 60,10 Z"
            ></path>
            <g
              id="activity-dots"
              class="activity-indicator"
              transform="translate(40.000000, 55.000000)"
            >
              <circle id="left-dot" cx="5" cy="5" r="5"></circle>
              <circle id="middle-dot" cx="20" cy="5" r="5"></circle>
              <circle id="right-dot" cx="35" cy="5" r="5"></circle>
            </g>
          </g>
        </svg>
      </div>
    `}static get styles(){const e=y`var(--activityIndicatorCheckmarkColor, #31A481)`,t=y`var(--activityIndicatorCompletedRingColor, #31A481)`,i=y`var(--activityIndicatorLoadingRingColor, #333333)`,a=y`var(--activityIndicatorLoadingDotColor, #333333)`;return y`
      #completed-ring {
        fill: ${t};
      }

      #check {
        fill: ${e};
      }

      #activity-ring {
        fill: ${i};
      }

      #activity-dots {
        fill: ${a};
      }

      .activity-indicator {
        opacity: 0;
        transition: opacity 0.25s ease-out;
      }

      .processing .activity-indicator {
        opacity: 1;
      }

      .loaded-indicator {
        opacity: 1;
        transition: opacity 0.25s ease-out;
      }

      .processing .loaded-indicator {
        opacity: 0;
      }

      .image {
        border: 1px solid red;
        display: inline-block;
      }

      .processing #activity-ring {
        animation: rotate 1.3s infinite linear;
        transform-origin: 50px 50px;
        transform-box: fill-box;
      }

      .processing #left-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.2s;
      }

      .processing #middle-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.4s;
      }

      .processing #right-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.6s;
      }

      @keyframes rotate {
        0% {
          transform: rotate(-360deg);
        }
      }

      @keyframes dot {
        0% {
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    `}}window.customElements.define("ia-activity-indicator",Un);G.extend(Bn);const Vn=180,Wn=40,jn=10,Qn=125,Gn=30,$r="YYYY",Yn="no data",Kn=0,Cr=4,qn=y`var(--histogramDateRangeSliderColor, #4B65FE)`,Xn=y`var(--histogramDateRangeSelectedRangeColor, #DBE0FF)`,Zn=y`var(--histogramDateRangeBarIncludedFill, #2C2C2C)`,Jn=y`var(--histogramDateRangeActivityIndicator, #2C2C2C)`,el=y`var(--histogramDateRangeBarExcludedFill, #CCCCCC)`,tl=y`var(--histogramDateRangeInputBorder, 0.5px solid #2C2C2C)`,il=y`var(--histogramDateRangeInputWidth, 35px)`,al=y`var(--histogramDateRangeInputFontSize, 1.2rem)`,rl=y`var(--histogramDateRangeInputFontFamily, sans-serif)`,_r=y`var(--histogramDateRangeTooltipBackgroundColor, #2C2C2C)`,zr=y`var(--histogramDateRangeTooltipTextColor, #FFFFFF)`,ol=y`var(--histogramDateRangeTooltipFontSize, 1.1rem)`,sl=y`var(--histogramDateRangeTooltipFontFamily, sans-serif)`;let V=class extends I{constructor(){super(...arguments),this.width=Vn,this.height=Wn,this.sliderWidth=jn,this.tooltipWidth=Qn,this.tooltipHeight=Gn,this.updateDelay=Kn,this.dateFormat=$r,this.missingDataMessage=Yn,this.minDate="",this.maxDate="",this.disabled=!1,this.bins=[],this._tooltipOffset=0,this._tooltipVisible=!1,this._isDragging=!1,this._isLoading=!1,this._minSelectedDate="",this._maxSelectedDate="",this._minDateMS=0,this._maxDateMS=0,this._dragOffset=0,this._histWidth=0,this._binWidth=0,this._histData=[],this._previousDateRange="",this.drag=e=>{e.preventDefault(),!this.disabled&&(this.setDragOffset(e),this._isDragging=!0,this.addListeners(),this.cancelPendingUpdateEvent())},this.drop=()=>{this._isDragging&&(this.removeListeners(),this.beginEmitUpdateProcess()),this._isDragging=!1},this.move=e=>{const t=e.offsetX-this._dragOffset;this._currentSlider.id==="slider-min"?this.minSelectedDate=this.translatePositionToDate(this.validMinSliderX(t)):this.maxSelectedDate=this.translatePositionToDate(this.validMaxSliderX(t))}}disconnectedCallback(){this.removeListeners(),super.disconnectedCallback()}updated(e){(e.has("bins")||e.has("minDate")||e.has("maxDate")||e.has("minSelectedDate")||e.has("maxSelectedDate"))&&this.handleDataUpdate()}handleDataUpdate(){!this.hasBinData||(this._histWidth=this.width-this.sliderWidth*2,this._minDateMS=this.getMSFromString(this.minDate),this._maxDateMS=this.getMSFromString(this.maxDate),this._binWidth=this._histWidth/this._numBins,this._previousDateRange=this.currentDateRangeString,this._histData=this.calculateHistData(),this.minSelectedDate=this.minSelectedDate?this.minSelectedDate:this.minDate,this.maxSelectedDate=this.maxSelectedDate?this.maxSelectedDate:this.maxDate,this.requestUpdate())}calculateHistData(){const e=Math.min(...this.bins),t=Math.max(...this.bins),i=e===t?1:Math.log1p(t),a=this.height/i,o=this.dateRangeMS/this._numBins;return this.bins.map((s,l)=>({value:s,height:Math.floor(Math.log1p(s)*a),binStart:`${this.formatDate(l*o+this._minDateMS)}`,binEnd:`${this.formatDate((l+1)*o+this._minDateMS)}`}))}get hasBinData(){return this._numBins>0}get _numBins(){return!this.bins||!this.bins.length?0:this.bins.length}get histogramLeftEdgeX(){return this.sliderWidth}get histogramRightEdgeX(){return this.width-this.sliderWidth}get loading(){return this._isLoading}set loading(e){this.disabled=e,this._isLoading=e}get minSelectedDate(){return this.formatDate(this.getMSFromString(this._minSelectedDate))}set minSelectedDate(e){if(!this._minSelectedDate){this._minSelectedDate=e;return}const t=this.getMSFromString(e),i=!Number.isNaN(t),a=t<=this.getMSFromString(this.maxSelectedDate);i&&a&&(this._minSelectedDate=this.formatDate(t)),this.requestUpdate()}get maxSelectedDate(){return this.formatDate(this.getMSFromString(this._maxSelectedDate))}set maxSelectedDate(e){if(!this._maxSelectedDate){this._maxSelectedDate=e;return}const t=this.getMSFromString(e),i=!Number.isNaN(t),a=t>=this.getMSFromString(this.minSelectedDate);i&&a&&(this._maxSelectedDate=this.formatDate(t)),this.requestUpdate()}get minSliderX(){const e=this.translateDateToPosition(this.minSelectedDate);return this.validMinSliderX(e)}get maxSliderX(){const e=this.translateDateToPosition(this.maxSelectedDate);return this.validMaxSliderX(e)}get dateRangeMS(){return this._maxDateMS-this._minDateMS}showTooltip(e){if(this._isDragging||this.disabled)return;const t=e.currentTarget,i=t.x.baseVal.value+this.sliderWidth/2,a=t.dataset,o=`item${a.numItems!=="1"?"s":""}`,s=Number(a.numItems).toLocaleString();this._tooltipOffset=i+(this._binWidth-this.sliderWidth-this.tooltipWidth)/2,this._tooltipContent=u`
      ${s} ${o}<br />
      ${a.binStart} - ${a.binEnd}
    `,this._tooltipVisible=!0}hideTooltip(){this._tooltipContent=void 0,this._tooltipVisible=!1}validMinSliderX(e){const t=Math.min(this.translateDateToPosition(this.maxSelectedDate),this.histogramRightEdgeX);return e=this.clamp(e,this.histogramLeftEdgeX,t),Number.isNaN(e)||t<this.histogramLeftEdgeX?this.histogramLeftEdgeX:e}validMaxSliderX(e){const t=Math.max(this.histogramLeftEdgeX,this.translateDateToPosition(this.minSelectedDate));return e=this.clamp(e,t,this.histogramRightEdgeX),Number.isNaN(e)||t>this.histogramRightEdgeX?this.histogramRightEdgeX:e}addListeners(){window.addEventListener("pointermove",this.move),window.addEventListener("pointerup",this.drop),window.addEventListener("pointercancel",this.drop)}removeListeners(){window.removeEventListener("pointermove",this.move),window.removeEventListener("pointerup",this.drop),window.removeEventListener("pointercancel",this.drop)}beginEmitUpdateProcess(){this.cancelPendingUpdateEvent(),this._emitUpdatedEventTimer=setTimeout(()=>{if(this.currentDateRangeString===this._previousDateRange)return;this._previousDateRange=this.currentDateRangeString;const e={detail:{minDate:this.minSelectedDate,maxDate:this.maxSelectedDate},bubbles:!0,composed:!0};this.dispatchEvent(new CustomEvent("histogramDateRangeUpdated",e))},this.updateDelay)}cancelPendingUpdateEvent(){this._emitUpdatedEventTimer!==void 0&&(clearTimeout(this._emitUpdatedEventTimer),this._emitUpdatedEventTimer=void 0)}setDragOffset(e){this._currentSlider=e.currentTarget;const t=this._currentSlider.id==="slider-min"?this.minSliderX:this.maxSliderX;this._dragOffset=e.offsetX-t,(this._dragOffset>this.sliderWidth||this._dragOffset<-this.sliderWidth)&&(this._dragOffset=0)}translatePositionToDate(e){const t=Math.ceil((e-this.sliderWidth)*this.dateRangeMS/this._histWidth);return this.formatDate(this._minDateMS+t)}translateDateToPosition(e){const t=this.getMSFromString(e);return this.sliderWidth+(t-this._minDateMS)*this._histWidth/this.dateRangeMS}clamp(e,t,i){return Math.min(Math.max(e,t),i)}handleMinDateInput(e){const t=e.currentTarget;this.minSelectedDate=t.value,this.beginEmitUpdateProcess()}handleMaxDateInput(e){const t=e.currentTarget;this.maxSelectedDate=t.value,this.beginEmitUpdateProcess()}handleKeyUp(e){if(e.key==="Enter"){const t=e.currentTarget;t.blur(),t.id==="date-min"?this.handleMinDateInput(e):t.id==="date-max"&&this.handleMaxDateInput(e)}}get currentDateRangeString(){return`${this.minSelectedDate}:${this.maxSelectedDate}`}getMSFromString(e){const t=typeof e=="string"?e:String(e);if((t.split(/(\d+)/).length-1)/2===1){const a=new Date(0,0);return a.setFullYear(Number(t)),a.getTime()}return G(t,[this.dateFormat,$r]).valueOf()}handleBarClick(e){const t=e.currentTarget.dataset,i=(this.getMSFromString(t.binStart)+this.getMSFromString(t.binEnd))/2,a=Math.abs(i-this.getMSFromString(this.minSelectedDate)),o=Math.abs(i-this.getMSFromString(this.maxSelectedDate));a<o?this.minSelectedDate=t.binStart:this.maxSelectedDate=t.binEnd,this.beginEmitUpdateProcess()}get minSliderTemplate(){const e=Cr,t=`
            M${this.minSliderX},0
            h-${this.sliderWidth-e}
            q-${e},0 -${e},${e}
            v${this.height-e*2}
            q0,${e} ${e},${e}
            h${this.sliderWidth-e}
          `;return this.generateSliderSVG(this.minSliderX,"slider-min",t)}get maxSliderTemplate(){const e=Cr,t=`
            M${this.maxSliderX},0
            h${this.sliderWidth-e}
            q${e},0 ${e},${e}
            v${this.height-e*2}
            q0,${e} -${e},${e}
            h-${this.sliderWidth-e}
          `;return this.generateSliderSVG(this.maxSliderX,"slider-max",t)}generateSliderSVG(e,t,i){const a=t==="slider-min"?1:-1;return O`
    <svg
      id="${t}"
      class="
      ${this.disabled?"":"draggable"}
      ${this._isDragging?"dragging":""}"
      @pointerdown="${this.drag}"
    >
      <path d="${i} z" fill="${qn}" />
      <rect
        x="${e-this.sliderWidth*a+this.sliderWidth*.4*a}"
        y="${this.height/3}"
        width="1"
        height="${this.height/3}"
        fill="white"
      />
      <rect
        x="${e-this.sliderWidth*a+this.sliderWidth*.6*a}"
        y="${this.height/3}"
        width="1"
        height="${this.height/3}"
        fill="white"
      />
    </svg>
    `}get selectedRangeTemplate(){return O`
      <rect
        x="${this.minSliderX}"
        y="0"
        width="${this.maxSliderX-this.minSliderX}"
        height="${this.height}"
        fill="${Xn}"
      />`}get histogramTemplate(){const e=this._histWidth/this._numBins,t=e-1;let i=this.sliderWidth;return this._histData.map(a=>{const o=O`
        <rect
          class="bar"
          style='stroke-dasharray: 0 ${t} ${a.height} ${t} 0 ${a.height};'
          x="${i}"
          y="${this.height-a.height}"
          width="${t}"
          height="${a.height}"
          @pointerenter="${this.showTooltip}"
          @pointerleave="${this.hideTooltip}"
          @click="${this.handleBarClick}"
          fill="${i+t>=this.minSliderX&&i<=this.maxSliderX?Zn:el}"
          data-num-items="${a.value}"
          data-bin-start="${a.binStart}"
          data-bin-end="${a.binEnd}"
        />`;return i+=e,o})}formatDate(e){if(Number.isNaN(e))return"";const t=G(e);return t.year()<1e3?String(t.year()):t.format(this.dateFormat)}get minInputTemplate(){return u`
      <input
        id="date-min"
        placeholder="${this.dateFormat}"
        type="text"
        @focus="${this.cancelPendingUpdateEvent}"
        @blur="${this.handleMinDateInput}"
        @keyup="${this.handleKeyUp}"
        .value="${yr(this.minSelectedDate)}"
        ?disabled="${this.disabled}"
      />
    `}get maxInputTemplate(){return u`
      <input
        id="date-max"
        placeholder="${this.dateFormat}"
        type="text"
        @focus="${this.cancelPendingUpdateEvent}"
        @blur="${this.handleMaxDateInput}"
        @keyup="${this.handleKeyUp}"
        .value="${yr(this.maxSelectedDate)}"
        ?disabled="${this.disabled}"
      />
    `}get tooltipTemplate(){return u`
      <style>
        #tooltip {
          width: ${this.tooltipWidth}px;
          height: ${this.tooltipHeight}px;
          top: ${-9-this.tooltipHeight}px;
          left: ${this._tooltipOffset}px;
          display: ${this._tooltipVisible?"block":"none"};
        }
        #tooltip:after {
          left: ${this.tooltipWidth/2}px;
        }
      </style>
      <div id="tooltip">${this._tooltipContent}</div>
    `}get noDataTemplate(){return u`
      <div class="missing-data-message">${this.missingDataMessage}</div>
    `}get activityIndicatorTemplate(){return this.loading?u`
      <ia-activity-indicator mode="processing"> </ia-activity-indicator>
    `:$}render(){return this.hasBinData?u`
      <div
        id="container"
        class="
          noselect
          ${this._isDragging?"dragging":""}
        "
        style="width: ${this.width}px"
      >
        ${this.activityIndicatorTemplate} ${this.tooltipTemplate}
        <div
          class="inner-container
          ${this.disabled?"disabled":""}"
        >
          <svg
            width="${this.width}"
            height="${this.height}"
            @pointerleave="${this.drop}"
          >
            ${this.selectedRangeTemplate}
            <svg id="histogram">${this.histogramTemplate}</svg>
            ${this.minSliderTemplate} ${this.maxSliderTemplate}
          </svg>
          <div id="inputs">
            ${this.minInputTemplate}
            <div class="dash">-</div>
            ${this.maxInputTemplate}
          </div>
        </div>
      </div>
    `:this.noDataTemplate}};V.styles=y`
    .missing-data-message {
      text-align: center;
    }
    #container {
      margin: 0;
      touch-action: none;
      position: relative;
    }
    .disabled {
      opacity: 0.3;
    }
    ia-activity-indicator {
      position: absolute;
      left: calc(50% - 10px);
      top: 10px;
      width: 20px;
      height: 20px;
      --activityIndicatorLoadingDotColor: rgba(0, 0, 0, 0);
      --activityIndicatorLoadingRingColor: ${Jn};
    }

    /* prevent selection from interfering with tooltip, especially on mobile */
    /* https://stackoverflow.com/a/4407335/1163042 */
    .noselect {
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none; /* current Chrome, Edge, Opera and Firefox */
    }
    .bar {
      /* create a transparent border around the hist bars to prevent "gaps" and
      flickering when moving around between bars. this also helps with handling
      clicks on the bars, preventing users from being able to click in between
      bars */
      stroke: rgba(0, 0, 0, 0);
      /* ensure transparent stroke wide enough to cover gap between bars */
      stroke-width: 2px;
    }
    .bar:hover {
      /* highlight currently hovered bar */
      fill-opacity: 0.7;
    }
    .disabled .bar:hover {
      /* ensure no visual hover interaction when disabled */
      fill-opacity: 1;
    }
    /****** histogram ********/
    #tooltip {
      position: absolute;
      background: ${_r};
      color: ${zr};
      text-align: center;
      border-radius: 3px;
      padding: 2px;
      font-size: ${ol};
      font-family: ${sl};
      touch-action: none;
      pointer-events: none;
    }
    #tooltip:after {
      content: '';
      position: absolute;
      margin-left: -5px;
      top: 100%;
      /* arrow */
      border: 5px solid ${zr};
      border-color: ${_r} transparent transparent
        transparent;
    }
    /****** slider ********/
    .draggable:hover {
      cursor: grab;
    }
    .dragging {
      cursor: grabbing !important;
    }
    /****** inputs ********/
    #inputs {
      display: flex;
      justify-content: center;
    }
    #inputs .dash {
      position: relative;
      bottom: -1px;
    }
    input {
      width: ${il};
      margin: 0 3px;
      border: ${tl};
      border-radius: 2px !important;
      text-align: center;
      font-size: ${al};
      font-family: ${rl};
    }
  `;n([p({type:Number})],V.prototype,"width",void 0);n([p({type:Number})],V.prototype,"height",void 0);n([p({type:Number})],V.prototype,"sliderWidth",void 0);n([p({type:Number})],V.prototype,"tooltipWidth",void 0);n([p({type:Number})],V.prototype,"tooltipHeight",void 0);n([p({type:Number})],V.prototype,"updateDelay",void 0);n([p({type:String})],V.prototype,"dateFormat",void 0);n([p({type:String})],V.prototype,"missingDataMessage",void 0);n([p({type:String})],V.prototype,"minDate",void 0);n([p({type:String})],V.prototype,"maxDate",void 0);n([p({type:Boolean})],V.prototype,"disabled",void 0);n([p({type:Object})],V.prototype,"bins",void 0);n([T()],V.prototype,"_tooltipOffset",void 0);n([T()],V.prototype,"_tooltipContent",void 0);n([T()],V.prototype,"_tooltipVisible",void 0);n([T()],V.prototype,"_isDragging",void 0);n([T()],V.prototype,"_isLoading",void 0);n([p({type:Boolean})],V.prototype,"loading",null);n([p()],V.prototype,"minSelectedDate",null);n([p()],V.prototype,"maxSelectedDate",null);V=n([H("histogram-date-range")],V);const kr=O`
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m51.5960452 0c5.420012 0 6.7920618 2.72313378 8.1300179 9.28391016 2.9793915 19.21608984-2.9793915 28.94849474 0 31.58229234 1.2215505 1.079857 1.8678662.7924226 3.2997314.0773518l.2153069-.1075882c2.1016905-1.0490161 5.8499713-2.8359661 14.9013153-2.8359661l2.3393989.00075c14.0694555.01425 14.2569231.29925 18.0062757 5.99925 0 3.2648986.9924719 9.5-3.9698878 9.5 4.9623597 0 7.9397755 15.5 0 15.5 7.9397755 0 6.9473035 15.5-.9924719 15.5 7.9397754 0 5.9548316 12 2.9774158 13-1.1342536.5714286-1.9876793 1.0011812-2.627102 1.3222794l-.3279542.1645673c-1.5889262.796641-1.5747062.7780161-1.4530457.6832252l.0244872-.0190992c.0041709-.0032756.0083532-.0065808.0124967-.0098908l.0239934-.0197196c.1060465-.0904428.1029348-.1457697-1.111471.3786377h-55.0821921c-3.3082398-3.0266004-4.9623597-5.0266004-4.9623597-6v-33.4737525c5.5882429-8.3508317 10.6469206-21.2754909 15.1760333-38.7739777v-17.92948326c0-2.54852436 1.8066707-3.82278654 5.4200119-3.82278654zm-27.5960452 56c2.209139 0 4 1.790861 4 4v36c0 2.209139-1.790861 4-4 4h-20c-2.209139 0-4-1.790861-4-4v-36c0-2.209139 1.790861-4 4-4z" fill-rule="evenodd"/></svg>`,Tr=O`
<svg viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg">
  <path d="m51.5960452 0c5.420012 0 6.7920618 2.72313378 8.1300179 9.28391016 2.9793915 19.21608984-2.9793915 28.94849474 0 31.58229234 1.2215505 1.079857 1.8678662.7924226 3.2997314.0773518l.2153069-.1075882c2.1016905-1.0490161 5.8499713-2.8359661 14.9013153-2.8359661l2.3393989.00075c14.0694555.01425 14.2569231.29925 18.0062757 5.99925 0 3.2648986.9924719 9.5-3.9698878 9.5 4.9623597 0 7.9397755 15.5 0 15.5 7.9397755 0 6.9473035 15.5-.9924719 15.5 7.9397754 0 5.9548316 12 2.9774158 13-1.1342536.5714286-1.9876793 1.0011812-2.627102 1.3222794l-.3279542.1645673c-1.5889262.796641-1.5747062.7780161-1.4530457.6832252l.0244872-.0190992c.0041709-.0032756.0083532-.0065808.0124967-.0098908l.0239934-.0197196c.1060465-.0904428.1029348-.1457697-1.111471.3786377h-55.0821921c-3.3082398-3.0266004-4.9623597-5.0266004-4.9623597-6v-33.4737525c5.5882429-8.3508317 10.6469206-21.2754909 15.1760333-38.7739777v-17.92948326c0-2.54852436 1.8066707-3.82278654 5.4200119-3.82278654zm-27.5960452 56c2.209139 0 4 1.790861 4 4v36c0 2.209139-1.790861 4-4 4h-20c-2.209139 0-4-1.790861-4-4v-36c0-2.209139 1.790861-4 4-4z" fill-rule="evenodd" transform="matrix(-1 0 0 -1 100 100)"/>
</svg>
`;let Q=class extends I{constructor(){super(...arguments),this.prompt="Do you find this feature useful?",this.buttonText="Beta",this.isOpen=!1,this.processing=!1,this.popupTopX=0,this.popupTopY=0,this.voteSubmitted=!1,this.voteNeedsChoosing=!1,this.resizingElement=document.body}render(){return u`
      <button
        id="beta-button"
        @click=${this.showPopup}
        tabindex="0"
        ?disabled=${this.disabled}
      >
        <span id="button-text">${this.buttonText}</span>
        <span
          class="beta-button-thumb upvote-button ${this.voteSubmitted?this.upvoteButtonClass:""}"
          >${kr}</span
        >
        <span
          class="beta-button-thumb downvote-button ${this.voteSubmitted?this.downvoteButtonClass:""}"
          id="beta-button-thumb-down"
          >${Tr}</span
        >
      </button>
      ${this.popupTemplate}
    `}firstUpdated(){this.boundEscapeListener=this.handleEscape.bind(this),this.boundScrollListener=this.handleScroll.bind(this)}updated(e){if(e.has("vote")&&this.vote&&(this.error=void 0,this.voteNeedsChoosing=!1),e.has("resizeObserver")){const t=e.get("resizeObserver");this.disconnectResizeObserver(t)}}handleResize(){!this.isOpen||this.positionPopup()}handleScroll(){!this.isOpen||this.positionPopup()}disconnectedCallback(){this.removeEscapeListener(),this.disconnectResizeObserver(this.resizeObserver)}disconnectResizeObserver(e){const t=e!=null?e:this.resizeObserver;t==null||t.removeObserver({handler:this,target:this.resizingElement})}setupResizeObserver(){!this.resizeObserver||this.resizeObserver.addObserver({handler:this,target:this.resizingElement})}async setupRecaptcha(){!this.recaptchaManager||(this.recaptchaWidget=await this.recaptchaManager.getRecaptchaWidget())}resetState(){this.vote=void 0,this.voteSubmitted=!1,this.error=void 0,this.voteNeedsChoosing=!1,this.comments.value=""}async showPopup(){this.voteSubmitted||(this.resetState(),this.setupResizeObserver(),this.setupScrollObserver(),this.setupEscapeListener(),this.positionPopup(),this.isOpen=!0,await this.setupRecaptcha())}closePopup(){this.disconnectResizeObserver(),this.stopScrollObserver(),this.removeEscapeListener(),this.isOpen=!1}positionPopup(){const e=this.betaButton.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),i=window.innerWidth,a=window.innerHeight,o=i/2,s=a/2;e.left<o?this.popupTopX=e.right-20:this.popupTopX=e.left+20-t.width,this.popupTopX=Math.max(0,this.popupTopX),this.popupTopX+t.width>i&&(this.popupTopX=i-t.width),e.top<s?this.popupTopY=e.bottom-10:this.popupTopY=e.top+10-t.height}handleEscape(e){e.key==="Escape"&&this.closePopup()}setupEscapeListener(){document.addEventListener("keyup",this.boundEscapeListener)}removeEscapeListener(){document.removeEventListener("keyup",this.boundEscapeListener)}setupScrollObserver(){document.addEventListener("scroll",this.boundScrollListener)}stopScrollObserver(){document.removeEventListener("scroll",this.boundScrollListener)}get popupTemplate(){return u`
      <div
        id="popup-background"
        class=${this.isOpen?"open":"closed"}
        @click=${this.backgroundClicked}
        @keyup=${this.backgroundClicked}
      >
        <div
          id="popup"
          style="left: ${this.popupTopX}px; top: ${this.popupTopY}px"
        >
          <form @submit=${this.submit} id="form" ?disabled=${this.processing}>
            <div id="prompt">
              <div id="prompt-text">${this.prompt}</div>
              <label
                tabindex="0"
                role="button"
                ?aria-pressed=${this.upvoteSelected}
                @click=${this.upvoteButtonSelected}
                @keyup=${this.upvoteKeypressed}
                class="vote-button upvote-button ${this.upvoteButtonClass} ${this.chooseVoteErrorClass}"
              >
                <input
                  type="radio"
                  name="vote"
                  value="up"
                  @click=${this.upvoteButtonSelected}
                  ?checked=${this.upvoteSelected}
                />
                ${kr}
              </label>

              <label
                tabindex="0"
                role="button"
                ?aria-pressed=${this.downvoteSelected}
                @click=${this.downvoteButtonSelected}
                @keyup=${this.downvoteKeypressed}
                class="vote-button downvote-button ${this.downvoteButtonClass} ${this.chooseVoteErrorClass}"
              >
                <input
                  type="radio"
                  name="vote"
                  value="down"
                  @click=${this.downvoteButtonSelected}
                  ?checked=${this.downvoteSelected}
                />
                ${Tr}
              </label>
            </div>
            <div>
              <textarea
                placeholder="Comments (optional)"
                id="comments"
                tabindex="0"
                ?disabled=${this.processing}
              ></textarea>
            </div>
            ${this.error?u`<div id="error">${this.error}</div>`:$}
            <div id="actions">
              <button
                @click=${this.cancel}
                id="cancel-button"
                class="cta-button"
                tabindex="0"
                ?disabled=${this.processing}
              >
                Cancel
              </button>
              <input
                type="submit"
                id="submit-button"
                class="cta-button"
                .value=${this.processing?"Submitting...":"Submit feedback"}
                tabindex="0"
                ?disabled=${this.processing}
              />
            </div>
          </form>
        </div>
      </div>
    `}get upvoteSelected(){return this.vote==="up"}get downvoteSelected(){return this.vote==="down"}upvoteKeypressed(e){(e.key==="Enter"||e.key===" ")&&this.upvoteButtonSelected()}downvoteKeypressed(e){(e.key==="Enter"||e.key===" ")&&this.downvoteButtonSelected()}upvoteButtonSelected(){this.vote=this.vote==="up"?void 0:"up"}downvoteButtonSelected(){this.vote=this.vote==="down"?void 0:"down"}get chooseVoteErrorClass(){return this.voteNeedsChoosing?"error":""}get upvoteButtonClass(){switch(this.vote){case"up":return"selected";case"down":return"unselected";default:return"noselection"}}get downvoteButtonClass(){switch(this.vote){case"up":return"unselected";case"down":return"selected";default:return"noselection"}}backgroundClicked(e){var t;e.target instanceof Node&&(!((t=this.popup)===null||t===void 0)&&t.contains(e.target)||this.closePopup())}cancel(e){e.preventDefault(),this.vote=void 0,this.closePopup()}async submit(e){if(e.preventDefault(),!this.vote){this.voteNeedsChoosing=!0,this.error=u`Please select a vote.`;return}if(!this.featureIdentifier)throw new Error("featureIdentifier is required");if(!this.featureFeedbackService)throw new Error("featureFeedbackService is required");if(!this.recaptchaWidget)throw new Error("recaptchaWidget is required");this.processing=!0;try{const t=await this.recaptchaWidget.execute();(await this.featureFeedbackService.submitFeedback({featureIdentifier:this.featureIdentifier,vote:this.vote,comments:this.comments.value,recaptchaToken:t})).success?(this.voteSubmitted=!0,this.closePopup()):this.error=u`There was an error submitting your feedback.`}catch(t){this.error=u`There was an error submitting your feedback.<br />Error:
        ${t instanceof Error?t.message:t}`}this.processing=!1}static get styles(){const e=y`var(--featureFeedbackBlueColor, #194880)`,t=y`var(--featureFeedbackDarkGrayColor, #767676)`,i=y`var(--defaultColorSvgFilter, invert(52%) sepia(0%) saturate(1%) hue-rotate(331deg) brightness(87%) contrast(89%))`,a=y`var(--featureFeedbackBackdropZindex, 5)`,o=y`var(--featureFeedbackModalZindex, 6)`,s=y`var(--featureFeedbackPopupBorderColor, ${e})`,l=y`var(--featureFeedbackSubmitButtonColor, ${e})`,d=y`var(--featureFeedbackBetaButtonBorderColor, ${e})`,h=y`var(--featureFeedbackBetaButtonTextColor, ${e})`,m=y`var(--featureFeedbackBetaButtonSvgFilter, ${i})`,v=y`var(--featureFeedbackCancelButtonColor, #515151)`,g=y`var(--featureFeedbackPopupBlockerColor, rgba(255, 255, 255, 0.3))`,b=y`var(--featureFeedbackPopupBackgroundColor, #F5F5F7)`,S=y`var(--featureFeedbackPromptFontWeight, bold)`,z=y`var(--featureFeedbackPromptFontSize, 14px)`,E=y`var(--defaultColor, ${t});`,A=y`var(--defaultColorSvgFilter, ${i});`,F=y`var(--upvoteColor, #23765D);`,L=y`var(--upvoteColorSvgFilter, invert(34%) sepia(72%) saturate(357%) hue-rotate(111deg) brightness(97%) contrast(95%));`,N=y`var(--downvoteColor, #720D11);`,K=y`var(--downvoteColorSvgFilter, invert(5%) sepia(81%) saturate(5874%) hue-rotate(352deg) brightness(105%) contrast(95%));`,ne=y`var(--unselectedColor, #CCCCCC);`,ye=y`var(--unselectedColorSvgFilter, invert(100%) sepia(0%) saturate(107%) hue-rotate(138deg) brightness(89%) contrast(77%));`;return y`
      #beta-button {
        font-size: 12px;
        font-weight: bold;
        font-style: italic;
        color: ${h};
        border: 1px solid ${d};
        border-radius: 4px;
        padding: 1px 5px;
      }

      .beta-button-thumb svg {
        height: 10px;
        width: 10px;
        filter: ${m};
      }

      .beta-button-thumb.unselected svg {
        filter: ${ye};
      }

      #error {
        color: red;
        font-size: 14px;
        text-align: center;
        font-weight: bold;
      }

      #popup-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: ${a};
        background-color: ${g};
        overflow: hidden;
      }

      #popup-background.closed {
        visibility: hidden;
        top: -100%;
        left: -100%;
      }

      #popup {
        position: absolute;
        padding: 10px;
        background-color: ${b};
        border: 1px ${s} solid;
        border-radius: 5px;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
        z-index: ${o};
        max-width: 300px;
        margin-left: 10px;
        margin-right: 10px;
      }

      button,
      input,
      a,
      textarea {
        font-family: inherit;
      }

      button,
      input[type='submit'] {
        background: none;
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: none;
      }

      button:disabled,
      input[type='submit']:disabled {
        cursor: default;
        opacity: 0.5;
      }

      #form > div {
        margin-bottom: 10px;
      }

      #form > div:last-child {
        margin-bottom: 0;
      }

      #prompt {
        display: flex;
        align-items: center;
        font-size: ${z};
        font-weight: ${S};
      }

      #prompt > label {
        flex: none;
        cursor: pointer;
      }

      #prompt-text {
        text-align: left;
      }

      #comments {
        width: 100%;
        height: 50px;
        background-color: #ffffff;
        border: 1px #2c2c2c solid;
        border-radius: 4px;
        padding: 7px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        resize: none;
      }

      #comments::placeholder {
        color: #767676;
      }

      #actions {
        display: flex;
        justify-content: center;
      }

      .cta-button {
        color: white;
        font-size: 14px;
        border-radius: 4px;
        height: 30px;
        margin: 0;
      }

      #cancel-button {
        background-color: ${v};
      }

      #submit-button {
        background-color: ${l};
        margin-left: 10px;
      }

      .vote-button {
        background-color: #ffffff;
        border: 1px solid #767676;
        border-radius: 2px;
        padding: 0;
        width: 25px;
        height: 25px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 10px;
      }

      .vote-button svg {
        width: 15px;
        height: 15px;
      }

      .vote-button input {
        margin: 0;
        padding: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }

      .vote-button.noselection {
        border-color: ${E};
      }

      .vote-button.noselection svg {
        filter: ${A};
      }

      .vote-button.unselected {
        border-color: ${ne};
      }

      .vote-button.unselected svg {
        filter: ${ye};
      }

      .upvote-button.selected {
        border-color: ${F};
      }

      .upvote-button.selected svg {
        filter: ${L};
      }

      .downvote-button.selected {
        border-color: ${N};
      }

      .downvote-button.selected svg {
        filter: ${K};
      }

      .vote-button.error {
        box-shadow: 0 0 4px red;
      }
    `}};n([p({type:String})],Q.prototype,"featureIdentifier",void 0);n([p({type:String})],Q.prototype,"prompt",void 0);n([p({type:String})],Q.prototype,"buttonText",void 0);n([p({type:Object})],Q.prototype,"recaptchaManager",void 0);n([p({type:Object})],Q.prototype,"resizeObserver",void 0);n([p({type:Boolean})],Q.prototype,"disabled",void 0);n([p({type:Object})],Q.prototype,"featureFeedbackService",void 0);n([de("#beta-button")],Q.prototype,"betaButton",void 0);n([de("#popup")],Q.prototype,"popup",void 0);n([T()],Q.prototype,"isOpen",void 0);n([T()],Q.prototype,"processing",void 0);n([T()],Q.prototype,"popupTopX",void 0);n([T()],Q.prototype,"popupTopY",void 0);n([T()],Q.prototype,"vote",void 0);n([T()],Q.prototype,"voteSubmitted",void 0);n([T()],Q.prototype,"error",void 0);n([T()],Q.prototype,"voteNeedsChoosing",void 0);n([T()],Q.prototype,"recaptchaWidget",void 0);n([de("#comments")],Q.prototype,"comments",void 0);Q=n([H("feature-feedback")],Q);var nl=O`
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m98 50.5704143c-.2830293-.471515-.671154-1.1088947-1.1643742-1.9121392s-1.6003642-2.3617474-3.3214321-4.6755089c-1.7210678-2.3137614-3.522258-4.5325939-5.4035703-6.6564975-1.8813124-2.1239037-4.2828993-4.473133-7.2047606-7.0476881-2.9218612-2.5745551-5.8895067-4.7933876-8.9029363-6.6564976-3.0134295-1.86311-6.4628491-3.4330878-10.3482587-4.7099336-3.8854095-1.2768458-7.7822651-1.9142256-11.6905667-1.9121443-3.9083017.0020914-7.8051573.6154781-11.6905668 1.8401652-3.8854096 1.2246871-7.3702078 2.8301329-10.4543947 4.8163375-3.0841869 1.9862045-6.0278997 4.1695691-8.8311384 6.5500937s-5.2048256 4.7652219-7.2047605 7.1540919c-1.99993501 2.38887-3.75430043 4.5722346-5.26309632 6.5500938s-2.63883199 3.583305-3.39010829 4.8163374l-1.13003609 1.8401602c.2830293.4715149.67115403 1.1088946 1.16437421 1.9121391.49322017.8032445 1.5878776 2.3617475 3.28397229 4.6755089s3.47439274 4.521119 5.3348942 6.6220728c1.8605014 2.1009538 4.2506422 4.4387083 7.1704224 7.0132633 2.9197801 2.5745551 5.8874256 4.7819127 8.9029363 6.6220729 3.0155106 1.8401601 6.4774168 3.398663 10.3857184 4.6755088 3.9083017 1.2768458 7.8176438 1.9142256 11.7280266 1.9121443 3.9103827-.0020914 7.7957922-.6154781 11.6562286-1.8401652s7.3337886-2.818658 10.4200566-4.7819127 6.0299808-4.1351444 8.8311384-6.515669 5.2152311-4.7652219 7.2422203-7.1540919 3.8052873-4.5607597 5.3348942-6.515669c1.5296068-1.9549093 2.6721295-3.5488802 3.427568-4.7819127zm-24.5142913 0c0 6.467683-2.3079374 12.0152859-6.9238123 16.6428087s-10.1495139 6.9412843-16.600917 6.9412843c-6.4992683 0-12.0453939-2.3137615-16.6383767-6.9412843s-6.8894742-10.1751257-6.8894742-16.6428087 2.2964914-12.003811 6.8894742-16.608384 10.1391084-6.9068595 16.6383767-6.9068595c6.4534842 0 11.9871232 2.3022865 16.600917 6.9068595s6.9217312 10.140701 6.9238123 16.608384zm-23.5247293-10.552755c2.8261308 0 5.2870289 1.0619518 7.3826944 3.1858555 2.0956655 2.1239036 3.1434982 4.5795368 3.1434982 7.3668995 0 2.8332624-1.0478327 5.2888956-3.1434982 7.3668995-2.0956655 2.078004-4.5565636 3.1170059-7.3826944 3.1170059-2.873996 0-5.3348941-1.0264838-7.3826944-3.0794516-2.0478002-2.0529677-3.0717003-4.5200758-3.0717003-7.4013243 0-2.8332624 1.0239001-5.3003705 3.0717003-7.4013243 2.0478003-2.1009538 4.5086984-3.1514307 7.3826944-3.1514307z" fill="#000"/></svg>
`,ll=O`
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m97.5245976 14.5407294-15.0809624 14.6188347c3.3026825 2.8601369 6.4111526 6.0234269 9.3254105 9.48987 2.9142578 3.4664431 5.0023086 6.2183876 6.2641522 8.2558335l1.9668021 3.1268688c-.291855.4841879-.6920826 1.1386987-1.2006828 1.9635322s-1.6502683 2.4252247-3.4250041 4.8011737c-1.7747358 2.3759489-3.6202894 4.6426342-5.5366607 6.8000558-1.9163713 2.1574217-4.3810437 4.5580085-7.3940172 7.2017606-3.0129735 2.643752-6.0731589 4.9104373-9.180556 6.8000558-3.1073972 1.8896186-6.6643798 3.4900098-10.6709478 4.8011737-4.0065681 1.3111639-8.0249391 1.9656747-12.055113 1.9635322-6.7019347 0-13.2343359-1.6732336-19.5972037-5.019701l-17.1185824 16.6562806-10.27179318-10.6917703 14.93288898-14.5449211c-3.2533247-2.8601369-6.3371159-6.0116436-9.25137378-9.45452-2.91425785-3.4428764-5.02698749-6.1819664-6.33818892-8.2172698l-1.8927654-3.0529552c.29185498-.4841879.69208259-1.1386987 1.20068282-1.9635322.50860022-.8248335 1.65026824-2.437008 3.42500406-4.8365236 1.77473582-2.3995157 3.62028938-4.6908389 5.53666072-6.8739696 1.9163713-2.1831307 4.3810437-4.5955009 7.3940172-7.2371105s6.0731589-4.9200783 9.180556-6.8354059c3.1073972-1.9153277 6.6772558-3.5275022 10.7095757-4.8365237 4.03232-1.3090215 8.0635669-1.9635322 12.0937409-1.9635322 6.5560071 0 13.0637294 1.6968003 19.5231669 5.090401l17.1185824-16.5823669zm-46.478979 24.584323 10.7803934-10.473243c-3.5451796-1.891761-7.3092505-2.8376415-11.2922126-2.8376415-6.6547228 0-12.3609169 2.3641657-17.1185824 7.0924969-4.7576654 4.7283312-7.1375711 10.437893-7.1397171 17.1286852 0 3.8306553.8251341 7.3945787 2.4754024 10.6917703l10.9284669-10.5471566v-.1446137c0-2.9094127 1.0687043-5.4546132 3.2061128-7.6356015 2.1374086-2.1809883 4.6868477-3.2714825 7.6483174-3.2714825h.5086002zm-1.1652739 21.5988543-10.7803935 10.6178566c3.5945375 1.9388943 7.4068932 2.9083415 11.4370672 2.9083415 6.6547228 0 12.3491139-2.375949 17.0831734-7.1278469s7.1021623-10.4486051 7.1043083-17.0901215c0-4.0234736-.874492-7.6356015-2.6234759-10.836384l-10.7095757 10.473243v.363141c0 2.9586884-1.0687042 5.4803223-3.2061128 7.5649015-2.1374085 2.0845792-4.6868476 3.1268688-7.6483173 3.1268688z" fill="#000"/></svg>
`,ro=O`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m79.8883285 50.0035012.1116715-.1085359-43.1159942-46.61088155c-2.401537-2.18938917-4.6902018-3.28408375-6.8659943-3.28408375s-4.1642651.63837733-5.9654178 1.91513199c-1.8011528 1.27675467-3.1520173 2.97248092-4.0525937 5.08717877l39.4020173 42.99768924-39.4020173 42.9976892c.9005764 2.1146979 2.2514409 3.8104241 4.0525937 5.0871788 1.8011527 1.2767547 3.7896253 1.915132 5.9654178 1.915132 2.1013449 0 4.3900096-1.0573489 6.8659943-3.1720468l43.1159942-46.7194174z"/></svg>
`;const dl=["mediatype","year","subject","collection","creator","language"],cl={subjectSorter:"subject",mediatypeSorter:"mediatype",languageSorter:"language",creatorSorter:"creator",collection:"collection",year:"year"},Dr={subject:"Subject",mediatype:"Media Type",language:"Language",creator:"Creator",collection:"Collection",year:"Year"};let Z=class extends I{constructor(){super(...arguments),this.facetsLoading=!1,this.fullYearAggregationLoading=!1,this.collapsableFacets=!1,this.showHistogramDatePicker=!1,this.openFacets={subject:!1,mediatype:!1,language:!1,creator:!1,collection:!1,year:!1}}render(){return u`
      <div id="container" class="${this.facetsLoading?"loading":""}">
        ${this.showHistogramDatePicker&&this.fullYearsHistogramAggregation?u`
              <div class="facet-group">
                <h1>Year Published <feature-feedback></feature-feedback></h1>
                ${this.histogramTemplate}
              </div>
            `:$}
        ${this.mergedFacets.map(e=>this.getFacetGroupTemplate(e))}
      </div>
    `}updated(e){e.has("selectedFacets")&&this.dispatchFacetsChangedEvent()}dispatchFacetsChangedEvent(){const e=new CustomEvent("facetsChanged",{detail:this.selectedFacets});this.dispatchEvent(e)}get currentYearsHistogramAggregation(){var e;return(e=this.aggregations)===null||e===void 0?void 0:e.year_histogram}get histogramTemplate(){const{fullYearsHistogramAggregation:e}=this;return u`
      <histogram-date-range
        .minDate=${e==null?void 0:e.first_bucket_key}
        .maxDate=${e==null?void 0:e.last_bucket_key}
        .minSelectedDate=${this.minSelectedDate}
        .maxSelectedDate=${this.maxSelectedDate}
        .updateDelay=${100}
        missingDataMessage="..."
        .width=${180}
        .bins=${e==null?void 0:e.buckets}
        @histogramDateRangeUpdated=${this.histogramDateRangeUpdated}
      ></histogram-date-range>
    `}histogramDateRangeUpdated(e){const{minDate:t,maxDate:i}=e.detail,a=new CustomEvent("histogramDateRangeUpdated",{detail:{minDate:t,maxDate:i}});this.dispatchEvent(a)}get mergedFacets(){const e=[];return dl.forEach(t=>{var i;const a=this.selectedFacetGroups.find(d=>d.key===t),o=this.aggregationFacetGroups.find(d=>d.key===t);if(a&&!o){e.push(a);return}if(!o)return;const s=a!=null?a:o,l=(i=a==null?void 0:a.buckets.map(d=>{const h=o.buckets.find(m=>m.key===d.key);return h?dt(ce({},d),{count:h.count}):d}))!==null&&i!==void 0?i:[];o.buckets.forEach(d=>{l.find(m=>m.key===d.key)||l.push(d)}),s.buckets=l.splice(0,5),e.push(s)}),e}get selectedFacetGroups(){return this.selectedFacets?Object.entries(this.selectedFacets).map(([t,i])=>{const a=t,o=Dr[a],s=Object.entries(i).map(([l,d])=>{var h,m;let v=l;return a==="language"&&(v=(m=(h=this.languageCodeHandler)===null||h===void 0?void 0:h.getLanguageNameFromCodeString(l))!==null&&m!==void 0?m:l),{displayText:v,key:l,count:0,state:d}});return{title:o,key:a,buckets:s}}):[]}get aggregationFacetGroups(){var e;const t=[];return Object.entries((e=this.aggregations)!==null&&e!==void 0?e:[]).forEach(([i,a])=>{if(i==="year_histogram")return;const o=this.getFacetOptionFromKey(i),s=Dr[o],d=a.buckets.map(m=>{var v,g;let b=m.key;return o==="language"&&(b=(g=(v=this.languageCodeHandler)===null||v===void 0?void 0:v.getCodeStringFromLanguageName(`${m.key}`))!==null&&g!==void 0?g:m.key),{displayText:`${m.key}`,key:`${b}`,count:m.doc_count,state:"none"}}),h={title:s,key:o,buckets:d};t.push(h)}),t}getFacetGroupTemplate(e){if(e.buckets.length===0)return $;const{key:t}=e,i=this.openFacets[t],a=u`
      <span class="collapser ${i?"open":""}"> ${ro} </span>
    `;return u`
      <div class="facet-group ${this.collapsableFacets?"mobile":""}">
        <h1
          @click=${()=>{const o=ce({},this.openFacets);o[t]=!i,this.openFacets=o}}
          @keyup=${()=>{const o=ce({},this.openFacets);o[t]=!i,this.openFacets=o}}
        >
          ${this.collapsableFacets?a:$} ${e.title}
        </h1>
        <div class="facet-group-content ${i?"open":""}">
          ${this.getFacetTemplate(e)}
        </div>
      </div>
    `}getFacetTemplate(e){const i=e.buckets.filter(a=>a.key.startsWith("fav-")===!1).slice(0,6);return u`
      <ul class="facet-list">
        ${Qr(i,a=>`${e.key}:${a.key}`,a=>{var o,s;const l=`${e.key}:${a.key}-show-only`,d=`${e.key}:${a.key}-negative`,h=e.key!=="collection"?u`${(o=a.displayText)!==null&&o!==void 0?o:a.key}`:u`
                    <a
                      href="/details/${a.key}"
                      title="Open collection in new tab"
                      target="_blank"
                    >
                      <async-collection-name
                        .collectionNameCache=${this.collectionNameCache}
                        .identifier=${a.key}
                        placeholder="-"
                      ></async-collection-name>
                    </a>
                  `,m=a.state==="hidden",v=a.state==="selected",g=`${e.key}: ${(s=a.displayText)!==null&&s!==void 0?s:a.key}`,b=v?`Show all ${e.key}s`:`Only show ${g}`,S=`Hide ${g}`,z=`Unhide ${g}`,E=m?z:S;return u`
              <li>
                <div class="facet-row">
                  <div class="facet-checkbox">
                    <input
                      type="checkbox"
                      .name=${e.key}
                      .value=${a.key}
                      @click=${A=>{this.facetClicked(A,a,!1)}}
                      .checked=${v}
                      class="select-facet-checkbox"
                      title=${b}
                      id=${l}
                    />
                    <input
                      type="checkbox"
                      id=${d}
                      .name=${e.key}
                      .value=${a.key}
                      @click=${A=>{this.facetClicked(A,a,!0)}}
                      .checked=${m}
                      class="hide-facet-checkbox"
                    />
                    <label
                      for=${d}
                      class="hide-facet-icon${m?" active":""}"
                      title=${E}
                    >
                      <span class="eye">${nl}</span>
                      <span class="eye-closed">${ll}</span>
                    </label>
                  </div>

                  <label
                    for=${l}
                    class="facet-info-display"
                    title=${b}
                  >
                    <div class="facet-title">${h}</div>
                    <div class="facet-count">${a.count}</div>
                  </label>
                </div>
              </li>
            `})}
      </ul>
    `}facetClicked(e,t,i){const a=e.target,{checked:o,name:s,value:l}=a;o?this.facetChecked(s,l,i):this.facetUnchecked(s,l),this.onFacetClick&&this.onFacetClick(s,o,i)}facetChecked(e,t,i){const{selectedFacets:a}=this;let o;a?o=ce({},a):o=yi,o[e][t]=i?"hidden":"selected",this.selectedFacets=o}facetUnchecked(e,t){const{selectedFacets:i}=this;let a;i?a=ce({},i):a=yi,delete a[e][t],this.selectedFacets=a}getFacetOptionFromKey(e){const a=e.split("__")[2].split(":")[1],o=Object.entries(cl).find(([l])=>a.includes(l)),s=o==null?void 0:o[1];if(!s)throw new Error(`Could not find facet option for key: ${e}`);return s}static get styles(){return y`
      #container.loading {
        opacity: 0.5;
      }

      .collapser {
        display: inline-block;
        cursor: pointer;
        width: 10px;
        height: 10px;
      }

      .collapser svg {
        transition: transform 0.2s ease-in-out;
      }

      .collapser.open svg {
        transform: rotate(90deg);
      }

      .facet-group {
        margin-bottom: 2rem;
      }

      .facet-group h1 {
        margin-bottom: 0.7rem;
      }

      .facet-group.mobile h1 {
        cursor: pointer;
      }

      .facet-group-content {
        transition: max-height 0.2s ease-in-out;
      }

      .facet-group.mobile .facet-group-content {
        max-height: 0;
        overflow: hidden;
      }

      .facet-group.mobile .facet-group-content.open {
        max-height: 2000px;
      }

      h1 {
        font-size: 1.4rem;
        font-weight: 200;
        border-bottom: 1px solid rgb(232, 232, 232);
        padding-bottom: 3px;
        margin: 0;
      }

      ul.facet-list {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      ul.facet-list li {
        margin-bottom: 0.2rem;
      }

      .facet-checkbox {
        margin-right: 0.5rem;
        display: flex;
        align-items: center;
      }

      .facet-row {
        display: flex;
        align-items: start;
        font-weight: 500;
        font-size: 1.2rem;
      }

      .facet-info-display {
        display: flex;
        flex: 1;
        cursor: pointer;
      }

      .facet-title {
        flex: 1;
      }

      .facet-count {
        margin-left: 0.5rem;
      }

      .select-facet-checkbox {
        cursor: pointer;
        margin-right: 5px;
      }

      .hide-facet-checkbox {
        display: none;
      }

      .hide-facet-icon {
        width: 15px;
        height: 15px;
        cursor: pointer;
        opacity: 0.3;
      }
      .hide-facet-icon:hover,
      .active {
        opacity: 1;
      }
      .hide-facet-icon:hover .eye,
      .hide-facet-icon .eye-closed {
        display: none;
      }
      .hide-facet-icon:hover .eye-closed,
      .hide-facet-icon.active .eye-closed {
        display: inline;
      }
      .hide-facet-icon.active .eye {
        display: none;
      }

      a:link,
      a:visited {
        text-decoration: none;
        color: var(--ia-theme-link-color);
      }

      a:hover {
        text-decoration: underline;
      }
    `}};n([p({type:Object})],Z.prototype,"aggregations",void 0);n([p({type:Object})],Z.prototype,"fullYearsHistogramAggregation",void 0);n([p({type:String})],Z.prototype,"minSelectedDate",void 0);n([p({type:String})],Z.prototype,"maxSelectedDate",void 0);n([p({type:Boolean})],Z.prototype,"facetsLoading",void 0);n([p({type:Boolean})],Z.prototype,"fullYearAggregationLoading",void 0);n([p({type:Object})],Z.prototype,"selectedFacets",void 0);n([p({type:Boolean})],Z.prototype,"collapsableFacets",void 0);n([p({type:Boolean})],Z.prototype,"showHistogramDatePicker",void 0);n([p({type:Object})],Z.prototype,"languageCodeHandler",void 0);n([p({type:Object})],Z.prototype,"collectionNameCache",void 0);n([p({type:Function})],Z.prototype,"onFacetClick",void 0);n([T()],Z.prototype,"openFacets",void 0);n([p({type:Object,attribute:!1})],Z.prototype,"render",null);Z=n([H("collection-facets")],Z);let Mr=class extends I{render(){return u`
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    `}static get styles(){const e=y`var(--circularActivityIndicatorColor, dodgerblue)`,t=y`var(--circularActivityIndicatorThickness, 4px)`;return y`
      :host {
        display: block;
      }

      .lds-ring {
        display: inline-block;
        position: relative;
        width: 100%;
        height: 100%;
      }
      .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 80%;
        height: 80%;
        margin: ${t};
        border-width: ${t};
        border-style: solid;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${e} transparent transparent transparent;
      }
      .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
      }
      .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
      }
      .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
      }
      @keyframes lds-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}};Mr=n([H("circular-activity-indicator")],Mr);/*! typescript-cookie v1.0.3 | MIT */const oo=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),so=r=>encodeURIComponent(r).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent),$a=decodeURIComponent,Ca=r=>(r[0]==='"'&&(r=r.slice(1,-1)),r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent));function hl(r){return r=Object.assign({},r),typeof r.expires=="number"&&(r.expires=new Date(Date.now()+r.expires*864e5)),r.expires!=null&&(r.expires=r.expires.toUTCString()),Object.entries(r).filter(([e,t])=>t!=null&&t!==!1).map(([e,t])=>t===!0?`; ${e}`:`; ${e}=${t.split(";")[0]}`).join("")}function no(r,e,t){const i=/(?:^|; )([^=]*)=([^;]*)/g,a={};let o;for(;(o=i.exec(document.cookie))!=null;)try{const s=t(o[1]);if(a[s]=e(o[2],s),r===s)break}catch{}return r!=null?a[r]:a}const Ar=Object.freeze({decodeName:$a,decodeValue:Ca,encodeName:oo,encodeValue:so}),_a=Object.freeze({path:"/"});function xi(r,e,t=_a,{encodeValue:i=so,encodeName:a=oo}={}){return document.cookie=`${a(r)}=${i(e,r)}${hl(t)}`}function ua(r,{decodeValue:e=Ca,decodeName:t=$a}={}){return no(r,e,t)}function pl({decodeValue:r=Ca,decodeName:e=$a}={}){return no(void 0,r,e)}function ul(r,e=_a){xi(r,"",Object.assign({},e,{expires:-1}))}function ma(r,e){const t={set:function(a,o,s){return xi(a,o,Object.assign({},this.attributes,s),{encodeValue:this.converter.write})},get:function(a){if(arguments.length===0)return pl(this.converter.read);if(a!=null)return ua(a,this.converter.read)},remove:function(a,o){ul(a,Object.assign({},this.attributes,o))},withAttributes:function(a){return ma(this.converter,Object.assign({},this.attributes,a))},withConverter:function(a){return ma(Object.assign({},this.converter,a),this.attributes)}},i={attributes:{value:Object.freeze(e)},converter:{value:Object.freeze(r)}};return Object.create(t,i)}ma({read:Ar.decodeValue,write:Ar.encodeValue},_a);class ml{constructor(e){this.cookieDomain=".archive.org",this.cookieExpiration=30,this.cookiePath="/",this.context=e.context}persistState(e){e.displayMode&&this.persistViewStateToCookies(e.displayMode),this.persistQueryStateToUrl(e)}getRestorationState(){const e=this.loadQueryStateFromUrl(),t=this.loadTileViewStateFromCookies();return e.displayMode=t,e}persistViewStateToCookies(e){const t=e==="grid"?"tiles":"lists";xi(`view-${this.context}`,t,{domain:this.cookieDomain,expires:this.cookieExpiration,path:this.cookiePath});const i=e==="list-detail"?"showdetails":"";xi(`showdetails-${this.context}`,i,{domain:this.cookieDomain,expires:this.cookieExpiration,path:this.cookiePath})}loadTileViewStateFromCookies(){const e=ua(`view-${this.context}`),t=ua(`showdetails-${this.context}`);return e==="tiles"||e===void 0?"grid":t==="showdetails"?"list-detail":"list-compact"}persistQueryStateToUrl(e){const t=new URL(window.location.href),{searchParams:i}=t;if(i.delete("sort"),i.delete("query"),i.delete("page"),i.delete("and[]"),i.delete("not[]"),e.sortParam){const a=e.sortParam.direction==="desc"?"-":"";i.set("sort",`${a}${e.sortParam.field}`)}if(e.baseQuery&&i.set("query",e.baseQuery),e.currentPage&&(e.currentPage>1?i.set("page",e.currentPage.toString()):i.delete("page")),e.selectedFacets)for(const[a,o]of Object.entries(e.selectedFacets)){const s=Object.entries(o);if(s.length!==0)for(const[l,d]of s){const h=d==="hidden",m=`${a}:"${l}"`;h?i.append("not[]",m):i.append("and[]",m)}}e.dateRangeQueryClause&&i.append("and[]",e.dateRangeQueryClause),e.titleQuery&&i.append("and[]",e.titleQuery),e.creatorQuery&&i.append("and[]",e.creatorQuery),window.history.pushState({sort:e.sortParam,query:e.baseQuery,page:e.currentPage,and:e.selectedFacets,not:e.selectedFacets,dateRange:e.dateRangeQueryClause},"",t)}loadQueryStateFromUrl(){const e=new URL(window.location.href),t=e.searchParams.get("page"),i=e.searchParams.get("query"),a=e.searchParams.get("sort"),o=e.searchParams.getAll("and[]"),s=e.searchParams.getAll("not[]"),l={selectedFacets:{subject:{},creator:{},mediatype:{},language:{},collection:{},year:{}}};if(t){const d=parseInt(t,10);l.currentPage=d}else l.currentPage=1;if(i&&(l.baseQuery=i),a)if(a.indexOf(" ")>-1){const[h,m]=a.split(" "),v=fr[h];v&&(l.selectedSort=v),(m==="desc"||m==="asc")&&(l.sortDirection=m)}else{const h=a.startsWith("-")?"desc":"asc",m=a.startsWith("-")?a.slice(1):a,v=fr[m];v&&(l.selectedSort=v),l.sortDirection=h}return o&&o.forEach(d=>{const[h,m]=d.split(":"),v=this.stripQuotes(m);switch(h){case"year":{const[g,b]=m.split(" TO ");g&&b?(l.minSelectedDate=g.substring(1,g.length),l.maxSelectedDate=b.substring(0,b.length-1),l.dateRangeQueryClause=`year:${m}`):l.selectedFacets[h][v]="selected";break}case"firstTitle":l.selectedTitleFilter=m;break;case"firstCreator":l.selectedCreatorFilter=m;break;default:l.selectedFacets[h][v]="selected"}}),s&&s.forEach(d=>{const[h,m]=d.split(":"),v=this.stripQuotes(m);l.selectedFacets[h][v]="hidden"}),l}stripQuotes(e){return e.startsWith('"')&&e.endsWith('"')?e.substring(1,e.length-1):e}}const ea={"ambient noise wall":"Music","american english":"English","arabic videos":"Arabic","arabic, english":"Arabic and English","de-formal":"German","en-ca":"English","en-gb":"English","en-us":"English","eng-fre":"English and French","eng;fre":"English and French","english handwritten":"Handwritten English","english-handwritten":"Handwritten English","english, polski":"English and Polish","english, spanish":"English and Spanish","english; finnish":"English and Finnish","english/french":"English and French","finnish, english":"English and Finnish","finnish; english":"English and Finnish","french-handwritten":"Handwritten French","german-handwritten":"Handwritten German","hebrew-handwritten":"Handwritten Hebrew","language not encoded":"Unknown","miscellaneous languages":"Multiple","n/a":"Unknown","no language":"skip","no linguistic content":"skip","no speech":"skip","polish-handwritten":"Handwritten Polish","pt-br":"Portuguese","spanish-handwritten":"Handwritten Spanish","us english":"English","www.back4allah.com":"Arabic","www.rabania.com":"Arabic","www.way2allah.com":"Arabic","yiddish-handwritten":"Handwritten Yiddish","zh-cn":"Chinese","zh-tw":"Chinese","\u0623\u0648\u0631\u062F\u0648 ::: Urdu":"Urdu","\u0628\u0634\u062A\u0648 ::: Pashto":"Pashto","\u0639\u0631\u0628\u064A\u0629 ::: arabic":"Arabic","\u0639\u0631\u0628\u064A\u0629 ::: Arabic":"Arabic","\u0639\u0631\u0628\u064A\u0629 \u0645\u0639 \u062A\u0631\u062C\u0645\u0629 \u0625\u0646\u062C\u0644\u064A\u0632\u064A\u0629 ::: Arabic with English subtitles":"Arabic with English subtitles",aar:"Afar",abk:"Abkhaz",adl:"Galo",ady:"Adyghe",afr:"Afrikaans",aka:"Akan",akk:"Akkadian",alb:"Albanian",ale:"Aleut",alg:"Algonquian",american:"English",amh:"Amharic",ang:"Old English",anm:"Anal",anq:"Jarawa",apa:"Apache languages",apt:"Apatani",ar:"Arabic",ara:"Arabic",arab:"Arabic",arabe:"Arabic",arbc:"Arabic",arbic:"Arabic",arc:"Aramaic",arg:"Aragonese",arm:"Armenian",arp:"Arapaho",asm:"Assamese",ast:"Asturian",ath:"Athapascan (Other)",awa:"Awadhi",aym:"Aymara",aze:"Azerbaijani",bak:"Bashkir",bal:"Baluchi",ban:"Balinese",baq:"Basque",bel:"Belarusian",bem:"Bemba",ben:"Bengali",ber:"Berber",bft:"Balti",bfy:"Bagheli",bgw:"Bhatri",bhb:"Bhili",bho:"Bhojpuri",bih:"Bihari",bis:"Bislama",bkk:"Brokskat",bla:"Blackfoot",bns:"Bundeli",bnt:"Bantu",bos:"Bosnian",bra:"Braj",bre:"Breton",brx:"Bodo",bua:"Buryat",bul:"Bulgarian",bur:"Burmese",cai:"Central American Indian",caq:"Car",car:"Carib",cat:"Catalan",cau:"Caucasian",ceb:"Cebuano",ces:"Czech",cha:"Chamorro",che:"Chechen",chi:"Chinese",chm:"Mari",chn:"Chinook jargon",cho:"Choctaw",chp:"Chipewyan",chr:"Cherokee",chu:"Church Slavic",chv:"Chuvash",chy:"Cheyenne",clk:"Idu-Mishmi",cmn:"Mandarin Chinese",cop:"Coptic",cor:"Cornish",cos:"Corsican",cpe:"Creoles and Pidgins, English-based",cpf:"Creoles and Pidgins, French-based",cpp:"Creoles and Pidgins, Portuguese-based",cre:"Cree",crh:"Crimean Tatar",cro:"Croatian",crp:"Creoles and Pidgins",cs:"Czech",csb:"Kashubian",cym:"Welsh",cze:"Czech",da:"Danish",dak:"Dakota",dan:"Danish",dar:"Dargwa",de:"German",del:"Delaware",deu:"German",deutsch:"German",dgo:"Dogri",dih:"Dhivehi",doi:"Dogri (Generic)",dra:"Dravidian (Other)",dsb:"Lower Sorbian",dum:"Middle Dutch",dut:"Dutch",dzo:"Dzongkha",egy:"Egyptian",el:"Greek",ell:"Greek",emg:"English",en_us:"English",en:"English",eng:"English",engfre:"English and French",engilsh:"English",english:"English",enm:"Middle English",epo:"Esperanto",es:"Spanish",esk:"Eskimo",esp:"Esperanto",espanol:"Spanish",espa\u00F1ol:"Spanish",est:"Estonian",eth:"Ethiopic",eus:"Basque",fa:"Persian",fao:"Faroese",far:"Faroese",fas:"Persian",fi:"Finnish",fij:"Fijian",fil:"Filipino",fin:"Finnish",fle:"Dutch",fr:"French",fra:"French",francais:"French",fran\u00E7ais:"French",fre:"French",fri:"Frisian",frm:"Middle French",fro:"Old French",frr:"North Frisian",fry:"Frisian",fur:"Friulian",gaa:"G\xE3",gac:"Mixed Great Andamanese",gae:"Scottish Gaelic",gag:"Galician",gbl:"Gamit",gem:"Germanic",geo:"Georgian",ger:"German",gez:"Ethiopic",gil:"Gilbertese",gju:"Gujari",gla:"Scottish Gaelic",gle:"Irish",glg:"Galician",glv:"Manx",gmh:"Middle High German",goh:"Old German",gon:"Gondi",got:"Gothic",grb:"Grebo",grc:"Ancient Greek",gre:"Greek",grn:"Guarani",grt:"Garo",gsw:"Swiss German",gua:"Guarani",guj:"Gujarati",gwi:"Gwichin",hai:"Haida",hat:"Haitian French Creole",hau:"Hausa",haw:"Hawaiian",he:"Hebrew",heb:"Hebrew",hin:"Hindi",hlb:"Halbi",hmn:"Hmong",hmr:"Hmar",hne:"Chhattisgarhi",hoc:"Ho",hrv:"Croatian",hsb:"Upper Sorbian",hu:"Hungarian",hun:"Hungarian",ibo:"Igbo",ice:"Icelandic",ido:"Ido",iku:"Inuktitut",ile:"Interlingue",ilo:"Iloko",ina:"Interlingua",inc:"Indic (Other)",ind:"Indonesian",inh:"Ingush",int:"Interlingua",ipk:"Inupiaq",ira:"Iranian",iri:"Irish",iro:"Iroquoian",iru:"Irula",isl:"Icelandic",ita:"Italian",jam:"Music",jap:"Japanese",jav:"Javanese",jpn:"Japanese",jrb:"Judeo-Arabic",kaa:"Karakalpak",kab:"Kabyle",kal:"Kalatdlisut",kan:"Kannada",kar:"Karen",kas:"Kashmiri",kaz:"Kazakh",kbd:"Kabardian",kfa:"Kodava",kfb:"Northwestern Kolami",kfe:"Kota (India)",kff:"Koya",kfq:"Korku",kha:"Khasi",khm:"Khmer",kho:"Khotanese",khr:"Kharia",kik:"Kikuyu",kin:"Kinyarwanda",kir:"Kyrgyz",kix:"Khiamniungan Naga",kmj:"Kumarbhag Paharia",kmm:"Kom (India)",ko:"Korean",kok:"Konkani",kon:"Kongo",kor:"Korean",kpe:"Kpelle",krc:"Karachay-Balkar",kro:"Kru",kru:"Kurukh",ksh:"K\xF6lsch",kum:"Kumyk",kur:"Kurdish",kxu:"Kui (India)",kxv:"Kuvi",kyw:"Kudmali",lad:"Ladino",lah:"Lahnda",lao:"Lao",lap:"Sami",lat:"Latin",lav:"Latvian",lbj:"Ladakhi",lep:"Lepcha",lez:"Lezgin",lim:"Limburgish",lin:"Lingala",lit:"Lithuanian",lmn:"Lambadi",lol:"Mongo-Nkundu",ltz:"Luxembourgish",lua:"Luba-Lulua",lub:"Luba-Katanga",lug:"Ganda",lus:"Lushai",mac:"Macedonian",mah:"Marshallese",mai:"Maithili",mal:"Malayalam",man:"Mandarin Chinese",mao:"Maori",map:"Austronesian",mar:"Marathi",max:"Manx",may:"Malay",mga:"Middle Irish",mha:"Manda (India)",mic:"Micmac",min:"Minankabaw",mis:"Miscellaneous languages",mjw:"Karbi",mkh:"Mon-Khmer",mla:"Malagasy",mlg:"Malagasy",mlt:"Maltese",mni:"Manipuri",moh:"Mohawk",mol:"Moldavian",mon:"Mongolian",mrg:"Mising",mul:"Multiple",mus:"Creek",mwr:"Marwari",myn:"Maya",nag:"Naga Pigdin",nah:"Nahuatl",nai:"North American Indian",nap:"Neapolitan",nau:"Nauru",nav:"Navajo",nbc:"Chang Naga",nbe:"Konyak Naga",nbi:"Mao Naga",nbl:"Ndebele",nbu:"Rongmei Naga",nds:"Low German",nep:"Nepali",new:"Newari",ng:"English",nic:"Niger-Kordofanian",njh:"Lotha Naga",njm:"Angami Naga",njn:"Liangmai Naga",njo:"Ao Naga",nkf:"Inpui Naga",nkh:"Khezha Naga",nld:"Dutch",nll:"Nihali",nma:"Maram Naga",nmf:"Tangkhul Naga",nno:"Norwegian (Nynorsk)",no:"skip",nob:"Norwegian (Bokm\xE5l)",nog:"Nogay",non:"Old Norse",none:"skip",nor:"Norwegian",nri:"Chokri Naga",nsa:"Sangtam Naga",nsm:"Sumi Naga",nso:"Northern Sotho",nya:"Nyanja",nzm:"Zeme Naga",oci:"Occitan",oji:"Ojibwa",oon:"\xD6nge",ori:"Oriya",orm:"Oromo",ory:"Odia",oss:"Ossetic",ota:"Ottoman Turkish",oto:"Otomian",paa:"Papuan",pag:"Pangasinan",pal:"Pahlavi",pam:"Pampanga",pan:"Panjabi",panjabi:"Punjabi",pap:"Papiamento",pbv:"Pnar",pci:"Duruwa",pck:"Paite Chin",per:"Persian",phi:"Philippine",pli:"Pali",pol:"Polish",por:"Portuguese",port:"Portuguese",portugues:"Portuguese",portugu\u00EAs:"Portuguese",pra:"Prakrit",pro:"Provencal",prx:"Purik",pus:"Pashto",qaa:"skip",que:"Quechua",rah:"Rabha",raj:"Rajasthani",roa:"Romance",roh:"Romansh",rom:"Romani",ron:"Romanian",rum:"Romanian",run:"Rundi",rus:"Russian",sag:"Sango",sah:"Yakut",sai:"South American Indian",sam:"Samaritan Aramaic",san:"Sanskrit",sao:"Samoan",sat:"Santali",scc:"Serbian",scl:"Shina",sco:"Scots",scots:"Scottish",scr:"Croatian",sdr:"Oraon Sadri",sel:"Selkup",sem:"Semitic",sga:"Old Irish",sho:"Shona",sin:"Sinhalese",sio:"Siouan",sip:"Sikkimese",sit:"Sino-Tibetan",sk:"Slovak",sla:"Slavic",slk:"Slovak",slo:"Slovak",slv:"Slovenian",sme:"Saami",smi:"Sami",smo:"Samoan",sms:"Skolt Sami",sna:"Shona",snd:"Sindhi",snh:"Sinhalese",som:"Somali",sot:"Sotho",spa:"Spanish",spain:"Spanish",spv:"Sambalpuri",sq:"Albanian",sqi:"Albanian",srb:"Sora",srp:"Serbian",sso:"Sotho",ssw:"Swazi",sun:"Sundanese",sux:"Sumerian",sv:"Swedish",svenska:"Swedish",swa:"Swahili",swe:"Swedish",swz:"Swazi",syc:"Syriac",syr:"Modern Syriac",tag:"Tagalog",tah:"Tahitian",taj:"Tajik",tam:"Tamil",tar:"Tatar",tat:"Tatar",tcy:"Tulu",tcz:"Thado Chin",tel:"Telugu",tem:"Temne",tgk:"Tajik",tgl:"Tagalog",tha:"Thai",tib:"Tibetan",tig:"Tigre",tir:"Tigrinya",tlh:"Klingon",tog:"Tonga",ton:"Tongan",tpi:"Tok Pisin",tr:"Turkish",trp:"Kok Borok",tsi:"Tsimshian",tsn:"Tswana",tso:"Tsonga",tsw:"Tswana",tuk:"Turkmen",tur:"Turkish",t\u00FCrk\u00E7e:"Turkish",tut:"Altaic",tyv:"Tuvinian",udm:"Udmurt",uig:"Uighur",uk:"Ukranian",ukr:"Ukrainian",und:"undetermined",undetermined:"skip",unknown:"skip",unr:"Mundari",urd:"Urdu",uzb:"Uzbek",vah:"Varhadi-Nagpuri",vap:"Vaiphei",vav:"Varli",ven:"Venda",vie:"Vietnamese",vol:"Volapu\u0308k",war:"Waray",wbr:"Wagdi",wel:"Welsh",wen:"Sorbian",wol:"Wolof",xal:"Oirat",xho:"Xhosa",xis:"Kisan (Dravidian)",xnr:"Kangri",xsr:"Solu-Khumbu Sherpa",yea:"Ravula",yid:"Yiddish",yim:"Yimchungru Naga",yor:"Yoruba",ypk:"Yupik languages",zap:"Zapotec",zh:"Chinese",zha:"Zhuang",zho:"Chinese",zom:"Zou",zul:"Zulu",zun:"Zuni",zxx:"No linguistic content",\u0420\u0443\u0441\u0441\u043A\u0438\u0439:"Russian",\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439:"Ukranian",\u0627\u0644\u0639\u0631\u0628\u064A\u0629:"Arabic",\u0639\u0631\u0628\u064A:"Arabic"};class vl{constructor(){this.delimeter="|"}getLanguageNameFromCodeString(e){const t=this.getCodeArrayFromCodeString(e);if(t.length===0)return"";const i=t[0],a=ea[i];return a!=null?a:e}getCodeStringFromLanguageName(e){const t=Object.keys(ea).filter(a=>ea[a]===e);return t==null?void 0:t.join(this.delimeter)}getCodeArrayFromCodeString(e){return e.split(this.delimeter)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fl=(r,e,t)=>{for(const i of e)if(i[0]===r)return(0,i[1])();return t==null?void 0:t()};var gl=O`
  <svg viewBox="0 0 787 400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="m0 127.511499c0-70.3329329 57.1960466-127.511499 127.51918-127.511499 70.246413 0 127.48082 57.1785661 127.48082 127.511499 0 70.294604-57.234407 127.488501-127.48082 127.488501-70.3231334 0-127.51918-57.193897-127.51918-127.488501z"/><mask id="b" fill="#fff"><use fill="#fff" fill-rule="evenodd" xlink:href="#a"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(0 79)"><path d="m180 161h13v18h-13z" fill="#ffcd27" opacity=".6"/><path d="m162 161h13v18h-13z" fill="#ffcd27" opacity=".5"/><path d="m144 161h13v18h-13z" fill="#ffcd27" opacity=".5"/><path d="m126 161h13v18h-13z" fill="#ffcd27" opacity=".4"/><path d="m108 161h13v18h-13z" fill="#ffcd27" opacity=".4"/><path d="m90 161h13v18h-13z" fill="#f1644b" opacity=".3"/><path d="m72 161h13v18h-13z" fill="#ffcd27" opacity=".3"/><path d="m54 161h13v18h-13z" fill="#ffcd27" opacity=".2"/><path d="m36 161h13v18h-13z" fill="#ffcd27" opacity=".2"/><path d="m18 161h13v18h-13z" fill="#ffcd27" opacity=".1"/><path d="m0 161h13v18h-13z" fill="#f1644b" opacity=".1"/><path d="m180 138h13v18h-13z" fill="#faab3c" opacity=".6"/><path d="m162 138h13v18h-13z" fill="#faab3c" opacity=".5"/><path d="m144 138h13v18h-13z" fill="#faab3c" opacity=".5"/><path d="m126 138h13v18h-13z" fill="#aa99c9" opacity=".4"/><path d="m108 138h13v18h-13z" fill="#faab3c" opacity=".4"/><path d="m90 138h13v18h-13z" fill="#faab3c" opacity=".3"/><g fill="#f1644b"><path d="m72 138h13v18h-13z" opacity=".3"/><path d="m54 138h13v18h-13z" opacity=".2"/><path d="m36 138h13v18h-13z" opacity=".2"/><path d="m18 138h13v18h-13z" opacity=".1"/><path d="m0 138h13v18h-13z" opacity=".1"/><path d="m180 115h13v18h-13z" opacity=".6"/><path d="m162 115h13v18h-13z" opacity=".5"/><path d="m144 115h13v18h-13z" opacity=".5"/><path d="m126 115h13v18h-13z" opacity=".4"/><path d="m108 115h13v18h-13z" opacity=".4"/><path d="m90 115h13v18h-13z" opacity=".3"/><path d="m72 115h13v18h-13z" opacity=".3"/></g><path d="m54 115h13v18h-13z" fill="#9ecc4f" opacity=".2"/><path d="m36 115h13v18h-13z" fill="#f1644b" opacity=".2"/><path d="m18 115h13v18h-13z" fill="#f1644b" opacity=".1"/><path d="m0 115h13v18h-13z" fill="#f1644b" opacity=".1"/><path d="m180 92h13v18h-13z" fill="#333" opacity=".6"/><path d="m162 92h13v18h-13z" fill="#333" opacity=".5"/><path d="m144 92h13v18h-13z" fill="#9ecc4f" opacity=".5"/><path d="m126 92h13v18h-13z" fill="#aa99c9" opacity=".4"/><path d="m108 92h13v18h-13z" fill="#f1644b" opacity=".4"/><path d="m90 92h13v18h-13z" fill="#faab3c" opacity=".3"/><path d="m72 92h13v18h-13z" fill="#faab3c" opacity=".3"/><path d="m54 92h13v18h-13z" fill="#faab3c" opacity=".2"/><path d="m36 92h13v18h-13z" fill="#faab3c" opacity=".2"/><path d="m18 92h13v18h-13z" fill="#f1644b" opacity=".1"/><path d="m0 92h13v18h-13z" fill="#ffcd27" opacity=".1"/><path d="m180 69h13v18h-13z" fill="#f1644b" opacity=".6"/><path d="m162 69h13v18h-13z" fill="#333" opacity=".5"/><path d="m144 69h13v18h-13z" fill="#9ecc4f" opacity=".5"/><path d="m126 69h13v18h-13z" fill="#333" opacity=".4"/><path d="m108 69h13v18h-13z" fill="#333" opacity=".4"/><path d="m90 69h13v18h-13z" fill="#00adef" opacity=".3"/><path d="m72 69h13v18h-13z" fill="#00adef" opacity=".3"/><path d="m54 69h13v18h-13z" fill="#00adef" opacity=".2"/><path d="m36 69h13v18h-13z" fill="#333" opacity=".2"/><path d="m18 69h13v18h-13z" fill="#9ecc4f" opacity=".1"/><path d="m0 69h13v18h-13z" fill="#ffcd27" opacity=".1"/><path d="m180 46h13v18h-13z" fill="#00adef" opacity=".6"/><path d="m162 46h13v18h-13z" fill="#00adef" opacity=".5"/><path d="m144 46h13v18h-13z" fill="#9ecc4f" opacity=".5"/><path d="m126 46h13v18h-13z" fill="#333" opacity=".4"/><path d="m108 46h13v18h-13z" fill="#333" opacity=".4"/><path d="m90 46h13v18h-13z" fill="#ffcd27" opacity=".3"/><path d="m72 46h13v18h-13z" fill="#333" opacity=".3"/><path d="m54 46h13v18h-13z" fill="#aa99c9" opacity=".2"/><path d="m36 46h13v18h-13z" fill="#faab3c" opacity=".2"/><path d="m18 46h13v18h-13z" fill="#faab3c" opacity=".1"/><path d="m0 46h13v18h-13z" fill="#333" opacity=".1"/><path d="m180 23h13v18h-13z" fill="#00adef" opacity=".6"/><path d="m162 23h13v18h-13z" fill="#00adef" opacity=".5"/><path d="m144 23h13v18h-13z" fill="#9ecc4f" opacity=".5"/><path d="m126 23h13v18h-13z" fill="#f1644b" opacity=".4"/><path d="m108 23h13v18h-13z" fill="#faab3c" opacity=".4"/><path d="m90 23h13v18h-13z" fill="#faab3c" opacity=".3"/><path d="m72 23h13v18h-13z" fill="#f1644b" opacity=".3"/><path d="m54 23h13v18h-13z" fill="#f1644b" opacity=".2"/><path d="m36 23h13v18h-13z" fill="#f1644b" opacity=".2"/><path d="m18 23h13v18h-13z" fill="#f1644b" opacity=".1"/><path d="m0 23h13v18h-13z" fill="#f1644b" opacity=".1"/><path d="m180 0h13v18h-13z" fill="#00adef" opacity=".6"/><path d="m162 0h13v18h-13z" fill="#00adef" opacity=".5"/><path d="m144 0h13v18h-13z" fill="#9ecc4f" opacity=".5"/><path d="m126 0h13v18h-13z" fill="#ffcd27" opacity=".4"/><path d="m108 0h13v18h-13z" fill="#aa99c9" opacity=".4"/><path d="m90 0h13v18h-13z" fill="#aa99c9" opacity=".3"/><path d="m72 0h13v18h-13z" fill="#aa99c9" opacity=".3"/><path d="m54 0h13v18h-13z" fill="#aa99c9" opacity=".2"/><path d="m36 0h13v18h-13z" fill="#aa99c9" opacity=".2"/><path d="m18 0h13v18h-13z" fill="#aa99c9" opacity=".1"/><path d="m0 0h13v18h-13z" fill="#faab3c" opacity=".1"/><path d="m396 161h13v18h-13z" fill="#ffcd27" transform="matrix(-1 0 0 1 805 0)"/><path d="m414 161h13v18h-13z" fill="#ffcd27" transform="matrix(-1 0 0 1 841 0)"/><path d="m432 161h13v18h-13z" fill="#ffcd27" transform="matrix(-1 0 0 1 877 0)"/><path d="m450 161h13v18h-13z" fill="#ffcd27" transform="matrix(-1 0 0 1 913 0)"/><path d="m468 161h13v18h-13z" fill="#ffcd27" opacity=".9" transform="matrix(-1 0 0 1 949 0)"/><path d="m486 161h13v18h-13z" fill="#f1644b" opacity=".9" transform="matrix(-1 0 0 1 985 0)"/><path d="m504 161h13v18h-13z" fill="#ffcd27" opacity=".8" transform="matrix(-1 0 0 1 1021 0)"/><path d="m522 161h13v18h-13z" fill="#ffcd27" opacity=".8" transform="matrix(-1 0 0 1 1057 0)"/><path d="m540 161h13v18h-13z" fill="#ffcd27" opacity=".7" transform="matrix(-1 0 0 1 1093 0)"/><path d="m558 161h13v18h-13z" fill="#ffcd27" opacity=".7" transform="matrix(-1 0 0 1 1129 0)"/><path d="m576 161h13v18h-13z" fill="#f1644b" opacity=".6" transform="matrix(-1 0 0 1 1165 0)"/><path d="m396 138h13v18h-13z" fill="#faab3c" transform="matrix(-1 0 0 1 805 0)"/><path d="m414 138h13v18h-13z" fill="#faab3c" transform="matrix(-1 0 0 1 841 0)"/><path d="m432 138h13v18h-13z" fill="#faab3c" transform="matrix(-1 0 0 1 877 0)"/><path d="m450 138h13v18h-13z" fill="#aa99c9" transform="matrix(-1 0 0 1 913 0)"/><path d="m468 138h13v18h-13z" fill="#faab3c" opacity=".9" transform="matrix(-1 0 0 1 949 0)"/><path d="m486 138h13v18h-13z" fill="#faab3c" opacity=".9" transform="matrix(-1 0 0 1 985 0)"/><path d="m504 138h13v18h-13z" fill="#f1644b" opacity=".8" transform="matrix(-1 0 0 1 1021 0)"/><path d="m522 138h13v18h-13z" fill="#f1644b" opacity=".8" transform="matrix(-1 0 0 1 1057 0)"/><path d="m540 138h13v18h-13z" fill="#f1644b" opacity=".7" transform="matrix(-1 0 0 1 1093 0)"/><path d="m558 138h13v18h-13z" fill="#f1644b" opacity=".7" transform="matrix(-1 0 0 1 1129 0)"/><path d="m576 138h13v18h-13z" fill="#f1644b" opacity=".6" transform="matrix(-1 0 0 1 1165 0)"/><path d="m396 115h13v18h-13z" fill="#f1644b" transform="matrix(-1 0 0 1 805 0)"/><path d="m414 115h13v18h-13z" fill="#f1644b" transform="matrix(-1 0 0 1 841 0)"/><path d="m432 115h13v18h-13z" fill="#f1644b" transform="matrix(-1 0 0 1 877 0)"/><path d="m450 115h13v18h-13z" fill="#f1644b" transform="matrix(-1 0 0 1 913 0)"/><path d="m468 115h13v18h-13z" fill="#f1644b" opacity=".9" transform="matrix(-1 0 0 1 949 0)"/><path d="m486 115h13v18h-13z" fill="#f1644b" opacity=".9" transform="matrix(-1 0 0 1 985 0)"/><path d="m504 115h13v18h-13z" fill="#f1644b" opacity=".8" transform="matrix(-1 0 0 1 1021 0)"/><path d="m522 115h13v18h-13z" fill="#9ecc4f" opacity=".8" transform="matrix(-1 0 0 1 1057 0)"/><path d="m540 115h13v18h-13z" fill="#f1644b" opacity=".7" transform="matrix(-1 0 0 1 1093 0)"/><path d="m558 115h13v18h-13z" fill="#f1644b" opacity=".7" transform="matrix(-1 0 0 1 1129 0)"/><path d="m576 115h13v18h-13z" fill="#f1644b" opacity=".6" transform="matrix(-1 0 0 1 1165 0)"/><path d="m396 92h13v18h-13z" fill="#333" transform="matrix(-1 0 0 1 805 0)"/><path d="m414 92h13v18h-13z" fill="#333" transform="matrix(-1 0 0 1 841 0)"/><path d="m432 92h13v18h-13z" fill="#9ecc4f" transform="matrix(-1 0 0 1 877 0)"/><path d="m450 92h13v18h-13z" fill="#aa99c9" transform="matrix(-1 0 0 1 913 0)"/><path d="m468 92h13v18h-13z" fill="#f1644b" opacity=".9" transform="matrix(-1 0 0 1 949 0)"/><path d="m486 92h13v18h-13z" fill="#faab3c" opacity=".9" transform="matrix(-1 0 0 1 985 0)"/><path d="m504 92h13v18h-13z" fill="#faab3c" opacity=".8" transform="matrix(-1 0 0 1 1021 0)"/><path d="m522 92h13v18h-13z" fill="#faab3c" opacity=".8" transform="matrix(-1 0 0 1 1057 0)"/><path d="m540 92h13v18h-13z" fill="#faab3c" opacity=".7" transform="matrix(-1 0 0 1 1093 0)"/><path d="m558 92h13v18h-13z" fill="#f1644b" opacity=".7" transform="matrix(-1 0 0 1 1129 0)"/><path d="m576 92h13v18h-13z" fill="#ffcd27" opacity=".6" transform="matrix(-1 0 0 1 1165 0)"/><path d="m396 69h13v18h-13z" fill="#f1644b" transform="matrix(-1 0 0 1 805 0)"/><path d="m414 69h13v18h-13z" fill="#333" transform="matrix(-1 0 0 1 841 0)"/><path d="m432 69h13v18h-13z" fill="#9ecc4f" transform="matrix(-1 0 0 1 877 0)"/><path d="m450 69h13v18h-13z" fill="#333" transform="matrix(-1 0 0 1 913 0)"/><path d="m468 69h13v18h-13z" fill="#333" opacity=".9" transform="matrix(-1 0 0 1 949 0)"/><path d="m486 69h13v18h-13z" fill="#00adef" opacity=".9" transform="matrix(-1 0 0 1 985 0)"/><path d="m504 69h13v18h-13z" fill="#00adef" opacity=".8" transform="matrix(-1 0 0 1 1021 0)"/><path d="m522 69h13v18h-13z" fill="#00adef" opacity=".8" transform="matrix(-1 0 0 1 1057 0)"/><path d="m540 69h13v18h-13z" fill="#333" opacity=".7" transform="matrix(-1 0 0 1 1093 0)"/><path d="m558 69h13v18h-13z" fill="#9ecc4f" opacity=".7" transform="matrix(-1 0 0 1 1129 0)"/><path d="m576 69h13v18h-13z" fill="#ffcd27" opacity=".6" transform="matrix(-1 0 0 1 1165 0)"/><path d="m396 46h13v18h-13z" fill="#00adef" transform="matrix(-1 0 0 1 805 0)"/><path d="m414 46h13v18h-13z" fill="#00adef" transform="matrix(-1 0 0 1 841 0)"/><path d="m432 46h13v18h-13z" fill="#9ecc4f" transform="matrix(-1 0 0 1 877 0)"/><path d="m450 46h13v18h-13z" fill="#333" transform="matrix(-1 0 0 1 913 0)"/><path d="m468 46h13v18h-13z" fill="#333" opacity=".9" transform="matrix(-1 0 0 1 949 0)"/><path d="m486 46h13v18h-13z" fill="#ffcd27" opacity=".9" transform="matrix(-1 0 0 1 985 0)"/><path d="m504 46h13v18h-13z" fill="#333" opacity=".8" transform="matrix(-1 0 0 1 1021 0)"/><path d="m522 46h13v18h-13z" fill="#aa99c9" opacity=".8" transform="matrix(-1 0 0 1 1057 0)"/><path d="m540 46h13v18h-13z" fill="#faab3c" opacity=".7" transform="matrix(-1 0 0 1 1093 0)"/><path d="m558 46h13v18h-13z" fill="#faab3c" opacity=".7" transform="matrix(-1 0 0 1 1129 0)"/><path d="m576 46h13v18h-13z" fill="#333" opacity=".6" transform="matrix(-1 0 0 1 1165 0)"/><path d="m396 23h13v18h-13z" fill="#00adef" transform="matrix(-1 0 0 1 805 0)"/><path d="m414 23h13v18h-13z" fill="#00adef" transform="matrix(-1 0 0 1 841 0)"/><path d="m432 23h13v18h-13z" fill="#9ecc4f" transform="matrix(-1 0 0 1 877 0)"/><path d="m450 23h13v18h-13z" fill="#f1644b" transform="matrix(-1 0 0 1 913 0)"/><path d="m468 23h13v18h-13z" fill="#faab3c" opacity=".9" transform="matrix(-1 0 0 1 949 0)"/><path d="m486 23h13v18h-13z" fill="#faab3c" opacity=".9" transform="matrix(-1 0 0 1 985 0)"/><path d="m504 23h13v18h-13z" fill="#f1644b" opacity=".8" transform="matrix(-1 0 0 1 1021 0)"/><path d="m522 23h13v18h-13z" fill="#f1644b" opacity=".8" transform="matrix(-1 0 0 1 1057 0)"/><path d="m540 23h13v18h-13z" fill="#f1644b" opacity=".7" transform="matrix(-1 0 0 1 1093 0)"/><path d="m558 23h13v18h-13z" fill="#f1644b" opacity=".7" transform="matrix(-1 0 0 1 1129 0)"/><path d="m576 23h13v18h-13z" fill="#f1644b" opacity=".6" transform="matrix(-1 0 0 1 1165 0)"/><path d="m396 0h13v18h-13z" fill="#00adef" transform="matrix(-1 0 0 1 805 0)"/><path d="m414 0h13v18h-13z" fill="#00adef" transform="matrix(-1 0 0 1 841 0)"/><path d="m432 0h13v18h-13z" fill="#9ecc4f" transform="matrix(-1 0 0 1 877 0)"/><path d="m450 0h13v18h-13z" fill="#ffcd27" transform="matrix(-1 0 0 1 913 0)"/><path d="m468 0h13v18h-13z" fill="#aa99c9" opacity=".9" transform="matrix(-1 0 0 1 949 0)"/><path d="m486 0h13v18h-13z" fill="#aa99c9" opacity=".9" transform="matrix(-1 0 0 1 985 0)"/><path d="m504 0h13v18h-13z" fill="#aa99c9" opacity=".8" transform="matrix(-1 0 0 1 1021 0)"/><path d="m522 0h13v18h-13z" fill="#aa99c9" opacity=".8" transform="matrix(-1 0 0 1 1057 0)"/><path d="m540 0h13v18h-13z" fill="#aa99c9" opacity=".7" transform="matrix(-1 0 0 1 1093 0)"/><path d="m558 0h13v18h-13z" fill="#aa99c9" opacity=".7" transform="matrix(-1 0 0 1 1129 0)"/><path d="m576 0h13v18h-13z" fill="#faab3c" opacity=".6" transform="matrix(-1 0 0 1 1165 0)"/><path d="m378 0h13v18h-13z" fill="#ffcd27" transform="matrix(1 0 0 -1 0 18)"/><path d="m360 0h13v18h-13z" fill="#ffcd27" transform="matrix(1 0 0 -1 0 18)"/><path d="m342 0h13v18h-13z" fill="#ffcd27" transform="matrix(1 0 0 -1 0 18)"/><path d="m324 0h13v18h-13z" fill="#ffcd27" transform="matrix(1 0 0 -1 0 18)"/><path d="m306 0h13v18h-13z" fill="#ffcd27" opacity=".9" transform="matrix(1 0 0 -1 0 18)"/><path d="m288 0h13v18h-13z" fill="#f1644b" opacity=".9" transform="matrix(1 0 0 -1 0 18)"/><path d="m270 0h13v18h-13z" fill="#ffcd27" opacity=".8" transform="matrix(1 0 0 -1 0 18)"/><path d="m252 0h13v18h-13z" fill="#ffcd27" opacity=".8" transform="matrix(1 0 0 -1 0 18)"/><path d="m234 0h13v18h-13z" fill="#ffcd27" opacity=".7" transform="matrix(1 0 0 -1 0 18)"/><path d="m216 0h13v18h-13z" fill="#ffcd27" opacity=".7" transform="matrix(1 0 0 -1 0 18)"/><path d="m198 0h13v18h-13z" fill="#f1644b" opacity=".6" transform="matrix(1 0 0 -1 0 18)"/><path d="m378 23h13v18h-13z" fill="#faab3c" transform="matrix(1 0 0 -1 0 64)"/><path d="m360 23h13v18h-13z" fill="#faab3c" transform="matrix(1 0 0 -1 0 64)"/><path d="m342 23h13v18h-13z" fill="#faab3c" transform="matrix(1 0 0 -1 0 64)"/><path d="m324 23h13v18h-13z" fill="#aa99c9" transform="matrix(1 0 0 -1 0 64)"/><path d="m306 23h13v18h-13z" fill="#faab3c" opacity=".9" transform="matrix(1 0 0 -1 0 64)"/><path d="m288 23h13v18h-13z" fill="#faab3c" opacity=".9" transform="matrix(1 0 0 -1 0 64)"/><path d="m270 23h13v18h-13z" fill="#f1644b" opacity=".8" transform="matrix(1 0 0 -1 0 64)"/><path d="m252 23h13v18h-13z" fill="#f1644b" opacity=".8" transform="matrix(1 0 0 -1 0 64)"/><path d="m234 23h13v18h-13z" fill="#f1644b" opacity=".7" transform="matrix(1 0 0 -1 0 64)"/><path d="m216 23h13v18h-13z" fill="#f1644b" opacity=".7" transform="matrix(1 0 0 -1 0 64)"/><path d="m198 23h13v18h-13z" fill="#f1644b" opacity=".6" transform="matrix(1 0 0 -1 0 64)"/><path d="m378 46h13v18h-13z" fill="#f1644b" transform="matrix(1 0 0 -1 0 110)"/><path d="m360 46h13v18h-13z" fill="#f1644b" transform="matrix(1 0 0 -1 0 110)"/><path d="m342 46h13v18h-13z" fill="#f1644b" transform="matrix(1 0 0 -1 0 110)"/><path d="m324 46h13v18h-13z" fill="#f1644b" transform="matrix(1 0 0 -1 0 110)"/><path d="m306 46h13v18h-13z" fill="#f1644b" opacity=".9" transform="matrix(1 0 0 -1 0 110)"/><path d="m288 46h13v18h-13z" fill="#f1644b" opacity=".9" transform="matrix(1 0 0 -1 0 110)"/><path d="m270 46h13v18h-13z" fill="#f1644b" opacity=".8" transform="matrix(1 0 0 -1 0 110)"/><path d="m252 46h13v18h-13z" fill="#9ecc4f" opacity=".8" transform="matrix(1 0 0 -1 0 110)"/><path d="m234 46h13v18h-13z" fill="#f1644b" opacity=".7" transform="matrix(1 0 0 -1 0 110)"/><path d="m216 46h13v18h-13z" fill="#f1644b" opacity=".7" transform="matrix(1 0 0 -1 0 110)"/><path d="m198 46h13v18h-13z" fill="#f1644b" opacity=".6" transform="matrix(1 0 0 -1 0 110)"/><path d="m378 69h13v18h-13z" fill="#333" transform="matrix(1 0 0 -1 0 156)"/><path d="m360 69h13v18h-13z" fill="#333" transform="matrix(1 0 0 -1 0 156)"/><path d="m342 69h13v18h-13z" fill="#9ecc4f" transform="matrix(1 0 0 -1 0 156)"/><path d="m324 69h13v18h-13z" fill="#aa99c9" transform="matrix(1 0 0 -1 0 156)"/><path d="m306 69h13v18h-13z" fill="#f1644b" opacity=".9" transform="matrix(1 0 0 -1 0 156)"/><path d="m288 69h13v18h-13z" fill="#faab3c" opacity=".9" transform="matrix(1 0 0 -1 0 156)"/><path d="m270 69h13v18h-13z" fill="#faab3c" opacity=".8" transform="matrix(1 0 0 -1 0 156)"/><path d="m252 69h13v18h-13z" fill="#faab3c" opacity=".8" transform="matrix(1 0 0 -1 0 156)"/><path d="m234 69h13v18h-13z" fill="#faab3c" opacity=".7" transform="matrix(1 0 0 -1 0 156)"/><path d="m216 69h13v18h-13z" fill="#f1644b" opacity=".7" transform="matrix(1 0 0 -1 0 156)"/><path d="m198 69h13v18h-13z" fill="#ffcd27" opacity=".6" transform="matrix(1 0 0 -1 0 156)"/><path d="m378 92h13v18h-13z" fill="#f1644b" transform="matrix(1 0 0 -1 0 202)"/><path d="m360 92h13v18h-13z" fill="#333" transform="matrix(1 0 0 -1 0 202)"/><path d="m342 92h13v18h-13z" fill="#9ecc4f" transform="matrix(1 0 0 -1 0 202)"/><path d="m324 92h13v18h-13z" fill="#333" transform="matrix(1 0 0 -1 0 202)"/><path d="m306 92h13v18h-13z" fill="#333" opacity=".9" transform="matrix(1 0 0 -1 0 202)"/><path d="m288 92h13v18h-13z" fill="#00adef" opacity=".9" transform="matrix(1 0 0 -1 0 202)"/><path d="m270 92h13v18h-13z" fill="#00adef" opacity=".8" transform="matrix(1 0 0 -1 0 202)"/><path d="m252 92h13v18h-13z" fill="#00adef" opacity=".8" transform="matrix(1 0 0 -1 0 202)"/><path d="m234 92h13v18h-13z" fill="#333" opacity=".7" transform="matrix(1 0 0 -1 0 202)"/><path d="m216 92h13v18h-13z" fill="#9ecc4f" opacity=".7" transform="matrix(1 0 0 -1 0 202)"/><path d="m198 92h13v18h-13z" fill="#ffcd27" opacity=".6" transform="matrix(1 0 0 -1 0 202)"/><path d="m378 115h13v18h-13z" fill="#00adef" transform="matrix(1 0 0 -1 0 248)"/><path d="m360 115h13v18h-13z" fill="#00adef" transform="matrix(1 0 0 -1 0 248)"/><path d="m342 115h13v18h-13z" fill="#9ecc4f" transform="matrix(1 0 0 -1 0 248)"/><path d="m324 115h13v18h-13z" fill="#333" transform="matrix(1 0 0 -1 0 248)"/><path d="m306 115h13v18h-13z" fill="#333" opacity=".9" transform="matrix(1 0 0 -1 0 248)"/><path d="m288 115h13v18h-13z" fill="#ffcd27" opacity=".9" transform="matrix(1 0 0 -1 0 248)"/><path d="m270 115h13v18h-13z" fill="#333" opacity=".8" transform="matrix(1 0 0 -1 0 248)"/><path d="m252 115h13v18h-13z" fill="#aa99c9" opacity=".8" transform="matrix(1 0 0 -1 0 248)"/><path d="m234 115h13v18h-13z" fill="#faab3c" opacity=".7" transform="matrix(1 0 0 -1 0 248)"/><path d="m216 115h13v18h-13z" fill="#faab3c" opacity=".7" transform="matrix(1 0 0 -1 0 248)"/><path d="m198 115h13v18h-13z" fill="#333" opacity=".6" transform="matrix(1 0 0 -1 0 248)"/><path d="m378 138h13v18h-13z" fill="#00adef" transform="matrix(1 0 0 -1 0 294)"/><path d="m360 138h13v18h-13z" fill="#00adef" transform="matrix(1 0 0 -1 0 294)"/><path d="m342 138h13v18h-13z" fill="#9ecc4f" transform="matrix(1 0 0 -1 0 294)"/><path d="m324 138h13v18h-13z" fill="#f1644b" transform="matrix(1 0 0 -1 0 294)"/><path d="m306 138h13v18h-13z" fill="#faab3c" opacity=".9" transform="matrix(1 0 0 -1 0 294)"/><path d="m288 138h13v18h-13z" fill="#faab3c" opacity=".9" transform="matrix(1 0 0 -1 0 294)"/><path d="m270 138h13v18h-13z" fill="#f1644b" opacity=".8" transform="matrix(1 0 0 -1 0 294)"/><path d="m252 138h13v18h-13z" fill="#f1644b" opacity=".8" transform="matrix(1 0 0 -1 0 294)"/><path d="m234 138h13v18h-13z" fill="#f1644b" opacity=".7" transform="matrix(1 0 0 -1 0 294)"/><path d="m216 138h13v18h-13z" fill="#f1644b" opacity=".7" transform="matrix(1 0 0 -1 0 294)"/><path d="m198 138h13v18h-13z" fill="#f1644b" opacity=".6" transform="matrix(1 0 0 -1 0 294)"/><path d="m378 161h13v18h-13z" fill="#00adef" transform="matrix(1 0 0 -1 0 340)"/><path d="m360 161h13v18h-13z" fill="#00adef" transform="matrix(1 0 0 -1 0 340)"/><path d="m342 161h13v18h-13z" fill="#9ecc4f" transform="matrix(1 0 0 -1 0 340)"/><path d="m324 161h13v18h-13z" fill="#ffcd27" transform="matrix(1 0 0 -1 0 340)"/><path d="m306 161h13v18h-13z" fill="#aa99c9" opacity=".9" transform="matrix(1 0 0 -1 0 340)"/><path d="m288 161h13v18h-13z" fill="#aa99c9" opacity=".9" transform="matrix(1 0 0 -1 0 340)"/><path d="m270 161h13v18h-13z" fill="#aa99c9" opacity=".8" transform="matrix(1 0 0 -1 0 340)"/><path d="m252 161h13v18h-13z" fill="#aa99c9" opacity=".8" transform="matrix(1 0 0 -1 0 340)"/><path d="m234 161h13v18h-13z" fill="#aa99c9" opacity=".7" transform="matrix(1 0 0 -1 0 340)"/><path d="m216 161h13v18h-13z" fill="#aa99c9" opacity=".7" transform="matrix(1 0 0 -1 0 340)"/><path d="m198 161h13v18h-13z" fill="#faab3c" opacity=".6" transform="matrix(1 0 0 -1 0 340)"/><path d="m594 0h13v18h-13z" fill="#ffcd27" opacity=".6" transform="matrix(-1 0 0 -1 1201 18)"/><path d="m612 0h13v18h-13z" fill="#ffcd27" opacity=".5" transform="matrix(-1 0 0 -1 1237 18)"/><path d="m630 0h13v18h-13z" fill="#ffcd27" opacity=".5" transform="matrix(-1 0 0 -1 1273 18)"/><path d="m648 0h13v18h-13z" fill="#ffcd27" opacity=".4" transform="matrix(-1 0 0 -1 1309 18)"/><path d="m666 0h13v18h-13z" fill="#ffcd27" opacity=".4" transform="matrix(-1 0 0 -1 1345 18)"/><path d="m684 0h13v18h-13z" fill="#f1644b" opacity=".3" transform="matrix(-1 0 0 -1 1381 18)"/><path d="m702 0h13v18h-13z" fill="#ffcd27" opacity=".3" transform="matrix(-1 0 0 -1 1417 18)"/><path d="m720 0h13v18h-13z" fill="#ffcd27" opacity=".2" transform="matrix(-1 0 0 -1 1453 18)"/><path d="m738 0h13v18h-13z" fill="#ffcd27" opacity=".2" transform="matrix(-1 0 0 -1 1489 18)"/><path d="m756 0h13v18h-13z" fill="#ffcd27" opacity=".1" transform="matrix(-1 0 0 -1 1525 18)"/><path d="m774 0h13v18h-13z" fill="#f1644b" opacity=".1" transform="matrix(-1 0 0 -1 1561 18)"/><path d="m594 23h13v18h-13z" fill="#faab3c" opacity=".6" transform="matrix(-1 0 0 -1 1201 64)"/><path d="m612 23h13v18h-13z" fill="#faab3c" opacity=".5" transform="matrix(-1 0 0 -1 1237 64)"/><path d="m630 23h13v18h-13z" fill="#faab3c" opacity=".5" transform="matrix(-1 0 0 -1 1273 64)"/><path d="m648 23h13v18h-13z" fill="#aa99c9" opacity=".4" transform="matrix(-1 0 0 -1 1309 64)"/><path d="m666 23h13v18h-13z" fill="#faab3c" opacity=".4" transform="matrix(-1 0 0 -1 1345 64)"/><path d="m684 23h13v18h-13z" fill="#faab3c" opacity=".3" transform="matrix(-1 0 0 -1 1381 64)"/><path d="m702 23h13v18h-13z" fill="#f1644b" opacity=".3" transform="matrix(-1 0 0 -1 1417 64)"/><path d="m720 23h13v18h-13z" fill="#f1644b" opacity=".2" transform="matrix(-1 0 0 -1 1453 64)"/><path d="m738 23h13v18h-13z" fill="#f1644b" opacity=".2" transform="matrix(-1 0 0 -1 1489 64)"/><path d="m756 23h13v18h-13z" fill="#f1644b" opacity=".1" transform="matrix(-1 0 0 -1 1525 64)"/><path d="m774 23h13v18h-13z" fill="#f1644b" opacity=".1" transform="matrix(-1 0 0 -1 1561 64)"/><path d="m594 46h13v18h-13z" fill="#f1644b" opacity=".6" transform="matrix(-1 0 0 -1 1201 110)"/><path d="m612 46h13v18h-13z" fill="#f1644b" opacity=".5" transform="matrix(-1 0 0 -1 1237 110)"/><path d="m630 46h13v18h-13z" fill="#f1644b" opacity=".5" transform="matrix(-1 0 0 -1 1273 110)"/><path d="m648 46h13v18h-13z" fill="#f1644b" opacity=".4" transform="matrix(-1 0 0 -1 1309 110)"/><path d="m666 46h13v18h-13z" fill="#f1644b" opacity=".4" transform="matrix(-1 0 0 -1 1345 110)"/><path d="m684 46h13v18h-13z" fill="#f1644b" opacity=".3" transform="matrix(-1 0 0 -1 1381 110)"/><path d="m702 46h13v18h-13z" fill="#f1644b" opacity=".3" transform="matrix(-1 0 0 -1 1417 110)"/><path d="m720 46h13v18h-13z" fill="#9ecc4f" opacity=".2" transform="matrix(-1 0 0 -1 1453 110)"/><path d="m738 46h13v18h-13z" fill="#f1644b" opacity=".2" transform="matrix(-1 0 0 -1 1489 110)"/><path d="m756 46h13v18h-13z" fill="#f1644b" opacity=".1" transform="matrix(-1 0 0 -1 1525 110)"/><path d="m774 46h13v18h-13z" fill="#f1644b" opacity=".1" transform="matrix(-1 0 0 -1 1561 110)"/><path d="m594 69h13v18h-13z" fill="#333" opacity=".6" transform="matrix(-1 0 0 -1 1201 156)"/><path d="m612 69h13v18h-13z" fill="#333" opacity=".5" transform="matrix(-1 0 0 -1 1237 156)"/><path d="m630 69h13v18h-13z" fill="#9ecc4f" opacity=".5" transform="matrix(-1 0 0 -1 1273 156)"/><path d="m648 69h13v18h-13z" fill="#aa99c9" opacity=".4" transform="matrix(-1 0 0 -1 1309 156)"/><path d="m666 69h13v18h-13z" fill="#f1644b" opacity=".4" transform="matrix(-1 0 0 -1 1345 156)"/><path d="m684 69h13v18h-13z" fill="#faab3c" opacity=".3" transform="matrix(-1 0 0 -1 1381 156)"/><path d="m702 69h13v18h-13z" fill="#faab3c" opacity=".3" transform="matrix(-1 0 0 -1 1417 156)"/><path d="m720 69h13v18h-13z" fill="#faab3c" opacity=".2" transform="matrix(-1 0 0 -1 1453 156)"/><path d="m738 69h13v18h-13z" fill="#faab3c" opacity=".2" transform="matrix(-1 0 0 -1 1489 156)"/><path d="m756 69h13v18h-13z" fill="#f1644b" opacity=".1" transform="matrix(-1 0 0 -1 1525 156)"/><path d="m774 69h13v18h-13z" fill="#ffcd27" opacity=".1" transform="matrix(-1 0 0 -1 1561 156)"/><path d="m594 92h13v18h-13z" fill="#f1644b" opacity=".6" transform="matrix(-1 0 0 -1 1201 202)"/><path d="m612 92h13v18h-13z" fill="#333" opacity=".5" transform="matrix(-1 0 0 -1 1237 202)"/><path d="m630 92h13v18h-13z" fill="#9ecc4f" opacity=".5" transform="matrix(-1 0 0 -1 1273 202)"/><path d="m648 92h13v18h-13z" fill="#333" opacity=".4" transform="matrix(-1 0 0 -1 1309 202)"/><path d="m666 92h13v18h-13z" fill="#333" opacity=".4" transform="matrix(-1 0 0 -1 1345 202)"/><path d="m684 92h13v18h-13z" fill="#00adef" opacity=".3" transform="matrix(-1 0 0 -1 1381 202)"/><path d="m702 92h13v18h-13z" fill="#00adef" opacity=".3" transform="matrix(-1 0 0 -1 1417 202)"/><path d="m720 92h13v18h-13z" fill="#00adef" opacity=".2" transform="matrix(-1 0 0 -1 1453 202)"/><path d="m738 92h13v18h-13z" fill="#333" opacity=".2" transform="matrix(-1 0 0 -1 1489 202)"/><path d="m756 92h13v18h-13z" fill="#9ecc4f" opacity=".1" transform="matrix(-1 0 0 -1 1525 202)"/><path d="m774 92h13v18h-13z" fill="#ffcd27" opacity=".1" transform="matrix(-1 0 0 -1 1561 202)"/><path d="m594 115h13v18h-13z" fill="#00adef" opacity=".6" transform="matrix(-1 0 0 -1 1201 248)"/><path d="m612 115h13v18h-13z" fill="#00adef" opacity=".5" transform="matrix(-1 0 0 -1 1237 248)"/><path d="m630 115h13v18h-13z" fill="#9ecc4f" opacity=".5" transform="matrix(-1 0 0 -1 1273 248)"/><path d="m648 115h13v18h-13z" fill="#333" opacity=".4" transform="matrix(-1 0 0 -1 1309 248)"/><path d="m666 115h13v18h-13z" fill="#333" opacity=".4" transform="matrix(-1 0 0 -1 1345 248)"/><path d="m684 115h13v18h-13z" fill="#ffcd27" opacity=".3" transform="matrix(-1 0 0 -1 1381 248)"/><path d="m702 115h13v18h-13z" fill="#333" opacity=".3" transform="matrix(-1 0 0 -1 1417 248)"/><path d="m720 115h13v18h-13z" fill="#aa99c9" opacity=".2" transform="matrix(-1 0 0 -1 1453 248)"/><path d="m738 115h13v18h-13z" fill="#faab3c" opacity=".2" transform="matrix(-1 0 0 -1 1489 248)"/><path d="m756 115h13v18h-13z" fill="#faab3c" opacity=".1" transform="matrix(-1 0 0 -1 1525 248)"/><path d="m774 115h13v18h-13z" fill="#333" opacity=".1" transform="matrix(-1 0 0 -1 1561 248)"/><path d="m594 138h13v18h-13z" fill="#00adef" opacity=".6" transform="matrix(-1 0 0 -1 1201 294)"/><path d="m612 138h13v18h-13z" fill="#00adef" opacity=".5" transform="matrix(-1 0 0 -1 1237 294)"/><path d="m630 138h13v18h-13z" fill="#9ecc4f" opacity=".5" transform="matrix(-1 0 0 -1 1273 294)"/><path d="m648 138h13v18h-13z" fill="#f1644b" opacity=".4" transform="matrix(-1 0 0 -1 1309 294)"/><path d="m666 138h13v18h-13z" fill="#faab3c" opacity=".4" transform="matrix(-1 0 0 -1 1345 294)"/><path d="m684 138h13v18h-13z" fill="#faab3c" opacity=".3" transform="matrix(-1 0 0 -1 1381 294)"/><path d="m702 138h13v18h-13z" fill="#f1644b" opacity=".3" transform="matrix(-1 0 0 -1 1417 294)"/><path d="m720 138h13v18h-13z" fill="#f1644b" opacity=".2" transform="matrix(-1 0 0 -1 1453 294)"/><path d="m738 138h13v18h-13z" fill="#f1644b" opacity=".2" transform="matrix(-1 0 0 -1 1489 294)"/><path d="m756 138h13v18h-13z" fill="#f1644b" opacity=".1" transform="matrix(-1 0 0 -1 1525 294)"/><path d="m774 138h13v18h-13z" fill="#f1644b" opacity=".1" transform="matrix(-1 0 0 -1 1561 294)"/><path d="m594 161h13v18h-13z" fill="#00adef" opacity=".6" transform="matrix(-1 0 0 -1 1201 340)"/><path d="m612 161h13v18h-13z" fill="#00adef" opacity=".5" transform="matrix(-1 0 0 -1 1237 340)"/><path d="m630 161h13v18h-13z" fill="#9ecc4f" opacity=".5" transform="matrix(-1 0 0 -1 1273 340)"/><path d="m648 161h13v18h-13z" fill="#ffcd27" opacity=".4" transform="matrix(-1 0 0 -1 1309 340)"/><path d="m666 161h13v18h-13z" fill="#aa99c9" opacity=".4" transform="matrix(-1 0 0 -1 1345 340)"/><path d="m684 161h13v18h-13z" fill="#aa99c9" opacity=".3" transform="matrix(-1 0 0 -1 1381 340)"/><path d="m702 161h13v18h-13z" fill="#aa99c9" opacity=".3" transform="matrix(-1 0 0 -1 1417 340)"/><path d="m720 161h13v18h-13z" fill="#aa99c9" opacity=".2" transform="matrix(-1 0 0 -1 1453 340)"/><path d="m738 161h13v18h-13z" fill="#aa99c9" opacity=".2" transform="matrix(-1 0 0 -1 1489 340)"/><path d="m756 161h13v18h-13z" fill="#aa99c9" opacity=".1" transform="matrix(-1 0 0 -1 1525 340)"/><path d="m774 161h13v18h-13z" fill="#faab3c" opacity=".1" transform="matrix(-1 0 0 -1 1561 340)"/></g><g transform="translate(229)"><path d="m0 163.414428c0 90.282661 73.1123182 163.408804 163.387152 163.408804 36.142571 0 69.465987-11.874563 96.503984-31.804247l97.84885 97.516523c4.912418 4.618198 11.51858 7.464492 18.788734 7.464492 15.170539 0 27.47128-12.296442 27.47128-27.456054 0-8.364506-3.736364-15.823372-9.616636-20.857826l-96.093209-96.172128c17.888406-26.241035 28.422252-57.938405 28.422252-92.099564 0-90.2320345-73.112318-163.414428-163.325255-163.414428-90.2748338 0-163.387152 73.1823935-163.387152 163.414428z" fill="#999"/><g transform="translate(36 36)"><use fill="#fff" xlink:href="#a"/><path d="m135.660763 148.70091c.364228-.579415 1.490837-1.136024 2.636245-1.577175l.457403-.170083.448833-.15645.429688-.141498.759638-.232874.836301-.231431 18.280829-.001215.19491-.011051.202794-.017881.247815-.029781c.621919-.085699 1.518677-.293004 2.040439-.792877.397637-.380753.702259-.841071.925774-1.260385l.137125-.272145c.04179-.087808.079706-.172268.113878-.252057l.128943-.323055.119178-.358057v-45.185461h-23.10923c-3.36553 0-5.599705 1.3581721-7.076583 2.93031v48.068902zm-8.205086 0 2.160788-.014264v-48.137167c-1.476878-1.5446282-3.696783-2.862045-7.010333-2.862045h-23.1092292l.0007678 45.713737.0112285.168178.0209214.173899.0370444.211161c.0932827.452634.3109425 1.066293.8188151 1.465695.526089.412166 1.208439.604335 1.713672.693785l.256013.039309.208859.023165.228168.014813 19.094157.000223.237682.060474.480012.132689.315282.093319.355116.110754.387189.127778.411498.144393.428047.160596c1.084331.421403 2.251026.990863 2.954302 1.679508zm5.548742 8.747628c.251851 0 .525983-.01408.812699-.039079l.438298-.045293c.074219-.008782.148921-.018148.223954-.028048l.452973-.065416.453665-.075869.447082-.08395.433227-.089662.412098-.093003.383696-.093972.34802-.092573.305071-.088801.254848-.08266.197352-.074149c.110787-.046068.178394-.084881.193124-.113278.075334-.143783.342864-.272994.772162-.389029l.276747-.068051c.049279-.011083.100115-.022036.152477-.032861l.332246-.063435.367419-.06044.401131-.057513.433384-.054653.464175-.05186.493506-.049135 1.069163-.090361.868004-.061115.919211-.055662 1.296751-.066125 1.019525-.043819 1.412611-.051157 1.834904-.053019 2.657035-.05571 1.374969-.02089 2.477068-.026383 1.957947-.011997 1.910166-.005129 6.045147.020483 5.014577.056935v-53.988617l-3.71615-1.3204734-.588101 50.8117374-.77828.02962-1.822742.039073-5.842498.076788-3.480825.060896-1.809182.042629-.912892.02518c-.609594.017723-1.220619.037372-1.829689.059259l-1.291501.050048-1.505858.068618-1.475684.080037-1.079809.068179-1.051134.075682-1.348236.113376-.964719.094983-.919324.104025-.585187.074603-.561296.078963-.53592.083462-.509057.088098c-.165043.030153-.325362.061102-.480708.092869l-.450874.097779c-1.306381.300838-2.18993.669802-2.470085 1.123534-.611907.992257-7.826645.987033-9.518061-.529048l-.106623-.105716c-.228962-.252838-.78901-.474074-1.603516-.667611l-.428103-.094479c-.074767-.015367-.151211-.030547-.22929-.045542l-.487727-.087757c-.084437-.014261-.17042-.028341-.257904-.042242l-.542561-.08128-.576456-.077098-.608224-.073023-.637861-.069057-1.007709-.096387-1.062421-.088074-1.109951-.080126-1.541453-.095106-1.192916-.063006-2.037053-.090241-1.65446-.059876-2.071158-.060872-1.231568-.029723-3.180948-.0575-2.57634-.028621-3.1568948-.015367-3.5804204.010051-.5238893-51.2681974-3.3104917 1.4162484v54.074204l6.091503-.110017 4.8697032-.042899 1.42012-.004518 1.451867-.000435 2.462799.010003 2.199758.022091 1.996082.032898 1.566274.036091 1.898382.058605 1.097614.042942 1.059883.049177 1.34505.075837.950618.065003.603014.047387.576542.050742.548454.054194.518747.057743.487425.06139.454485.065134.419927.068975.383754.072913c.182564.037458.350956.076428.504267.116967l.286244.083185c.309863.099526.534315.207787.661802.32548l.048667.051019c.714453.863732 2.602457 1.171499 4.492467 1.281163l.565891.027314c.093935.003681.187582.006956.280794.00987l.552892.013511 1.046396.010012z" fill="#f9a72b" mask="url(#b)"/><path d="m226.413899 74.9897567c.315665-.5021599 1.203961-.98719 2.180847-1.394777l.455398-.1823985c.076361-.02941.152805-.058307.229112-.0866633l.45444-.163431.440583-.1491388.416149-.133529.555278-.1681423.836301-.231431 18.280829-.0012149.289969-.0186911.226726-.0234574c.620722-.0741415 1.610232-.2738639 2.169263-.8094424.441819-.4230583.768804-.9443454.997292-1.3984719l.125403-.2630934.102548-.2390362.080477-.2070401.119178-.3580573v-45.1854607h-23.10923c-3.36553 0-5.599704 1.3581721-7.076583 2.9303099v48.068902zm-8.205086 0 2.160789-.0142644v-48.1371672c-1.476879-1.5446279-3.696784-2.8620447-7.010333-2.8620447h-23.10923l.000768 45.713737.011228.1681782.020922.1738987.037044.2111608c.093283.452634.310943 1.0662932.818815 1.4656956.526089.4121654 1.208439.6043343 1.713672.6937848l.256013.0393092.208859.0231646.228169.0148134 19.094156.0002231.450008.1176898.419863.1199271.336169.1020876.372123.1193177.400314.136137.420742.1525458.43341.1685439c1.020028.4116141 2.080108.9505261 2.736499 1.593262zm5.548743 8.7476273c.125925 0 .257421-.00352.393275-.0101649l.419423-.0289141.438298-.0452929.4499-.0593011c.075546-.0109191.151272-.0223232.227027-.0341628l.453665-.0758686.447082-.0839505.433227-.0896618.412098-.0930025.383696-.0939728.34802-.0925724.305071-.0888015.254848-.0826602.197353-.0741482c.110786-.046068.178393-.084881.193123-.1132782.075334-.1437836.342864-.2729937.772162-.3890291l.276747-.0680514.314112-.0649565.350015-.0619288.384458-.0589682.41744-.0560748.684807-.0788337.493506-.0491347.79206-.0687384.84984-.0629831 1.214478-.0754167 1.296751-.0661249 1.019525-.0438192 1.774055-.0627038 2.224247-.0594956 2.291057-.0440264.99016-.0145499 2.477069-.0263828 1.957947-.0119975 1.910165-.0051283 2.721728.0027087 3.594993.0198972 4.743003.054812v-53.9886171l-3.71615-1.3204735-.588101 50.8117373-.564488.0228292-.927606.0251154-3.067844.0477809-3.883582.0497561-3.480825.0608956-1.809182.0426292-.912892.0251796c-.609594.0177232-1.220619.0373723-1.829688.0592595l-1.670145.0661913-1.869571.0909968-1.096141.0634357-.716996.0462582-1.051134.0756814-1.348236.1133765-.964718.0949828-.919325.1040253-.585186.0746022-.561297.0789636-.53592.083462-.509057.0880973-.480708.0928697-.450873.0977791c-1.306382.3008381-2.189931.6698015-2.470086 1.1235341-.611907.992257-7.826644.9870322-9.518061-.5290483l-.106623-.1057164c-.248042-.2739072-.88465-.5107264-1.812399-.7154203l-.44851-.0922111-.487727-.0877573-.524814-.083412-.559775-.0791751-.592606-.0750466-.623308-.0710266-.651883-.067115-.678328-.0633117-1.062422-.0880739-1.109951-.0801266-1.541453-.0951055-1.192916-.063006-1.625998-.0736063-2.065515-.0765106-2.071158-.0608726-2.446011-.0547904-3.468741-.0509412-3.949414-.0249683-3.862005.0095403-.523889-51.2681973-3.310492 1.4162486v54.0742034l6.387111-.1137516 4.574095-.0391642 1.420121-.0045179 1.451867-.0004351c.813534.0010052 1.637073.0041829 2.462798.0100033l2.199758.0220909 2.390806.0410703 1.940044.049489 1.129888.0370348 1.097614.0429419 1.059883.0491773.682931.0364111 1.301809.0819627.913942.069853.576543.0507419.548453.0541941.518748.0577433.487424.0613899.454485.0651338.419927.0689749.383754.0729133c.730255.1498297 1.233764.323873 1.452314.5256313l.048667.0510189c.750174.9069191 2.794191 1.2008859 4.775836 1.2961718l.563316.0221761.552892.0135106.794417.0087154z" fill="#f9a72b" mask="url(#b)"/><path d="m64.7035886 87.307553c6.5290026 0 8.8607892 2.6703715 8.8607892 8.9012382-.2664899 6.1037058-.2284199 12.2074128-.1468413 18.3111188l.0963646 6.866669c.0290624 2.28889.0504767 4.57778.0504767 6.86667v31.154333l-.0061309.560469c-.0041257.183941-.0103717.364997-.0188531.54315l-.0322656.525739c-.3593512 4.739178-2.4962479 7.271881-8.8035396 7.271881-15.8561492-.445062-31.245941-.445062-47.1020902 0-6.5290026 0-8.86078924-2.670372-8.86078924-8.901239v-63.1987908l.00613096-.5604681c.00412565-.1839416.01037166-.364997.01885309-.5431504l.03226559-.5257385c.35935121-4.7391787 2.4962479-7.2718812 8.8035396-7.2718812 15.8561492.4450619 31.245941.4450619 47.1020902 0zm-23.1458972 39.690621c-9.4279018 0-16.6110651 7.629444-16.6110651 16.60526 0 9.424607 7.632111 16.60526 16.6110651 16.60526 9.4279018 0 16.6110651-7.629444 16.6110651-16.60526s-7.632111-16.60526-16.6110651-16.60526zm0 12.15019c2.4613273 0 4.4566273 1.994603 4.4566273 4.45507s-1.9953 4.45507-4.4566273 4.45507c-2.4613272 0-4.4566272-1.994603-4.4566272-4.45507s1.9953-4.45507 4.4566272-4.45507zm-.4051479-42.9306715c-6.3527195 0-11.344142 4.9896785-11.344142 11.3401775s4.9914225 11.340177 11.344142 11.340177 11.344142-4.989678 11.344142-11.340177-5.4451882-11.3401775-11.344142-11.3401775z" fill="#00adef" mask="url(#b)"/><path d="m155.456725 173.978909c6.529002 0 8.860789 2.670372 8.860789 8.901239-.26649 6.103706-.22842 12.207412-.146841 18.311118l.096364 6.86667c.029063 2.28889.050477 4.577779.050477 6.866669v31.154334l-.006131.560468c-.121707 5.426278-2.088654 8.34077-8.854658 8.34077-15.856149-.445062-31.245941-.445062-47.10209 0-6.529003 0-8.8607897-2.670371-8.8607897-8.901238v-63.198791l.006131-.560468c.1217068-5.426279 2.0886547-8.340771 8.8546587-8.340771 15.856149.445062 31.245941.445062 47.10209 0zm-23.145897 39.690622c-9.427902 0-16.611066 7.629443-16.611066 16.605259 0 9.424607 7.632111 16.60526 16.611066 16.60526 9.427901 0 16.611065-7.629443 16.611065-16.60526 0-8.975816-7.632111-16.605259-16.611065-16.605259zm0 12.15019c2.461327 0 4.456627 1.994602 4.456627 4.455069 0 2.460468-1.9953 4.45507-4.456627 4.45507-2.461328 0-4.456628-1.994602-4.456628-4.45507 0-2.460467 1.9953-4.455069 4.456628-4.455069zm-.405148-42.930672c-6.35272 0-11.344142 4.989678-11.344142 11.340177 0 6.3505 4.991422 11.340178 11.344142 11.340178 6.352719 0 11.344142-4.989678 11.344142-11.340178 0-6.350499-5.445189-11.340177-11.344142-11.340177z" fill="#00adef" mask="url(#b)"/><path d="m76.3922457 254.20156c2.6910121 0 4.1133203-1.34856 4.1970497-3.976974l.0039259-.250162v-70.456031c-.0048728-2.573165-1.3800402-4.031583-3.8734941-4.117609l-.2370299-.004036h-70.57739562c-2.70601122 0-4.14569964 1.456767-4.14569964 4.17439-.00628136 23.489112-.00628136 46.974455 0 70.457287 0 2.637707 1.35375661 4.083911 3.91006489 4.169138l.24317239.003997zm-18.8440893-48.024331-33.2284107-.002512c-1.7361688 0-2.9497281-1.087552-2.9560095-2.808044-.0201003-4.486675-.0189836-8.972233-.0152613-13.457792l.0052112-6.728477.07412-.351633h39.376609v20.051894c-.0012563 2.274315-1.0150683 3.296564-3.2562587 3.296564zm-2.9399291-4.284026v-16.27937h-9.9182724v16.27937zm13.8946264 45.346016h-55.6867964l-.0309357-.517247c-.009579-.164357-.0168026-.322906-.0168026-.482397l-.0012563-24.413404c0-1.46807.3442187-2.835673 1.59421-3.705965.6030108-.42196 1.4271257-.740942 2.1494824-.740942 8.05522-.020721 16.1098119-.028256 24.1637757-.030297l24.1600068.002669c2.0703373 0 3.732386 1.609978 3.7449487 3.850385l.0088974 2.052071.0110909 3.997474.0038391 5.832642-.0137772 13.808401z" fill="#9ecc4f" mask="url(#b)"/><path d="m257.898518 254.20156c2.691012 0 4.11332-1.34856 4.19705-3.976974l.003926-.250162v-70.456031c-.004873-2.573165-1.380041-4.031583-3.873495-4.117609l-.237029-.004036h-70.577396c-2.706011 0-4.1457 1.456767-4.1457 4.17439-.006281 23.489112-.006281 46.974455 0 70.457287 0 2.637707 1.353757 4.083911 3.910065 4.169138l.243173.003997zm-18.844089-48.024331-33.228411-.002512c-1.736169 0-2.949728-1.087552-2.956009-2.808044-.020101-4.486675-.018984-8.972233-.015262-13.457792l.005211-6.728477.07412-.351633h39.376609v20.051894c-.001256 2.274315-1.015068 3.296564-3.256258 3.296564zm-2.939929-4.284026v-16.27937h-9.918273v16.27937zm13.894626 45.346016h-55.686796l-.030936-.517247c-.009579-.164357-.016803-.322906-.016803-.482397l-.001256-24.413404c0-1.46807.344219-2.835673 1.59421-3.705965.603011-.42196 1.427126-.740942 2.149482-.740942 8.05522-.020721 16.109812-.028256 24.163776-.030297l24.160007.002669c2.070337 0 3.732386 1.609978 3.744949 3.850385l.015472 4.066295.007279 3.9424v5.801579l-.012701 11.880314z" fill="#9ecc4f" mask="url(#b)"/><path d="m169.941919 1.5891547h-2.858597c.085161.22998007.136003.47266621.136003.72805844v2.08506787c0 1.17912431-.950748 2.12953916-2.122658 2.12953916h-3.917383c-1.170639 0-2.122657-.95422668-2.122657-2.12953916v-2.08506787c0-.25539223.050842-.50061959.13346-.72805844h-53.160491c.082618.22998007.134732.47266621.134732.72805844v2.08506787c0 1.17912431-.950748 2.12953916-2.123929 2.12953916h-3.914841c-1.1731811 0-2.1251993-.95422668-2.1251993-2.12953916v-2.08506787c0-.25539223.0521132-.50061959.1347316-.72805844h-3.4483649v80.0101913h3.4483649c-.0826184-.22998-.1347316-.4726662-.1347316-.729329v-2.0825267c0-1.1816655.9507471-2.1308097 2.1251993-2.1308097h3.914841c1.170639 0 2.123929.952956 2.123929 2.1308097v2.0825267c0 .2579334-.052114.5018902-.134732.729329h53.161762c-.083889-.22998-.134731-.4726662-.134731-.729329v-2.0825267c0-1.1816655.949476-2.1308097 2.122657-2.1308097h3.917383c1.170639 0 2.122658.952956 2.122658 2.1308097v2.0825267c0 .2579334-.050842.5018902-.134732.729329h2.857326zm-63.777591 68.3574446c0 1.1803949-.950748 2.1308097-2.123929 2.1308097h-3.914841c-1.1731811 0-2.1251993-.9542267-2.1251993-2.1308097v-2.0837973c0-1.1816655.9507471-2.1320804 2.1251993-2.1320804h3.914841c1.170639 0 2.123929.9542267 2.123929 2.1320804zm0-10.9246884c0 1.1803949-.950748 2.1308098-2.123929 2.1308098h-3.914841c-1.1731811 0-2.1251993-.9542267-2.1251993-2.1308098v-2.0837973c0-1.1803949.9507471-2.1295391 2.1251993-2.1295391h3.914841c1.170639 0 2.123929.9529561 2.123929 2.1295391zm0-10.9234177c0 1.1816655-.950748 2.1308097-2.123929 2.1308097h-3.914841c-1.1731811 0-2.1251993-.9542266-2.1251993-2.1308097v-2.0837973c0-1.1816655.9507471-2.1308098 2.1251993-2.1308098h3.914841c1.170639 0 2.123929.9542267 2.123929 2.1308098zm0-10.9246884c0 1.1816656-.950748 2.1308098-2.123929 2.1308098h-3.914841c-1.1731811 0-2.1251993-.9529561-2.1251993-2.1308098v-2.0837972c0-1.1816656.9507471-2.1320804 2.1251993-2.1320804h3.914841c1.170639 0 2.123929.9554973 2.123929 2.1320804zm0-10.9234177c0 1.1778537-.950748 2.1308098-2.123929 2.1308098h-3.914841c-1.1731811 0-2.1251993-.9554973-2.1251993-2.1308098v-2.0837973c0-1.1816655.9507471-2.1320803 2.1251993-2.1320803h3.914841c1.170639 0 2.123929.9554972 2.123929 2.1320803zm0-10.9246884c0 1.180395-.950748 2.1308098-2.123929 2.1308098h-3.914841c-1.1731811 0-2.1251993-.9554973-2.1251993-2.1308098v-2.0837972c0-1.1803949.9507471-2.1320804 2.1251993-2.1320804h3.914841c1.170639 0 2.123929.9554973 2.123929 2.1320804zm47.881811 57.3222134c0 1.805534-1.482047 3.2832513-3.292026 3.2832513h-36.880853c-1.809979 0-3.292026-1.4777173-3.292026-3.2832513v-22.9878416c0-1.8055341 1.482047-3.2819807 3.292026-3.2819807h36.880853c1.809979 0 3.292026 1.4764466 3.292026 3.2819807zm.113123-37.3482542c0 1.815699-1.490944 3.3010398-3.30982 3.3010398h-37.071511c-1.818876 0-3.308549-1.4853408-3.308549-3.3010398v-23.1060081c0-1.8144283 1.489673-3.29849859 3.308549-3.29849859h37.071511c1.818876 0 3.30982 1.48407029 3.30982 3.29849859zm13.060063 34.6469414c0 1.1803949-.950748 2.1308097-2.122658 2.1308097h-3.917383c-1.170639 0-2.122657-.9542267-2.122657-2.1308097v-2.0837973c0-1.1816655.949476-2.1320804 2.122657-2.1320804h3.917383c1.170639 0 2.122658.9542267 2.122658 2.1320804zm0-10.9246884c0 1.1803949-.950748 2.1308098-2.122658 2.1308098h-3.917383c-1.170639 0-2.122657-.9542267-2.122657-2.1308098v-2.0837973c0-1.1803949.949476-2.1295391 2.122657-2.1295391h3.917383c1.170639 0 2.122658.9529561 2.122658 2.1295391zm0-10.9234177c0 1.1816655-.950748 2.1308097-2.122658 2.1308097h-3.917383c-1.170639 0-2.122657-.9542266-2.122657-2.1308097v-2.0837973c0-1.1816655.949476-2.1308098 2.122657-2.1308098h3.917383c1.170639 0 2.122658.9542267 2.122658 2.1308098zm0-10.9246884c0 1.1816656-.950748 2.1308098-2.122658 2.1308098h-3.917383c-1.170639 0-2.122657-.9529561-2.122657-2.1308098v-2.0837972c0-1.1816656.949476-2.1320804 2.122657-2.1320804h3.917383c1.170639 0 2.122658.9554973 2.122658 2.1320804zm0-10.9234177c0 1.1778537-.950748 2.1308098-2.122658 2.1308098h-3.917383c-1.170639 0-2.122657-.9554973-2.122657-2.1308098v-2.0837973c0-1.1816655.949476-2.1320803 2.122657-2.1320803h3.917383c1.170639 0 2.122658.9554972 2.122658 2.1320803zm0-10.9246884c0 1.180395-.950748 2.1308098-2.122658 2.1308098h-3.917383c-1.170639 0-2.122657-.9554973-2.122657-2.1308098v-2.0837972c0-1.1803949.949476-2.1320804 2.122657-2.1320804h3.917383c1.170639 0 2.122658.9554973 2.122658 2.1320804z" fill="#f1644b" mask="url(#b)"/><g fill="#aa99c9" fill-rule="nonzero"><path d="m190.008055 118.856762.06738-.002313.202632-.017721.283463-.033433.551385-.075029 1.413532-.213695 4.114125-.676v-6.417866l-13.686253 1.919415.604476 6.757576.622534 6.83318.636344 6.874152.645903 6.880491.651215 6.852199.977487 10.14949c.108211 1.115526.216201 2.226266.323881 3.331499 2.244254-.219873 4.534679-.451595 6.861181-.69245l4.698114-.493084c.790039-.083943 1.583338-.168699 2.379525-.254168l4.808769-.520571 7.303803-.802397 12.265177-1.354553 4.885987-.533775 4.847589-.521939c5.626144-.600147 11.137253-1.166276 16.405082-1.663902-.057466-.377108-.110561-.8521-.159691-1.38768l-.070771-.844148-.065129-.907059-.087779-1.417357-.20156-3.779696c-.005977-.105888-.011809-.20624-.0175-.300471-.377122.045061-.863464.067592-1.404401.078857l-.845524.009857-1.772851.002817-.845389.009857c-.540816.011265-1.026978.033796-1.403858.078857v2.759279c-6.421305.606888-12.851014 1.281323-19.282875 1.975881l-12.864738 1.401893c-6.431951.70031-12.861886 1.389126-19.283552 2.019024l-2.678814-26.182008zm9.708286 24.890082h62.646972v-48.3391642h-62.646972zm5.78815-42.762121h51.250918v19.671611l-6.451306-10.9748-8.682708 20.570918-7.416158-8.816655-20.319735 16.672644h-8.381011zm19.716341 12.355397c0 3.477383-2.774072 6.236662-6.331784 6.236662-3.436263 0-6.390581-2.759279-6.390581-6.236662 0-3.418898 2.954318-6.23762 6.390581-6.23762 3.478652 0 6.208105 2.694837 6.327696 6.010607z" mask="url(#b)"/><path d="m8.50178283 37.8554944.06738008-.0023133.20263199-.0177206.28346326-.0334334.76303076-.1056252 1.46084558-.2239078 3.8551654-.6351912v-6.4178655l-13.68625347 1.9194154.29971525 3.3671728.61403634 6.799707.62997002 6.8579949.6416547 6.8816506.64909042 6.8706739.65227715 6.8250649.97509621 10.076322c1.49616923-.146582 3.0128591-.29843 4.54707848-.4547395l4.6522556-.4815092 4.739486-.5034529 4.8087696-.520571 19.5689796-2.1569499 4.8859864-.5337752 4.8475896-.5219388c5.6261437-.6001474 11.1372525-1.1662761 16.4050819-1.6639024-.0574661-.3771079-.1105608-.8520995-.1596905-1.3876792l-.0707716-.8441486-.0651287-.9070589-.0597907-.9419975-.0547573-.9489644-.1747909-3.3060911c-.0059777-.1058884-.0118091-.2062396-.0175006-.300471-.4714018.0563265-1.1134607.077449-1.8194867.0853699l-.8711072.0045765-1.3321818.0015842-.8453886.0098572c-.5408168.0112653-1.0269781.0337959-1.4038585.0788571v2.7592795c-6.421305.6068881-12.8510139 1.281323-19.2828747 1.9758805l-12.864738 1.4018932c-6.4319511.70031-12.861886 1.3891261-19.2835524 2.0190242l-2.86056387-27.9915709zm9.70828547 24.8900819h62.6469723v-48.3391642h-62.6469723zm5.7881507-42.7621214h51.250918v19.6716113l-6.4513061-10.9747995-8.682708 20.5709179-7.4161585-8.8166555-20.3197345 16.6726445h-8.3810109zm19.7163403 12.3553979c0 3.4773825-2.7740713 6.236662-6.3317839 6.236662-3.4362627 0-6.3905811-2.7592795-6.3905811-6.236662 0-3.4188988 2.9543184-6.2376208 6.3905811-6.2376208 3.4786523 0 6.2081048 2.6948374 6.327696 6.0106077z" mask="url(#b)"/></g></g></g></g></svg>
`,yl=O`
  <svg viewBox="0 0 787 400" xmlns="http://www.w3.org/2000/svg"><g fill="#999" fill-rule="evenodd"><path d="m392.387152 0c90.212937 0 163.325255 73.1823935 163.325255 163.414428 0 34.161159-10.533846 65.858529-28.422252 92.099564l96.093209 96.172128c5.880272 5.034454 9.616636 12.49332 9.616636 20.857826 0 15.159612-12.300741 27.456054-27.47128 27.456054-7.270154 0-13.876316-2.846294-18.788734-7.464492l-97.84885-97.516523c-27.037997 19.929684-60.361413 31.804247-96.503984 31.804247-90.274834 0-163.387152-73.126143-163.387152-163.408804 0-90.2320345 73.112318-163.414428 163.387152-163.414428zm.132028 36c-70.323133 0-127.51918 57.1785661-127.51918 127.511499 0 70.294604 57.196047 127.488501 127.51918 127.488501 70.246413 0 127.48082-57.193897 127.48082-127.488501 0-70.3329329-57.234407-127.511499-127.48082-127.511499z"/><path d="m378.080616 218.418605v24.781395h24.697248v-24.781395zm-36.267131-84.83721h18.912307c0-5.209302.593328-10.046511 1.779982-14.511628 1.186655-4.465116 3.077886-8.334883 5.673692-11.609302 2.595807-3.274418 5.822025-5.87907 9.678652-7.8139534 3.856627-1.9348837 8.454914-2.9023256 13.79486-2.9023256 8.009918 0 14.351104 2.3069768 19.023556 6.92093 4.672453 4.613954 7.305342 11.013954 7.89867 19.2.296663 5.506977-.37083 10.195349-2.00248 14.065117-1.63165 3.869767-3.819544 7.404651-6.563683 10.604651s-5.710775 6.251163-8.89991 9.153488c-3.189134 2.902326-6.229936 6.065116-9.122407 9.488372-2.89247 3.423256-5.339945 7.330233-7.342425 11.72093-2.00248 4.390698-3.152051 9.711628-3.448715 15.962791v10.493023h18.912308v-8.706976c0-3.869768.556244-7.330233 1.668733-10.381396 1.112488-3.051163 2.595807-5.879069 4.449954-8.483721 1.854148-2.604651 3.930794-5.060465 6.229937-7.367442 2.299143-2.306976 4.635369-4.576744 7.008679-6.809302 2.373309-2.381395 4.709535-4.837209 7.008678-7.367442 2.299144-2.530232 4.338706-5.283721 6.118688-8.260465s3.226217-6.288372 4.338706-9.934884c1.112489-3.646511 1.668733-7.776744 1.668733-12.390697 0-7.144186-1.149572-13.469768-3.448715-18.976744-2.299143-5.506977-5.52536-10.1581399-9.678651-13.9534888-4.153292-3.7953488-9.085325-6.6976744-14.7961-8.7069767s-12.051961-3.0139535-19.023556-3.0139535c-7.713255 0-14.684851 1.3395349-20.914788 4.0186047-6.229936 2.6790697-11.495716 6.4372093-15.797339 11.2744186-4.301623 4.8372097-7.602006 10.5302327-9.901149 17.0790697s-3.374549 13.618605-3.226217 21.209302z" fill-rule="nonzero"/></g></svg>
`;let Si=class extends I{constructor(){super(...arguments),this.placeholderType=null}render(){return this.placeholderType?u`${this.placeholderTemplate}`:$}get placeholderTemplate(){return u`
      <div
        class="placeholder ${this.placeholderType} ${this.isMobileView?"mobile":"desktop"}"
      >
        ${fl(this.placeholderType,[["empty-query",()=>this.emptyQueryTemplate],["null-result",()=>this.nullResultTemplate]])}
      </div>
    `}get emptyQueryTemplate(){return u`
      <h2 class="title">
        To begin searching, enter a search term in the box above and hit "Go".
      </h2>
      <div>${gl}</div>
    `}get nullResultTemplate(){return u`
      <h2 class="title">
        Your search did not match any items in the Archive. Try different
        keywords or a more general search.
      </h2>
      <div>${yl}</div>
    `}static get styles(){return y`
      :host {
        text-align: center;
        width: 100%;
      }

      .placeholder {
        display: block;
      }

      .desktop svg {
        max-height: 40rem;
      }
      .desktop .title {
        margin: 4rem 0;
      }

      .mobile svg {
        max-height: 20rem;
      }
      .mobile .title {
        margin: 2rem 0.5;
      }
    `}};n([p({type:String})],Si.prototype,"placeholderType",void 0);n([p({type:Boolean})],Si.prototype,"isMobileView",void 0);Si=n([H("empty-placeholder")],Si);var va;(function(r){r.default="collection-browser"})(va||(va={}));var le;(function(r){r.sortBy="sortBy",r.filterByCreator="filterByCreator",r.filterByTitle="filterByTitle",r.displayMode="displayMode",r.facetSelected="facetSelected",r.facetDeselected="facetDeselected",r.facetNegativeSelected="facetNegativeSelected",r.facetNegativeDeselected="facetNegativeDeselected",r.histogramChanged="histogramChanged",r.resultSelected="resultSelected"})(le||(le={}));let k=class extends I{constructor(){super(...arguments),this.baseImageUrl="https://archive.org",this.sortParam=null,this.selectedSort=M.relevance,this.selectedTitleFilter=null,this.selectedCreatorFilter=null,this.sortDirection=null,this.pageSize=50,this.showHistogramDatePicker=!1,this.searchContext=va.default,this.pageContext="search",this.restorationStateHandler=new ml({context:this.pageContext}),this.mobileBreakpoint=600,this.loggedIn=!1,this.isManageView=!1,this.initialPageNumber=1,this.pagesToRender=this.initialPageNumber,this.searchResultsLoading=!1,this.facetsLoading=!1,this.fullYearAggregationLoading=!1,this.mobileView=!1,this.mobileFacetsVisible=!1,this.placeholderType=null,this.languageCodeHandler=new vl,this.isScrollingToCell=!1,this.endOfDataReached=!1,this.isResizeToMobile=!1,this.placeholderCellTemplate=u`<collection-browser-loading-tile></collection-browser-loading-tile>`,this.dataSource={},this.initialQueryChangeHappened=!1,this.historyPopOccurred=!1,this.pageFetchesInProgress={}}tileModelAtCellIndex(e){var t;const i=Math.floor(e/this.pageSize)+1,a=e%this.pageSize,o=(t=this.dataSource[i])===null||t===void 0?void 0:t[a];return!o&&!this.isScrollingToCell&&this.fetchPage(i),o}get sortFilterQueries(){return[this.titleQuery,this.creatorQuery].filter(t=>t).join(" AND ")}get estimatedTileCount(){return this.pagesToRender*this.pageSize}get actualTileCount(){return Object.keys(this.dataSource).reduce((e,t)=>e+this.dataSource[t].length,0)}goToPage(e){this.initialPageNumber=e,this.pagesToRender=e,this.scrollToPage(e)}clearFilters(){this.selectedFacets=yi,this.sortParam=null,this.selectedTitleFilter=null,this.selectedCreatorFilter=null,this.titleQuery=void 0,this.creatorQuery=void 0,this.selectedSort=M.relevance,this.sortDirection=null}render(){return this.setPlaceholderType(),u`
      <div
        id="content-container"
        class=${this.mobileView?"mobile":"desktop"}
      >
        ${this.placeholderType?this.emptyPlaceholderTemplate:this.collectionBrowserTemplate}
      </div>
    `}setPlaceholderType(){this.placeholderType=null,this.baseQuery||(this.placeholderType="empty-query"),!this.searchResultsLoading&&this.totalResults===0&&(this.placeholderType="null-result")}get emptyPlaceholderTemplate(){return u`
      <empty-placeholder
        .placeholderType=${this.placeholderType}
        ?isMobileView=${this.mobileView}
      ></empty-placeholder>
    `}get collectionBrowserTemplate(){return u`<div
        id="left-column"
        class="column${this.isResizeToMobile?" preload":""}"
      >
        <div id="mobile-header-container">
          ${this.mobileView?this.mobileFacetsTemplate:$}
          <div id="results-total">
            <span id="big-results-count">
              ${this.totalResults!==void 0?this.totalResults.toLocaleString():"-"}
            </span>
            <span id="big-results-label">
              ${this.totalResults===1?"Result":"Results"}
            </span>
          </div>
        </div>
        <div
          id="facets-container"
          class=${!this.mobileView||this.mobileFacetsVisible?"expanded":""}
        >
          ${this.facetsTemplate}
        </div>
      </div>
      <div id="right-column" class="column">
        ${this.searchResultsLoading?this.loadingTemplate:$}
        ${this.sortFilterBarTemplate}
        ${this.displayMode==="list-compact"?this.listHeaderTemplate:$}
        ${this.infiniteScrollerTemplate}
      </div>`}get infiniteScrollerTemplate(){return u`<infinite-scroller
      class="${_i(this.displayMode)}"
      .cellProvider=${this}
      .placeholderCellTemplate=${this.placeholderCellTemplate}
      @scrollThresholdReached=${this.scrollThresholdReached}
      @visibleCellsChanged=${this.visibleCellsChanged}
    ></infinite-scroller>`}get sortFilterBarTemplate(){return u`
      <sort-filter-bar
        .selectedSort=${this.selectedSort}
        .sortDirection=${this.sortDirection}
        .displayMode=${this.displayMode}
        .selectedTitleFilter=${this.selectedTitleFilter}
        .selectedCreatorFilter=${this.selectedCreatorFilter}
        .resizeObserver=${this.resizeObserver}
        @sortChanged=${this.userChangedSort}
        @displayModeChanged=${this.displayModeChanged}
        @titleLetterChanged=${this.titleLetterSelected}
        @creatorLetterChanged=${this.creatorLetterSelected}
      >
      </sort-filter-bar>
    `}userChangedSort(e){var t;const{selectedSort:i,sortDirection:a}=e.detail;this.selectedSort=i,this.sortDirection=a,((t=this.currentPage)!==null&&t!==void 0?t:1)>1&&this.goToPage(1),this.currentPage=1}sendSortByAnalytics(e){var t;const i=e&&!this.sortDirection;(t=this.analyticsHandler)===null||t===void 0||t.sendEventNoSampling({category:this.searchContext,action:le.sortBy,label:`${this.selectedSort}${this.sortDirection||i?`-${this.sortDirection}`:""}`})}selectedSortChanged(){if(this.selectedSort==="relevance"||this.sortDirection===null){this.sortParam=null;return}const e=nn[this.selectedSort];!e||(this.sortParam={field:e,direction:this.sortDirection})}displayModeChanged(e){var t;this.displayMode=e.detail.displayMode,this.displayMode&&((t=this.analyticsHandler)===null||t===void 0||t.sendEventNoSampling({category:this.searchContext,action:le.displayMode,label:this.displayMode}))}sendFilterByTitleAnalytics(e){var t;if(!e&&!this.selectedTitleFilter)return;const i=e&&this.selectedTitleFilter===null;(t=this.analyticsHandler)===null||t===void 0||t.sendEventNoSampling({category:this.searchContext,action:le.filterByTitle,label:i?`clear-${e}`:`${e||"start"}-${this.selectedTitleFilter}`})}selectedTitleLetterChanged(){this.titleQuery=this.selectedTitleFilter?`firstTitle:${this.selectedTitleFilter}`:void 0}sendFilterByCreatorAnalytics(e){var t;if(!e&&!this.selectedCreatorFilter)return;const i=e&&this.selectedCreatorFilter===null;(t=this.analyticsHandler)===null||t===void 0||t.sendEventNoSampling({category:this.searchContext,action:le.filterByCreator,label:i?`clear-${e}`:`${e||"start"}-${this.selectedCreatorFilter}`})}selectedCreatorLetterChanged(){this.creatorQuery=this.selectedCreatorFilter?`firstCreator:${this.selectedCreatorFilter}`:void 0}titleLetterSelected(e){this.selectedCreatorFilter=null,this.selectedTitleFilter=e.detail.selectedLetter}creatorLetterSelected(e){this.selectedTitleFilter=null,this.selectedCreatorFilter=e.detail.selectedLetter}get facetDataLoading(){return this.facetsLoading||this.fullYearAggregationLoading}get mobileFacetsTemplate(){return u`
      <div id="mobile-filter-collapse">
        <h1
          @click=${()=>{this.isResizeToMobile=!1,this.mobileFacetsVisible=!this.mobileFacetsVisible}}
          @keyup=${()=>{this.isResizeToMobile=!1,this.mobileFacetsVisible=!this.mobileFacetsVisible}}
        >
          <span class="collapser ${this.mobileFacetsVisible?"open":""}">
            ${ro}
          </span>
          Filters
        </h1>
      </div>
    `}get facetsTemplate(){return u`
      ${this.facetsLoading?this.loadingTemplate:$}
      <collection-facets
        @facetsChanged=${this.facetsChanged}
        @histogramDateRangeUpdated=${this.histogramDateRangeUpdated}
        .aggregations=${this.aggregations}
        .fullYearsHistogramAggregation=${this.fullYearsHistogramAggregation}
        .minSelectedDate=${this.minSelectedDate}
        .maxSelectedDate=${this.maxSelectedDate}
        .selectedFacets=${this.selectedFacets}
        .collectionNameCache=${this.collectionNameCache}
        .languageCodeHandler=${this.languageCodeHandler}
        .showHistogramDatePicker=${this.showHistogramDatePicker}
        ?collapsableFacets=${this.mobileView}
        ?facetsLoading=${this.facetDataLoading}
        ?fullYearAggregationLoading=${this.fullYearAggregationLoading}
        .onFacetClick=${this.facetClickHandler}
        .analyticsHandler=${this.analyticsHandler}
      >
      </collection-facets>
    `}get loadingTemplate(){return u`
      <div class="loading-cover">
        <circular-activity-indicator></circular-activity-indicator>
      </div>
    `}get listHeaderTemplate(){return u`
      <div id="list-header">
        <tile-dispatcher
          .tileDisplayMode=${"list-header"}
          .resizeObserver=${this.resizeObserver}
          .sortParam=${this.sortParam}
          .mobileBreakpoint=${this.mobileBreakpoint}
          .loggedIn=${this.loggedIn}
        >
        </tile-dispatcher>
      </div>
    `}get queryDebuggingTemplate(){var e,t;return u`
      <div>
        <ul>
          <li>Base Query: ${this.baseQuery}</li>
          <li>Facet Query: ${this.facetQuery}</li>
          <li>Sort Filter Query: ${this.sortFilterQueries}</li>
          <li>Date Range Query: ${this.dateRangeQueryClause}</li>
          <li>Sort: ${(e=this.sortParam)===null||e===void 0?void 0:e.field} ${(t=this.sortParam)===null||t===void 0?void 0:t.direction}</li>
          <li>Full Query: ${this.fullQuery}</li>
        </ul>
      </div>
    `}histogramDateRangeUpdated(e){var t;const{minDate:i,maxDate:a}=e.detail;this.dateRangeQueryClause=`year:[${i} TO ${a}]`,this.dateRangeQueryClause&&((t=this.analyticsHandler)===null||t===void 0||t.sendEventNoSampling({category:this.searchContext,action:le.histogramChanged,label:this.dateRangeQueryClause}))}firstUpdated(){this.setupStateRestorationObserver(),this.restoreState()}updated(e){var t;if((e.has("displayMode")||e.has("baseNavigationUrl")||e.has("baseImageUrl")||e.has("loggedIn"))&&((t=this.infiniteScroller)===null||t===void 0||t.reload()),e.has("baseQuery")&&this.emitBaseQueryChanged(),(e.has("currentPage")||e.has("displayMode"))&&this.persistState(),(e.has("baseQuery")||e.has("titleQuery")||e.has("creatorQuery")||e.has("dateRangeQueryClause")||e.has("sortParam")||e.has("selectedFacets")||e.has("searchService"))&&this.handleQueryChange(),e.has("selectedSort")||e.has("sortDirection")){const i=e.get("sortDirection");this.sendSortByAnalytics(i),this.selectedSortChanged()}if(e.has("selectedTitleFilter")&&(this.sendFilterByTitleAnalytics(e.get("selectedTitleFilter")),this.selectedTitleLetterChanged()),e.has("selectedCreatorFilter")&&(this.sendFilterByCreatorAnalytics(e.get("selectedCreatorFilter")),this.selectedCreatorLetterChanged()),e.has("pagesToRender")&&!this.endOfDataReached&&this.infiniteScroller&&(this.infiniteScroller.itemCount=this.estimatedTileCount),e.has("resizeObserver")){const i=e.get("resizeObserver");i&&this.disconnectResizeObserver(i),this.setupResizeObserver()}}disconnectedCallback(){this.resizeObserver&&this.disconnectResizeObserver(this.resizeObserver),this.boundNavigationHandler&&window.removeEventListener("popstate",this.boundNavigationHandler)}handleResize(e){const t=this.mobileView;e.target===this.contentContainer&&(this.mobileView=e.contentRect.width<this.mobileBreakpoint,this.mobileView&&!t&&(this.isResizeToMobile=!0))}emitBaseQueryChanged(){this.dispatchEvent(new CustomEvent("baseQueryChanged",{detail:{baseQuery:this.baseQuery}}))}disconnectResizeObserver(e){e.removeObserver({target:this.contentContainer,handler:this})}setupResizeObserver(){!this.resizeObserver||this.resizeObserver.addObserver({target:this.contentContainer,handler:this})}visibleCellsChanged(e){if(this.isScrollingToCell)return;const{visibleCellIndices:t}=e.detail;if(t.length===0)return;const i=t[t.length-1],a=Math.floor(i/this.pageSize)+1;this.currentPage!==a&&(this.currentPage=a);const o=new CustomEvent("visiblePageChanged",{detail:{pageNumber:a}});this.dispatchEvent(o)}async handleQueryChange(){!this.searchService||this.pageFetchQueryKey===this.previousQueryKey||(this.previousQueryKey=this.pageFetchQueryKey,this.dataSource={},this.pageFetchesInProgress={},this.endOfDataReached=!1,this.pagesToRender=this.initialPageNumber,!this.initialQueryChangeHappened&&this.initialPageNumber>1&&this.scrollToPage(this.initialPageNumber),this.initialQueryChangeHappened=!0,this.historyPopOccurred||(this.persistState(),this.historyPopOccurred=!1),await Promise.all([this.doInitialPageFetch(),this.fetchFacets(),this.fetchFullYearHistogram()]))}setupStateRestorationObserver(){this.boundNavigationHandler||(this.boundNavigationHandler=this.historyNavigationHandler.bind(this),window.addEventListener("popstate",this.boundNavigationHandler))}historyNavigationHandler(){this.historyPopOccurred=!0,this.restoreState()}restoreState(){var e,t,i,a,o,s;const l=this.restorationStateHandler.getRestorationState();this.displayMode=l.displayMode,this.selectedSort=(e=l.selectedSort)!==null&&e!==void 0?e:M.relevance,this.sortDirection=(t=l.sortDirection)!==null&&t!==void 0?t:null,this.selectedTitleFilter=(i=l.selectedTitleFilter)!==null&&i!==void 0?i:null,this.selectedCreatorFilter=(a=l.selectedCreatorFilter)!==null&&a!==void 0?a:null,this.selectedFacets=l.selectedFacets,this.baseQuery=l.baseQuery,this.titleQuery=l.titleQuery,this.creatorQuery=l.creatorQuery,this.dateRangeQueryClause=l.dateRangeQueryClause,this.sortParam=(o=l.sortParam)!==null&&o!==void 0?o:null,this.currentPage=(s=l.currentPage)!==null&&s!==void 0?s:1,this.minSelectedDate=l.minSelectedDate,this.maxSelectedDate=l.maxSelectedDate,this.currentPage>1&&this.goToPage(this.currentPage)}persistState(){var e,t,i,a,o;const s={displayMode:this.displayMode,sortParam:(e=this.sortParam)!==null&&e!==void 0?e:void 0,selectedSort:this.selectedSort,sortDirection:(t=this.sortDirection)!==null&&t!==void 0?t:void 0,selectedFacets:(i=this.selectedFacets)!==null&&i!==void 0?i:yi,baseQuery:this.baseQuery,currentPage:this.currentPage,dateRangeQueryClause:this.dateRangeQueryClause,titleQuery:this.titleQuery,creatorQuery:this.creatorQuery,minSelectedDate:this.minSelectedDate,maxSelectedDate:this.maxSelectedDate,selectedTitleFilter:(a=this.selectedTitleFilter)!==null&&a!==void 0?a:void 0,selectedCreatorFilter:(o=this.selectedCreatorFilter)!==null&&o!==void 0?o:void 0};this.restorationStateHandler.persistState(s)}async doInitialPageFetch(){this.searchResultsLoading=!0,await this.fetchPage(this.initialPageNumber),this.searchResultsLoading=!1}get fullQuery(){let{fullQueryWithoutDate:e}=this;const{dateRangeQueryClause:t}=this;return t&&(e+=` AND ${t}`),e}get fullQueryWithoutDate(){if(!this.baseQuery)return;let e=this.baseQuery;const{facetQuery:t,sortFilterQueries:i}=this;return t&&(e+=` AND ${t}`),i&&(e+=` AND ${i}`),e}get facetQuery(){if(!this.selectedFacets)return;const e=[];for(const[t,i]of Object.entries(this.selectedFacets)){const a=Object.entries(i);if(a.length===0)continue;const o=[];for(const[l,d]of a){const h=d==="hidden"?"-":"";if(t==="language"){const m=this.languageCodeHandler.getCodeArrayFromCodeString(l);for(const v of m)o.push(`${h}"${v}"`)}else o.push(`${h}"${l}"`)}const s=o.join(" OR ");e.push(`${t}:(${s})`)}return e.length>0?`(${e.join(" AND ")})`:void 0}facetsChanged(e){this.selectedFacets=e.detail}facetClickHandler(e,t,i){var a,o;i?(a=this.analyticsHandler)===null||a===void 0||a.sendEventNoSampling({category:this.searchContext,action:t?le.facetNegativeSelected:le.facetNegativeDeselected,label:e}):(o=this.analyticsHandler)===null||o===void 0||o.sendEventNoSampling({category:this.searchContext,action:t?le.facetSelected:le.facetDeselected,label:e})}async fetchFacets(){var e,t;if(!this.fullQuery)return;const i={advancedParams:[{field:"subjectSorter",size:6},{field:"mediatypeSorter",size:6},{field:"languageSorter",size:6},{field:"creatorSorter",size:6},{field:"collection",size:12},{field:"year",size:50}]},a={query:this.fullQuery,fields:["identifier"],aggregations:i,rows:1};this.facetsLoading=!0;const o=await((e=this.searchService)===null||e===void 0?void 0:e.search(a));this.facetsLoading=!1,this.aggregations=(t=o==null?void 0:o.success)===null||t===void 0?void 0:t.response.aggregations}get fullQueryNoDateKey(){var e,t;return`${this.fullQueryWithoutDate}-${(e=this.sortParam)===null||e===void 0?void 0:e.field}-${(t=this.sortParam)===null||t===void 0?void 0:t.direction}`}async fetchFullYearHistogram(){var e,t,i,a;const{fullQueryNoDateKey:o}=this;if(!this.fullQueryWithoutDate||o===this.previousFullQueryNoDate)return;this.previousFullQueryNoDate=o;const s={simpleParams:["year"]},l={query:this.fullQueryWithoutDate,fields:["identifier"],aggregations:s,rows:1};this.fullYearAggregationLoading=!0;const d=await((e=this.searchService)===null||e===void 0?void 0:e.search(l));this.fullYearAggregationLoading=!1,this.fullYearsHistogramAggregation=(a=(i=(t=d==null?void 0:d.success)===null||t===void 0?void 0:t.response)===null||i===void 0?void 0:i.aggregations)===null||a===void 0?void 0:a.year_histogram}scrollToPage(e){const t=this.pageSize*(e-1);setTimeout(()=>{this.isScrollingToCell=!0,this.infiniteScroller.scrollToCell(t,!0),setTimeout(()=>{this.isScrollingToCell=!1,this.infiniteScroller.reload()},500)},0)}get pageFetchQueryKey(){var e,t;return`${this.fullQuery}-${(e=this.sortParam)===null||e===void 0?void 0:e.field}-${(t=this.sortParam)===null||t===void 0?void 0:t.direction}`}async fetchPage(e){var t,i,a,o,s;if(!this.fullQuery||this.dataSource[e]||this.endOfDataReached)return;const{pageFetchQueryKey:l}=this,d=(t=this.pageFetchesInProgress[l])!==null&&t!==void 0?t:new Set;if(d.has(e))return;d.add(e),this.pageFetchesInProgress[l]=d;const h=this.sortParam?[this.sortParam]:[],m={query:this.fullQuery,fields:["addeddate","avg_rating","collections_raw","creator","date","description","downloads","identifier","issue","item_count","mediatype","num_favorites","num_reviews","publicdate","reviewdate","source","subject","title","volume"],page:e,rows:this.pageSize,sort:h},v=await((i=this.searchService)===null||i===void 0?void 0:i.search(m)),g=v==null?void 0:v.success;if(!g)return;this.totalResults=g.response.numFound;const b=g.responseHeader.params.qin,S=g.responseHeader.params.sort;let z=!1;if(!S)this.sortParam&&(z=!0);else if(S.split(" ").length>1){const L=S.split(" ")[0],N=S.split(" ")[1];(L!==((a=this.sortParam)===null||a===void 0?void 0:a.field)||N!==((o=this.sortParam)===null||o===void 0?void 0:o.direction))&&(z=!0)}if(b!==this.fullQuery||z)return;const{docs:A}=g.response;A&&A.length>0&&(this.preloadCollectionNames(A),this.updateDataSource(e,A)),A.length<this.pageSize&&(this.endOfDataReached=!0,this.infiniteScroller&&(this.infiniteScroller.itemCount=this.actualTileCount)),(s=this.pageFetchesInProgress[l])===null||s===void 0||s.delete(e),this.searchResultsLoading=!1}preloadCollectionNames(e){var t;const i=e.map(o=>{var s;return(s=o.collections_raw)===null||s===void 0?void 0:s.values}).flat(),a=Array.from(new Set(i));(t=this.collectionNameCache)===null||t===void 0||t.preloadIdentifiers(a)}get currentVisiblePageNumbers(){const e=this.infiniteScroller.getVisibleCellIndices(),t=new Set;return e.forEach(i=>{const a=Math.floor(i/this.pageSize)+1;t.add(a)}),Array.from(t)}updateDataSource(e,t){const i=ce({},this.dataSource),a=[];t==null||t.forEach(l=>{var d,h,m,v,g,b,S,z,E,A,F,L,N,K,ne,ye,zt,kt,Tt,Dt,Je,ie,Re,Ne,Mt,At,Et,et,Pe,W,tt,j,it,U;if(!l.identifier)return;let Se=!1,Be=!1;if(((d=l.collections_raw)===null||d===void 0?void 0:d.values.length)&&((h=l.mediatype)===null||h===void 0?void 0:h.value)!=="collection"){for(const Ot of(m=l.collections_raw)===null||m===void 0?void 0:m.values)if(Ot==="loggedin"&&(Se=!0,Be)||Ot==="no-preview"&&(Be=!0,Se))break}a.push({averageRating:(v=l.avg_rating)===null||v===void 0?void 0:v.value,collections:(b=(g=l.collections_raw)===null||g===void 0?void 0:g.values)!==null&&b!==void 0?b:[],commentCount:(z=(S=l.num_reviews)===null||S===void 0?void 0:S.value)!==null&&z!==void 0?z:0,creator:(E=l.creator)===null||E===void 0?void 0:E.value,creators:(F=(A=l.creator)===null||A===void 0?void 0:A.values)!==null&&F!==void 0?F:[],dateAdded:(L=l.addeddate)===null||L===void 0?void 0:L.value,dateArchived:(N=l.publicdate)===null||N===void 0?void 0:N.value,datePublished:(K=l.date)===null||K===void 0?void 0:K.value,dateReviewed:(ne=l.reviewdate)===null||ne===void 0?void 0:ne.value,description:(ye=l.description)===null||ye===void 0?void 0:ye.value,favCount:(kt=(zt=l.num_favorites)===null||zt===void 0?void 0:zt.value)!==null&&kt!==void 0?kt:0,identifier:l.identifier,issue:(Tt=l.issue)===null||Tt===void 0?void 0:Tt.value,itemCount:(Je=(Dt=l.item_count)===null||Dt===void 0?void 0:Dt.value)!==null&&Je!==void 0?Je:0,mediatype:(Re=(ie=l.mediatype)===null||ie===void 0?void 0:ie.value)!==null&&Re!==void 0?Re:"data",snippets:(Mt=(Ne=l.snippets)===null||Ne===void 0?void 0:Ne.values)!==null&&Mt!==void 0?Mt:[],source:(At=l.source)===null||At===void 0?void 0:At.value,subjects:(et=(Et=l.subject)===null||Et===void 0?void 0:Et.values)!==null&&et!==void 0?et:[],title:this.etreeTitle((Pe=l.title)===null||Pe===void 0?void 0:Pe.value,(W=l.mediatype)===null||W===void 0?void 0:W.value,(tt=l.collection)===null||tt===void 0?void 0:tt.values),volume:(j=l.volume)===null||j===void 0?void 0:j.value,viewCount:(U=(it=l.downloads)===null||it===void 0?void 0:it.value)!==null&&U!==void 0?U:0,loginRequired:Se,contentWarning:Be})}),i[e]=a,this.dataSource=i,this.currentVisiblePageNumbers.includes(e)&&this.infiniteScroller.reload()}etreeTitle(e,t,i){if(t==="etree"||(i==null?void 0:i.includes("etree"))){const a=/^(.*) Live at (.*) on (\d\d\d\d-\d\d-\d\d)$/,o=e==null?void 0:e.replace(a,"$3: $2");if(o)return`${o}`}return e!=null?e:""}resultSelected(e){var t,i;(t=this.analyticsHandler)===null||t===void 0||t.sendEventNoSampling({category:this.searchContext,action:le.resultSelected,label:e.detail.mediatype}),(i=this.analyticsHandler)===null||i===void 0||i.sendEventNoSampling({category:this.searchContext,action:le.resultSelected,label:`page-${this.currentPage}`})}cellForIndex(e){const t=this.tileModelAtCellIndex(e);if(!!t)return u`
      <tile-dispatcher
        .baseNavigationUrl=${this.baseNavigationUrl}
        .baseImageUrl=${this.baseImageUrl}
        .model=${t}
        .tileDisplayMode=${this.displayMode}
        .resizeObserver=${this.resizeObserver}
        .collectionNameCache=${this.collectionNameCache}
        .sortParam=${this.sortParam}
        .mobileBreakpoint=${this.mobileBreakpoint}
        .loggedIn=${this.loggedIn}
        @resultSelected=${i=>this.resultSelected(i)}
      >
      </tile-dispatcher>
    `}scrollThresholdReached(){this.pagesToRender+=1,this.fetchPage(this.pagesToRender)}};k.styles=y`
    :host {
      display: block;
    }

    /**
    * When page width resizes from desktop to mobile, use this class to
    * disable expand/collapse transition when loading.
    */
    .preload * {
      transition: none !important;
      -webkit-transition: none !important;
      -moz-transition: none !important;
      -ms-transition: none !important;
      -o-transition: none !important;
    }

    #content-container {
      display: flex;
    }

    .collapser {
      display: inline-block;
    }

    .collapser svg {
      width: 10px;
      height: 10px;
      transition: transform 0.2s ease-out;
    }

    .collapser.open svg {
      transform: rotate(90deg);
    }

    #mobile-filter-collapse h1 {
      cursor: pointer;
    }

    #content-container.mobile {
      display: block;
    }

    .column {
      padding-top: 2rem;
    }

    #right-column {
      flex: 1;
      position: relative;
      border-left: 1px solid rgb(232, 232, 232);
      padding-left: 1rem;
    }

    .mobile #right-column {
      border-left: none;
      padding: 0;
    }

    #left-column {
      width: 18rem;
      padding-right: 12px;
      padding-right: 1rem;
    }

    .desktop #left-column::-webkit-scrollbar {
      display: none;
    }

    .mobile #left-column {
      width: 100%;
      padding: 0;
    }

    .desktop #left-column {
      top: 0;
      position: sticky;
      max-height: 100vh;
      overflow: scroll;
      -ms-overflow-style: none; /* hide scrollbar IE and Edge */
      scrollbar-width: none; /* hide scrollbar Firefox */
    }

    #mobile-header-container {
      display: flex;
      justify-content: space-between;
    }

    #facets-container {
      position: relative;
      max-height: 0;
      transition: max-height 0.2s ease-in-out;
      z-index: 1;
      padding-bottom: 2rem;
    }

    .mobile #facets-container {
      overflow: hidden;
      padding-bottom: 0;
    }

    #facets-container.expanded {
      max-height: 2000px;
    }

    #results-total {
      display: flex;
      align-items: center;
      margin-bottom: 5rem;
    }

    .mobile #results-total {
      margin-bottom: 0;
    }

    #big-results-count {
      font-size: 2.4rem;
      font-weight: 500;
      margin-right: 5px;
    }

    #big-results-label {
      font-size: 1rem;
      font-weight: 200;
      text-transform: uppercase;
    }

    #list-header {
      max-height: 4.2rem;
    }

    .loading-cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      z-index: 1;
      padding-top: 50px;
    }

    circular-activity-indicator {
      width: 30px;
      height: 30px;
    }

    sort-filter-bar {
      display: block;
      margin-bottom: 4rem;
    }

    infinite-scroller {
      display: block;
      --infiniteScrollerRowGap: var(--collectionBrowserRowGap, 1.7rem);
      --infiniteScrollerColGap: var(--collectionBrowserColGap, 1.7rem);
    }

    infinite-scroller.list-compact {
      --infiniteScrollerCellMinWidth: var(
        --collectionBrowserCellMinWidth,
        100%
      );
      --infiniteScrollerCellMinHeight: 34px; /* override infinite scroller component */
      --infiniteScrollerCellMaxHeight: 56px;
      --infiniteScrollerRowGap: 0px;
    }

    infinite-scroller.list-detail {
      --infiniteScrollerCellMinWidth: var(
        --collectionBrowserCellMinWidth,
        100%
      );
      --infiniteScrollerCellMinHeight: var(
        --collectionBrowserCellMinHeight,
        5rem
      );
      /*
        30px in spec, compensating for a -4px margin
        to align title with top of item image
        src/tiles/list/tile-list.ts
       */
      --infiniteScrollerRowGap: 34px;
    }

    .mobile infinite-scroller.list-detail {
      --infiniteScrollerRowGap: 24px;
    }

    infinite-scroller.grid {
      --infiniteScrollerCellMinWidth: var(
        --collectionBrowserCellMinWidth,
        18rem
      );
      --infiniteScrollerCellMaxWidth: var(--collectionBrowserCellMaxWidth, 1fr);
      --infiniteScrollerCellMinHeight: var(
        --collectionBrowserCellMinHeight,
        29rem
      );
      --infiniteScrollerCellMaxHeight: var(
        --collectionBrowserCellMaxHeight,
        29rem
      );
    }
  `;n([p({type:String})],k.prototype,"baseNavigationUrl",void 0);n([p({type:String})],k.prototype,"baseImageUrl",void 0);n([p({type:Object})],k.prototype,"searchService",void 0);n([p({type:String})],k.prototype,"baseQuery",void 0);n([p({type:String})],k.prototype,"displayMode",void 0);n([p({type:Object})],k.prototype,"sortParam",void 0);n([p({type:String})],k.prototype,"selectedSort",void 0);n([p({type:String})],k.prototype,"selectedTitleFilter",void 0);n([p({type:String})],k.prototype,"selectedCreatorFilter",void 0);n([p({type:String})],k.prototype,"sortDirection",void 0);n([p({type:String})],k.prototype,"dateRangeQueryClause",void 0);n([p({type:Number})],k.prototype,"pageSize",void 0);n([p({type:Object})],k.prototype,"resizeObserver",void 0);n([p({type:String})],k.prototype,"titleQuery",void 0);n([p({type:String})],k.prototype,"creatorQuery",void 0);n([p({type:Number})],k.prototype,"currentPage",void 0);n([p({type:String})],k.prototype,"minSelectedDate",void 0);n([p({type:String})],k.prototype,"maxSelectedDate",void 0);n([p({type:Object})],k.prototype,"selectedFacets",void 0);n([p({type:Boolean})],k.prototype,"showHistogramDatePicker",void 0);n([p({type:String,reflect:!0})],k.prototype,"searchContext",void 0);n([p({type:Object})],k.prototype,"collectionNameCache",void 0);n([p({type:String})],k.prototype,"pageContext",void 0);n([p({type:Object})],k.prototype,"restorationStateHandler",void 0);n([p({type:Number})],k.prototype,"mobileBreakpoint",void 0);n([p({type:Boolean})],k.prototype,"loggedIn",void 0);n([p({type:Boolean})],k.prototype,"isManageView",void 0);n([T()],k.prototype,"pagesToRender",void 0);n([T()],k.prototype,"searchResultsLoading",void 0);n([T()],k.prototype,"facetsLoading",void 0);n([T()],k.prototype,"fullYearAggregationLoading",void 0);n([T()],k.prototype,"aggregations",void 0);n([T()],k.prototype,"fullYearsHistogramAggregation",void 0);n([T()],k.prototype,"totalResults",void 0);n([T()],k.prototype,"mobileView",void 0);n([T()],k.prototype,"mobileFacetsVisible",void 0);n([T()],k.prototype,"placeholderType",void 0);n([de("#content-container")],k.prototype,"contentContainer",void 0);n([p({type:Object,attribute:!1})],k.prototype,"analyticsHandler",void 0);n([de("infinite-scroller")],k.prototype,"infiniteScroller",void 0);k=n([H("collection-browser")],k);let se=class extends I{constructor(){super(...arguments),this.searchService=pt.default,this.resizeObserver=new Zo,this.localCache=new Vo,this.collectionNameCache=new Jo({searchService:this.searchService,localCache:this.localCache}),this.cellWidth=18,this.cellHeight=29,this.rowGap=1.7,this.colGap=1.7,this.loggedIn=!1,this.analyticsManager=new $o,this.analyticsHandler={sendPing:this.sendAnalytics.bind(this),sendEvent:this.sendAnalytics.bind(this),sendEventNoSampling:this.sendAnalytics.bind(this)}}sendAnalytics(e){var t;console.log("Analytics Received ----",e),this.latestAction=e,(t=this.analyticsManager)===null||t===void 0||t.sendEventNoSampling(e)}searchPressed(e){var t,i;e.preventDefault(),this.searchQuery=this.baseQueryField.value,((t=this.currentPage)!==null&&t!==void 0?t:1)>1&&this.collectionBrowser.goToPage((i=this.currentPage)!==null&&i!==void 0?i:1)}changePagePressed(e){e.preventDefault(),this.currentPage=this.pageNumberInput.valueAsNumber,this.collectionBrowser.goToPage(this.currentPage)}updated(e){e.has("currentPage")&&this.currentPage&&(this.pageNumberInput.value=this.currentPage.toString()),e.has("searchQuery")&&this.queryUpdated()}queryUpdated(){this.collectionBrowser.baseQuery=this.searchQuery}render(){var e;return u`
      <div id="dev-tools">
        <form @submit=${this.searchPressed}>
          Query:
          <input
            type="text"
            id="base-query-field"
            .value=${(e=this.searchQuery)!==null&&e!==void 0?e:""}
          />
          <input type="submit" value="Search" />
        </form>

        <form @submit=${this.changePagePressed}>
          Page: <input type="number" value="1" id="page-number-input" />
          <input type="submit" value="Go" />
        </form>

        <div id="last-event">
          <button
            @click=${()=>{var t;const i=(t=this.shadowRoot)===null||t===void 0?void 0:t.getElementById("latest-event-details");i==null||i.classList.toggle("hidden")}}
          >
            Last Event Captured
          </button>
          <pre id="latest-event-details">
            ${JSON.stringify(this.latestAction,null,2)}
          </pre
          >
        </div>

        <div id="cell-controls">
          <div id="cell-size-control">
            <div>
              <label for="cell-width-slider">Minimum cell width:</label>
              <input
                type="range"
                min="10"
                max="100"
                value="18"
                step="0.1"
                id="cell-width-slider"
                @input=${this.widthChanged}
              />
              <span>${this.cellWidth}rem</span>
            </div>
            <div>
              <label for="cell-height-slider">Cell height:</label>
              <input
                type="range"
                min="10"
                max="100"
                value="29"
                step="0.1"
                id="cell-height-slider"
                @input=${this.heightChanged}
              />
              <span>${this.cellHeight}rem</span>
            </div>
            <div>
              <label for="show-outline-check">Show outlines:</label>
              <input
                type="checkbox"
                id="show-outline-check"
                @click=${this.outlineChanged}
              />
            </div>
            <div>
              <label for="simulate-login">Simulate Login:</label>
              <input
                type="checkbox"
                id="simulate-login"
                @click=${this.loginChanged}
              />
            </div>
            <div>
              <label for="show-dummy-snippets">Show dummy snippets:</label>
              <input
                type="checkbox"
                id="show-dummy-snippets"
                @click=${this.snippetsChanged}
              />
            </div>
          </div>
          <div id="cell-gap-control">
            <div>
              <label for="cell-row-gap-slider">Row gap:</label>
              <input
                type="range"
                min="0"
                max="5"
                value="1.7"
                step="0.1"
                id="cell-row-gap-slider"
                @input=${this.rowGapChanged}
              />
              <span>${this.rowGap}rem</span>
            </div>
            <div>
              <label for="cell-col-gap-slider">Col gap:</label>
              <input
                type="range"
                min="0"
                max="5"
                value="1.7"
                step="0.1"
                id="cell-col-gap-slider"
                @input=${this.colGapChanged}
              />
              <span>${this.colGap}rem</span>
            </div>
          </div>
        </div>
      </div>

      <div id="collection-browser-container">
        <collection-browser
          .baseNavigationUrl=${"https://archive.org"}
          .baseImageUrl=${"https://archive.org"}
          .searchService=${this.searchService}
          .resizeObserver=${this.resizeObserver}
          .collectionNameCache=${this.collectionNameCache}
          .showHistogramDatePicker=${!0}
          .loggedIn=${this.loggedIn}
          .analyticsHandler=${this.analyticsHandler}
          @visiblePageChanged=${this.visiblePageChanged}
          @baseQueryChanged=${this.baseQueryChanged}
        >
        </collection-browser>
      </div>
    `}baseQueryChanged(e){this.searchQuery=e.detail.baseQuery}loginChanged(e){e.target.checked?this.loggedIn=!0:this.loggedIn=!1}outlineChanged(e){e.target.checked?this.collectionBrowser.style.setProperty("--infiniteScrollerCellOutline","1px solid #33D1FF"):this.collectionBrowser.style.removeProperty("--infiniteScrollerCellOutline")}async snippetsChanged(e){e.target.checked?this.searchService=dt(ce({},pt.default),{async search(a){var o;const s=await pt.default.search(a);return(o=s.success)===null||o===void 0||o.response.docs.forEach(l=>{const d=l.rawMetadata;d&&(d.snippets=["this is a text {{{snippet}}} block with potentially","multiple {{{snippets}}} and such","but the {{{snippet}}} block may be quite long perhaps","depending on how many {{{snippet}}} matches there are","there may be multiple lines of {{{snippets}}} to show","but each {{{snippet}}} should be relatively short","and {{{snippets}}} are each a {{{snippet}}} of text","but every {{{snippet}}} might have multiple matches","the {{{snippets}}} should be separated and surrounded by ellipses"])}),s}}):this.searchService=pt.default;const i=this.searchQuery;this.searchQuery="",await this.updateComplete,await new Promise(a=>setTimeout(a,0)),this.searchQuery=i}rowGapChanged(e){const t=e.target;this.rowGap=parseFloat(t.value),this.collectionBrowser.style.setProperty("--collectionBrowserRowGap",`${t.value}rem`)}colGapChanged(e){const t=e.target;this.colGap=parseFloat(t.value),this.collectionBrowser.style.setProperty("--collectionBrowserColGap",`${t.value}rem`)}widthChanged(e){const t=e.target;this.cellWidth=parseFloat(t.value),this.collectionBrowser.style.setProperty("--collectionBrowserCellMinWidth",`${t.value}rem`)}heightChanged(e){const t=e.target;this.cellHeight=parseFloat(t.value),this.collectionBrowser.style.setProperty("--collectionBrowserCellMinHeight",`${t.value}rem`),this.collectionBrowser.style.setProperty("--collectionBrowserCellMaxHeight",`${t.value}rem`)}visiblePageChanged(e){const{pageNumber:t}=e.detail;t!==this.currentPage&&(this.currentPage=t)}};se.styles=y`
    :host {
      display: block;
      --ia-theme-link-color: #4b64ff;
    }

    input,
    button {
      font-size: 1.6rem;
    }

    collection-browser {
      margin-top: 30rem;
    }

    #base-query-field {
      width: 300px;
    }

    #dev-tools {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      padding: 0.5rem 1rem;
      border: 1px solid black;
    }

    #cell-controls {
      display: flex;
    }

    #cell-controls label {
      display: inline-block;
      width: 10rem;
    }

    #cell-gap-control {
      margin-left: 1rem;
    }

    #last-event {
      background-color: aliceblue;
      padding: 5px;
      margin: 5px auto;
    }

    .hidden {
      display: none;
    }
  `;n([T()],se.prototype,"currentPage",void 0);n([T()],se.prototype,"searchQuery",void 0);n([T()],se.prototype,"cellWidth",void 0);n([T()],se.prototype,"cellHeight",void 0);n([T()],se.prototype,"rowGap",void 0);n([T()],se.prototype,"colGap",void 0);n([T()],se.prototype,"loggedIn",void 0);n([p({type:Object,reflect:!1})],se.prototype,"latestAction",void 0);n([de("#base-query-field")],se.prototype,"baseQueryField",void 0);n([de("#page-number-input")],se.prototype,"pageNumberInput",void 0);n([de("collection-browser")],se.prototype,"collectionBrowser",void 0);se=n([H("app-root")],se);
