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
        obraIMG: "https://cdn.pixabay.com/photo/2020/02/02/16/02/phu-quoc-4813349_640.jpg",
        likes: 58,
        numComentarios: 8,
        compartidos: 3,
        vistas: 102,
        artistaId: 1
    },
    {
        titulo: "Retrato en Carboncillo",
        descripcion: "Sombras y texturas en blanco y negro",
        obraIMG: "https://cdn.pixabay.com/photo/2024/05/22/11/13/ai-generated-8780427_640.jpg",
        likes: 21,
        numComentarios: 3,
        compartidos: 0,
        vistas: 45,
        artistaId: 2
    },
    {
        titulo: "Naturaleza Muerta",
        descripcion: "Estudio de formas y colores en objetos cotidianos",
        obraIMG: "https://cdn.pixabay.com/photo/2023/07/23/06/30/ai-generated-8144487_640.jpg",
        likes: 42,
        numComentarios: 9,
        compartidos: 1,
        vistas: 77,
        artistaId: 2
    },
    {
        titulo: "Atardecer en la Ciudad",
        descripcion: "Capturando el reflejo de los edificios en el crepúsculo",
        obraIMG: "https://cdn.pixabay.com/photo/2023/10/28/06/09/ai-generated-8346590_640.png",
        likes: 89,
        numComentarios: 14,
        compartidos: 4,
        vistas: 130,
        artistaId: 3
    },
    {
        titulo: "Abstracción Azul",
        descripcion: "Jugando con formas geométricas y tonos fríos",
        obraIMG: "https://pixabay.com/es/vectors/acuarela-turquesa-cuadro-resumen-4116932/",
        likes: 34,
        numComentarios: 6,
        compartidos: 2,
        vistas: 60,
        artistaId: 3
    },
    {
        titulo: "Escultura en Madera",
        descripcion: "Proceso de tallado paso a paso",
        obraIMG: "https://cdn.pixabay.com/photo/2021/11/12/00/12/driftwood-6787576_640.jpg",
        likes: 51,
        numComentarios: 7,
        compartidos: 0,
        vistas: 92,
        artistaId: 1
    },
    {
        titulo: "Montañas al Amanecer",
        descripcion: "Juego de luces en el horizonte",
        obraIMG: "https://cdn.pixabay.com/photo/2021/09/25/12/52/boho-art-6654957_640.jpg",
        likes: 63,
        numComentarios: 12,
        compartidos: 5,
        vistas: 110,
        artistaId: 1
    },
    {
        titulo: "Retrato Digital",
        descripcion: "Usando técnicas de ilustración en tablet",
        obraIMG: "https://cdn.pixabay.com/photo/2021/04/07/17/01/woman-6159648_640.jpg",
        likes: 28,
        numComentarios: 4,
        compartidos: 0,
        vistas: 50,
        artistaId: 2
    },
    {
        titulo: "Bosque Encantado",
        descripcion: "Explorando tonos verdes y brumas",
        obraIMG: "https://cdn.pixabay.com/photo/2025/06/07/14/26/trees-9646443_640.jpg",
        likes: 73,
        numComentarios: 16,
        compartidos: 3,
        vistas: 140,
        artistaId: 2
    },
    {
        titulo: "Floral en Acuarela",
        descripcion: "Pinceladas suaves y difuminados",
        obraIMG: "https://cdn.pixabay.com/photo/2021/10/29/15/05/floral-6752135_640.jpg",
        likes: 40,
        numComentarios: 5,
        compartidos: 1,
        vistas: 75,
        artistaId: 3
    },
    {
        titulo: "Escena Medieval",
        descripcion: "Inspirado en historias de caballeros",
        obraIMG: "https://cdn.pixabay.com/photo/2016/10/06/15/22/king-arthur-1719268_640.jpg",
        likes: 33,
        numComentarios: 6,
        compartidos: 1,
        vistas: 61,
        artistaId: 3
    },
    {
        titulo: "Callejón Iluminado",
        descripcion: "Juego de luces artificiales en un callejón nocturno",
        obraIMG: "https://cdn.pixabay.com/photo/2024/02/19/23/50/ai-generated-8584355_640.jpg",
        likes: 46,
        numComentarios: 10,
        compartidos: 2,
        vistas: 88,
        artistaId: 1
    },
    {
        titulo: "Olas y Mar",
        descripcion: "Captura del movimiento del océano",
        obraIMG: "https://cdn.pixabay.com/photo/2017/04/06/17/43/water-2208931_640.jpg",
        likes: 55,
        numComentarios: 8,
        compartidos: 3,
        vistas: 95,
        artistaId: 1
    },
    {
        titulo: "Minimalismo Blanco",
        descripcion: "Menos es más en esta obra",
        obraIMG: "https://cdn.pixabay.com/photo/2020/10/30/17/42/paint-5699263_640.jpg",
        likes: 19,
        numComentarios: 2,
        compartidos: 0,
        vistas: 40,
        artistaId: 2
    },
    {
        titulo: "Río en Primavera",
        descripcion: "Colores vivos en movimiento",
        obraIMG: "https://cdn.pixabay.com/photo/2022/05/21/21/47/river-7212351_640.jpg",
        likes: 48,
        numComentarios: 11,
        compartidos: 2,
        vistas: 90,
        artistaId: 2
    },
    {
        titulo: "Autorretrato Surrealista",
        descripcion: "Inspirado en Dalí y Magritte",
        obraIMG: "https://cdn.pixabay.com/photo/2017/09/01/03/47/fantasy-2702997_640.jpg",
        likes: 66,
        numComentarios: 13,
        compartidos: 4,
        vistas: 120,
        artistaId: 3
    },
    {
        titulo: "Bosque Nevado",
        descripcion: "Tonos fríos y atmósfera invernal",
        obraIMG: "https://cdn.pixabay.com/photo/2019/12/08/01/08/winter-4680354_640.jpg",
        likes: 39,
        numComentarios: 5,
        compartidos: 1,
        vistas: 70,
        artistaId: 3
    },
    {
        titulo: "Puente en la Niebla",
        descripcion: "Exploración de profundidad y perspectiva",
        obraIMG: "https://cdn.pixabay.com/photo/2023/01/07/12/15/bridge-7703146_1280.jpg",
        likes: 61,
        numComentarios: 9,
        compartidos: 2,
        vistas: 115,
        artistaId: 1
    },
    {
        titulo: "Ciudad Futurista",
        descripcion: "Interpretación de la urbe del mañana",
        obraIMG: "https://cdn.pixabay.com/photo/2022/03/24/07/23/city-view-7088420_640.jpg",
        likes: 97,
        numComentarios: 20,
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
