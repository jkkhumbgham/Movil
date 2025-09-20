import{Artista} from './Artista.js'
import{Obra} from './Obra.js'
import{Comentario} from './comentario.js'
import{Review} from './review.js'
import{Tag} from './Tags.js'
import{Follower} from './Follower.js'
import{Interes} from './Intereses.js'


export function relaciones() {
    Artista.hasMany(Obra, { foreignKey: "artistaId", as: "obras", onDelete: "CASCADE", hooks: true });
    Obra.belongsTo(Artista, { foreignKey: "artistaId" , as: "artista"});

    Obra.hasMany(Tag,{ foreignKey: "obraId", as: "tags", onDelete: "CASCADE", hooks: true} )
    Tag.belongsTo(Obra, { foreignKey: "obraId", as: "obra" })

    Artista.hasMany(Review, { foreignKey: "artistaId", as: "reviews", onDelete: "CASCADE", hooks: true });
    Review.belongsTo(Artista, { foreignKey: "artistaId", as: "artista" });

    Artista.hasMany(Comentario, { foreignKey: "artistaId", as: "comentarios", onDelete: "CASCADE", hooks: true });
    Comentario.belongsTo(Artista, { foreignKey: "artistaId", as: "artista" });

    Obra.hasMany(Comentario, { foreignKey: "obraId", as: "comentarios", onDelete: "CASCADE", hooks: true });
    Comentario.belongsTo(Obra, { foreignKey: "obraId", as: "obra" });

    Obra.hasMany(Review, { foreignKey: "obraId", as: "reviews", onDelete: "CASCADE",hooks: true });
    Review.belongsTo(Obra, { foreignKey: "obraId", as: "obra" });

    Artista.belongsToMany(Artista, { through: Follower, as: "siguiendo", foreignKey: "followerId" });
    Artista.belongsToMany(Artista, { through: Follower, as: "seguido", foreignKey: "followedId" });

    Comentario.hasMany(Comentario, { foreignKey: "parentComentarioId", as: "respuestas", onDelete: "CASCADE", hooks: true });
    Comentario.belongsTo(Comentario, { foreignKey: "parentComentarioId", as: "respuesta" });

    Artista.hasMany(Interes, { foreignKey: "artistaId", as: "intereses", onDelete: "CASCADE", hooks: true });
    Interes.belongsTo(Artista, { foreignKey: "artistaId", as: "artista" });
}