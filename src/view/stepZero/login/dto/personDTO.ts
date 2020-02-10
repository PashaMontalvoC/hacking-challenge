export interface PersonDTO {
  tipo: string;
  mensaje: string;
  titulo: string;
  data: {
    tercero: {
    direccion: string;
    nomCompleto: string;
    indCrearTercero: string;
    estadoCivil: string;
    tipoPersona: string;
    telefono: string;
    apellidoPaterno: string;
    sexo: string;
    indRequiereDireccion: string;
    paisNacimiento: string;
    nombres: string;
    stsTercero: string;
    tipoDocumento: string;
    apellidoMaterno: string;
    numDocumento: string;
    fecNacimiento: string;
    correo: string;
    },
    error: {
      codigo: string;
      mensajedev: string;
      mensajeux: string;
    },
  codigoResp: string;
  mensajeResp: string;
  }
};
