let nomeAmigos = [];

function adicionarAmigo() {
  let amigoAdicionado = document.getElementById('amigo').value.trim();


    if (amigoAdicionado === '') {
      alert('Por favor insira um nome');
      return;
    }

    // Conferir se o nome já está na lista
    if (nomeAmigos.includes(amigoAdicionado)) {
      let resposta = prompt('Esse nome já existe na sua lista de amigos secretos. Quer adicionar assim mesmo? [S]im ou [N]ão').toUpperCase();
      if (resposta !== 'S') {
          limparCampo();
          return;
      }
    }
  

    nomeAmigos.push(amigoAdicionado);
    limparTexto();
    criarLista();

  }

function limparTexto () {
  document.getElementById('amigo').value = '';
}

function criarLista() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  nomeAmigos.forEach(nome => {
      let li = document.createElement('li');
      li.textContent = nome;
      lista.appendChild(li);
  });
}


function sortearAmigo () {

  if (nomeAmigos.length < 2) {
    alert('Adicione pelo menos dois nomes antes de sortear.');
    return;
}

let numeroEscolhido = Math.floor(Math.random() * nomeAmigos.length);
let nomeSorteado = nomeAmigos[numeroEscolhido];

document.getElementById('resultado').innerHTML = `🎉 ${nomeSorteado} 🎉`;

soltarConfete();

}


function soltarConfete() {
  let count = 200;
  let defaults = { origin: { y: 0.7 } };

  function fire(particleRatio, opts) {
      confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
      });
  }

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}

