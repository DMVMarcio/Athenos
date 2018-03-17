var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect(process.env.database, {
    useMongoClient: true
}, (err) => {
    if (err) return console.log("Erro ao conectar no database!");
    console.log("Conectado ao BANCO DE DADOS!");
})

var User = new Schema({
    _id: {
        type: String
    },
    level: {
        type: Number,
        default: 0
    },
    xp: {
        type: Number,
        default: 0
    },
    coins: {
        type: Number,
        default: 0
    },
    conquistas: {
        type: Number,
        default: 0
    },
    mensagens: {
        type: Number,
        default: 0
    },
    msglevel: {
        type: Number,
        default: 0
    },
    invitetru: {
        type: Boolean,
        default: false
    },
    invitecode: {
        type: String,
        default: "Nenhum"
    },
    invitou: {
        type: Number,
        default: 0
    },
    warn: {
        type: Number,
        default: 0
    },
    rep: {
        type: Number,
        default: 0
    }
})

var Convite = new Schema({
    _codigo: {
        type: String
    },
    criador: {
        type: String
    },
    usos: {
        type: Number,
        default: 0
    }
})

var Guild = new Schema({
    _id: {
        type: String
    },
    welcome: {
        type: Boolean,
        default: false
    },
    welcomechannel: {
        type: String,
        default: "Nenhum"
    },
    welcomemsg: {
        type: String,
        default: "Nenhuma"
    },
    byebye: {
        type: Boolean,
        default: false
    },
    byebyechannel: {
        type: String,
        default: "Nenhum"
    },
    byebyemsg: {
        type: String,
        default: "Nenhuma"
    }
})

var Cla = new Schema({
    _nome: {
        type: String
    },
    imagem: {
        type: String,
        default: "https://i.imgur.com/4JaNmFp.png",
    },
    dono: {
        type: String
    },
    trofeus: {
        type: Number,
        default: 0
    },
    vitorias: {
        type: Number,
        default: 0
    },
    derrotas: {
        type: Number,
        default: 0
    },
    public: {
        type: Boolean,
        default: false
    },
    points: {
        type: Number,
        default: 0
    },
    coins: {
        type: Number,
        default: 0
    },
    level: {
        type: Number,
        default: 0
    },
    xp: {
        type: Number,
        default: 0
    },
    userssize: {
        type: Number,
        default: 0
    },
    staff1: {
        type: String,
        default: "Ninguem"
    },
    staff2: {
        type: String,
        default: "Ninguem"
    },
    staff3: {
        type: String,
        default: "Ninguem"
    },
    membro4: {
        type: String,
        default: "Ninguem"
    },
    membro5: {
        type: String,
        default: "Ninguem"
    },
    membro6: {
        type: String,
        default: "Ninguem"
    },
    membro7: {
        type: String,
        default: "Ninguem"
    },
    membro8: {
        type: String,
        default: "Ninguem"
    },
    membro9: {
        type: String,
        default: "Ninguem"
    },
    membro10: {
        type: String,
        default: "Ninguem"
    },

})

var Loteria = new Schema({
    _lot: {
        type: String,
        default: "loteria"
    },
    ganhador: {
        type: String,
        default: "Ninguem"
    },
    valor: {
        type: Number,
        default: 0
    },
    aberta: {
        type: Boolean,
        default: false
    },
    numero: {
        type: Number,
        default: 0
    }
})

var Parceiro = new Schema({
    _id: {
        type: String,
    },
    userid: {
        type: String,
    },
    youtubelink: {
        type: String,
        default: "Nenhum"
    },
    youtube: {
        type: Boolean,
        default: false
    },
    twitchlink: {
        type: String,
        default: "Nenhum"
    },
    twitch: {
        type: Boolean,
        default: false
    },
    twitterlink: {
        type: String,
        default: "Nenhum"
    },
    twitter: {
        type: Boolean,
        default: false
    },
    sitelink: {
        type: String,
        default: "Nenhum"
    },
    site: {
        type: Boolean,
        default: false
    },
    discordlink: {
        type: String,
        default: "Nenhum"
    },
    discord: {
        type: Boolean,
        default: false
    }
})

var Users = mongoose.model("Users", User);
var Convites = mongoose.model("Convites", Convite);
var Guilds = mongoose.model("Guilds", Guild);
var Clas = mongoose.model("Clas", Cla);
var Loterias = mongoose.model("Loterias", Loteria);
var Parceiros = mongoose.model("Parceiros", Parceiro);
exports.Users = Users
exports.Convites = Convites
exports.Guilds = Guilds
exports.Clas = Clas
exports.Loterias = Loterias
exports.Parceiros = Parceiros