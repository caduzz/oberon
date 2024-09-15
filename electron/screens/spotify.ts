import { app, BrowserWindow } from 'electron';
import { stringify } from 'querystring';

import fs from 'fs'
import path from 'path'
import axios from 'axios';

let spotifyWindow: BrowserWindow | null;

const spotifyConfig = {
  clientId: 'bda7a81c00234d5c9195b40712d177ff',
  clientSecret: 'fd778f6a2c654ebc97f8db0b7ac8eb99',
  redirectUri: 'http://localhost:3000/main_window',
  scopes: [
    'user-read-private',
    'user-read-email',
    'user-modify-playback-state',
    'user-read-playback-state',
    'user-read-recently-played',
    'user-library-read',
    'user-top-read'
  ],
};

const assetsPath =
  process.env.NODE_ENV === 'production'
    ? process.resourcesPath
    : app.getAppPath()

function createSpotifyLoginWindow() {
  const queryParams = {
    client_id: spotifyConfig.clientId,
    client_secret: spotifyConfig.clientSecret,
    redirect_uri: spotifyConfig.redirectUri,
    response_type: 'code',
    scope: spotifyConfig.scopes.join(' '),
  };

  const authUrl = `https://accounts.spotify.com/authorize?${stringify(queryParams)}`;

  spotifyWindow = new BrowserWindow({
    width: 500,
    height: 700,
    resizable: false,
    autoHideMenuBar: true,
    frame: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  spotifyWindow.loadURL(authUrl);

  spotifyWindow.webContents.on('will-redirect', async (event, newUrl) => {
    if (newUrl.startsWith(spotifyConfig.redirectUri)) {
      const urlParts = newUrl.split('?');
      const queryParams = new URLSearchParams(urlParts[1]);
      const code = queryParams.get('code');

      if (code) {
        // Defina os parâmetros da solicitação POST
        const data = {
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: spotifyConfig.redirectUri,
        };

        // Crie um cabeçalho de autorização básica com seu Client ID e Client Secret
        const authHeader = {
          Authorization: `Basic ${Buffer.from(`${spotifyConfig.clientId}:${spotifyConfig.clientSecret}`).toString('base64')}`,
        };


        // Faça a solicitação POST para trocar o código por um token
        axios.post('https://accounts.spotify.com/api/token', null, {
          params: data,
          headers: authHeader,
        })
          .then((response: any) => {
            // A resposta deve conter o token de acesso
            const accessToken = response.data.access_token;
            try {
              const content = { tokens: [{ name: "spotify", token: accessToken }] }
              const filePath = path.join(assetsPath, 'assets', 'configs', 'config.json');
              const dataFile = JSON.stringify(content, null, 2)


              fs.writeFileSync(filePath, dataFile);

              console.log(`Arquivo config atualizado com sucesso.`);
            } catch (error) {
              console.error(`Erro ao escrever no arquivo config:`, error);
            }
          })
          .catch((error: any) => {
            console.error('Erro ao trocar código por token de acesso:', error);
          });

        spotifyWindow?.close()
      }
      spotifyWindow?.close()
    }
  });

  spotifyWindow.on('closed', () => {
    spotifyWindow = null;
  });
}

export default createSpotifyLoginWindow;