
const formulario = document.getElementById('formulario');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const alertSuccess = document.getElementById('alertSuccess');
const alertName = document.getElementById('alertName');
const alertEmail = document.getElementById('alertEmail');


// const userName = document.querySelector("input[name='userName']")
// const userName = document.querySelector("input[name='userEmail']")

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; // Solo Letras
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/ // Validar el Email

const pintarMensajeExito = () => {
    alertSuccess.classList.remove('d-none'); // tambien podria ser mas facil como aca abajo
    alertSuccess.textContent = "Mensaje Enviado Con Exito"
}

const pintarMensajeError = (errores) => {
    errores.forEach(item => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
        })
}


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    alertSuccess.classList.add('d-none');
   

    const errores = []
    

    // Esto devuelve true si existe solo esapcios
    // console.log(!userName.value.trim());

    if (!regUserName.test(userName.value) || !userName.value.trim()) {
        userName.classList.add('is-invalid');            
            errores.push({
            tipo: alertName,
            msg: "Formato No Valido en el Campo Nombre, Solo Letras"
        });
    } else {
        userName.classList.remove('is-invalid');
        userName.classList.add('is-valid');
        alertName.classList.add('d-none');
    }

    if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
        userEmail.classList.add('is-valid')
        errores.push({
            tipo: alertEmail,
            msg: "Escriba un correo valido"
        });
    } else {
        userEmail.classList.remove('is-invalid')
        userEmail.classList.add('is-valid')
        alertEmail.classList.add('d-none')
    }

        if (errores.length !== 0) {
            pintarMensajeError(errores);
            return;
        } 
        console.log('Formulario Enviado');
        pintarMensajeExito();
    });
 
    












































