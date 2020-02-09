const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/dummy/obtenerdatospersona', (req, res) => {
  setTimeout(() => {
    res.status(200).json({
        tipo: "success",
        mensaje: "Datos guardados con éxito",
        titulo: "Guardo Correctamente",
        data: {
          tercero: {
            direccion: "PRUEBA PRUEBA",
            nomCompleto: "JUAN MIGUEL SANCHEZ DIAZ",
            indCrearTercero: "N",
            estadoCivil: "Z",
            tipoPersona: "N",
            telefono: "",
            apellidoPaterno: "SANCHEZ",
            sexo: "M",
            indRequiereDireccion: "N",
            paisNacimiento: "80",
            nombres: "JUAN MIGUEL",
            stsTercero: "0",
            tipoDocumento: "2",
            apellidoMaterno: "DIAZ",
            numDocumento: "25809150",
            fecNacimiento: "11/05/1972",
            correo: ""
          },
          error: {
            codigo: "201009",
            mensajedev: null,
            mensajeux: "La búsqueda de tercero fue exitoso"
          },
          codigoResp: "1",
          mensajeResp: "OK"
        }
    })
  }, 2000);
});

app.listen(port, () => {
  console.log('Ready localhost on port: ' + port);
});
