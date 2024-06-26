(function(window, document){
    'use strict';
  /*
  Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
  o código, conforme vimos na aula anterior. Quebrar as responsabilidades
  em funções, onde cada função faça somente uma única coisa, e faça bem feito.

  - Remova as duplicações de código;
  - agrupe os códigos que estão soltos em funções (declarações de variáveis,
  listeners de eventos, etc);
  - faça refactories para melhorar esse código, mas de forma que o mantenha com a
  mesma funcionalidade.
  */

  var $visor = document.querySelector('[data-js="visor"]');
  var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
  var $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
  var $buttonCE = document.querySelector('[data-js="button-ce"]');
  var $buttonEqual = document.querySelector('[data-js="button-equal"]');
  var operations = getOperations();

  function initialize(){
    initEvents();
  }

  function initEvents(){
    Array.prototype.forEach.call($buttonsNumbers, function(button) {
      button.addEventListener('click', handleClickNumber, false);
    });
    Array.prototype.forEach.call($buttonsOperations, function(button) {
      button.addEventListener('click', handleClickOperation, false);
    });
    $buttonCE.addEventListener('click', handleClickCE, false);
    $buttonEqual.addEventListener('click', handleClickEqual, false);
  }

  function handleClickNumber() {
    $visor.value += this.value;
  }

  function handleClickOperation(){;
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value += this.value;
  }

  function handleClickCE() {
    $visor.value = 0;
  }

  function getOperations(){
    return Array.prototype.map.call($buttonsOperations, function(button){
      return button.value;
    });
  }

  function isLastItemAnOperation(number) {
    var lastItem = number.slice(-1);
    return operations.includes(lastItem)
  };

  function removeLastItemIfItIsAnOperator(string) {
    if(isLastItemAnOperation(string))
      return string.slice(0, -1);
    return string;
  }

  function handleClickEqual() {
    var allValues = $visor.value.match(regexOperations());
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value = allValues.reduce(calculateAllValues);
  }

  function regexOperations(){
    return new RegExp('\\d+['+ getOperations().join('') +']?', 'g')
  }

  function calculateAllValues(accumulated, actual) {
    var firstValue = accumulated.slice(0, -1);
    var operator = accumulated.split('').pop();
    var lastValue = removeLastItemIfItIsAnOperator(actual);
    var lastOperator = getLastOperator(actual)
    return doOperation(operator, firstValue, lastValue) + lastOperator;
  };

  function getLastOperator(value){
    return isLastItemAnOperation(value) ? value.split('').pop() : '';
  }

  function doOperation(operator, firstValue, lastValue){
    switch(operator) {
      case '+':
        return ( Number(firstValue) + Number(lastValue) )
      case '-':
        return ( Number(firstValue) - Number(lastValue) )
      case 'x':
        return ( Number(firstValue) * Number(lastValue) )
      case '÷':
        return ( Number(firstValue) / Number(lastValue) )
    }
  }

  initialize();

}(window, document));
