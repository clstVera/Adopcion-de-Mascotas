//Se recupera el listado de todas los mensajes
let mensajes = JSON.parse(localStorage.getItem('sms'));
//Se recupera el listado de todos los usuarios
let usuarios = JSON.parse(localStorage.getItem('users'));

cargarMensajes()

function cargarMensajes() {
    let sms = document.querySelector('.contactos')

    mensajes.forEach(mensaje => {
        if (mensaje.idRemitente != 1) {
            let remitente = usuarios.find(usuario => usuario.id == mensaje.idRemitente);
            let nombreCompleto = remitente.nombre + " " + remitente.apellido;

            sms.innerHTML += `  <a href="contacto.html?id=${remitente.id}">
                                    <div class="contacto">
                                        <img class="contacto-img" src="${remitente.img}" alt="" style="width: 58px;
                                            height: 64px;">
                                        <div class="mensaje">
                                            <div class="usuario">
                                                <p class="nombre-usuario">${nombreCompleto}</p>
                                                <p>${mensaje.hora}</p>
                                            </div>
                                            <p>${mensaje.mensaje}</p>
                                        </div>
                                        <img src="https://i.ibb.co/hyd4NR4/img23.png" alt="">
                                    </div>
                                </a>
                                <hr>`
        }
    })
}