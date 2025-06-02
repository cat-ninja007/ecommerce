import Vue from "vue";
import Router from "vue-router";
import ProductPage from "@/pages/ProductPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/products/:id",
      name: "ProductPage",
      component: ProductPage,
    },
  ],
});