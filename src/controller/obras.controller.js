import { Obra } from "../models/Obra.js";
import { Artista } from "../models/Artista.js";
import { Tag } from "../models/Tags.js";
export const getObras = async(req, res) => {
    try {
        const obras = await Obra.findAll(
            { include:[ {
                model: Artista,
                as: 'artista',
                attributes: ['nombre', 'fotousuario']
            },
        {
            model: Tag,
            as: 'tags',
            attributes: ['tag']
        }] }
        );
        return res.json(obras);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
};

export const getObra = async(req, res) => {
    try{
        const obra = await Obra.findByPk(req.params.id,
            { include:[ {
                model: Artista,
                as: 'artista',
                attributes: ['nombre', 'fotousuario']
            },
        {
            model: Tag,
            as: 'tags',
            attributes: ['tag']
        }] });
        if(!obra){
            return res.sendStatus(404);
        }
        return res.json(obra);
    }catch(error){
        return res.status(500).json({ message: error.message });
    }
}

export const createObra = async(req, res) => {
    try {
        const newObra = await Obra.create(req.body);
        return res.json(newObra);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
};

export const updateObra = async(req, res) => {
    
    try{
        const id = req.params.id;
        const obra = await Obra.findByPk(id);
        if(!obra){
            return res.status(404);
        }
        await obra.update(req.body);
        return res.json(obra);
    }catch(error){
        return res.status(500).json({ message: error.message });
    }
    
};

export const deleteObra = async(req, res) => {
    try{
        const id = req.params.id;
        const obra = await Obra.findByPk(id);
        if(!obra){
            return res.sendStatus(404);
        }
        await obra.destroy();
        return res.sendStatus(204);
    }catch(error){
        return res.sendStatus(500).json({ message: error.message });
    }
    
}