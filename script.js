const btn = document.querySelector("#send")
const clean = document.querySelector("#clear")
const output = document.querySelector("#output")

btn.addEventListener("click", function(e){
    e.preventDefault()
    const name = document.querySelector("#name")
    const valor_atual = document.querySelector("#valor_atual")
    const valor_cupom = document.querySelector("#valor_cupom")
    const cupom = document.querySelector("#cupom")
    const link = document.querySelector("#link")
    const soma = Number(valor_atual.value) - Number(valor_cupom.value)
    let value = ''

    if(cupom.value==""){
        value =  `${'\u{1F6D2}'} <strong>${name.value}</strong><br>${'\u{1F4B8}'} Valor = <strong>R$ ${valor_atual.value}</strong> <br>${'\u{1F517}'} ${link.value}
        <br>
        <br>
        ${'\u{2705}'}CUPONOMIA:<br>https://www.cuponomia.com.br/ref/0702d2e7d253<br>
        ${'\u{2705}'}CANAL DO TELEGRAM:<br>https://t.me/+7J9eRe8OruM1YjUx`
    } else{
         value =  `${'\u{1F6D2}'} <strong>${name.value}</strong><br>
        ${'\u{1F4B8}'} Valor = <strong>R$ ${soma}  (C/ cupom do vendedor)</strong> <br>
        ${'\u{1F911}'} Cupom: ${cupom.value}<br>
        ${'\u{1F517}'} ${link.value}<br>
        <br>
        ${'\u{2705}'}CUPONOMIA:<br>https://www.cuponomia.com.br/ref/0702d2e7d253
        <br>
    ${'\u{2705}'}CANAL DO TELEGRAM:<br>https://t.me/+7J9eRe8OruM1YjUx
    `
    }
    
    output.innerHTML = value
    name.value = ""
    valor_atual.value = ""
    valor_cupom.value = ""
    cupom.value = ""
    link.value = ""
})

clean.addEventListener("click", function(a){
    a.preventDefault()
    const name = document.querySelector("#name")
    const value =  ""
    output.innerHTML = value
})
