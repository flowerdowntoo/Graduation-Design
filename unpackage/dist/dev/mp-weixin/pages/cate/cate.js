"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [1, 3, 4]
    };
  },
  methods: {}
};
if (!Array) {
  const _component_van_icon = common_vendor.resolveComponent("van-icon");
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  (_component_van_icon + _component_van_tab + _component_van_tabs)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, k0, i0) => {
      return {
        a: "c542ff90-2-" + i0 + ",c542ff90-1",
        b: "c542ff90-3-" + i0 + ",c542ff90-1",
        c: "c542ff90-4-" + i0 + ",c542ff90-1"
      };
    }),
    b: common_vendor.p({
      name: "fire"
    }),
    c: common_vendor.p({
      name: "clock"
    }),
    d: common_vendor.p({
      name: "location"
    }),
    e: common_vendor.p({
      title: "\u6807\u7B7E 1"
    }),
    f: common_vendor.p({
      title: "\u6807\u7B7E 2"
    }),
    g: common_vendor.p({
      title: "\u6807\u7B7E 3"
    }),
    h: common_vendor.p({
      title: "\u6807\u7B7E 4"
    }),
    i: common_vendor.o(($event) => _ctx.active = $event),
    j: common_vendor.p({
      active: _ctx.active
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/Hbuilder/workSpace/biyesheji/pages/cate/cate.vue"]]);
wx.createPage(MiniProgramPage);
