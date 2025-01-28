import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_397GBC96.mjs';

const _page0  = () => import('./chunks/generic_XgMTO33u.mjs');
const _page1  = () => import('./chunks/index_6qz4-BbM.mjs');
const _page2  = () => import('./chunks/404_foRhRAzP.mjs');
const _page3  = () => import('./chunks/gallery_e8TTsnSU.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@4.2.4_@types+node@20.11.6_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/404.astro", _page2],["src/pages/gallery.astro", _page3]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"8b64f90f-041d-4451-90e3-e16c5b817579"};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
