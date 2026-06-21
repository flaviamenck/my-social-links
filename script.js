function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //troca a imagem do perfil
  const img = document.querySelector("#profile img")
  //se tiver a classe light, adiciona a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Flávia Menck com um sorriso amigável, cabelos ruivos, olhos castanhos e pele clara. Usando óculos e camiseta cinza clara. Fundo da imagem claro.",
    )
    //se não tiver a classe light, adiciona a imagem normal
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Flávia Menck com um sorriso amigável, cabelos ruivos, olhos castanhos e pele clara. Usando óculos e camiseta cinza clara. Fundo da imagem escuro.",
    )
  }
}

/*alerta de clique no link "Sobre mim"*/

document
  .getElementById("sobre-mim")
  .addEventListener("click", function (event) {
    event.preventDefault()
    alert("Minha biografia ainda está em construção, mas em breve estará disponível!")
  })
