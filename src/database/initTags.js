import { Tag } from "../models/Tags.js";

export const Tags = [
    {
        tag: "arte",
        obraId: 1
    },
    {
        tag: "arte",
        obraId: 2
    },
    {
        tag: "arte",
        obraId: 3
    },
    {
        tag: "arte",
        obraId: 4
    },
    {
        tag: "arte",
        obraId: 5
    },
    {
        tag: "arte",
        obraId: 6
    },
    {
        tag: "arte",
        obraId: 7
    },
    {
        tag: "arte",
        obraId: 8
    },
    {
        tag: "arte",
        obraId: 9
    },
    {
        tag: "arte",
        obraId: 10
    },
    {
        tag: "arte",
        obraId: 11
    },
    {
        tag: "arte",
        obraId: 12
    },
    {
        tag: "arte",
        obraId: 13
    },
    {
        tag: "arte",
        obraId: 14
    },
    {
        tag: "arte",
        obraId: 15
    },
    {
        tag: "arte",
        obraId: 16
    },
    {
        tag: "arte",
        obraId: 17
    },
    {
        tag: "arte",
        obraId: 18
    },
    {
        tag: "arte",
        obraId: 19
    },
    {
        tag: "arte",
        obraId: 20
    },


]

export async function TagsIniciales() {
    try {
        const cantidad = await Tag.count();
        if (cantidad === 0) {
            await Tag.bulkCreate(Tags);
        }
    } catch (error) {
        console.log(error);
    }
}