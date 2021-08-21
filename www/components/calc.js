window.onload = function(){
    const display = document.querySelector("#display");
    const numerico = document.querySelectorAll('.numerico');
    let valor1;
    let valor;
    let op;
    let botoes = Array.prototype.filter.call(numerico, function(botao){
       botao.addEventListener('click', function(){
         valor = display.value;
         valor += this.value;
         display.value = valor;
       });
    });
   document.querySelector("#sub").addEventListener('click', function(){
       valor1 = display.value;
       display.value = "";
       op = "sub";
   });
      document.querySelector("#mult").addEventListener('click', function(){
       valor1 = display.value;
       display.value = "";
       op = "mult";
   });
      document.querySelector("#soma").addEventListener('click', function(){
       valor1 = display.value;
       display.value = "";
       op = "soma";
   });
      document.querySelector("#div").addEventListener('click', function(){
       valor1 = display.value;
       display.value = "";
       op = "div";
   });
       document.querySelector("#apagar").addEventListener('click', function(){
       display.value = "";
   });
   document.querySelector("#igual").addEventListener('click', function(){
       let valor2 = display.value;
       if (op == 'sub'){
         display.value = valor1 - valor2;
       } 
       if (op == 'soma'){
         display.value = parseInt(valor1) + parseInt(valor2);
       }   
       if (op == 'mult'){
         display.value = valor1 * valor2;
       }
       if (op == 'div'){
         display.value = valor1 / valor2;
       }
   });
}

