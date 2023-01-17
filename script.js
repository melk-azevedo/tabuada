function calcular() {
    const txtn = document.getElementById("txtn")
    const tab = document.getElementById("seltab")

    if (txtn.value.length == 0) {
        window.alert("Por favor digite um número")
    } else {
        const num = Number(txtn.value)
        tab.innerHTML = ""
        for (let cont = 1; cont <= 10; cont++) {
            total = num * cont
            let item = document.createElement("option")
            // Criando o option de forma dinâmica
            item.text = `${num} x ${cont} = ${total}`
            tab.appendChild(item) 
            // Adicionando um elemento filho para mostrar na tela
        }
    }
}