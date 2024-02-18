/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderHead, j as renderComponent, k as renderSlot } from '../astro_tAQRFpHN.mjs';
import { createClient } from 'tinacms/dist/client';

const $$Astro$5 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-evenly items-center w-full mb-10 mt-10"> <div class="sm:w-1/2 flex text-slate-200 flex-col justify-evenly items-center border-2 border-slate-300 rounded-xl p-4 bg-slate-500 shadow-2xl"> <h1 class="text-3xl mb-2">Contact Us</h1> <p class="mb-4 w-3/4">
Fill out the form below to contact us. We will get back to you as soon as
			possible.
</p> <form method="POST" action="mailto:semaanza@gmail.com" class="flex flex-col items-start justify-evenly w-3/4"> <label for="name">Name:</label> <input class="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="name" name="name" required minlength="3" placeholder="John Doe"> <label for="phone">Phone Number:</label> <input class="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="tel" id="phone" name="phone" required pattern="^[0-9]*$" minlength="10" maxlength="10" placeholder="1234567890"> <label for="email">Email Address:</label> <input class="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="email" id="email" name="email" required placeholder="you@example.com"> <label for="city">City:</label> <input class="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" id="city" name="city" required placeholder="Your City"> <label for="description">Description:</label> <textarea class="block mb-4 pl-2 w-full h-32 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="description" name="description" required placeholder="Please describe your project here."></textarea> <button class="rounded-md w-full px-3.5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm bg-slate-100 hover:bg-slate-400 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">Submit</button> </form> </div> </div>`;
}, "/Users/zacharysemaan/code/zuker-building/src/components/Contact.astro", void 0);

const $$Astro$4 = createAstro();
const $$HeroBanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeroBanner;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative isolate px-6 pt-14 bg-hero-pattern lg:px-8 bg-slate-300 w-screen h-full bg-center flex"> <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"></div> <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 flex flex-col justify-end"> <div class="text-center flex justify-center"> <h1 class="text-4xl font-bold tracking-tight text-gray-600 sm:text-6xl"> ${title} </h1> <h2 class="text-3xl text-white font-bold mt-4 animate-pulse"> ${subTitle} </h2> </div> </div> </div>`;
}, "/Users/zacharysemaan/code/zuker-building/src/components/HeroBanner.astro", void 0);

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
const GlobalDocument = gql`
    query global($relativePath: String!) {
  global(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
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
    global(variables, options) {
      return requester(GlobalDocument, variables, options);
    },
    globalConnection(variables, options) {
      return requester(GlobalConnectionDocument, variables, options);
    }
  };
}
const generateRequester = (client, options) => {
  const requester = async (doc, vars, options2) => {
    let url = client.apiUrl;
    if (options2?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options2.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    });
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
const queries = (client, options) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

const client = createClient({ url: "https://content.tinajs.io/1.4/content/6d1bfec8-124f-4b81-a5fe-ead7b355906f/github/master", token: "c30775a5634ae411167abfb726bddc8e8c5762f8", queries });

const $$Astro$3 = createAstro();
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NavBar;
  const navBarData = await client.queries.global({
    relativePath: "navbar.json"
  });
  const services = navBarData.data.global.services;
  return renderTemplate` ${maybeRenderHead()}<header> <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global"> <div class="flex lg:flex-1"> <a href="/" class="-m-1.5 p-1.5"> <span class="sr-only">Zuker Building</span> <img class="h-8 w-auto"${addAttribute(navBarData?.data?.global?.logo?.logoImage, "src")} alt="Zuker Building Logo"> </a> </div> <div class="hidden lg:flex lg:gap-x-12"> <div class="relative"> <button id="flyout-menu-button" type="button" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-labrl="open flyout menu"> ${services?.servicesTitle} <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path> </svg> </button> <!-- Flyout menu, show/hide based on flyout menu state. --> <div aria-label="closed" id="flyout-menu" class="absolute invisible transition ease-in-out duration-500 opacity-0 -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"> <div class="p-4"> ${services?.servicesItems?.map(
    (service) => renderTemplate`<div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"> <div class="flex-auto"> <a${addAttribute(service?.serviceHref, "href")} class="block font-semibold text-gray-900"> ${service?.serviceName} <span class="absolute inset-0"></span> </a> <p class="mt-1 text-gray-600">
Lorem ipsum dolor sit amet.
</p> </div> </div>`
  )} </div> </div> </div> ${navBarData?.data?.global?.navItems?.map(
    (navItem) => renderTemplate`<a${addAttribute(navItem?.linkHref, "href")} class="text-sm font-semibold leading-6 text-gray-900"> ${navItem?.linkName} </a>`
  )} </div> <div class="lg:flex hidden lg:flex-1 lg:justify-end"> <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Contact <span aria-hidden="true">&rarr;</span></a> </div> <button id="mobile-display-button" class="lg:hidden flex justify-end"> <a href="#" class="text-sm font-semibold leading-6 text-gray-900"><span aria-hidden="false">Menu</span></a> </button> </nav> <!-- Mobile Menu --> <div class="lg:hidden invisible top-0 h-full fixed p-2 right-0 z-10 bg-white w-full sm:w-96 ring-1 transition translate-x-full ease-in-out duration-500 overflow-y-auto rounded-l-3xl shadow-lg ring-gray-900/10" id="mobile-menu" role="dialog" aria-modal="true" aria-label="closed"> <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"> <div class="flex items-center justify-between"> <a href="/" class="-m-1.5 p-1.5"> <span class="sr-only">Zuker Building</span> <img class="h-8 w-auto"${addAttribute(navBarData?.data?.global?.logo?.logoImage, "src")} alt="Zuker Building Logo"> </a> <button type="button" id="mobile-menu-close-button" class="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900/10"> <span class="sr-only">Close menu</span> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <div class="mt-6 flow-root"> <div class="-my-6 divide-y divide-gray-500/10"> <div class="space-y-2 py-6"> <div class="-mx-3"> <button type="button" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false"> ${services?.servicesTitle} <!--
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
								</svg> --> </button> <!-- 'Product' sub-menu, show/hide based on menu state. --> <div class="mt-2 space-y-2" id="disclosure-1"> ${services?.servicesItems?.map((service) => renderTemplate`<a${addAttribute(service?.serviceHref, "href")} class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"> ${service?.serviceName} </a>`)} </div> </div> ${navBarData?.data?.global?.navItems?.map((navItem) => renderTemplate`<a${addAttribute(navItem?.linkHref, "href")} class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"> ${navItem?.linkName} </a>`)} </div> <div class="py-6"> <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contact</a> </div> </div> </div> </div> </div> </header>`;
}, "/Users/zacharysemaan/code/zuker-building/src/layouts/navbar/NavBar.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const footerData = await client.queries.global({
    relativePath: "footer.json"
  });
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-slate-500 h-52 flex"> <div class="w-full flex flex-col items-center justify-between p-2"> <div class="flex h-full w-full justify-evenly items-center"> ${footerData?.data?.global?.footerSocialLinks?.map(
    (navItem) => renderTemplate`<a${addAttribute(`https://www.${navItem?.socialHref}`, "href")} target="_blank"> <img class="w-8 h-8"${addAttribute(navItem?.socialImage, "src")}${addAttribute(navItem?.socialName, "alt")} height="30px" width="30px"> </a>`
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
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Zuker Building" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="h-dvh flex flex-col items-center"> ${renderComponent($$result2, "HeroBanner", $$HeroBanner, { "title": "", "subTitle": "Coming Soon" })} </main> ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "/Users/zacharysemaan/code/zuker-building/src/pages/index.astro", void 0);

const $$file = "/Users/zacharysemaan/code/zuker-building/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
