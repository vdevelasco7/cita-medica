import { Usuario } from "../../usuario/model/usuario.interface";

export interface Paciente extends Usuario{
    NSS: String;
    numTarjeta: String;
    telefono: String;
    direccion: String;
  }