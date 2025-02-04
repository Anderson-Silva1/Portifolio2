// Ver mais
let isPostAtivated = false;
const btnViewPosts = document.querySelector("#ver-mais");
const postsInativos = document.querySelectorAll(".post:not(.post-ativo)");

btnViewPosts.addEventListener("click", post);

function post() {
  isPostAtivated = !isPostAtivated;

  if (isPostAtivated) {
    postsInativos.forEach((postInativo) =>
      postInativo.classList.add("post-ativo")
    );
    btnViewPosts.textContent = "Ver menos";
  } else {
    postsInativos.forEach((postInativo) =>
      postInativo.classList.remove("post-ativo")
    );
    btnViewPosts.textContent = "Ver mais";
  }
}

// Indicador
const indicador = document.getElementById("indicador");

// Calcular a altura máxima corretamente
const maxHeight = document.documentElement.scrollHeight - window.innerHeight;

window.addEventListener("scroll", indicadorPorcent);

function indicadorPorcent() {
  // Calcular o percentual baseado no scroll atual
  const porcentual = (window.scrollY / maxHeight) * 100;

  // Garantir que a largura do indicador nunca seja menor que 0% e nunca maior que 100%
  indicador.style.width = `${Math.min(Math.max(porcentual, 0), 100)}%`;
}

// Escrita altomática
document.addEventListener("DOMContentLoaded", function () {
  const nomes = [
    "Apaixonado por tecnologia",
    // "Programador Web",
    // "Analista de Sistemas",
    // "Desenvolvedor Web",
    // "UI/UX Designer",
  ];
  const autoEscrita = document.getElementById("auto-escrita");

  let indexNome = 0;
  let indexLetra = 0;
  let apagando = false;

  function atualizarTexto() {
    if (!apagando) {
      if (indexLetra < nomes[indexNome].length) {
        autoEscrita.textContent += nomes[indexNome][indexLetra];
        indexLetra++;
        setTimeout(atualizarTexto, 150);
      } else {
        apagando = true;
        setTimeout(atualizarTexto, 1000);
      }
    } else {
      if (indexLetra > 0) {
        autoEscrita.textContent = autoEscrita.textContent.slice(0, -1);
        indexLetra--;
        setTimeout(atualizarTexto, 75);
      } else {
        apagando = false;
        indexNome = (indexNome + 1) % nomes.length;
        setTimeout(atualizarTexto, 500);
      }
    }
  }

  atualizarTexto();
});

// Menu hamburguer
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector("#menu-hamburguer");
  const divMenuToggle = document.querySelector(".div-hamburguer");
  const navList = document.getElementById("nav-list");

  menuToggle.addEventListener("click", function () {
    divMenuToggle.classList.add("hide");
    navList.classList.add("activate");
  });

  // Se clicar fora do menu, ele se fecha e o ícone reaparece
  document.addEventListener("click", function (event) {
    if (!navList.contains(event.target) && !menuToggle.contains(event.target)) {
      navList.classList.remove("active"); // Esconde o menu
      menuToggle.classList.remove("hide"); // Mostra o ícone novamente
    }
  });
});
