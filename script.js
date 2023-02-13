const telaEquacao = document.querySelector(".calculadora__tela");
const botoes = document.querySelectorAll("input[type='button']");

if(telaEquacao.value === '')

botoes.forEach((botao) => {
  botao.onclick = () => {
    if (botao.value === "÷") {
      telaEquacao.value += "/";
    } else if (botao.value === "x") {
      telaEquacao.value += "*";
    } else if (botao.value === "del") {
      telaEquacao.value = "";
    } else if (botao.value === "total") {
      telaEquacao.value = eval(telaEquacao.value);
    } else {
      telaEquacao.value += botao.value;
    }
  };
  botao.addEventListener("click", (e) => {
    e.target.classList.add("animacao");
    setInterval(() => {
      botao.classList.remove("animacao");
    }, 1000);
  });
});
