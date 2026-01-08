import { B as BUILD, c as consoleDevInfo, H, w as win, N as NAMESPACE, p as promiseResolve, b as bootstrapLazy } from './index-DFHlXP_q.js';
export { s as setNonce } from './index-DFHlXP_q.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.31.0 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  if (BUILD.isDev && !BUILD.isTesting) {
    consoleDevInfo("Running in development mode.");
  }
  if (BUILD.cloneNodeFix) {
    patchCloneNodeFix(H.prototype);
  }
  const scriptElm = BUILD.scriptDataOpts ? win.document && Array.from(win.document.querySelectorAll("script")).find(
    (s) => new RegExp(`/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute("data-stencil-namespace") === NAMESPACE
  ) : null;
  const importMeta = import.meta.url;
  const opts = BUILD.scriptDataOpts ? (scriptElm || {})["data-opts"] || {} : {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};
var patchCloneNodeFix = (HTMLElementPrototype) => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function(deep) {
    if (this.nodeName === "TEMPLATE") {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["mlz-code-validation",[[2,"mlz-code-validation",{"isLoading":[4,"is-loading"],"digit0":[32],"digit1":[32],"digit2":[32],"digit3":[32],"digit4":[32],"digit5":[32]},[[0,"mlzClick","handleAnyMlzClick"]]]]],["mlz-create-password",[[2,"mlz-create-password",{"passwordValue":[32],"confirmPasswordValue":[32],"passwordTouched":[32],"confirmPasswordTouched":[32]}]]],["mlz-avatar",[[2,"mlz-avatar",{"imageUrl":[1,"image-url"],"size":[1],"mask":[1],"maskType":[1,"mask-type"],"status":[1],"color":[1],"name":[1]}]]],["mlz-color-selector",[[2,"mlz-color-selector",{"selectedColor":[32]}]]],["mlz-image-cropper",[[2,"mlz-image-cropper",{"src":[1],"aspectRatio":[2,"aspect-ratio"],"transform":[32]},null,{"src":["onSrcChange"]}]]],["mlz-image-selector",[[2,"mlz-image-selector",{"buttonText":[1,"button-text"],"aditionalText":[1,"aditional-text"]}]]],["mlz-range",[[2,"mlz-range",{"min":[2],"max":[2],"step":[2],"value":[1538]}]]],["mlz-spinner",[[2,"mlz-spinner",{"size":[1]}]]],["mlz-loading-button",[[6,"mlz-loading-button",{"isLoading":[1540,"is-loading"],"disabled":[4],"type":[1],"styleClass":[1,"style-class"]},null,{"isLoading":["onLoadingChange"]}]]],["mlz-input",[[6,"mlz-input",{"value":[1025],"status":[1],"label":[1],"name":[1],"type":[1],"isTouched":[32],"isPasswordVisible":[32]}]]]], options);
});
//# sourceMappingURL=millez-components.esm.js.map

//# sourceMappingURL=millez-components.esm.js.map