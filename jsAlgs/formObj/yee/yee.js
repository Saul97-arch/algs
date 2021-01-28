function meuEscopo() {
  const form = document.querySelector(".form");
  const res = document.querySelector('.resultado');

  const pessoas = [];
  /* form.onsubmit = (e) => {
    e.preventDefault();
    alert(1);
    console.log('Enviado');
  }; */

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = form.querySelector(".nome");
    const sobre_nome = form.querySelector(".sobre_nome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    const p = document.createElement('p');
    p.innerHTML = `Nome: ${nome.value} <br> Sobrenome: ${sobre_nome.value} <br> Peso: ${peso.value} <br> Altura: ${altura.value} <br>`;
    res.appendChild(p);
    pessoas.push({ 'nome': nome.value, 'peso': peso.value, 'altura': altura.value, 'sobre_nome': sobre_nome.value })
    console.log(pessoas);
  });
}

meuEscopo();
