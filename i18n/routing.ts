import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "tr"],

  // Used when no locale matches
  defaultLocale: "tr",
  // pathnames: {
  //   "/": "/",
  //   "/view/styles/new-york/e-commerce": {
  //     tr: "/tr/view/styles/new-york/e-commerce",
  //     en: "/en/view/styles/new-york/e-commerce",
  //   },
  //   "/view/styles/new-york/order-confirmation": {
  //     tr: "/tr/view/styles/new-york/order-confirmation",
  //     en: "/en/view/styles/new-york/order-confirmation",
  //   },
  //   "/view/styles/new-york/product-details": {
  //     tr: "/tr/view/styles/new-york/product-details",
  //     en: "/en/view/styles/new-york/product-details",
  //   },
  //   "/view/styles/new-york/order-tracking": {
  //     tr: "/tr/view/styles/new-york/order-tracking",
  //     en: "/en/view/styles/new-york/order-tracking",
  //   },
  //   "/view/styles/new-york/crm": {
  //     tr: "/tr/view/styles/new-york/crm",
  //     en: "/en/view/styles/new-york/crm",
  //   },
  //   "/view/styles/new-york/project-managment": {
  //     tr: "/tr/view/styles/new-york/project-managment",
  //     en: "/en/view/styles/new-york/project-managment",
  //   },
  //   "/view/styles/new-york/hr": {
  //     tr: "/tr/view/styles/new-york/hr",
  //     en: "/en/view/styles/new-york/hr",
  //   },
  //   "/view/styles/new-york/erp": {
  //     tr: "/tr/view/styles/new-york/erp",
  //     en: "/en/view/styles/new-york/erp",
  //   },
  //   "/view/styles/new-york/inventory": {
  //     tr: "/tr/view/styles/new-york/inventory",
  //     en: "/en/view/styles/new-york/inventory",
  //   },
  //   "/view/styles/new-york/project-managment-dashboard": {
  //     tr: "/tr/view/styles/new-york/project-managment-dashboard",
  //     en: "/view/styles/new-york/project-managment-dashboard",
  //   },
  //   "/chat": {
  //     tr: "/chat",
  //     en: "/chat",
  //   },

 // },
});
