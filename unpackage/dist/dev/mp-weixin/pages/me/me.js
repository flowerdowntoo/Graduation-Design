"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      coupon: 6,
      integral: 300,
      huishouicon: [],
      duihuanicon: [],
      lbIcon: []
    };
  },
  onLoad() {
    this.huishouIcon();
    this.duihuanIcon();
    this.liebiaoIcon();
  },
  methods: {
    huishouIcon() {
      var data = {
        "icons": [
          {
            "photoSrc": "../../../static/Reserved.png",
            "text": "\u5DF2\u9884\u7EA6",
            "toUrl": "/pagesOrderList/orderlist/index?active=dfk"
          },
          {
            "photoSrc": "../../../static/Reserved.png",
            "text": "\u5DF2\u63A5\u5355",
            "toUrl": "/pagesOrderList/orderlist/index?active=dfh"
          },
          {
            "photoSrc": "../../../static/Reserved.png",
            "text": "\u5DF2\u5B8C\u6210",
            "toUrl": "/pagesOrderList/orderlist/index?active=dsh"
          }
        ]
      };
      this.huishouicon = data.icons;
    },
    duihuanIcon() {
      var data = {
        "icons": [
          {
            "photoSrc": "../../../static/Reserved.png",
            "text": "\u5F85\u53D1\u8D27",
            "toUrl": "/pagesOrderList/orderlist/index?active=dfk"
          },
          {
            "photoSrc": "../../../static/Reserved.png",
            "text": "\u5F85\u6536\u8D27",
            "toUrl": "/pagesOrderList/orderlist/index?active=dfh"
          },
          {
            "photoSrc": "../../../static/Reserved.png",
            "text": "\u5DF2\u5B8C\u6210",
            "toUrl": "/pagesOrderList/orderlist/index?active=dsh"
          }
        ]
      };
      this.duihuanicon = data.icons;
    },
    liebiaoIcon() {
      var data = {
        "icons": [
          {
            "photoSrc": "../../../static/Reserved.png",
            "text": "\u6211\u7684\u4F63\u91D1",
            "toUrl": "/pagesGoods/goods/index"
          },
          {
            "photoSrc": "../../../static/Reserved.png",
            "text": "\u6211\u7684\u6536\u85CF",
            "toUrl": ""
          },
          {
            "photoSrc": "../../../static/Reserved.png",
            "text": "\u5730\u5740\u7BA1\u7406",
            "toUrl": ""
          },
          {
            "photoSrc": "../../../static/Reserved.png",
            "text": "\u5546\u5BB6\u5165\u9A7B",
            "toUrl": ""
          },
          {
            "photoSrc": "../../../static/Reserved.png",
            "text": "\u5173\u4E8E\u6211\u4EEC",
            "toUrl": ""
          },
          {
            "photoSrc": "../../../static/Reserved.png",
            "text": "\u6211\u7684\u53D1\u5E03",
            "toUrl": ""
          },
          {
            "photoSrc": "../../../static/Reserved.png",
            "text": "\u6211\u7684\u8BC4\u8BBA",
            "toUrl": ""
          },
          {
            "photoSrc": "../../../static/Reserved.png",
            "text": "\u6211\u7684\u6536\u85CF",
            "toUrl": ""
          },
          {
            "photoSrc": "../../../static/Reserved.png",
            "text": "\u5BA2\u670D\u7535\u8BDD",
            "toUrl": ""
          }
        ]
      };
      this.lbIcon = data.icons;
    }
  }
};
if (!Array) {
  const _component_van_image = common_vendor.resolveComponent("van-image");
  const _component_van_cell = common_vendor.resolveComponent("van-cell");
  const _component_van_grid_item = common_vendor.resolveComponent("van-grid-item");
  const _component_van_grid = common_vendor.resolveComponent("van-grid");
  const _component_van_icon = common_vendor.resolveComponent("van-icon");
  (_component_van_image + _component_van_cell + _component_van_grid_item + _component_van_grid + _component_van_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      width: "100%",
      height: "100%",
      src: "../../../static/24gf-rectangle.png"
    }),
    b: common_vendor.p({
      width: "100%",
      height: "100%",
      round: true,
      src: "../../../static/messi.webp"
    }),
    c: common_vendor.t($data.coupon),
    d: common_vendor.t($data.integral),
    e: common_vendor.p({
      isLink: true,
      url: "/pagesOrderList/orderlist/index?active=all",
      title: "\u56DE\u6536\u8BA2\u5355",
      value: "\u5168\u90E8\u8BA2\u5355",
      linkType: "navigateTo"
    }),
    f: common_vendor.f($data.huishouicon, (item, key, i0) => {
      return {
        a: key,
        b: "ef8abfd0-4-" + i0 + ",ef8abfd0-3",
        c: common_vendor.p({
          url: item.toUrl,
          text: item.text,
          icon: item.photoSrc
        })
      };
    }),
    g: common_vendor.p({
      gutter: 3,
      square: true,
      columnNum: "5"
    }),
    h: common_vendor.p({
      isLink: true,
      url: "/pagesOrderList/orderlist/index?active=all",
      title: "\u5151\u6362\u8BA2\u5355",
      value: "\u5168\u90E8\u8BA2\u5355",
      linkType: "navigateTo"
    }),
    i: common_vendor.f($data.duihuanicon, (item, key, i0) => {
      return {
        a: key,
        b: "ef8abfd0-7-" + i0 + ",ef8abfd0-6",
        c: common_vendor.p({
          url: item.toUrl,
          text: item.text,
          icon: item.photoSrc
        })
      };
    }),
    j: common_vendor.p({
      gutter: 3,
      square: true,
      columnNum: "5"
    }),
    k: common_vendor.f($data.lbIcon, (liebiao, key, i0) => {
      return {
        a: "ef8abfd0-9-" + i0 + "," + ("ef8abfd0-8-" + i0),
        b: key,
        c: "ef8abfd0-8-" + i0,
        d: common_vendor.p({
          isLink: true,
          icon: liebiao.photoSrc,
          title: liebiao.text,
          url: liebiao.toUrl
        })
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/Hbuilder/workSpace/biyesheji/pages/me/me.vue"]]);
wx.createPage(MiniProgramPage);
