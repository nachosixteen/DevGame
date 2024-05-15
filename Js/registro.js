function validarRegistro() {
            var nombre = document.getElementById("nombre").value;
            var apellido = document.getElementById("apellido").value;
            var usuario = document.getElementById("usuario").value;
            var contrasena = document.getElementById("contrasena").value;
            var correo = document.getElementById("correo").value;

            if (nombre === "" || apellido === "" || usuario === "" || contrasena === "" || correo === "") {
                alert("Por favor, complete todos los campos.");
                return;
            }
            // Si todas las validaciones pasan, puedes enviar el formulario al servidor
            enviarFormulario();
}

        function enviarFormulario() {
            if (validarRegistro){
                
            }
            // Aquí puedes agregar la lógica para enviar el formulario al servidor
            alert("¡Registro exitoso! Tu cuenta ha sido creada correctamente.");
            document.getElementById("registroForm").submit();
}