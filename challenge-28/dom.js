(function(window, document ){
  'use strict';

  class DOM {
    constructor(elements) {
      this.element = document.querySelectorAll(elements);
    }
    on(eventType, callback) {
      Array.prototype.forEach.call(this.element, function (element) {
        element.addEventListener(eventType, callback, false);
      });
    }
    off(eventType, callback) {
      Array.prototype.forEach.call(this.element, function (element) {
        element.removeEventListener(eventType, callback, false);
      });
    }
    get() {
      return this.element;
    }
    forEach() {
      return Array.prototype.forEach.apply(this.element, arguments);
    }
    map() {
      return Array.prototype.map.apply(this.element, arguments);
    }
    filter() {
      return Array.prototype.filter.apply(this.element, arguments);
    }
    reduce() {
      return Array.prototype.reduce.apply(this.element, arguments);
    }
    reduceRight() {
      return Array.prototyp.reduceRight.apply(this.element, arguments);
    }
    every() {
      return Array.prototype.every.apply(this.element, arguments);
    }
    some() {
      return Array.prototype.some.apply(this.element, arguments);
    }
    isArray(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    }
    isObject(obj) {
      return Object.prototype.toString.call(obj) === '[object Object]';
    }
    isFunction(obj) {
      return Object.prototype.toString.call(obj) === '[object Function]';
    }
    isNumber(obj) {
      return Object.prototype.toString.call(obj) === '[object Number]';
    }
    isString(obj) {
      return Object.prototype.toString.call(obj) === '[object String]';
    }
    isBoolean(obj) {
      return Object.prototype.toString.call(obj) === '[object Boolean]';
    }
    isNull(obj) {
      return Object.prototype.toString.call(obj) === '[object Null]' || Object.prototype.toString.call(obj) === '[object Undefined]';
    }
  };

  window.DOM = DOM;
}(window, document));
