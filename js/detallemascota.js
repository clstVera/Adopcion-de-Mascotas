let url = new URL(window.location);
let idMascota = url.searchParams.get("id");
//Se recupera el listado de todas las mascostas
let mascostas = JSON.parse(localStorage.getItem('pets'))

//se obtiene la mascota que selecciono el usuario para cargarla
let mascota = mascotas.find(mascota => mascota.id == idMascota)

cargarDetalleMascota(mascota)

let favorito = document.querySelector('.favoritos')
favorito.addEventListener('click', marcarFavorito)

isFavorito()

function marcarFavorito() {
    //Se obtiene el listado de favoritos en caso de no existir se inicia el listado
    let favoritos = JSON.parse(localStorage.getItem('favoritos'))
    if (!favoritos) {
        favoritos = [];
    }
    //Si la mascota no esta marcada como favorita, la marcamos y agregamos al listado de favoritos
    if (mascota.favorito == 0) {
        //Se agrega la mascota al listado de favoritos
        favoritos.push(mascota);
        mascota.favorito = 1
        favorito.innerHTML = `<img src="https://i.ibb.co/HHM6mDC/img15favorito1.png" alt="favorito" style="width: 42px;
                    height: 42px;"></img>`
    } else {
        //Si la mascota esta como favorita significa que ya se debe 
        mascota.favorito = 0
        favorito.innerHTML = `<img src="https://i.ibb.co/KDw6qJ1/img15favorito0.png" alt="favorito" style="width: 42px;
                    height: 42px;"></img>`
        //Se obtiene el indice donde esta la mascota dentro de favoritos
        let index = favoritos.findIndex(favorito => favorito.id == idMascota)
        //Se elimina la psocion de favoritos
        favoritos.splice(index, 1);
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritos))

}

function cargarDetalleMascota(mascota) {
    document.querySelector('.mascota').innerHTML = `<img src="${mascota.img}" alt="${mascota.nombre}" style="width: 375px; height: 442px;">
    <a class="regresar" href="home.html"><img src="https://i.ibb.co/hF1CXWN/img0.png" alt=""></a>`

    document.querySelector('.detallemascota').innerHTML = `<section class="content">
            <div class="row fila1">
                <div class="col-10 nombre">
                    <h3>${mascota.nombre}</h3>
                    <img src="https://i.ibb.co/SX8B7MK/img13male.png" alt="${mascota.genero}" style="width: 32px;
                    height: 32px;">
                </div>
                <div class="col-2 favoritos">
                    <img src="https://i.ibb.co/KDw6qJ1/img15favorito0.png" alt="favorito" style="width: 42px;
                    height: 42px;">
                </div>
            </div>
            <div class="row mt-4 fila2">
                <ul class="col-6 raza">
                    <li><img src="https://i.ibb.co/x7bD94d/img16raza.png" alt=""></li>
                    <li>${mascota.raza}</li>
                </ul>
                <ul class="col-6 edad">
                    <li><img src="https://i.ibb.co/cQ3Tj5s/img17edad.png" alt=""></li>
                    <li>${mascota.edad}</li>
                </ul>
            </div>
            <div class="content mt-4 ubicacion">
                <img src="https://i.ibb.co/0nsm7Nq/img18.png" alt="" style="width: 24px;
                height: 24px;">
                <p>${mascota.ubicacion}</p>
            </div>
        </section>

        <section class="content mt-4">
            <h4>Personalidad</h4>
            <div class="row fila5">
                <ul class="col-4 mt-auto">
                    <li><img src="https://i.ibb.co/985m9Pf/img19.png" alt=""></li>
                    <li>${mascota.personalidad[0]}</li>
                </ul>
                <ul class="col-4">
                    <li><img src="https://i.ibb.co/Ny6GCV6/img20.png" alt=""></li>
                    <li>${mascota.personalidad[1]}</li>
                </ul>
                <ul class="col-4">
                    <li><img src="https://i.ibb.co/kcLzbs7/img21.png" alt=""></li>
                    <li>${mascota.personalidad[2]}</li>
                </ul>
            </div>
        </section>
        <section class="historia mt-4">
            <h4>Historia de ${mascota.nombre}</h4>
            <p>${mascota.nombre} ${mascota.historia}</p>
        </section>

        <section class="row mb-3">
            <div class="col-6 contacto">
                <img src="${mascota.publicadoPor.img}" alt="" style="width: 48px;
                height: 48px;">
                <div class="publicado-por">
                    <h6>Publicado por</h6>
                    <h5>${mascota.publicadoPor.nombre}</h5>
                </div>
            </div>
            <div class="col-6"><a href="../html/contacto.html?id=${mascota.publicadoPor.id}"><img src="https://i.ibb.co/kcYb6Lz/contactar.png" alt=""></a></div>
        </section>`
}

function isFavorito() {
    //Se valida si el usuario ya tiene favoritos
    if (localStorage.getItem('favoritos')) {
        let favoritos = JSON.parse(localStorage.getItem('favoritos'))
        //Se valida si la mascota a mostrar es uno de los favoritos del usuario
        let index = favoritos.findIndex(favorito => favorito.id == idMascota)
        if (index >= 0) {
            favorito.innerHTML = `<img src="https://i.ibb.co/HHM6mDC/img15favorito1.png" alt="favorito" style="width: 42px;
            height: 42px;"></img>`
        }
    }
}