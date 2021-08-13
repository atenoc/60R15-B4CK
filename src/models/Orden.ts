import { Schema, model, Document} from 'mongoose';
import { DetalleOrden } from './DetalleOrden';

const schema = new Schema({
    noOrden: Number,
    noMesa: Number,
    nombreCliente: String,
    totalOrden: Number,
    estatus: String,
    detalleOrden: Array<DetalleOrden>()
})

interface IOrden extends Document{
    noOrden: number,
    noMesa: number,
    nombreCliente: string,
    totalOrden: number,
    estatus: string,
    detalleOrden: Array<DetalleOrden>
}

export default model<IOrden>('Orden', schema);