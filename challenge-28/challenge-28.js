(function(DOM){
  'use strict';
/*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://cdn.apicep.com/file/apicep/[cep].json", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
 function app(){
   var $formCep = new DOM('[data-js="form"]');
   var $imputCEP = new DOM('[data-js="imput-cep"]')
   var ajax = new XMLHttpRequest();
   var $logadouro = new DOM('[data-js="log"]');
   var $bairro = new DOM('[data-js="bairro"]')
   var $estado = new DOM('[data-js="estado"]')
   var $cidade = new DOM('[data-js="cidade"]')
   var $cep  = new DOM('[data-js="cep"]')
   var $status = new DOM('[data-js="error"]')
   $formCep.on('submit', handleSubmitFormCEP);

   function handleSubmitFormCEP(event){
      event.preventDefault();
      var url = getUrl();
      ajax.open('GET', url);
      ajax.send();
      getMessage('loading');
      ajax.addEventListener('readystatechange', handleReadyStateChange);
    }

    function getUrl(){
      return replaceCEP('https://cdn.apicep.com/file/apicep/[cep].json')
    }

    function cleanCEP(){
      return $imputCEP.get()[0].value.replace(/\d/g, '');
    }

    function handleReadyStateChange(){
      if( isRequestOk() ){
        getMessage('ok');
        fillCEPFields();
      }
    }

    function isRequestOk(){
      return ajax.readyState === 4 && ajax.status === 200
    }

    function fillCEPFields(){
      var data = parseData();
      if(!data){
        getMessage('error');
        data = clearData();
      }

      $logadouro.get()[0].textContent = data.logadouro;
      $bairro.get()[0].textContent = data.bairro;
      $estado.get()[0].textContent = data.uf;
      $cidade.get()[0].textContent = data.localidade;
      $cep.get()[0].textContent = data.cep;
    }

    function clearData(){
      return {
        logadouro: '-',
        bairro: '-',
        uf: '-',
        localidade: '-',
        cep: '-'
      }
    }

    function parseData(){
      var result;
      try{
        result = JSON.parse(ajax.responseText);
      }
      catch(e){
        result = null;
      }
      return result;
    }

    function getMessage(type){
      var message = {
        loading: replaceCEP('Buscando informações para o CEP [CEP]...'),
        ok: replaceCEP('Endereço referente ao CEP [CEP]:'),
        error: replaceCEP('Não encontramos o endereço para o CEP [CEP].')
      };
      $status.get()[0].textContent = message[type];
    }

    function replaceCEP(message){
      return message.replace('[CEP]', cleanCEP);
    }
  }

  window.app = app;
  app();
}(window.DOM));
