import { Request, Response } from 'express'
import Orden from '../models/Orden';

export async function getOrdenes(req:Request, res:Response): Promise<Response> {
    console.log("Obteniendo todas las ordenes...")
    const ordenes = await Orden.find(); 
    return res.json(ordenes)
}

export async function getOrden(req:Request, res:Response): Promise<Response> {
    console.log("Obteniendo 1 orden con id: "+ req.params.id)
    const orden = await Orden.findById(req.params.id)
    return res.json(orden)
}

export async function createOrden(req:Request, res:Response): Promise<Response> {

    const totalOrdenes = await (await Orden.find()).length;
    //console.log("Total Ordenes: "+totalOrdenes) 

    console.log("Guardando orden...")
    const { noMesa, nombreCliente, detalleOrden } = req.body;

    const nuevaOrden = {  
        noOrden: totalOrdenes + 1,
        noMesa: noMesa,
        nombreCliente: nombreCliente,
        estatus: "ORDENADO",
        detalleOrden: detalleOrden
    }

    const orden = new Orden(nuevaOrden); //crea un nuevo documento para mongo DB
    
    console.log("orden: "+ orden)
    await orden.save();

    return res.json({
        message:'orden guardada!',
        orden
    })
}

export async function deleteOrden(req:Request, res:Response): Promise<Response> {
    const { id } = req.params
    console.log("Obteniendo 1 orden con id: "+ id)
    const orden = await Orden.findByIdAndRemove(id)

    console.log("Orden eliminada!")

    return res.json({
        message:'Orden eliminada!',
        orden
    })
}

export async function updateOrden(req:Request, res:Response): Promise<Response> {
    const { id } = req.params;
    const { estatus, detalleOrden }= req.body;

    console.log("Obteniendo 1 orden con id: "+ id);
    console.log("orden: " + req.body);

    const orden = await Orden.findByIdAndUpdate(id, {
        estatus, detalleOrden
    }, {new: true});

    return res.json({
        message:'Orden actualizada!',
        orden
    })
}