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
