import Vue from "vue";
if (process.browser) {
  var Distpicker = require("v-distpicker");
  Vue.use(Distpicker);
  Vue.component("v-distpicker", Distpicker);
}
