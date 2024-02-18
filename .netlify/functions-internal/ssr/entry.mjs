import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_kWXdtoAt.mjs';

const _page0  = () => import('./chunks/generic_a7XnE1n4.mjs');
const _page1  = () => import('./chunks/index_1g3zN1P2.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@4.2.4_@types+node@20.11.6_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"ce42cc9f-d77a-4a7b-ae20-e3413060b903"};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
