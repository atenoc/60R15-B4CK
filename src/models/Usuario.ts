import { Schema, model, Document} from 'mongoose';

const schema = new Schema({
    nombre: String,
    correo: String,
    rol: String,
})

interface IUsuario extends Document{
    nombre: string;
    correo: string;
    rol: string;
}

export default model<IUsuario>('Usuario', schema);