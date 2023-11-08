const caixaNota = document.getElementById("selecionar-nota");
const caixaAgradecimento = document.getElementById("agradecimento");
const notas = document.querySelectorAll(".nota");
const botaoEnviar = document.getElementById("enviar");

let nota = 0;

notas.forEach(function (notaSelecionada, index) {
  notaSelecionada.addEventListener("click", function () {
    notas.forEach((nota) => {
      nota.style.backgroundColor = "hsl(213, 19%, 21%)";

      nota.style.color = "hsl(217, 12%, 63%)";
    });

    notaSelecionada.style.backgroundColor = "hsl(25, 97%, 53%)";
    notaSelecionada.style.color = "#fff";

    if (index > 0) {
      notas[index - 1].style.backgroundColor = "hsl(216, 12%, 54%)";

      notas[index - 1].style.color = "#fff";
    }

    nota = notaSelecionada.textContent;
  });
});

botaoEnviar.addEventListener("click", function () {
  const notaEscolhida = document.getElementById("nota-escolhida");

  if (nota > 0) {
    caixaNota.style.display = "none";

    caixaAgradecimento.style.display = "block";

    notaEscolhida.innerHTML = "You selected " + nota + " out of 5";
  } else {
    window.alert("Selecione uma nota")
  }
});
