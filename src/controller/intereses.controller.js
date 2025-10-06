import { Intereses } from "../database/initIntereses";


export const getInteresesByUser = async (req, res)=>{
    try{
        const intereses= await Intereses.findAll(
            { include: {
                            model: Interes,
                            as: 'intereses',
                            attributes: ['interes']
                        }}
        )
    
        return res.json(intereses)
    }catch(error){
        return res.status(500).json({ message: error.message });
    }
}