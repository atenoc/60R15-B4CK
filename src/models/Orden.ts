import { Schema, model, Document} from 'mongoose';
import { DetalleOrden } from './DetalleOrden';

const schema = new Schema({
    noOrden: Number,
    noMesa: Number,
    nombreCliente: String,
    totalOrden: Number,
    estatus: String,
    creado_por:String,
    en_cocina:String,
    en_barra:String,
    fecha:Date,
    detalleOrden: Array<DetalleOrden>()
})

interface IOrden extends Document{
    noOrden: number,
    noMesa: number,
    nombreCliente: string,
    totalOrden: number,
    estatus: string,
    creado_por:string,
    en_cocina:string,
    en_barra:string,
    fecha:Date,
    detalleOrden: Array<DetalleOrden>
}

export default model<IOrden>('Orden', schema);