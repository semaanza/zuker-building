/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent } from '../astro_dTm8oGhI.mjs';
import { c as client, $ as $$Layout } from './404_RO9moxVy.mjs';

const $$Astro$1 = createAstro();
const $$GalleryComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GalleryComponent;
  const { imageArray } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap w-full items-center justify-evenly h-full" id="image-section"> ${imageArray.map((image) => renderTemplate`<div class="w-full sm:w-1/2 lg:w-1/4 m-6"> <img${addAttribute(image.image, "src")}${addAttribute(image.imageTitle ?? "", "alt")}${addAttribute(500, "width")}${addAttribute(500, "height")} sizes="(max-width: 768px) 100vw, 432px" class=" object-contain w-full h-full rounded-lg shadow-lg">  </div>`)} </div>`;
}, "/Users/zacharysemaan/code/zuker-building/src/components/GalleryComponent.astro", void 0);

const $$Astro = createAstro();
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  const galleryData = await client.queries.pages({
    relativePath: "gallery.json"
  });
  const imageArray = galleryData.data.pages.blocks?.find(
    (block) => block?.__typename === "PagesBlocksGallery"
  )?.images;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Zuker Building" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center"> <h1 class="flex text-3xl m-10 font-bold text-red-900">Gallery</h1> ${renderComponent($$result2, "GalleryComponent", $$GalleryComponent, { "imageArray": imageArray })} </div> ` })}`;
}, "/Users/zacharysemaan/code/zuker-building/src/pages/gallery.astro", void 0);

const $$file = "/Users/zacharysemaan/code/zuker-building/src/pages/gallery.astro";
const $$url = "/gallery";

export { $$Gallery as default, $$file as file, $$url as url };
