let favoritos = JSON.parse(localStorage.getItem('favoritos'))

cargarFavoritos()

function cargarFavoritos() {
    if (favoritos) {
        favoritos.forEach(mascota => {
            let misFavoritos = document.querySelector('.mis-favoritos')
            misFavoritos.innerHTML += `<a href="detallemascota.html?id=${mascota.id}">
                                    <div class="item">
                                        <img src="${mascota.img}" alt="">
                                        <h5>${mascota.nombre}</h5>
                                        <p>${mascota.raza}</p>
                                    </div>
                                </a>`
        })
    }
}