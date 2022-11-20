"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toShopList() {
      common_vendor.index.navigateTo({
        url: "/subpkg/shop_list/shop_list"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.toShopList())
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/Hbuilder/workSpace/biyesheji/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
