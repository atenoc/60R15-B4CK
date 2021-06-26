import { Request, Response } from 'express'
import Usuario from '../models/Usuario'
//import Tienda from '../models/Tienda';

export async function getUsuarios(req:Request, res:Response): Promise<Response> {
    console.log("Obteniendo todos los usuarios...")
    const usuarios = await Usuario.find(); 
    return res.json(usuarios)
}

export async function getUsuario(req:Request, res:Response): Promise<Response> {
    console.log("Obteniendo 1 usuario con id: "+ req.params.id)
    const usuario = await Usuario.findById(req.params.id)
    return res.json(usuario)
}

export async function createUsuario(req:Request, res:Response): Promise<Response> {
    console.log("Guardando producto...")
    console.log()
    const { nombre, correo, rol } = req.body;

    const nuevoUsuario = {  
        nombre: nombre,
        correo: correo,
        rol: rol,
    }

    const usuario = new Usuario(nuevoUsuario); //crea un nuevo documento para mongo DB
    
    console.log("usuario: "+ usuario)
    await usuario.save();

    return res.json({
        message:'usuario guardado!',
        usuario
    })
}

//eliminar usuario, debe eliminar su tienda 
export async function deleteUsuario(req:Request, res:Response): Promise<Response> {
    const { id } = req.params
    console.log("Obteniendo 1 usuario con id: "+ id)
    const usuario = await Usuario.findByIdAndRemove(id)

    console.log("Usuario eliminado!")
    //Tienda.findByIdAndRemove(id)  //Eliminamos todas las tiendas relacionadas

    return res.json({
        message:'Usuario eliminado!',
        usuario
    })
}

export async function updateUsuario(req:Request, res:Response): Promise<Response> {
    const { id } = req.params;
    const { nombre, correo, rol }= req.body;

    console.log("Obteniendo 1 usuario con id: "+ id);
    console.log(req.body);

    const usuario = await Usuario.findByIdAndUpdate(id, {
         nombre, correo, rol
    }, {new: true});

    return res.json({
        message:'¡Usuario actualizado!',
        usuario
    })
}

export async function getUsuarioXcorreo(req:Request, res:Response): Promise<Response> {

    const { correo } = req.params;
    console.log("Obteniendo  de usuario: " + correo)

    const rolUsuario = await Usuario.find({correo:correo}); 
    console.log("Usuario lenght: " +rolUsuario.length)
    if(rolUsuario.length == 1){
        return res.json(rolUsuario)
    }else{
        return res.json(null)
    }
    
}