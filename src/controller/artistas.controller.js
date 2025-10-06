import { Interes } from "../models/Intereses.js";
import{ Artista } from "../models/Artista.js";
import { Obra } from "../models/Obra.js";

export const getUsers = async(req, res) => {
    try {
        const users = await Artista.findAll();
        return res.json(users);
    } catch (error) {
        return res.sendStatus(500).json({ message: error.message });
    }
    
};

export const createUser = async(req, res) => {
    try {
        const newUser = await Artista.create(req.body);
        return res.json(newUser);
    } catch (error) {
        return res.sendStatus(500).json({ message: error.message });
    }
    
};

export const getUser = async(req, res) => {
    try {
        const user = await Artista.findByPk(req.params.id,{ include:[ {
                        model: Obra,
                        as: 'obras',
                        attributes: ['id','titulo', 'descripcion', 'obraIMG', 'numComentarios', 'likes', 'compartidos', 'vistas','createdAt']
                    },
                {
                    model: Interes,
                    as: 'intereses',
                    attributes: ['interes']
                }] });
        if(!user){
            return res.sendStatus(404);
        } else return res.json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateUser = async(req, res) => {
    
    try{
        const id = req.params.id;
        const user = await Artista.findByPk(id);
        if(!user){
            return res.sendStatus(404);
        }
        await user.update(req.body);
        return res.json(user);
    }catch(error){
        return res.sendStatus(500).json({ message: error.message });
    }
    
};

export const deleteUser = async(req, res) => {
    
    try{
        const id = req.params.id;
        const user = await Artista.findByPk(id);
        if(!user){
            return res.sendStatus(404);
        }
        await user.destroy();
        return res.sendStatus(204);
    }catch(error){
        return res.sendStatus(500).json({ message: error.message });
    }
    
}