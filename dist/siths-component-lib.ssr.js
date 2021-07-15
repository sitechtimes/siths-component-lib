'use strict';function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}//
//
//
//
//
//
//
//
//
//
//
//
var script$l = {
  name: "CategoryIconSidebar",
  props: ["category"],
  data: function data() {
    return {};
  },
  computed: {
    backgroundColor: function backgroundColor() {
      return "background-color: var(--" + this.category + ")";
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group = css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__$l = script$l;
/* template */

var __vue_render__$l = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._ssrNode("<h5 id=\"sidebar-article-category\" class=\"sidebar-article-details-category\"" + _vm._ssrStyle(null, _vm.backgroundColor, null) + ">" + _vm._ssrEscape("\n    " + _vm._s(_vm.category) + "\n  ") + "</h5>")]);
};

var __vue_staticRenderFns__$l = [];
/* style */

var __vue_inject_styles__$l = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-71f7660a_0", {
    source: "#sidebar-article-category{text-transform:uppercase;width:max-content;color:var(--off-white);font-size:.8rem;font-weight:500;border-radius:.6rem;margin:.3rem 0 .5rem 0;padding:.4em .6rem .2em .6rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$l = undefined;
/* module identifier */

var __vue_module_identifier__$l = "data-v-71f7660a";
/* functional template */

var __vue_is_functional_template__$l = false;
/* style inject shadow dom */

var __vue_component__$l = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$l,
  staticRenderFns: __vue_staticRenderFns__$l
}, __vue_inject_styles__$l, __vue_script__$l, __vue_scope_id__$l, __vue_is_functional_template__$l, __vue_module_identifier__$l, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$k = {
  name: "AuthorAndDateSidebar",
  props: ["author", "published"]
};/* script */
var __vue_script__$k = script$k;
/* template */

var __vue_render__$k = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "sidebar-article-details-author-date"
  }, [_vm._ssrNode("<section><svg width=\"1.3rem\" height=\"1.3rem\" aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"user\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" id=\"sidebar-author-icon\" class=\"sidebar-icon svg-inline--fa fa-user fa-w-14\"><path fill=\"currentColor\" d=\"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z\"></path></svg> <h5 id=\"sidebar-article-details-author\">" + _vm._ssrEscape(_vm._s(_vm.author)) + "</h5></section> <section><svg width=\"1.3rem\" height=\"1.3rem\" aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"clock\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" id=\"sidebar-published-icon\" class=\"sidebar-icon svg-inline--fa fa-clock fa-w-16\"><path fill=\"currentColor\" d=\"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z\"></path></svg> <h5 id=\"sidebar-article-details-date\">" + _vm._ssrEscape(_vm._s(_vm.published)) + "</h5></section>")]);
};

var __vue_staticRenderFns__$k = [];
/* style */

var __vue_inject_styles__$k = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2ef6b2e4_0", {
    source: ".sidebar-article-details-author-date{display:flex;flex-wrap:wrap}.sidebar-article-details-author-date>section{display:flex}.sidebar-article-details-author-date>section>h5{font-size:.85rem;text-transform:uppercase;margin:0 1.5rem 0 0;line-height:1.75}.sidebar-icon{font-size:1.3rem;padding-right:4px}#sidebar-author-icon,#sidebar-published-icon{font-size:1.3rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$k = undefined;
/* module identifier */

var __vue_module_identifier__$k = "data-v-2ef6b2e4";
/* functional template */

var __vue_is_functional_template__$k = false;
/* style inject shadow dom */

var __vue_component__$k = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$k,
  staticRenderFns: __vue_staticRenderFns__$k
}, __vue_inject_styles__$k, __vue_script__$k, __vue_scope_id__$k, __vue_is_functional_template__$k, __vue_module_identifier__$k, false, undefined, createInjectorSSR, undefined);//
var script$j = {
  components: {
    CategoryIconSidebar: __vue_component__$l,
    AuthorAndDateSidebar: __vue_component__$k
  },
  name: "Sidebar",
  props: {
    category: String,
    author: String,
    published: String,
    title: String,
    imgUrl: String,
    imgAlt: String,
    articleUrl: String
  }
};/* script */
var __vue_script__$j = script$j;
/* template */

var __vue_render__$j = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "sidebar-article"
  }, [_vm._ssrNode("<img" + _vm._ssrAttr("href", _vm.articleUrl) + _vm._ssrAttr("src", _vm.imgUrl) + _vm._ssrAttr("alt", _vm.imgAlt) + " class=\"sidebar-img\"> "), _vm._ssrNode("<div class=\"sidebar-article-details\">", "</div>", [_c('category-icon-sidebar', {
    attrs: {
      "category": "opinion"
    }
  }), _vm._ssrNode(" <a" + _vm._ssrAttr("href", _vm.articleUrl) + " target=\"_blank\" rel=\"noopener noreferrer\" id=\"sidebar-article-details-title\">" + _vm._ssrEscape("\n      " + _vm._s(_vm.title) + "\n    ") + "</a> "), _c('author-and-date-sidebar', {
    attrs: {
      "author": _vm.author,
      "published": _vm.published
    }
  })], 2)], 2);
};

var __vue_staticRenderFns__$j = [];
/* style */

var __vue_inject_styles__$j = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-1f1e357f_0", {
    source: ":root{--sidebarArticleWidth:30vw;--sidebarImgWidth:9rem;--sidebarSidePadding:min(2.5vw, 4.16rem);--sidebarDetailsPaddingLeft:1.7rem;--toggleBorder:none;--centerSquareThumbnail:50% 50%/100% 100% no-repeat}.temp-img{width:30vw;height:auto}.sidebar-article{width:var(--sidebarArticleWidth);max-width:50rem;display:flex;border:var(--toggleBorder);padding:1.5rem var(--sidebarSidePadding)}.sidebar-article:hover{background-color:var(--hover);cursor:pointer;transition:all .3s ease-out}.sidebar-img{height:var(--sidebarImgWidth);width:var(--sidebarImgWidth);border-radius:1rem;border:var(--toggleBorder);display:inline-block;vertical-align:middle}.sidebar-article-details{width:calc(var(--sidebarArticleWidth) - var(--sidebarImgWidth) - (var(--sidebarSidePadding) * 2));max-width:32.65rem;padding-left:var(--sidebarDetailsPaddingLeft);display:flex;flex-direction:column;display:inline-block}#sidebar-article-details-title{font-weight:700;font-size:1.6rem;line-height:1.35;text-decoration:none;color:var(--black);margin:0}.sidebar-icon{font-size:1.4rem;padding-right:4px}#author-icon,#published-icon{font-size:1.4rem}#sidebar-article-details-title{font-weight:700}.example-img{border:var(--toggleBorder);height:11.7rem;width:40rem}@media only screen and (max-width:768px){:root{--sidebarArticleWidth:100vw;--sidebarSidePadding:15vw}.sidebar-container{max-width:none;border:none}.sidebar-article{max-width:none;padding:2.5rem var(--sidebarSidePadding)}.sidebar-article-details{max-width:none}}@media only screen and (max-width:450px){:root{--sidebarSidePadding:12vw}}@media only screen and (max-width:380px){:root{--sidebarSidePadding:8vw}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$j = undefined;
/* module identifier */

var __vue_module_identifier__$j = "data-v-1f1e357f";
/* functional template */

var __vue_is_functional_template__$j = false;
/* style inject shadow dom */

var __vue_component__$j = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$j,
  staticRenderFns: __vue_staticRenderFns__$j
}, __vue_inject_styles__$j, __vue_script__$j, __vue_scope_id__$j, __vue_is_functional_template__$j, __vue_module_identifier__$j, false, undefined, createInjectorSSR, undefined);//
var script$i = {
  name: "SidebarContainer",
  components: {
    Sidebar: __vue_component__$j
  },
  data: function data() {
    return {
      trending: [{
        category: "opinion",
        author: "Charley Baluja",
        published: "Jan 31, 2020",
        title: "Hello this is Dr. Death Defying: MCR ain't dead yet",
        imgUrl: "https://dailyillini.com/wp-content/uploads/2021/01/A0122C1B-0C8D-4299-9E5B-2FA8F790C666.jpeg",
        articleUrl: "https://google.com"
      }, {
        category: "opinion",
        author: "Charley Baluja",
        published: "Jan 32, 2020",
        title: "Hello this is Dr. Death Defying: MCR ain't dead yet",
        imgUrl: "https://dailyillini.com/wp-content/uploads/2021/01/A0122C1B-0C8D-4299-9E5B-2FA8F790C666.jpeg",
        articleUrl: "https://google.com"
      }, {
        category: "opinion",
        author: "Charley Baluja",
        published: "Jan 33, 2020",
        title: "Hello this is Dr. Death Defying: MCR ain't dead yet",
        imgUrl: "https://dailyillini.com/wp-content/uploads/2021/01/A0122C1B-0C8D-4299-9E5B-2FA8F790C666.jpeg",
        articleUrl: "https://google.com"
      }],
      moreLikeThis: [{
        category: "opinion",
        author: "Charley Baluja",
        published: "Jan 34, 2020",
        title: "Hello this is Dr. Death Defying: MCR ain't dead yet",
        imgUrl: "https://dailyillini.com/wp-content/uploads/2021/01/A0122C1B-0C8D-4299-9E5B-2FA8F790C666.jpeg",
        articleUrl: "https://google.com"
      }, {
        category: "opinion",
        author: "Charley Baluja",
        published: "Jan 35, 2020",
        title: "Hello this is Dr. Death Defying: MCR ain't dead yet",
        imgUrl: "https://dailyillini.com/wp-content/uploads/2021/01/A0122C1B-0C8D-4299-9E5B-2FA8F790C666.jpeg",
        articleUrl: "https://google.com"
      }, {
        category: "opinion",
        author: "Charley Baluja",
        published: "Jan 36, 2020",
        title: "Hello this is Dr. Death Defying: MCR ain't dead yet",
        imgUrl: "https://dailyillini.com/wp-content/uploads/2021/01/A0122C1B-0C8D-4299-9E5B-2FA8F790C666.jpeg",
        articleUrl: "https://google.com"
      }]
    };
  }
};/* script */
var __vue_script__$i = script$i;
/* template */

var __vue_render__$i = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('section', {
    staticClass: "sidebar-container"
  }, [_vm._ssrNode("<h3 class=\"sidebar-heading\">Trending</h3> "), _vm._l(_vm.trending, function (article) {
    return _c('sidebar', {
      key: article,
      attrs: {
        "category": article.category,
        "author": article.author,
        "published": article.published,
        "title": article.title,
        "imgUrl": article.imgUrl,
        "articleUrl": article.articleUrl
      }
    });
  }), _vm._ssrNode(" <h3 class=\"sidebar-heading\">More Like This</h3> "), _vm._l(_vm.moreLikeThis, function (article) {
    return _c('sidebar', {
      key: article,
      attrs: {
        "author": article.author,
        "published": article.published,
        "title": article.title,
        "imgUrl": article.imgUrl,
        "articleUrl": article.articleUrl
      }
    });
  })], 2);
};

var __vue_staticRenderFns__$i = [];
/* style */

var __vue_inject_styles__$i = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-1363603a_0", {
    source: ".sidebar-container{border-left:2px solid #d9b75e;max-width:50rem;float:right;overflow:hidden}.sidebar-heading{padding:1.5rem 2.5rem;margin:0}@media only screen and (max-width:768px){.sidebar-container{max-width:none;border:none}.sidebar-heading{padding:1.5rem var(--sidebarSidePadding)}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$i = undefined;
/* module identifier */

var __vue_module_identifier__$i = "data-v-1363603a";
/* functional template */

var __vue_is_functional_template__$i = false;
/* style inject shadow dom */

var __vue_component__$i = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$i,
  staticRenderFns: __vue_staticRenderFns__$i
}, __vue_inject_styles__$i, __vue_script__$i, __vue_scope_id__$i, __vue_is_functional_template__$i, __vue_module_identifier__$i, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
var script$h = {
  name: "CategoryIcon",
  props: ["category"],
  data: function data() {
    return {};
  },
  computed: {
    backgroundColor: function backgroundColor() {
      return "background-color: var(--" + this.category + ")";
    }
  }
};/* script */
var __vue_script__$h = script$h;
/* template */

var __vue_render__$h = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('header', [_vm._ssrNode("<h5 id=\"article-category\" class=\"article-details-category\"" + _vm._ssrStyle(null, _vm.backgroundColor, null) + ">" + _vm._ssrEscape("\n    " + _vm._s(_vm.category) + "\n  ") + "</h5>")]);
};

var __vue_staticRenderFns__$h = [];
/* style */

var __vue_inject_styles__$h = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-108c7ab4_0", {
    source: "#article-category{text-transform:uppercase;width:max-content;color:var(--off-white);font-weight:500;border-radius:.8rem;margin:.3rem 0 .3rem 0;padding:.5em 1rem .3em 1rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$h = undefined;
/* module identifier */

var __vue_module_identifier__$h = "data-v-108c7ab4";
/* functional template */

var __vue_is_functional_template__$h = false;
/* style inject shadow dom */

var __vue_component__$h = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$h,
  staticRenderFns: __vue_staticRenderFns__$h
}, __vue_inject_styles__$h, __vue_script__$h, __vue_scope_id__$h, __vue_is_functional_template__$h, __vue_module_identifier__$h, false, undefined, createInjectorSSR, undefined);//
//
//
//
var script$g = {
  name: 'SeeMoreBtn'
};/* script */
var __vue_script__$g = script$g;
/* template */

var __vue_render__$g = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', {
    staticClass: "see-more-btn"
  }, [_vm._ssrNode("See more")]);
};

var __vue_staticRenderFns__$g = [];
/* style */

var __vue_inject_styles__$g = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-1750473a_0", {
    source: ".see-more-btn{background-color:var(--primary-color);padding:1.7rem 3rem;font:bold 1.74rem var(--font);color:var(--white);border:none;border-radius:3.5rem;text-transform:uppercase}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$g = undefined;
/* module identifier */

var __vue_module_identifier__$g = "data-v-1750473a";
/* functional template */

var __vue_is_functional_template__$g = false;
/* style inject shadow dom */

var __vue_component__$g = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$g,
  staticRenderFns: __vue_staticRenderFns__$g
}, __vue_inject_styles__$g, __vue_script__$g, __vue_scope_id__$g, __vue_is_functional_template__$g, __vue_module_identifier__$g, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
var script$f = {
  name: "AuthorAndDate",
  props: ["author", "published"]
};/* script */
var __vue_script__$f = script$f;
/* template */

var __vue_render__$f = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "article-details-author-date"
  }, [_vm._ssrNode("<svg width=\"1.4rem\" height=\"1.4rem\" aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"user\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" id=\"author-icon\" class=\"icon svg-inline--fa fa-user fa-w-14\"><path fill=\"currentColor\" d=\"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z\"></path></svg> <h5 id=\"article-details-author\">" + _vm._ssrEscape(_vm._s(_vm.author)) + "</h5> <svg width=\"1.4rem\" height=\"1.4rem\" aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"clock\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" id=\"published-icon\" class=\"icon svg-inline--fa fa-clock fa-w-16\"><path fill=\"currentColor\" d=\"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z\"></path></svg> <h5 id=\"article-details-date\">" + _vm._ssrEscape(_vm._s(_vm.published)) + "</h5>")]);
};

var __vue_staticRenderFns__$f = [];
/* style */

var __vue_inject_styles__$f = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-709f8718_0", {
    source: ".article-details-author-date{display:flex}.article-details-author-date>h5{text-transform:uppercase;margin-right:1.5rem}.icon{font-size:1.4rem;padding-right:4px}#author-icon,#published-icon{font-size:1.8rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$f = undefined;
/* module identifier */

var __vue_module_identifier__$f = "data-v-709f8718";
/* functional template */

var __vue_is_functional_template__$f = false;
/* style inject shadow dom */

var __vue_component__$f = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$f,
  staticRenderFns: __vue_staticRenderFns__$f
}, __vue_inject_styles__$f, __vue_script__$f, __vue_scope_id__$f, __vue_is_functional_template__$f, __vue_module_identifier__$f, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$e = {
  name: "GetNotifiedSection"
};/* script */
var __vue_script__$e = script$e;
/* template */

var __vue_render__$e = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "footer-form-box"
  }, [_vm._ssrNode("<h2 class=\"footer-header-container\"><span class=\"footer-header\">Get Notified</span> <span class=\"footer-sub-header\">Sign up for our newsletter!</span></h2> <form action=\"#\" class=\"footer-form\"><fieldset class=\"footer-form-field\"><label for=\"email\"></label> <div class=\"footer-inputs\"><input type=\"text\" for=\"email\" placeholder=\"Email\" name=\"mail\" required=\"required\" class=\"footer-email-input\"> <input type=\"submit\" value=\"Join\" class=\"footer-join-btn\"></div></fieldset></form>")]);
};

var __vue_staticRenderFns__$e = [];
/* style */

var __vue_inject_styles__$e = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-24c576dc_0", {
    source: ".footer-header-container{display:flex;flex-direction:column}.footer-form-box{width:36rem;margin:0 auto;padding-bottom:3.1rem;border-bottom:.2rem solid var(--primary-color)}.footer-header,.footer-sub-header{font-size:var(--h2);text-align:center;color:var(--accent-color);font-weight:700}.footer-sub-header{font-size:var(--h5)}.footer-form-field{display:flex;justify-content:center;border:none}.footer-email-input,.footer-join-btn{border:none;background-color:var(--accent-color);padding:1.3rem 2.2rem;border-radius:5rem}.footer-inputs{position:relative;margin-top:2.8rem}.footer-email-input{width:36rem;font-size:1.6rem}.footer-email-input:focus{outline:0}.footer-join-btn{position:absolute;height:100%;right:0;font-size:var(--h5);font-weight:700;background-color:var(--primary-color);text-transform:uppercase}@media only screen and (max-width:600px){.footer-form-box{border-bottom:none}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$e = undefined;
/* module identifier */

var __vue_module_identifier__$e = "data-v-24c576dc";
/* functional template */

var __vue_is_functional_template__$e = false;
/* style inject shadow dom */

var __vue_component__$e = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$e,
  staticRenderFns: __vue_staticRenderFns__$e
}, __vue_inject_styles__$e, __vue_script__$e, __vue_scope_id__$e, __vue_is_functional_template__$e, __vue_module_identifier__$e, false, undefined, createInjectorSSR, undefined);var GetNotifiedSection=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$e});//
//
//
//
//
//
//
//
var script$d = {
  name: "SocialMediaIcons"
};/* script */
var __vue_script__$d = script$d;
/* template */

var __vue_render__$d = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._ssrNode("<svg width=\"3.5rem\" height=\"3.5rem\" aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"instagram-square\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"social-media-icon svg-inline--fa fa-instagram-square fa-w-14\"><path fill=\"currentColor\" d=\"M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z\"></path></svg> <svg width=\"3.5rem\" height=\"3.5rem\" aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"twitter\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"social-media-icon svg-inline--fa fa-twitter fa-w-16\"><path fill=\"currentColor\" d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg> <svg width=\"3.5rem\" height=\"3.5rem\" aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fab\" data-icon=\"facebook\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"social-media-icon svg-inline--fa fa-facebook fa-w-16\"><path fill=\"currentColor\" d=\"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z\"></path></svg>")]);
};

var __vue_staticRenderFns__$d = [];
/* style */

var __vue_inject_styles__$d = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-578e4c1a_0", {
    source: ".social-media-icon{font-size:3.5rem;color:var(--primary-color);margin-left:1.25rem;margin-right:1.25rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$d = undefined;
/* module identifier */

var __vue_module_identifier__$d = "data-v-578e4c1a";
/* functional template */

var __vue_is_functional_template__$d = false;
/* style inject shadow dom */

var __vue_component__$d = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$d,
  staticRenderFns: __vue_staticRenderFns__$d
}, __vue_inject_styles__$d, __vue_script__$d, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$d, false, undefined, createInjectorSSR, undefined);var SocialMediaIcons=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$d});//
//
//
//
//
//
var script$c = {
  name: "ShareIcon"
};/* script */
var __vue_script__$c = script$c;
/* template */

var __vue_render__$c = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._ssrNode("<svg width=\"3.5rem\" height=\"3.5rem\" aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fa\" data-icon=\"share\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" class=\"social-media-icon svg-inline--fa fa-share fa-w-16\"><path fill=\"currentColor\" d=\"M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z\"></path></svg>")]);
};

var __vue_staticRenderFns__$c = [];
/* style */

var __vue_inject_styles__$c = undefined;
/* scoped */

var __vue_scope_id__$c = undefined;
/* module identifier */

var __vue_module_identifier__$c = "data-v-0f78859e";
/* functional template */

var __vue_is_functional_template__$c = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$c = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$c,
  staticRenderFns: __vue_staticRenderFns__$c
}, __vue_inject_styles__$c, __vue_script__$c, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$b = {
  name: "EntertainmentSideArticle",
  props: ["articleUrl", "imageUrl", "imageAlt", "category", "author", "published", "title"]
};/* script */
var __vue_script__$b = script$b;
/* template */

var __vue_render__$b = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('article', {
    staticClass: "entertainment-side"
  }, [_vm._ssrNode("<div class=\"entertainment-img-div\"><a" + _vm._ssrAttr("href", _vm.articleUrl) + "><img" + _vm._ssrAttr("href", _vm.articleUrl) + _vm._ssrAttr("src", _vm.imageUrl) + _vm._ssrAttr("alt", _vm.imageAlt) + " class=\"entertainment-side-img\"></a></div> "), _vm._ssrNode("<div class=\"entertainment-side-img-content\">", "</div>", [_c('category-icon', {
    attrs: {
      "category": _vm.category
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"entertainment-labels\">", "</div>", [_c('author-and-date', {
    attrs: {
      "author": _vm.author,
      "published": _vm.published
    }
  })], 1), _vm._ssrNode(" <h3 class=\"entertainment-title\">" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h3>")], 2)], 2);
};

var __vue_staticRenderFns__$b = [];
/* style */

var __vue_inject_styles__$b = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-86f3c670_0", {
    source: ".entertainment-side{display:flex;flex-direction:row}.entertainment-side-img{height:22rem;width:18rem;border-radius:1.5rem}.entertainment-side-img-content{width:40vw;margin-left:2rem}.entertainment-title{font-size:2.4rem;font-weight:700}.entertainment-labels{margin:2rem 0 1.7rem 0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$b = undefined;
/* module identifier */

var __vue_module_identifier__$b = "data-v-86f3c670";
/* functional template */

var __vue_is_functional_template__$b = false;
/* style inject shadow dom */

var __vue_component__$b = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$b,
  staticRenderFns: __vue_staticRenderFns__$b
}, __vue_inject_styles__$b, __vue_script__$b, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
var script$a = {
  name: "FooterSocialMedia",
  components: {
    SocialMediaIcons: function SocialMediaIcons$1() {
      return Promise.resolve().then(function(){return SocialMediaIcons});
    }
  }
};/* script */
var __vue_script__$a = script$a;
/* template */

var __vue_render__$a = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "footer-social-media-box"
  }, [_vm._ssrNode("<h3 class=\"footer-header footer-sm-header\">Social Media</h3> "), _c('SocialMediaIcons', {
    staticClass: "footer-social-media"
  })], 2);
};

var __vue_staticRenderFns__$a = [];
/* style */

var __vue_inject_styles__$a = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-1db04864_0", {
    source: ".footer-sm-header{font-size:var(--h3)}.footer-social-media-box{width:36rem;margin:5.1rem auto}.footer-social-media{text-align:center;margin-top:1.5rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$a = undefined;
/* module identifier */

var __vue_module_identifier__$a = "data-v-1db04864";
/* functional template */

var __vue_is_functional_template__$a = false;
/* style inject shadow dom */

var __vue_component__$a = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, createInjectorSSR, undefined);var FooterSocialMedia=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$a});//
//
//
//
//
//
//
//
//
//
//
//
var script$9 = {
  name: 'Navbar',
  // vue component name
  props: [],
  data: function data() {
    return {
      navbar: [{
        navLink: 'news',
        navType: 'NEWS'
      }, {
        navLink: 'opinion',
        navType: 'OPINION'
      }, {
        navLink: 'politics',
        navType: 'POLITICS'
      }, {
        navLink: 'entertainment',
        navType: 'ENTERTAINMENT'
      }, {
        navLink: 'science',
        navType: 'SCIENCE'
      }, {
        navLink: 'activities',
        navType: 'ACTIVITIES'
      }, {
        navLink: 'events',
        navType: 'EVENTS'
      }]
    };
  }
};/* script */
var __vue_script__$9 = script$9;
/* template */

var __vue_render__$9 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('nav', [_vm._ssrNode("<ul class=\"home-nav-ul\">" + _vm._ssrList(_vm.navbar, function (category) {
    return "<a" + _vm._ssrAttr("href", category.navLink) + " class=\"home-nav-li\"><h4>" + _vm._ssrEscape(_vm._s(category.navType)) + "</h4></a>";
  }) + "</ul>")]);
};

var __vue_staticRenderFns__$9 = [];
/* style */

var __vue_inject_styles__$9 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-d0415340_0", {
    source: "a{text-decoration:none;color:inherit}.home-nav-li{font-family:var(--font);display:inline;padding:5rem}.home-nav-ul{display:flex;justify-content:center;width:100%}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$9 = undefined;
/* module identifier */

var __vue_module_identifier__$9 = "data-v-d0415340";
/* functional template */

var __vue_is_functional_template__$9 = false;
/* style inject shadow dom */

var __vue_component__$9 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
var script$8 = {
  name: 'Datebar',
  // vue component name
  data: function data() {
    return {
      date: ''
    };
  }
};/* script */
var __vue_script__$8 = script$8;
/* template */

var __vue_render__$8 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "datebar"
  }, [_vm._ssrNode("<div class=\"datebar-container\"><h5 class=\"datebar-date\"><span id=\"date-text\">" + _vm._ssrEscape(_vm._s(_vm._f("date")(new Date(), 'LLLL do, yyyy')) + " ") + "</span> <svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"far\" data-icon=\"calendar\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"calendar-icon svg-inline--fa fa-calendar fa-w-10\"><path fill=\"currentColor\" d=\"M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z\"></path></svg></h5></div>")]);
};

var __vue_staticRenderFns__$8 = [];
/* style */

var __vue_inject_styles__$8 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-5fbeebb9_0", {
    source: ".datebar{background-color:var(--accent-color);height:4rem;margin:0;padding:0;width:100%}.datebar-container{width:120rem;margin:auto;display:flex;flex-direction:row;justify-content:flex-end}.datebar-date{margin:auto 0;padding:.3rem;align-content:center;align-items:center;font-size:2.5rem;line-height:auto}.calendar-icon{padding-top:.5rem;width:1.5rem;height:2rem}@media only screen and (max-width:1280px){.datebar-date{font-size:2.8rem;line-height:3rem}.datebar-container{width:100rem}}@media only screen and (max-width:950px){.datebar-container{width:80rem}}@media only screen and (max-width:768px){.datebar-container{justify-content:flex-start;margin-left:2rem}.datebar-date{font-size:3.5rem;line-height:3.2rem}.calendar-icon{padding-top:.6rem}.datebar-container{width:60rem}}@media only screen and (max-width:640px){.datebar-container{justify-content:flex-start;margin-left:2rem}.datebar-date{font-size:3.5rem;line-height:3.2rem}.calendar-icon{padding-top:.6rem}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$8 = undefined;
/* module identifier */

var __vue_module_identifier__$8 = "data-v-5fbeebb9";
/* functional template */

var __vue_is_functional_template__$8 = false;
/* style inject shadow dom */

var __vue_component__$8 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$7 = {
  name: "MobileNav",
  data: function data() {
    return {
      spanClass: "",
      show: false,
      bgColor: ""
    };
  },
  computed: {
    backgroundColor: function backgroundColor() {
      return "background-color: " + this.bgColor;
    }
  },
  methods: {
    changeMenu: function changeMenu() {
      if (this.spanClass != "open") {
        this.spanClass = "open";
      } else {
        this.spanClass = "";
      }
    },
    openNav: function openNav() {
      this.show = !this.show;
    },
    toggleBackground: function toggleBackground() {
      if (this.bgColor === "") {
        this.bgColor = "var(--primary-color)";
      } else {
        this.bgColor = "";
      }
    },
    navFunction: function navFunction() {
      this.toggleBackground();
      this.openNav();
      this.changeMenu();
    }
  }
};/* script */
var __vue_script__$7 = script$7;
/* template */

var __vue_render__$7 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "mobile-nav-box",
    style: _vm.backgroundColor
  }, [_vm._ssrNode("<div id=\"nav-icon4\"" + _vm._ssrClass(null, _vm.spanClass) + "><span></span> <span></span> <span></span></div> " + (_vm.show ? "<div class=\"mobile-nav\"><ul class=\"mobile-nav-ul\"><a href><li class=\"mobile-nav-li\">News</li></a> <a href><li class=\"mobile-nav-li\">Politics</li></a> <a href><li class=\"mobile-nav-li\">Entertainment</li></a> <a href><li class=\"mobile-nav-li\">Opinion</li></a> <a href><li class=\"mobile-nav-li\">Science</li></a> <a href><li class=\"mobile-nav-li\">Activities</li></a> <a href><li class=\"mobile-nav-li\">Events</li></a></ul></div>" : "<!---->"))]);
};

var __vue_staticRenderFns__$7 = [];
/* style */

var __vue_inject_styles__$7 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-9cb8984c_0", {
    source: ".mobile-nav-box{display:none;padding-top:5vh;width:100vw;max-height:100vh;overflow:hidden;z-index:1;position:fixed;top:0}.mobile-nav{width:100vw;height:95vh;background-color:var(--primary-color);display:flex;text-align:center;justify-content:center;align-items:center}.mobile-nav-ul{margin-bottom:10vh}.mobile-nav li{list-style:none;font-size:3.5rem;margin:4vh;color:var(--white);transition:all .3s}.mobile-nav li:focus{padding:1.5rem;background-color:var(--black);border-radius:5rem}#nav-icon4{width:5rem;height:7vh;padding:2rem;position:relative;margin-left:90vw;-webkit-transform:rotate(0);-moz-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0);-webkit-transition:.5s ease-in-out;-moz-transition:.5s ease-in-out;-o-transition:.5s ease-in-out;transition:.5s ease-in-out;cursor:pointer}#nav-icon4 span{display:block;position:absolute;height:.5rem;width:100%;background:var(--primary-color);border-radius:1rem;opacity:1;left:0;-webkit-transform:rotate(0);-moz-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0);-webkit-transition:.25s ease-in-out;-moz-transition:.25s ease-in-out;-o-transition:.25s ease-in-out;transition:.25s ease-in-out}#nav-icon4 span:nth-child(1){top:.5rem;-webkit-transform-origin:left center;-moz-transform-origin:left center;-o-transform-origin:left center;transform-origin:left center}#nav-icon4 span:nth-child(2){top:2rem;-webkit-transform-origin:left center;-moz-transform-origin:left center;-o-transform-origin:left center;transform-origin:left center}#nav-icon4 span:nth-child(3){top:3.5rem;-webkit-transform-origin:left center;-moz-transform-origin:left center;-o-transform-origin:left center;transform-origin:left center}#nav-icon4.open span:nth-child(1){background:var(--white);-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);left:.8rem;top:0}#nav-icon4.open span:nth-child(2){width:0%;opacity:0}#nav-icon4.open span:nth-child(3){background:var(--white);-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);top:3.5rem;left:.8rem}@media only screen and (max-width:768px){.mobile-nav-box{display:block}}@media only screen and (max-width:600px){#nav-icon4 span:nth-child(1){top:1.25rem}#nav-icon4 span:nth-child(2){top:2.75rem}#nav-icon4 span:nth-child(3){top:4.25rem}#nav-icon4.open span:nth-child(1){top:1rem}#nav-icon4.open span:nth-child(3){top:4.5rem}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$7 = undefined;
/* module identifier */

var __vue_module_identifier__$7 = "data-v-9cb8984c";
/* functional template */

var __vue_is_functional_template__$7 = false;
/* style inject shadow dom */

var __vue_component__$7 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$6 = {
  name: "CategoryArticle",
  props: ["articleUrl", "imageUrl", "imageAlt", "category", "author", "published", "title"]
};/* script */
var __vue_script__$6 = script$6;
/* template */

var __vue_render__$6 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "category-article"
  }, [_vm._ssrNode("<div class=\"category-img-div\"><a" + _vm._ssrAttr("href", _vm.articleUrl) + "><img" + _vm._ssrAttr("href", _vm.articleUrl) + _vm._ssrAttr("src", _vm.imageUrl) + _vm._ssrAttr("alt", _vm.imageAlt) + " class=\"category-article-img\"></a></div> "), _vm._ssrNode("<div class=\"category-article-img-content\">", "</div>", [_vm._ssrNode("<div class=\"category-labels\">", "</div>", [_c('category-icon', {
    staticClass: "category-article-icon",
    attrs: {
      "category": _vm.category
    }
  }), _vm._ssrNode(" "), _c('author-and-date', {
    staticClass: "category-article-authdate",
    attrs: {
      "author": _vm.author,
      "published": _vm.published
    }
  })], 2), _vm._ssrNode(" <h3 class=\"category-title\">" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h3>")], 2)], 2);
};

var __vue_staticRenderFns__$6 = [];
/* style */

var __vue_inject_styles__$6 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-6a7fcfeb_0", {
    source: ".category-article{display:flex;flex-direction:row}.category-article-img{height:23rem;width:35rem;border-radius:1.5rem}.category-article-img-content{width:40vw;margin:0 0 auto 4rem}.category-title{font-size:2.5rem;font-weight:700;width:45rem;padding-top:1rem}.category-labels{margin-top:2rem;display:flex}.category-article-icon{padding-right:1.5rem}.category-article-authdate{margin:auto 0;line-height:2.2rem;padding-top:1rem}@media only screen and (max-width:768px){.category-article{display:flex;flex-direction:row-reverse;justify-content:center;margin:auto}.category-article-img{height:16rem;width:22rem;border-radius:1.5rem}.category-article-img-content{width:40vw;margin:0 15rem 0 0}.category-title{font-size:2rem;font-weight:700;width:45rem;padding-top:1rem}.category-article-icon{width:3rem;padding-right:1.5rem;height:3rem}.category-article-authdate{margin-left:7rem;line-height:2.2rem;padding-top:1rem}.category-labels{margin-top:2rem;display:flex;width:40rem}}@media only screen and (max-width:640px){.category-article{display:flex;flex-direction:row-reverse;justify-content:center;margin:auto}.category-article-img{height:12rem;width:16.5rem;border-radius:1.5rem}.category-article-img-content{width:40vw;margin:0 15rem 0 0}.category-title{font-size:1.8rem;font-weight:700;width:40rem;padding-top:1rem}.category-article-icon{width:3rem;padding-right:1.5rem;height:3rem}.category-article-authdate{margin-left:7rem;line-height:2.2rem;padding-top:1rem}.category-labels{margin-top:2rem;display:flex;width:40rem}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$6 = undefined;
/* module identifier */

var __vue_module_identifier__$6 = "data-v-6a7fcfeb";
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject shadow dom */

var __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$5 = {
  name: "FooterNav"
};/* script */
var __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "footer-nav"
  }, [_vm._ssrNode("<h4 class=\"footer-header footer-nav-header\">Navigation</h4> <div><ul class=\"footer-nav-ul\"><a href><li class=\"footer-nav-li\">News</li></a> <a href><li class=\"footer-nav-li\">Politics</li></a> <a href><li class=\"footer-nav-li\">Entertainment</li></a> <a href><li class=\"footer-nav-li\">Opinion</li></a> <a href><li class=\"footer-nav-li\">Science</li></a> <a href><li class=\"footer-nav-li\">Activities</li></a> <a href><li class=\"footer-nav-li\">Events</li></a></ul></div>")]);
};

var __vue_staticRenderFns__$5 = [];
/* style */

var __vue_inject_styles__$5 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-1b128f88_0", {
    source: ".footer-nav-header{font-size:var(--h3)}a{text-decoration:none;color:inherit}.footer-nav{width:36rem;margin:0 auto}.footer-nav-li{color:var(--primary-color);font-size:var(--h4);list-style-type:none;padding:.75rem}.footer-nav-ul{display:flex;flex-direction:column;align-items:center;padding:2rem;margin-top:1.5rem;border-top:.3rem solid var(--primary-color);border-bottom:.3rem solid var(--primary-color)}@media only screen and (max-width:600px){.footer-nav{margin:5.1rem auto}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$5 = undefined;
/* module identifier */

var __vue_module_identifier__$5 = "data-v-1b128f88";
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject shadow dom */

var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, createInjectorSSR, undefined);var FooterNav=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$5});//
//
//
//
//
//
//
//
var script$4 = {
  name: "Footer",
  components: {
    GetNotifiedSection: function GetNotifiedSection$1() {
      return Promise.resolve().then(function(){return GetNotifiedSection});
    },
    FooterSocialMedia: function FooterSocialMedia$1() {
      return Promise.resolve().then(function(){return FooterSocialMedia});
    },
    FooterNav: function FooterNav$1() {
      return Promise.resolve().then(function(){return FooterNav});
    }
  }
};/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('footer', {
    staticClass: "footer-container"
  }, [_c('GetNotifiedSection', {
    staticClass: "form"
  }), _vm._ssrNode(" "), _c('FooterSocialMedia', {
    staticClass: "social"
  }), _vm._ssrNode(" "), _c('FooterNav', {
    staticClass: "nav"
  })], 2);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-3c13847b_0", {
    source: ".footer-container{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;grid-template-areas:\"form nav\" \"social nav\";margin:0 auto;background-color:var(--grey);padding:3rem 15%}.form{grid-area:form}.social{grid-area:social}.nav{grid-area:nav}@media only screen and (max-width:1280px){.footer-container{padding:3rem}}@media only screen and (max-width:768px){.footer-container{display:flex;flex-direction:column}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$4 = undefined;
/* module identifier */

var __vue_module_identifier__$4 = "data-v-3c13847b";
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject shadow dom */

var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//import AuthorAndDate from './AuthorAndDate.vue';
//import CategoryIcon from './CategoryIcon.vue';
var script$3 = {
  name: "TextBelowArticlePreview",
  props: ["author", "articleUrl", "published", "category", "imageUrl", "imageAlt", "title"]
};/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('article', {
    staticClass: "text-below-preview-article"
  }, [_vm._ssrNode("<a" + _vm._ssrAttr("href", _vm.articleUrl) + "><img" + _vm._ssrAttr("href", _vm.articleUrl) + _vm._ssrAttr("src", _vm.imageUrl) + _vm._ssrAttr("alt", _vm.imageAlt) + " class=\"article-image\"></a> "), _vm._ssrNode("<h5 class=\"article-info\">", "</h5>", [_c('category-icon', {
    staticClass: "article-cat",
    attrs: {
      "category": _vm.category
    }
  }), _vm._ssrNode(" "), _c('author-and-date', {
    staticClass: "article-data",
    attrs: {
      "author": _vm.author,
      "published": _vm.published
    }
  })], 2), _vm._ssrNode(" <a" + _vm._ssrAttr("href", _vm.articleUrl) + " class=\"article-title\">" + _vm._ssrEscape(_vm._s(_vm.title)) + "</a>")], 2);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-7d0184c5_0", {
    source: "*,body,html{box-sizing:border-box;padding:0;margin:0;font-size:62.5%;font-family:var(--font)}a:link{text-decoration:none;color:var(--black)}a:visited{text-decoration:none;color:var(--black)}a:hover{text-decoration:none;color:var(--black)}a:active{text-decoration:none;color:var(--black)}.text-below-preview-article{display:flex;flex-direction:column;width:46.1rem;height:37rem;margin-right:3rem}.article-info{display:flex;width:42.2rem}.article-image{width:42.2rem;height:21.7rem;border-radius:1.5rem}.article-cat{margin-right:2rem}.article-title{margin:0;font-family:var(--font);font-style:normal;font-weight:700;font-size:2.5rem}.article-data{padding-top:1rem}@media only screen and (max-width:600px){.article-cat{margin-right:1rem}.article-data{margin-right:.25rem}.article-info{width:35rem}.article-image{width:37rem}.article-title{width:37rem}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = "data-v-7d0184c5";
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
var script$2 = {
  name: "OpinionSlider"
};/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "opinion-section"
  }, [_vm._ssrNode("<div class=\"scrolls\">", "</div>", [_c('text-below-article-preview', {
    staticClass: "opinion-card",
    attrs: {
      "width": "",
      "articleUrl": "https://theconversation.com/us/topics/rocket-science-195",
      "author": "Daniel Briskman",
      "published": "Jan 31, 2020",
      "category": "opinion",
      "imageAlt": "Space X Rocket",
      "title": "I hate rockets, and this is why you should too",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
    }
  }), _vm._ssrNode(" "), _c('text-below-article-preview', {
    staticClass: "opinion-card",
    attrs: {
      "articleUrl": "https://theconversation.com/us/topics/rocket-science-195",
      "author": "Alston Chan",
      "published": "Jan 31, 2020",
      "category": "opinion",
      "imageAlt": "Space X Rocket",
      "title": "Rockets are so valid and chill",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
    }
  }), _vm._ssrNode(" "), _c('text-below-article-preview', {
    staticClass: "opinion-card",
    attrs: {
      "articleUrl": "https://theconversation.com/us/topics/rocket-science-195",
      "author": "Charley Baluja",
      "published": "Jan 31, 2020",
      "category": "opinion",
      "imageAlt": "Space X Rocket",
      "title": "Rockets are cool",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAu-JntINSfv0U6b2Df439C-cXbDOOYRzsj9UuhMwwP290pnObcSbtJHXo93jNBpA5Ys&usqp=CAU"
    }
  })], 2)]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-4a931b5f_0", {
    source: ".opinion-section{display:flex;flex-direction:column;margin-bottom:3rem}.span-div{display:flex;flex-direction:row;justify-content:center}.scrolls{display:flex;flex-direction:row;width:70vw;margin:3rem auto;overflow-x:auto;overflow-y:hidden}.opinion-card{margin-right:1rem}.scrolls::-webkit-scrollbar{height:.8rem;border-radius:1.5rem;background-color:var(--accent-color)}.scrolls::-webkit-scrollbar-thumb{background-color:var(--primary-color);height:1.5rem;border-radius:1.5rem;width:10rem}.scrollbar{width:70vw;height:1.5rem;background-color:var(--accent-color);border-radius:1.5rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = "data-v-4a931b5f";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
var script$1 = {
  name: "CardComponent",
  props: ["author", "articleUrl", "published", "category", "imageUrl", "imageAlt", "title"]
};/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "card-component card-component-image",
    attrs: {
      "title": "Humanoid Entity Surfing In The Ocean at Dusk"
    }
  }, [_vm._ssrNode("<a" + _vm._ssrAttr("href", _vm.articleUrl) + " class=\"flex-col card-component-text-container\">", "</a>", [_vm._ssrNode("<div class=\"flex-row card-component-category-author-date\">", "</div>", [_c('category-icon', {
    staticClass: "card-component-category",
    attrs: {
      "category": _vm.category
    }
  }), _vm._ssrNode(" "), _c('author-and-date', {
    staticClass: "card-component-author-and-date",
    attrs: {
      "author": _vm.author,
      "published": _vm.published
    }
  })], 2), _vm._ssrNode(" <div class=\"text-overflow card-component-title\">" + _vm._ssrEscape(" " + _vm._s(_vm.title)) + "</div>")], 2)]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-c667d286_0", {
    source: "*,body,html{box-sizing:border-box;padding:0;margin:0;font-size:62.5%;font-family:var(--font)}a:link{text-decoration:none;color:var(--black)}a:visited{text-decoration:none;color:var(--black)}a:hover{text-decoration:none;color:var(--black)}a:active{text-decoration:none;color:var(--black)}.card-component{cursor:pointer;width:67.3rem;height:57.8rem;border-radius:1.5rem;position:relative}.card-component-image{background:linear-gradient(180deg,rgba(255,255,255,0) 0,rgba(132,132,132,.29) 54.17%,rgba(0,0,0,.5) 65.1%),url(../assets/card-comp-tempimg.jpeg);background-repeat:no-repeat;background-size:cover}.flex-col{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.card-component-text-container{width:80.2%;max-height:50%;margin:0 5.2rem auto;position:absolute;top:50%}.card-component-category-author-date{max-height:5rem auto;padding-bottom:1.7rem}.card-component-category{padding-right:1.7rem;color:var(--white)}.card-component-author-and-date{position:relative;height:1.6rem;padding-top:1.5rem;color:var(--white)}.text-overflow{display:block;display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}@media only screen and (max-width:1280px){.text-overflow{-webkit-line-clamp:5}}@media only screen and (max-width:768px){.text-overflow{-webkit-line-clamp:4}}@media only screen and (max-width:600px){.text-overflow{-webkit-line-clamp:4}}.card-component-title{font-weight:700;font-size:3.6rem;line-height:4rem;color:var(--white)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = "data-v-c667d286";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: "MobileCategoryArticle",
  props: ["category", "author", "published", "title"]
};/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "cat-article"
  }, [_vm._ssrNode("<div class=\"cat-labels\">", "</div>", [_c('category-icon', {
    attrs: {
      "category": _vm.category
    }
  }), _vm._ssrNode(" "), _c('author-and-date', {
    staticClass: "auth-date",
    attrs: {
      "author": _vm.author,
      "published": _vm.published
    }
  })], 2), _vm._ssrNode(" <a" + _vm._ssrAttr("href", _vm.articleUrl) + " class=\"cat-article-title\">" + _vm._ssrEscape(_vm._s(_vm.title)) + "</a>")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-69a1783d_0", {
    source: ".cat-article{border-bottom:.3rem solid var(--primary-color);margin-bottom:2rem;display:inline-block}.cat-labels{display:flex;flex-direction:row;align-items:center}.auth-date{margin-left:1.7rem}.cat-article-title{font-size:var(--h3);font-weight:700}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-69a1783d";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,Sidebar: __vue_component__$j,SidebarContainer: __vue_component__$i,CategoryIconSidebar: __vue_component__$l,AuthorAndDateSidebar: __vue_component__$k,CategoryIcon: __vue_component__$h,SeeMoreBtn: __vue_component__$g,AuthorAndDate: __vue_component__$f,GetNotifiedSection: __vue_component__$e,SocialMediaIcons: __vue_component__$d,ShareIcon: __vue_component__$c,EntertainmentSideArticle: __vue_component__$b,FooterSocialMedia: __vue_component__$a,Navbar: __vue_component__$9,Datebar: __vue_component__$8,MobileNav: __vue_component__$7,CategoryArticle: __vue_component__$6,FooterNav: __vue_component__$5,Footer: __vue_component__$4,TextBelowArticlePreview: __vue_component__$3,OpinionSlider: __vue_component__$2,CardComponent: __vue_component__$1,MobileCategoryArticle: __vue_component__});var install = function installSithsComponentLib(Vue) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,Sidebar: __vue_component__$j,SidebarContainer: __vue_component__$i,CategoryIconSidebar: __vue_component__$l,AuthorAndDateSidebar: __vue_component__$k,CategoryIcon: __vue_component__$h,SeeMoreBtn: __vue_component__$g,AuthorAndDate: __vue_component__$f,GetNotifiedSection: __vue_component__$e,SocialMediaIcons: __vue_component__$d,ShareIcon: __vue_component__$c,EntertainmentSideArticle: __vue_component__$b,FooterSocialMedia: __vue_component__$a,Navbar: __vue_component__$9,Datebar: __vue_component__$8,MobileNav: __vue_component__$7,CategoryArticle: __vue_component__$6,FooterNav: __vue_component__$5,Footer: __vue_component__$4,TextBelowArticlePreview: __vue_component__$3,OpinionSlider: __vue_component__$2,CardComponent: __vue_component__$1,MobileCategoryArticle: __vue_component__});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;