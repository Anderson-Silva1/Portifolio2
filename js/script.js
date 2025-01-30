let isPostAtivo = true;

const btnViewPost = document.querySelector("#btn-view-post");
const post_inativos = document.querySelectorAll(
  ".post-card:not(.post-card-ativo)"
);

btnViewPost.addEventListener("click", () => {
  isPostAtivo = !isPostAtivo;

  if (isPostAtivo) {
    post_inativos.forEach((post_inativo) => {
      post_inativo.classList.remove("post-card-ativo");
    });

    btnViewPost.textContent = "View All";
  } else {
    post_inativos.forEach((post_inativo) => {
      post_inativo.classList.add("post-card-ativo");
    });

    btnViewPost.textContent = "Not View All";
  }
});

const nomes = ["Analista de Sistemas", "Desenvolvedor Web", "Designer"];
const autoEscrita = document.getElementById("auto-escrita");

let indexNome = 0;
let indexLetra = 0;

function escreverNome() {
  if (indexLetra < nomes[indexNome].length) {
    autoEscrita.textContent += nomes[indexNome][indexLetra];
    indexLetra++;
    setTimeout(escreverNome, 100); // Tempo entre cada letra
  } else {
    setTimeout(apagarNome, 1000); // Espera antes de apagar
  }
}

function apagarNome() {
  if (indexLetra > 0) {
    autoEscrita.textContent = autoEscrita.textContent.slice(0, -1);
    indexLetra--;
    setTimeout(apagarNome, 50); // Tempo entre apagar cada letra
  } else {
    indexNome = (indexNome + 1) % nomes.length;
    setTimeout(escreverNome, 500); // Espera antes de escrever o próximo nome
  }
}

escreverNome();
