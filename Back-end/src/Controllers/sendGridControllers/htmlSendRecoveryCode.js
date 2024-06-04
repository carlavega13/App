const htmlSendRecoveryCode=(token)=>{
return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recuperación de Contraseña</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            background-color: #ffffff;
            padding: 20px 40px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        h1 {
            color: #333;
            margin-bottom: 20px;
        }

        .code {
            font-size: 1.5em;
            color: #4CAF50;
            margin: 20px 0;
            background-color: #e8f5e9;
            padding: 10px;
            border-radius: 5px;
            display: inline-block;
        }

        p {
            color: #555;
        }

        .button {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 1em;
            color: #ffffff;
            background-color: #4CAF50;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            cursor: pointer;
        }

        .button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Recuperación de Contraseña</h1>
        <p>Este es tu código de recuperación de contraseña:</p>
        <div class="code">${token}</div>
        <p>Utiliza este código para restablecer tu contraseña.</p>
        </div>
</body>
</html>
`
}
module.exports=htmlSendRecoveryCode