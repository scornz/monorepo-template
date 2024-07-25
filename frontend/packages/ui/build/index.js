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
  Paragraph: () => Paragraph,
  Strong: () => Strong
});
module.exports = __toCommonJS(src_exports);

// src/Paragraph.tsx
var import_react_native = require("react-native");
var import_jsx_runtime = require("react/jsx-runtime");
var Paragraph = (_a) => {
  var _b = _a, { children, style } = _b, props = __objRest(_b, ["children", "style"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Text, __spreadProps(__spreadValues({}, props), { style: [$paragraph, style], children }));
};
var { $paragraph } = import_react_native.StyleSheet.create({
  $paragraph: {
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 16,
    letterSpacing: 0.25,
    marginVertical: 2
  }
});

// src/Strong.tsx
var import_react_native2 = require("react-native");
var import_jsx_runtime2 = require("react/jsx-runtime");
var Strong = (_a) => {
  var _b = _a, { children, style } = _b, props = __objRest(_b, ["children", "style"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_native2.Text, __spreadProps(__spreadValues({}, props), { style: [$strong, style], children }));
};
var { $strong } = import_react_native2.StyleSheet.create({
  $strong: {
    fontWeight: "bold",
    color: "rgb(0, 0, 238)"
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Paragraph,
  Strong
});
//# sourceMappingURL=index.js.map