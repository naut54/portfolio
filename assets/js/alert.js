function signUp() {
    alert('¡Registro realizado con éxito!');
}

function signIn1() {
    swal("¡Perfecto!", "¡Te has registrado!", "success");
}

function signIn2() {
    swal({
        content: {
          element: "input",
          attributes: {
            placeholder: "¡Genial, ahora escribe tu contraseña de Google!",
            type: "password",
          },
        },
        buttons: true,
        dangerMode: true,
        closeOnClickOutside: false,
      });
}