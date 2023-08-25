// Importiamo il modulo "axios" che ci permette di effettuare richieste HTTP
import axios from "axios";

// Definiamo una classe BaseService che conterrà il metodo statico "perform"
class BaseService {
  // Il metodo "perform" prende un oggetto "request" come parametro, il quale ha alcune proprietà che definiscono la richiesta HTTP da effettuare
  static async perform(request) {
    // Configuriamo l'oggetto "config" per la richiesta HTTP
    const config = {
      // La "baseURL" è la radice comune per tutte le richieste, in questo caso viene letto da una variabile d'ambiente "VITE_APP_URL_BACKEND"
      baseURL: import.meta.env.VITE_APP_URL_BACKEND,
      // La "url" è l'endpoint specifico della richiesta, preso dalla proprietà "url" dell'oggetto "request"
      url: request.url,
      // Il "method" è il tipo di richiesta HTTP (get, post, put o delete), preso dalla proprietà "method" dell'oggetto "request"
      method: request.method,
      // Il "data" contiene il corpo della richiesta (se presente), preso dalla proprietà "body" dell'oggetto "request"
      data: request.body,
      // "params" contiene i parametri della richiesta (se presenti), presi dalla proprietà "params" dell'oggetto "request"
      params: request.params
    };

    // Effettuiamo la richiesta HTTP utilizzando "axios" e aspettiamo la risposta
    return await axios(config);
  }
}

// Esportiamo la classe "BaseService" in modo che possa essere utilizzata altrove
export default BaseService;
