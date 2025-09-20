import app from "./app.js";
import { sequelize } from "./database/database.js";
import "./models/Obra.js";
import { ObrasIniciales } from "./database/initObras.js";
import "./models/Artista.js";
import { ArtistasIniciales } from "./database/initArtistas.js";
import { relaciones } from "./models/relaciones.js";
import "./models/comentario.js";
import "./models/review.js";
import "./models/Tags.js";
import { TagsIniciales } from "./database/initTags.js";
import "./models/Follower.js";
import "./models/Intereses.js";
import { InteresesIniciales } from "./database/initIntereses.js";
async function init() {
    try {
        await sequelize.authenticate()
        .then(() => {
            console.log("Conexion Correcta.");
        })
        .catch(err => {
            console.error("Error de conexion", err);
        })

        await sequelize.sync({force: true});

        relaciones();
        await ArtistasIniciales();
        await InteresesIniciales();
        await ObrasIniciales();
        await TagsIniciales();

        app.listen(3000, () => {
        console.log("Server on port 3000");
        });
    } catch (error) {
        console.log(error);
    }
    

    
}

init();