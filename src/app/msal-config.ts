import { PublicClientApplication } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: 'b9f2a066-b306-417b-b549-4f51ef597177',
    authority: 'https://login.microsoftonline.com/102d3653-c8a4-4711-a5a3-7dc0ab963878',
    redirectUri: 'http://localhost:4200'
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true
  }
};

export const msalInstance = new PublicClientApplication(msalConfig);
