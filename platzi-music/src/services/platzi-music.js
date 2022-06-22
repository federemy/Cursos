import trae from "trae";
import configService from "./config";

const platziMusicService = trae.create({
  //metodo que nos permite crear instancias de trae
  baseUrl: configService.apiUrl
});

export default platziMusicService;
