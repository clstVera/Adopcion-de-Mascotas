let url = new URL(window.location);
let idDestinatario = url.searchParams.get("id");
//Se recupera el listado de todas los mensajes
let mensajes = JSON.parse(localStorage.getItem('sms'));
//Se recupera el listado de todos los usuarios
let usuarios = JSON.parse(localStorage.getItem('users'));

cargarMensajes()

function cargarMensajes() {

    let destinatario = usuarios.find(usuario => usuario.id == idDestinatario);
    let misMensajes = mensajes.filter(mensaje => ((mensaje.idRemitente == 1 && mensaje.idDestinatario == idDestinatario) ||
        (mensaje.idRemitente == idDestinatario && mensaje.idDestinatario == 1)));

    let nombreCompleto = destinatario.nombre + " " + destinatario.apellido;

    document.querySelector('.contacto').innerHTML = `<div class="destinatario">
        <img class="contacto-img" src=${destinatario.img} alt="" style="width: 64px; height: 64px;">
        <p class="nombre-usuario">${nombreCompleto}</p>
    </div>
    <a class="regresar" href="mensajes.html"><img src="https://i.ibb.co/hF1CXWN/img0.png" alt=""></a>`

    misMensajes.forEach(mensaje => {
        let sms = document.querySelector('.cargar-mensaje')
        if (mensaje.idRemitente == 1) {
            sms.innerHTML += `<div class="mensaje m-envio">
            <p class="hora">${mensaje.hora}</p>
            <p class="mensaje-enviado">${mensaje.mensaje}</p>
        </div>`
        } else {
            sms.innerHTML += `<div class="mensaje m-recibo">
            <p class="hora">${mensaje.hora}</p>
            <p class="mensaje-recibido">${mensaje.mensaje}</p>
        </div>`
        }
    })
}
