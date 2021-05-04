window.setTimeout(cargarPagina, 3000)

function cargarPagina() {
    document.querySelector('.inicio').innerHTML = ` <div class="fondo">
                                                        <img src="https://i.ibb.co/cYbVYb1/img1.png" alt="">
                                                        <h4>Encuentra tu amigo fiel</h4>
                                                        <p>Cuando adoptas a una mascota, cosas maravillosas suceden en tu vida. Si estás pensando en tener un nuevo
                                                            integrante en tu familia; ¡estás en el lugar correcto!</p>
                                                    </div>
                                                    <p class="siguiente">Siguiente</p>`
    document.querySelector('.siguiente').addEventListener('click', recargarPagina)
}

function recargarPagina() {
    document.querySelector('.inicio').innerHTML = `  <div>
                                                        <img src="https://i.ibb.co/9hzxNZh/img2.png" alt="">
                                                        <h4>Crea una nueva historia</h4>
                                                        <p>Adoptar puede ser una de las experiencias más grandiosas de tu vida, donde compartirás bellos momentos
                                                            con
                                                            estos amiguitos fieles, tiernos y llenos de amor para regalar.</p>
                                                    </div>
                                                    <a href="home.html">
                                                            <p class="siguiente">Siguiente</p>
                                                    </a>`
}