import { D as store_get, E as attr, F as unsubscribe_stores, G as ensure_array_like, I as attr_class, J as escape_html, K as bind_props, B as pop, z as push, M as attr_style, N as slot, O as stringify } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
const scrolledSection = writable("");
const theme = writable("light");
function Toggle($$payload) {
  var $$store_subs;
  let isDarkMode = store_get($$store_subs ??= {}, "$theme", theme) === "dark";
  $$payload.out.push(`<div><label class="relative inline-flex items-center cursor-pointer"><input type="checkbox"${attr("checked", isDarkMode, true)} class="sr-only peer"/> <div class="w-12 h-6 bg-seafoam peer-focus:outline-none rounded-full peer dark:bg-gray-900 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[3.5px] after:bg-scYellow after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-seafoam"><div class="mb-px"><span class="ms-1 text-base text-gray-900 dark:text-gray-300">`);
  if (isDarkMode) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<span class="w-4 h-4 text-lg pr-2">🌞</span>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<span class="w-4 h-4 text-lg pl-[22px]">🌚</span>`);
  }
  $$payload.out.push(`<!--]--></span></div></div></label></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
const Github = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='feather%20feather-github'%3e%3cpath%20d='M9%2019c-5%201.5-5-2.5-7-3m14%206v-3.87a3.37%203.37%200%200%200-.94-2.61c3.14-.35%206.44-1.54%206.44-7A5.44%205.44%200%200%200%2020%204.77%205.07%205.07%200%200%200%2019.91%201S18.73.65%2016%202.48a13.38%2013.38%200%200%200-7%200C6.27.65%205.09%201%205.09%201A5.07%205.07%200%200%200%205%204.77a5.44%205.44%200%200%200-1.5%203.78c0%205.42%203.3%206.61%206.44%207A3.37%203.37%200%200%200%209%2018.13V22'%3e%3c/path%3e%3c/svg%3e";
const GithubWhite = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='feather%20feather-github'%3e%3cpath%20d='M9%2019c-5%201.5-5-2.5-7-3m14%206v-3.87a3.37%203.37%200%200%200-.94-2.61c3.14-.35%206.44-1.54%206.44-7A5.44%205.44%200%200%200%2020%204.77%205.07%205.07%200%200%200%2019.91%201S18.73.65%2016%202.48a13.38%2013.38%200%200%200-7%200C6.27.65%205.09%201%205.09%201A5.07%205.07%200%200%200%205%204.77a5.44%205.44%200%200%200-1.5%203.78c0%205.42%203.3%206.61%206.44%207A3.37%203.37%200%200%200%209%2018.13V22'%3e%3c/path%3e%3c/svg%3e";
const LinkedIn = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='feather%20feather-linkedin'%3e%3cpath%20d='M16%208a6%206%200%200%201%206%206v7h-4v-7a2%202%200%200%200-2-2%202%202%200%200%200-2%202v7h-4v-7a6%206%200%200%201%206-6z'%3e%3c/path%3e%3crect%20x='2'%20y='9'%20width='4'%20height='12'%3e%3c/rect%3e%3ccircle%20cx='4'%20cy='4'%20r='2'%3e%3c/circle%3e%3c/svg%3e";
const LinkedInWhite = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='white'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%20class='feather%20feather-linkedin'%3e%3cpath%20d='M16%208a6%206%200%200%201%206%206v7h-4v-7a2%202%200%200%200-2-2%202%202%200%200%200-2%202v7h-4v-7a6%206%200%200%201%206-6z'%3e%3c/path%3e%3crect%20x='2'%20y='9'%20width='4'%20height='12'%3e%3c/rect%3e%3ccircle%20cx='4'%20cy='4'%20r='2'%3e%3c/circle%3e%3c/svg%3e";
function Navbar($$payload, $$props) {
  push();
  var $$store_subs;
  const pages = writable([
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Resume", id: "resume" },
    { name: "About", id: "about" }
  ]);
  const socials = writable([]);
  const currentPage = writable("home");
  function scrollToSection(id) {
    currentPage.set(id);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  }
  {
    socials.set([
      {
        name: "Github",
        url: "https://github.com/saige243",
        icon: store_get($$store_subs ??= {}, "$theme", theme) === "light" ? Github : GithubWhite
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saige-cross-8b3976241/",
        icon: store_get($$store_subs ??= {}, "$theme", theme) === "light" ? LinkedIn : LinkedInWhite
      }
    ]);
  }
  {
    if (store_get($$store_subs ??= {}, "$scrolledSection", scrolledSection)) {
      currentPage.set(store_get($$store_subs ??= {}, "$scrolledSection", scrolledSection));
    }
  }
  const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$pages", pages));
  const each_array_1 = ensure_array_like(store_get($$store_subs ??= {}, "$socials", socials));
  $$payload.out.push(`<navbar class="hidden sm:flex sm:flex-col sm:px-4 justify-between"><div class="pt-16 w-[100px]"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { name, id } = each_array[$$index];
    $$payload.out.push(`<button${attr_class("pb-4 dark:text-white font-bold text-xl hover:underline underline-offset-8 decoration-scYellow decoration-4 svelte-48mssx", void 0, {
      "active": store_get($$store_subs ??= {}, "$currentPage", currentPage) === id,
      "dark:active": store_get($$store_subs ??= {}, "$currentPage", currentPage) === id
    })}>${escape_html(name)}</button>`);
  }
  $$payload.out.push(`<!--]--> <div class="flex pt-4">`);
  Toggle($$payload);
  $$payload.out.push(`<!----></div></div> <div class="flex flex-col w-[100px] pb-24"><!--[-->`);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let { name, url, icon } = each_array_1[$$index_1];
    $$payload.out.push(`<a${attr("href", url)} target="_blank" class="py-4 hover:opacity-40 w-fit"><img${attr("src", icon)}${attr("alt", name)}/></a>`);
  }
  $$payload.out.push(`<!--]--></div></navbar>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { currentPage, scrollToSection });
  pop();
}
function SpeedDial($$payload, $$props) {
  push();
  $$payload.out.push(`<div class="absolute sm:hidden bottom-6 right-4 z-10"><button id="click" class="p-3 bg-seafoam rounded-full transform transition-transform ease-in-out duration-300"${attr_style(`transform: rotate(${"0"})`)}><svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1v12m0 0 4-4m-4 4L1 9"></path></svg></button></div> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let themeColor = "";
  themeColor = store_get($$store_subs ??= {}, "$theme", theme) === "light" ? "#C5DDDA" : "#024539";
  $$payload.out.push(`<div class="font-scp flex w-screen h-screen lg:px-30 2xl:px-48 text-text dark:text-textDark"${attr_style(`background-color: ${stringify(themeColor)}`)}>`);
  Navbar($$payload, {});
  $$payload.out.push(`<!----> `);
  SpeedDial($$payload);
  $$payload.out.push(`<!----> <!---->`);
  slot($$payload, $$props, "default", {});
  $$payload.out.push(`<!----></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
