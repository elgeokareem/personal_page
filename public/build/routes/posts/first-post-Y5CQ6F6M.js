import {
  __toESM,
  require_react
} from "/build/_shared/chunk-WWWS7TQW.js";

// mdx:routes/posts/first-post.mdx
var import_react = __toESM(require_react());
var attributes = {
  "meta": {
    "title": "My First Post",
    "description": "Isn't this just awesome?"
  }
};
function MDXContent(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(_components.h1, null, "Example Markdown Post"), "\n", /* @__PURE__ */ import_react.default.createElement(_components.p, null, 'You can reference your frontmatter data through "attributes". The title of this post is ', attributes.meta.title, "!"));
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
//# sourceMappingURL=/build/routes/posts/first-post-Y5CQ6F6M.js.map
