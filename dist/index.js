(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.domtooljs = {}));
}(this, function (exports) { 'use strict';

  function getTopScrolledElement() {
    // eslint-disable-line import/prefer-default-export
    var _document = document,
        html = _document.documentElement,
        body = _document.body;
    return html.scrollTop ? html : body;
  }

  exports.getTopScrolledElement = getTopScrolledElement;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
