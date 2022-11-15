//const SERVICE_URL_BASE = 'http://192.168.2.37:8080/gespress-service';
const SERVICE_URL_BASE = 'https://api.spacexdata.com/v3';
const erreur_connexion_message = 'Problème de connexion au serveur, Veuillez vérifier votre connexion Internet et réessayer';

let headers = {
    'Accept': 'application/json, text/plain, */*', // It can be used to overcome cors errors
    'Content-Type': 'application/json'
};
export default class CapsuleService {

    getUrlBase = () => {
        return SERVICE_URL_BASE;
    }

    getErreurConnexionMessage = () => {
        return erreur_connexion_message;
    }

    findAll = (url) => {
        return fetch(`${SERVICE_URL_BASE}/${url}`, {
                method: 'get',
                headers: headers,
            })
            .then((response) => response.json())
            .then((responseData) => {
                return responseData;
        });
    };
}