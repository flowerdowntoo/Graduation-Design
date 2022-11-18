"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _component_nut_avatar = common_vendor.resolveComponent("nut-avatar");
  _component_nut_avatar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      size: "large",
      icon: ""
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/Hbuilder/workSpace/biyesheji/pages/me/me.vue"]]);
wx.createPage(MiniProgramPage);
