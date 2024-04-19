import { Usuario } from "../../usuario/model/usuario.interface";

export interface Medico extends Usuario{
    numColegiado: String;
  }