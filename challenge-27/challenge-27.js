(function(win, doc){
  'use strict'
  /*
  Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
  métodos semelhantes aos que existem no array, mas que sirvam para os
  elementos do DOM selecionados.
  Crie os seguintes métodos:
  - forEach, map, filter, reduce, reduceRight, every e some.

  Crie também métodos que verificam o tipo do objeto passado por parâmetro.
  Esses métodos não precisam depender de criar um novo elmento do DOM, podem
  ser métodos estáticos.

  Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
  no objeto, como nos exemplos abaixo:
  DOM.isArray([1, 2, 3]); // true
  DOM.isFunction(function() {}); // true
  DOM.isNumber('numero'); // false

  Crie os seguintes métodos para verificação de tipo:
  - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  O método isNull deve retornar `true` se o valor for null ou undefined.
  */

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

}(window, document));
