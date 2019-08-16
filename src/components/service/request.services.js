import {   API_URL  } from '../../env';
import axios from 'axios'

class RequestHttp
{

      requestLogin(username,password){
          const headers = {'Content-Type': 'application/json'};
          return axios.post(API_URL+'auth/cammer/', {
            username: username,
            password: password
          })
          .then(function (response) {
            console.log(response);
            return response;
          })
          .catch(function (error) {
              if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                if(error.response.status == 401){
                  alert("Los datos no son correctos");
                }
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
              return false;
          });
      }

  

}





export const requestHttp = new RequestHttp();
