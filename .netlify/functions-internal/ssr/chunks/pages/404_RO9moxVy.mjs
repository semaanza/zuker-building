/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderHead, g as renderComponent, h as renderSlot } from '../astro_dTm8oGhI.mjs';
import { createClient } from 'tinacms/dist/client';

function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  title
  body
}
    `;
const PagesPartsFragmentDoc = gql`
    fragment PagesParts on Pages {
  __typename
  title
  blocks {
    __typename
    ... on PagesBlocksQuickAbout {
      quickAboutTitle
      quickAboutDescription
      quickAboutImage
    }
    ... on PagesBlocksServicesIntro {
      heading
      services {
        __typename
        title
        image
      }
    }
    ... on PagesBlocksTestimonials {
      heading
      testimonials {
        __typename
        name
        quote
      }
    }
    ... on PagesBlocksGallery {
      images {
        __typename
        imageTitle
        image
        imageDescription
      }
    }
    ... on PagesBlocksRecentProject {
      heading
      recentProjectDescription
      preImage
      postImage
    }
  }
}
    `;
const GlobalPartsFragmentDoc = gql`
    fragment GlobalParts on Global {
  __typename
  ... on GlobalNavbar {
    logo {
      __typename
      logoImage
      logoHref
    }
    navItems {
      __typename
      linkName
      linkHref
    }
    services {
      __typename
      servicesTitle
      servicesItems {
        __typename
        serviceName
        serviceHref
      }
    }
  }
  ... on GlobalFooter {
    footerLogo {
      __typename
      footerLogoImage
      footerLogoHref
    }
    footerNavItems {
      __typename
      linkName
      linkHref
    }
    footerSocialLinks {
      __typename
      socialName
      socialHref
      socialImage
    }
  }
}
    `;
const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
const PagesDocument = gql`
    query pages($relativePath: String!) {
  pages(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PagesParts
  }
}
    ${PagesPartsFragmentDoc}`;
const PagesConnectionDocument = gql`
    query pagesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PagesFilter) {
  pagesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PagesParts
      }
    }
  }
}
    ${PagesPartsFragmentDoc}`;
const GlobalDocument = gql`
    query global($relativePath: String!) {
  global(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...GlobalParts
  }
}
    ${GlobalPartsFragmentDoc}`;
const GlobalConnectionDocument = gql`
    query globalConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: GlobalFilter) {
  globalConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...GlobalParts
      }
    }
  }
}
    ${GlobalPartsFragmentDoc}`;
function getSdk(requester) {
  return {
    post(variables, options) {
      return requester(PostDocument, variables, options);
    },
    postConnection(variables, options) {
      return requester(PostConnectionDocument, variables, options);
    },
    pages(variables, options) {
      return requester(PagesDocument, variables, options);
    },
    pagesConnection(variables, options) {
      return requester(PagesConnectionDocument, variables, options);
    },
    global(variables, options) {
      return requester(GlobalDocument, variables, options);
    },
    globalConnection(variables, options) {
      return requester(GlobalConnectionDocument, variables, options);
    }
  };
}
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

const client = createClient({ cacheDir: "/Users/zacharysemaan/code/zuker-building/tina/__generated__/.cache/1738039669552", url: "https://content.tinajs.io/1.5/content/6d1bfec8-124f-4b81-a5fe-ead7b355906f/github/master", token: "c30775a5634ae411167abfb726bddc8e8c5762f8", queries });

const $$Astro$3 = createAstro();
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NavBar;
  const navbarData = await client.queries.global({
    relativePath: "navbar.json"
  });
  const services = navbarData.data.global.services;
  return renderTemplate` ${maybeRenderHead()}<header> <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global"> <div class="flex lg:flex-1"> <a href="/" class="-m-1.5 p-1.5"> <span class="sr-only">Zuker Building</span> <img class="h-8 w-auto"${addAttribute(navbarData?.data?.global?.logo?.logoImage, "src")} alt="Zuker Building Logo"> </a> </div> <div class="hidden lg:flex lg:gap-x-12"> <div class="relative"> <a id="flyout-menu-button" href="/#services" type="button" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-labrl="open flyout menu"> ${services?.servicesTitle} <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path> </svg> </a> <!-- Flyout menu, show/hide based on flyout menu state. --> <div aria-label="closed" id="flyout-menu" class="absolute invisible transition ease-in-out duration-500 opacity-0 -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"> <div class="p-4"> ${services?.servicesItems?.map(
    (service) => renderTemplate`<div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"> <div class="flex-auto"> <a${addAttribute(service?.serviceHref, "href")} class="block font-semibold text-gray-900"> ${service?.serviceName} <span class="absolute inset-0"></span> </a>  </div> </div>`
  )} </div> </div> </div> ${navbarData?.data?.global?.navItems?.map(
    (navItem) => renderTemplate`<a${addAttribute(navItem?.linkHref, "href")} class="text-sm font-semibold leading-6 text-gray-900"> ${navItem?.linkName} </a>`
  )} </div> <div class="lg:flex hidden lg:flex-1 lg:justify-end"> <a href="/#contact" class="text-sm font-semibold leading-6 text-gray-900">Contact <span aria-hidden="true">&rarr;</span></a> </div> <button id="mobile-display-button" class="lg:hidden flex justify-end"> <a href="#" class="text-sm font-semibold leading-6 text-gray-900"><span aria-hidden="false">Menu</span></a> </button> </nav> <!-- Mobile Menu --> <div class="lg:hidden invisible top-0 h-full fixed p-2 right-0 z-10 bg-white w-full sm:w-96 ring-1 transition translate-x-full ease-in-out duration-500 overflow-y-auto rounded-l-3xl shadow-lg ring-gray-900/10" id="mobile-menu" role="dialog" aria-modal="true" aria-label="closed"> <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"> <div class="flex items-center justify-between"> <a href="/" class="-m-1.5 p-1.5"> <span class="sr-only">Zuker Building</span> <img class="h-8 w-auto"${addAttribute(navbarData?.data?.global?.logo?.logoImage, "src")} alt="Zuker Building Logo"> </a> <button type="button" id="mobile-menu-close-button" class="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900/10"> <span class="sr-only">Close menu</span> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <div class="mt-6 flow-root"> <div class="-my-6 divide-y divide-gray-500/10"> <div class="space-y-2 py-6"> <div class="-mx-3"> <a type="button" href="/#services" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false" id="mobile-services"> ${services?.servicesTitle} <!--
                  Expand/collapse icon, toggle classes based on menu open state.

                  Open: "rotate-180", Closed: ""
                --> <!-- <svg
									class="h-5 w-5 flex-none"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
										clip-rule="evenodd"></path>
								</svg> --> </a> <!-- 'Product' sub-menu, show/hide based on menu state. --> <!-- <div class="mt-2 space-y-2" id="disclosure-1">
								{
									services?.servicesItems?.map((service) => (
										<p class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
											{service?.serviceName}
										</p>
									))
								}
							</div> --> </div> ${navbarData?.data?.global?.navItems?.map((navItem) => renderTemplate`<a${addAttribute(navItem?.linkHref, "href")} class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"> ${navItem?.linkName} </a>`)} </div> <div class="py-6"> <a id="mobile-contact" href="/#contact" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact</a> </div> </div> </div> </div> </div> </header>`;
}, "/Users/zacharysemaan/code/zuker-building/src/layouts/navbar/NavBar.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const footerData = await client.queries.global({
    relativePath: "footer.json"
  });
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-slate-500 h-52 flex"> <div class="w-full flex flex-col items-center justify-between p-2"> <div class="flex h-full w-full justify-center items-center"> ${footerData?.data?.global?.footerSocialLinks?.map(
    (item) => renderTemplate`<a${addAttribute(`https://www.${item?.socialHref}`, "href")} target="_blank"> <img class="w-8 h-8"${addAttribute(item?.socialImage, "src")}${addAttribute(item?.socialName, "alt")} height="30px" width="30px"> </a>`
  )} </div> <div>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Zuker Building</div> </div> </footer>`;
}, "/Users/zacharysemaan/code/zuker-building/src/layouts/footer/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "NavBar", $$NavBar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/zacharysemaan/code/zuker-building/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Under Construction" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="h-dvh flex items-center justify-center">
We are working on this page. Please check back later.
</main> ` })}`;
}, "/Users/zacharysemaan/code/zuker-building/src/pages/404.astro", void 0);

const $$file = "/Users/zacharysemaan/code/zuker-building/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _, client as c };
