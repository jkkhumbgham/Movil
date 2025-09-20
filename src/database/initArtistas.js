import { Artista } from "../models/Artista.js";

const Artistas =[
    {
        nombre: "JuanitoArt",
        correo: "juanitoart@example.com",
        fotousuario: "https://cdn.pixabay.com/photo/2022/12/24/21/14/portrait-7676482_640.jpg",
        contraseña: "juanito123",
        edad: 28,
        profesion: "Pintor Clásico",
        biografia: "Apasionado por las técnicas clásicas de pintura y escultura. Me encanta enseñar y compartir mi proceso creativo.",
        seguidores: 350,
        seguidos: 180,
        likes: 1200,
    },
    {
        nombre: "MariaArt",
        correo: "mariaart@example.com",
        fotousuario: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
        contraseña: "maria456",
        edad: 25,
        profesion: "Artista Digital",
        biografia: "Ilustradora digital y amante de la acuarela. Busco fusionar el arte tradicional con el digital.",
        seguidores: 420,
        seguidos: 300,
        likes: 1500,
    },
    {
        nombre: "ArtAttack",
        correo: "artattack@example.com",
        fotousuario: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        contraseña: "artattack789",
        edad: 30,
        profesion: "Diseñador Conceptual",
        biografia: "Creo conceptos visuales para videojuegos, cómics y animación. Me fascina el arte abstracto y experimental.",
        seguidores: 280,
        seguidos: 210,
        likes: 980,
    }
]

export async function ArtistasIniciales() {
    try {
        const cantidad = await Artista.count();
        if (cantidad === 0) {
            await Artista.bulkCreate(Artistas);
        }
    } catch (error) {
        console.log(error);
    }
    
    
}