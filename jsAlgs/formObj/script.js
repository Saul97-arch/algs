const btn = document.getElementById("btn");
const div = document.getElementById("loc");
const name = document.getElementById("name");
const under_name = document.getElementById('under_name');
const weight = document.getElementById("weigth");
const height = document.getElementById("heigth");

let arr = [];

btn.addEventListener("click", function addObj() {
  if (isNaN(weight.value) || isNaN(height.value)) {
    alert('Insira um numero!')
    return;      
  }
  
  div.innerHTML += `Nome: ${name.value}<br>Sobrenome: ${under_name.value}<br>Peso: ${weight.value}<br>Altura: ${height.value}<br>`;
  arr.push({ 'name': name.value, 'weight': weight.value, 'height': height.value });
  console.log("huashua");
});
