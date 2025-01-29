let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo === "") {
        alert("Por favor, preencha o campo de nome.");
        return;
    } 
    if (amigos.includes(amigo)) {
        alert("Este amigo já foi adicionado.");
        return;
    }
    amigos.push(amigo);
    console.log(amigos);
    document.getElementById('amigo').value = "";
    exibirAmigos();
}

function exibirAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item); 
    }; 
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear.");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "O amigo sorteado foi: " + amigoSorteado;
}
