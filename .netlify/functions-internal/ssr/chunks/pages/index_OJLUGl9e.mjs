/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, e as addAttribute, g as renderComponent } from '../astro_dTm8oGhI.mjs';
import { c as client, $ as $$Layout } from './404_RO9moxVy.mjs';

const $$Astro$6 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${maybeRenderHead()}<div id="contact" aria-label="Contact Us" class="flex flex-col justify-evenly items-center w-full mb-10 mt-10"> <div class="sm:w-1/2 flex text-slate-200 flex-col justify-evenly items-center border-2 border-slate-300 rounded-xl p-4 bg-slate-500 shadow-2xl"> <h1 class="text-3xl mb-2">Contact Us</h1> <p class="mb-4 w-3/4">
Fill out the form below to contact us. We will get back to you as soon as
			possible.
</p> <form method="POST" action="mailto:andrew@zukerbuilding.com" class="flex flex-col items-start justify-evenly w-full sm:w-3/4"> <label for="name">Name:</label> <input class="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="name" name="name" required minlength="3" placeholder="John Doe"> <label for="phone">Phone Number:</label> <input class="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="tel" id="phone" name="phone" required pattern="^[0-9]*$" minlength="10" maxlength="10" placeholder="1234567890"> <label for="email">Email Address:</label> <input class="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="email" id="email" name="email" required placeholder="you@example.com"> <label for="city">City:</label> <input class="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" id="city" name="city" required placeholder="Your City"> <label for="description">Description:</label> <textarea class="block mb-4 pl-2 w-full h-32 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="description" name="description" required placeholder="Please describe your project here."></textarea> <button class="rounded-md w-full px-3.5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm bg-slate-100 hover:bg-slate-400 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">Submit</button> </form> </div> </div>`;
}, "/Users/zacharysemaan/code/zuker-building/src/components/Contact.astro", void 0);

const $$Astro$5 = createAstro();
const $$HeroBanner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HeroBanner;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div aria-label="Hero Banner" class="relative isolate px-6 pt-14 bg-hero-pattern lg:px-8 bg-slate-300 w-screen h-full bg-center bg-cover flex"> <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"></div> <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 flex flex-col justify-end"> <div class="text-center flex justify-center"> <h1 class="text-4xl font-bold tracking-tight text-gray-600 sm:text-6xl"> ${title} </h1> <h2 class="text-3xl text-white font-bold mt-4 animate-pulse"> ${subTitle} </h2> </div> </div> </div>`;
}, "/Users/zacharysemaan/code/zuker-building/src/components/HeroBanner.astro", void 0);

function addBreak(paragraph) {
  let periodCount = 0;
  let modifiedParagraph = "";
  for (let i = 0; i < paragraph.length; i++) {
    modifiedParagraph += paragraph[i];
    if (paragraph[i] === ".") {
      periodCount++;
      if (periodCount % 5 === 0) {
        modifiedParagraph += "<br><br>";
      }
    }
  }
  return modifiedParagraph;
}

const $$Astro$4 = createAstro();
const $$QuickAbout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$QuickAbout;
  const { title, description, image } = Astro2.props;
  const descriptionWithBreaks = addBreak(description);
  return renderTemplate`${maybeRenderHead()}<div aria-label="About Section" class="flex flex-wrap flex-col sm:flex-row w-full p-2 sm:p-4 h-auto bg-zinc-300"> <h2 class="text-2xl w-full text-center font-bold mt-4 mb-4">${title}</h2> <div class="flex flex-col sm:flex-row w-full h-auto"> <div class="flex flex-col p-2 sm:p-5 h-auto sm:w-1/2 items-center justify-evenly"> <div class="text-gray-700 text-md sm:text-lg">${unescapeHTML(descriptionWithBreaks)}</div> </div> <div class="flex items-center justify-center h-full sm:w-1/2"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="rounded-lg"> </div> </div> </div>`;
}, "/Users/zacharysemaan/code/zuker-building/src/components/QuickAbout.astro", void 0);

const $$Astro$3 = createAstro();
const $$ServicesIntro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ServicesIntro;
  const { heading, services } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="services" aria-label="Services we offer" class="flex flex-col items-center h-auto w-full justify-evenly p-2 sm:p-8 bg-slate-400"> <h1 class="text-3xl mb-8 sm:mb-4">${heading}</h1> <div class="flex flex-col sm:flex-row flex-wrap items-center h-auto justify-evenly w-full"> <div class="flex items-center flex-col justify-center w-full sm:w-1/2 mb-6 sm:mb-0"> ${services?.map((service) => renderTemplate`<h3 class=" text-2xl sm:mb-4">${service.title}</h3>`)} </div>  <div class="flex flex-col items-center justify-center w-full sm:w-1/2"> <p class="text-lg sm:w-4/5 text-center sm:text-start bg-zinc-300 p-4 rounded-lg">
We offer a comprehensive suite of services designed to transform your
				vision into reality. From initial consultation and planning to final
				implementation and delivery, our experienced team is dedicated to
				supporting you at every stage of your project journey. With our proven
				track record of successful projects and commitment to excellence, you
				can trust us to help you achieve your goals efficiently and effectively.
</p> </div> </div> </div>`;
}, "/Users/zacharysemaan/code/zuker-building/src/components/ServicesIntro.astro", void 0);

const $$Astro$2 = createAstro();
const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const { heading, subHeading, testimonials } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="testimonials" aria-label="Testimonials" class="p-4 flex items-center flex-col"> <div class="flex flex-col items-center mb-4 mt-4"> <h1 class="text-3xl">${heading}</h1> <h2 class="text-xl">${subHeading}</h2> </div> <div class="flex flex-col sm:flex-row items-center justify-evenly m-5"> ${testimonials.map((testimonial) => renderTemplate`<div class="flex w-full sm:w-1/3 m-5 flex-wrap sm:flex-row items-center justify-evenly mb-10 mt-10 border-solid border-2 rounded-2xl bg-slate-200 border-fuchsia-950 "> <p class="p-4">${testimonial.quote}</p> <h3 class="text-2xl pb-4">${testimonial.name}</h3> </div>`)} </div> </div>`;
}, "/Users/zacharysemaan/code/zuker-building/src/components/Testimonials.astro", void 0);

const $$Astro$1 = createAstro();
const $$RecentProject = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RecentProject;
  const {
    heading = "Most Recent Project",
    description = "test",
    preImage = "../../public/IMG_2206.jpg",
    postImage = "../../public/IMG_2207.jpg"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center mb-4 mt-4 h-auto"> <h1 class="text-3xl text-center mb-5">${heading}</h1> <div class="text-lg p-2 sm:w-1/2 align-center justify-center mb-4"> <p class="text-center">${description}</p> </div> <div class="flex flex-col w-full sm:flex-row items-center justify-evenly m-5 bg-slate-400 pt-4 pb-4"> <div class="flex m-5 sm:w-1/2 h-1/2 flex-wrap items-center justify-center"> <img${addAttribute(preImage, "src")} alt="preImage" class="object-contain w-full sm:w-[400px] md:w-4/5 md:h-auto sm:h-[500px] rounded-lg"> </div> <div class="flex m-5 sm:w-1/2 h-1/2 flex-wrap items-center justify-center"> <img${addAttribute(postImage, "src")} alt="postImage" class="object-contain w-full sm:w-[400px] md:w-4/5 md:h-auto sm:h-[500px] rounded-lg"> </div> </div> </div>`;
}, "/Users/zacharysemaan/code/zuker-building/src/components/RecentProject.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const homeData = await client.queries.pages({
    relativePath: "home.json"
  });
  const quickAboutData = homeData?.data?.pages?.blocks?.filter(
    (block) => block?.__typename === "PagesBlocksQuickAbout"
  )[0];
  const servicesData = homeData?.data?.pages?.blocks?.filter(
    (block) => block?.__typename === "PagesBlocksServicesIntro"
  )[0];
  const testimonialsData = homeData?.data?.pages?.blocks?.filter(
    (block) => block?.__typename === "PagesBlocksTestimonials"
  )[0];
  const recentProjectData = homeData?.data?.pages?.blocks?.filter(
    (block) => block?.__typename === "PagesBlocksRecentProject"
  )[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Zuker Building" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="h-dvh flex flex-col items-center"> ${renderComponent($$result2, "HeroBanner", $$HeroBanner, {})} </main> ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "QuickAbout", $$QuickAbout, { "title": quickAboutData?.quickAboutTitle, "description": quickAboutData?.quickAboutDescription, "image": quickAboutData?.quickAboutImage })} ${renderComponent($$result2, "ServicesIntro", $$ServicesIntro, { "heading": servicesData?.heading, "services": servicesData?.services })} ${renderComponent($$result2, "Testimonials", $$Testimonials, { "testimonials": testimonialsData?.testimonials, "heading": testimonialsData?.heading })} ${renderComponent($$result2, "RecentProject", $$RecentProject, { "heading": recentProjectData?.heading, "description": recentProjectData?.recentProjectDescription, "preImage": recentProjectData?.preImage, "postImage": recentProjectData?.postImage })} ` })}`;
}, "/Users/zacharysemaan/code/zuker-building/src/pages/index.astro", void 0);

const $$file = "/Users/zacharysemaan/code/zuker-building/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
