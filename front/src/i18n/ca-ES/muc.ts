import { DeepPartial } from "../../Utils/DeepPartial";
import { Translation } from "../i18n-types";

const muc: DeepPartial<Translation["muc"]> = {
    title: "Lista de utilizadores",
    userList: {
        disconnected: "Desligado",
        isHere: "É aqui!",
        teleport: "Teletransporte",
        search: "Basta olhar para cima!",
        walkTo: "Walk to",
        teleporting: "Teletransporte ...",
    },
    mucRoom: {
        reconnecting: "Ligação ao servidor de presença em progresso",
    },
};

export default muc;
