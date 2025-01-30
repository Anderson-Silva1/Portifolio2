document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navList = document.getElementById("nav-list");

  menuToggle.addEventListener("click", function () {
      navList.classList.add("active");  // Mostra o menu
      menuToggle.classList.add("hide"); // Esconde o ícone do hambúrguer
  });

  // Se clicar fora do menu, ele se fecha e o ícone reaparece
  document.addEventListener("click", function (event) {
      if (!navList.contains(event.target) && !menuToggle.contains(event.target)) {
          navList.classList.remove("active");  // Esconde o menu
          menuToggle.classList.remove("hide"); // Mostra o ícone novamente
      }
  });
});







document.addEventListener("DOMContentLoaded", function () {
  const nomes = [
    "Analista de Sistemas",
    "Desenvolvedor Web",
    "UI/UX Designer",
    "Apaixonado por tecnologia",
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