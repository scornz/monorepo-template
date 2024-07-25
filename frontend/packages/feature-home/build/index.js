"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  HomeIcon: () => HomeIcon,
  HomeScreen: () => HomeScreen
});
module.exports = __toCommonJS(src_exports);

// src/HomeIcon.tsx
var import_ui = require("@acme/ui");
var import_jsx_runtime = require("react/jsx-runtime");
var HomeIcon = (_a) => {
  var _b = _a, { style } = _b, props = __objRest(_b, ["style"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Paragraph, __spreadProps(__spreadValues({ style: [{ fontSize: 28 }, style] }, props), { children: "\u{1F44B}" }));
};

// src/HomeScreen.tsx
var import_ui2 = require("@acme/ui");
var import_jsx_runtime2 = require("react/jsx-runtime");
var HomeScreen = (props) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Paragraph, __spreadProps(__spreadValues({}, props), { children: [
  "Hello from an ",
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Strong, { children: "Expo monorepo" }),
  "!"
] }));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HomeIcon,
  HomeScreen
});
//# sourceMappingURL=index.js.map