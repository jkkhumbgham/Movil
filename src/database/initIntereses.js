import { Interes } from "../models/Intereses.js";

export const Intereses=[
    {
        artistaId: 1,
        interes: "arte"
    },
    {
        artistaId: 2,
        interes: "pintura"
    },
    {
        artistaId: 3,
        interes: "escultura"
    },

]

export async function InteresesIniciales() {
    try {
        const cantidad = await Interes.count();
        if (cantidad === 0) {
            await Interes.bulkCreate(Intereses);
        }
    } catch (error) {
        console.log(error);
    }
}