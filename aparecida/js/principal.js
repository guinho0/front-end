var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";/* aqui vc consegue alterar o texto por meio do text.content*/

var paciente = document.querySelector("#primeiro-paciente");/*queremos calcular o imc automaticamente*/

var tdPeso = paciente.querySelector(".info-peso");/*seleciona o peso do paciente*/
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");/*seleciona a altura do paciente*/
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");




var imc = peso/(altura*altura)
console.log(imc)

tdImc.textContent = imc;






