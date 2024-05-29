const htmlUserCreated = (info) => {
  return `<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bienvenido a credits-app</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #333;
                line-height: 1.6;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #333;
            }
            p {
                margin: 0 0 10px;
            }
            .credentials {
                background-color: #f9f9f9;
                border: 1px solid #ddd;
                padding: 10px;
                border-radius: 5px;
            }
            .credentials p {
                margin: 5px 0;
                font-weight: bold;
            }
            .footer {
                margin-top: 20px;
                text-align: center;
                font-size: 0.9em;
                color: #777;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>¡Bienvenido a credits-app!</h1>
             <p>Nos complace informarle que se ha creado una cuenta para usted en la plataforma <strong>credits-app</strong>. Estamos muy contentos de que se una a nuestra comunidad.</p>
            <div class="credentials">
                <p><strong>Usuario:</strong> ${info.email}</p>
                <p><strong>Contraseña:</strong>${info.password}</p>
            </div>
            <p>Le recordamos que puede modificar su contraseña en cualquier momento a través de su perfil en la plataforma.</p>
            <p>Si tiene alguna pregunta o necesita asistencia, no dude en ponerse en contacto con nuestro equipo de soporte.</p>
            <p class="footer">¡Bienvenido/a a credits-app!</p>
            <p class="footer">Saludos cordiales,<br>El equipo de credits-app</p>
        </div>
    </body>
    </html>`;
};
module.exports = htmlUserCreated;
