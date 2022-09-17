import {
  __toESM,
  require_react
} from "/build/_shared/chunk-WWWS7TQW.js";

// mdx:routes/posts/first-post.mdx
var import_react = __toESM(require_react());
function MDXContent(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react.default.createElement(MDXLayout, {
    ...props
  }, _content) : _content;
}
var first_post_default = MDXContent;
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta = typeof attributes !== "undefined" && attributes.meta;
export {
  first_post_default as default,
  meta
};
//# sourceMappingURL=/build/routes/posts/first-post-KT2XKRJY.js.map
