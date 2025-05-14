import axios from "axios";
import * as SecureStore from "expo-secure-store";//importando secureStore

const api = axios.create({
  baseURL: "http://10.89.240.79:5000/api/v1/",
  headers: {
    accept: "application/json",
  },
});

api.interceptors.request.use(
  async (config) =>{
    const token= await SecureStore.getItemAsync("token"); //Aguardando o recuperamento o token
    if(token){
      config.headers.Authorization=`${token}`;
    }
    return config;//se não recuperar o token não roda a ultima linha(promessa)
  },(error) => Promise.reject(error)//
)

const sheets = {
  postLogin: (user) => api.post("login", user),
  postUser: (user) => api.post("user", user),
  postOrganizador: (organizador) => api.post("organizador", organizador),
  postEvento: (evento) => api.post("evento", evento),
  postIngresso: (ingresso) => api.post("ingresso", ingresso),
  getEventos:() => api.get("evento"),
  getIngressosPorEvento:(idEvento) => api.get(`ingresso/evento/${idEvento}`),
  createIngresso: (dados) => api.post("/ingresso", dados)
};

export default sheets;
