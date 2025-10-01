import { Obra } from "../models/Obra.js";

const obras = [
    {
        titulo: "Pintura Clasica",
        descripcion: "Tutorial para crear la obra",
        obraIMG: "https://cdn.pixabay.com/photo/2019/03/02/16/26/man-4030112_640.jpg",
        likes: 35,
        numComentarios: 12,
        compartidos: 0,
        vistas: 35,
        artistaId: 1
    },
    {
        titulo: "Amanecer en el Campo",
        descripcion: "Explorando luces y sombras en la naturaleza",
        obraIMG: "https://cdn.pixabay.com/photo/2015/03/26/09/54/sunrise-690293_640.jpg",
        likes: 58,
        numComentarios: 8,
        compartidos: 3,
        vistas: 102,
        artistaId: 1
    },
    {
        titulo: "Retrato en Carboncillo",
        descripcion: "Sombras y texturas en blanco y negro",
        obraIMG: "https://cdn.pixabay.com/photo/2017/08/06/11/47/people-2591874_640.jpg",
        likes: 21,
        numComentarios: 3,
        compartidos: 0,
        vistas: 45,
        artistaId: 2
    },
    {
        titulo: "Naturaleza Muerta",
        descripcion: "Estudio de formas y colores en objetos cotidianos",
        obraIMG: "https://cdn.pixabay.com/photo/2014/04/10/11/06/still-life-320675_640.jpg",
        likes: 42,
        numComentarios: 9,
        compartidos: 1,
        vistas: 77,
        artistaId: 2
    },
    {
        titulo: "Atardecer en la Ciudad",
        descripcion: "Capturando el reflejo de los edificios en el crepúsculo",
        obraIMG: "https://cdn.pixabay.com/photo/2016/11/23/14/48/buildings-1851246_640.jpg",
        likes: 89,
        numComentarios: 14,
        compartidos: 4,
        vistas: 130,
        artistaId: 3
    },
    {
        titulo: "Abstracción Azul",
        descripcion: "Jugando con formas geométricas y tonos fríos",
        obraIMG: "https://cdn.pixabay.com/photo/2018/02/21/16/54/abstract-3176603_640.jpg",
        likes: 34,
        numComentarios: 6,
        compartidos: 2,
        vistas: 60,
        artistaId: 3
    },
    {
        titulo: "Escultura en Madera",
        descripcion: "Proceso de tallado paso a paso",
        obraIMG: "https://cdn.pixabay.com/photo/2017/03/02/14/41/sculpture-2111809_640.jpg",
        likes: 51,
        numComentarios: 7,
        compartidos: 0,
        vistas: 92,
        artistaId: 1
    },
    {
        titulo: "Montañas al Amanecer",
        descripcion: "Juego de luces en el horizonte",
        obraIMG: "https://cdn.pixabay.com/photo/2017/08/06/22/01/mountains-2593671_640.jpg",
        likes: 63,
        numComentarios: 12,
        compartidos: 5,
        vistas: 110,
        artistaId: 1
    },
    {
        titulo: "Retrato Digital",
        descripcion: "Usando técnicas de ilustración en tablet",
        obraIMG: "https://cdn.pixabay.com/photo/2020/06/23/14/51/digital-5331381_640.jpg",
        likes: 28,
        numComentarios: 4,
        compartidos: 0,
        vistas: 50,
        artistaId: 2
    },
    {
        titulo: "Bosque Encantado",
        descripcion: "Explorando tonos verdes y brumas",
        obraIMG: "https://cdn.pixabay.com/photo/2016/11/14/03/16/fantasy-1822528_640.jpg",
        likes: 73,
        numComentarios: 16,
        compartidos: 3,
        vistas: 140,
        artistaId: 2
    },
    {
        titulo: "Floral en Acuarela",
        descripcion: "Pinceladas suaves y difuminados",
        obraIMG: "https://cdn.pixabay.com/photo/2017/03/27/14/56/watercolor-2175103_640.jpg",
        likes: 40,
        numComentarios: 5,
        compartidos: 1,
        vistas: 75,
        artistaId: 3
    },
    {
        titulo: "Escena Medieval",
        descripcion: "Inspirado en historias de caballeros",
        obraIMG: "https://cdn.pixabay.com/photo/2019/07/30/07/51/castle-4375580_640.jpg",
        likes: 33,
        numComentarios: 6,
        compartidos: 1,
        vistas: 61,
        artistaId: 3
    },
    {
        titulo: "Callejón Iluminado",
        descripcion: "Juego de luces artificiales en un callejón nocturno",
        obraIMG: "https://cdn.pixabay.com/photo/2021/02/20/22/30/alley-6033490_640.jpg",
        likes: 46,
        numComentarios: 10,
        compartidos: 2,
        vistas: 88,
        artistaId: 1
    },
    {
        titulo: "Olas y Mar",
        descripcion: "Captura del movimiento del océano",
        obraIMG: "https://cdn.pixabay.com/photo/2017/02/15/12/12/beach-2068386_640.jpg",
        likes: 55,
        numComentarios: 8,
        compartidos: 3,
        vistas: 95,
        artistaId: 1
    },
    {
        titulo: "Minimalismo Blanco",
        descripcion: "Menos es más en esta obra",
        obraIMG: "https://cdn.pixabay.com/photo/2015/11/19/21/10/white-1050949_640.jpg",
        likes: 19,
        numComentarios: 2,
        compartidos: 0,
        vistas: 40,
        artistaId: 2
    },
    {
        titulo: "Río en Primavera",
        descripcion: "Colores vivos en movimiento",
        obraIMG: "https://cdn.pixabay.com/photo/2021/04/23/14/51/river-6202400_640.jpg",
        likes: 48,
        numComentarios: 11,
        compartidos: 2,
        vistas: 90,
        artistaId: 2
    },
    {
        titulo: "Autorretrato Surrealista",
        descripcion: "Inspirado en Dalí y Magritte",
        obraIMG: "https://cdn.pixabay.com/photo/2017/05/29/16/11/surreal-2351539_640.jpg",
        likes: 66,
        numComentarios: 13,
        compartidos: 4,
        vistas: 120,
        artistaId: 3
    },
    {
        titulo: "Bosque Nevado",
        descripcion: "Tonos fríos y atmósfera invernal",
        obraIMG: "https://cdn.pixabay.com/photo/2016/11/23/00/36/snow-1853030_640.jpg",
        likes: 39,
        numComentarios: 5,
        compartidos: 1,
        vistas: 70,
        artistaId: 3
    },
    {
        titulo: "Puente en la Niebla",
        descripcion: "Exploración de profundidad y perspectiva",
        obraIMG: "https://cdn.pixabay.com/photo/2014/11/21/17/17/bridge-540049_640.jpg",
        likes: 61,
        numComentarios: 9,
        compartidos: 2,
        vistas: 115,
        artistaId: 1
    },
    {
        titulo: "Ciudad Futurista",
        descripcion: "Interpretación de la urbe del mañana",
        obraIMG: "https://cdn.pixabay.com/photo/2016/11/18/13/47/city-1837656_640.jpg",
        likes: 97,
        numnumComentarios: 20,
        compartidos: 6,
        vistas: 160,
        artistaId: 1
    }
];

export async function ObrasIniciales() {
    try {
        const cantidad = await Obra.count();
        if (cantidad === 0) {
            await Obra.bulkCreate(obras);
        }
    } catch (error) {
        console.log(error);
    }
    
}
