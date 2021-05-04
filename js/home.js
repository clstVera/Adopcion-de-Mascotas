//Filtrar mascota
let categoriaPerros = document.querySelector('.perros')
categoriaPerros.addEventListener('click', cargarPerros)

let categoriaGatos = document.querySelector('.gatos')
categoriaGatos.addEventListener('click', cargarGatos)

function cargarPerros(mascota) {
    let perros = mascotas.filter(mascota => mascota.categoria == "perro")
    document.querySelector('.carga-mascotas').innerHTML = ''
    perros.forEach(perro => {
        document.querySelector('.carga-mascotas').innerHTML += `<a href="detallemascota.html?id=${perro.id}">
                                                                <div class="item">
                                                                    <img src=${perro.img} alt="${perro.nombre}">
                                                                    <h5>${perro.nombre}</h5>
                                                                    <p>${perro.raza}</p>
                                                                </div>
                                                            </a>`
    })
}

function cargarGatos(mascota) {
    let gatos = mascotas.filter(mascota => mascota.categoria == "gato")
    document.querySelector('.carga-mascotas').innerHTML = ''
    gatos.forEach(gato => {
        document.querySelector('.carga-mascotas').innerHTML += `<a href="detallemascota.html?id=${gato.id}">
                                                                    <div class="item">
                                                                        <img src=${gato.img} alt="${gato.nombre}">
                                                                        <h5>${gato.nombre}</h5>
                                                                        <p>${gato.raza}</p>
                                                                    </div>
                                                                </a>`
    })
}
