const btn = document.querySelector("#enviar");
const clean = document.querySelector("#clear");
const output = document.querySelector("#output");
const copiar = document.querySelector("#copiar");
let textoCopiado = "";

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const name = document.querySelector("#name");
  const valor_atual = document.querySelector("#valor_atual");
  const valor_cupom = document.querySelector("#valor_cupom");
  const cupom = document.querySelector("#cupom");
  const link = document.querySelector("#link");
  const soma = Number(valor_atual.value) - Number(valor_cupom.value);
  if (isNaN(soma)) {
    alert(
      "Por favor, insira um valor numérico válido em 'Valor Atual' e 'Valor do Cupom'."
    );
    return;
  }
  if (cupom.value == "") {
    textoCopiado = `${"\u{1F6D2}"} ${name.value}
    ${"\u{1F4B8}"}Valor = R$ ${valor_atual.value}
    ${"\u{1F517}"}${link.value}
    
    ${"\u{2705}"}CUPONOMIA: https://www.cuponomia.com.br/ref/0702d2e7d253
    ${"\u{2705}"}CANAL DO TELEGRAM: https://telegram.org/`;
  } else {
    textoCopiado = `${"\u{1F6D2}"} ${name.value}
    ${"\u{1F4B8}"}Valor = R$ ${soma}  (C/ cupom do vendedor)
    ${"\u{1F911}"}Cupom: ${cupom.value}
    ${"\u{1F517}"}${link.value}
    
    ${"\u{2705}"}CUPONOMIA: https://www.cuponomia.com.br/ref/0702d2e7d253
    ${"\u{2705}"}CANAL DO TELEGRAM: https://telegram.org/`;
  }
  copiar.style.display = "block";
  output.innerText = textoCopiado;
  name.value = "";
  valor_atual.value = "";
  valor_cupom.value = "";
  cupom.value = "";
  link.value = "";
});

clean.addEventListener("click", function (a) {
  a.preventDefault();
  const name = document.querySelector("#name");
  textoCopiado = "";
  output.innerText = "";
  copiar.style.display = "none";
});

copiar.addEventListener("click", function (b) {
  b.preventDefault();
  if (textoCopiado) {
    const textarea = document.createElement("textarea");
    textarea.value = textoCopiado;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Texto copiado com sucesso!");
  } else {
    alert("Nenhum texto para copiar.");
  }
});
