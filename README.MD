# Oberon: Sistema Pomodoro Integrado com Spotify

O **Oberon** é um aplicativo de desktop desenvolvido com **Electron**, **React**, **Webpack** e **TypeScript**. Ele combina a técnica Pomodoro de gerenciamento de tempo com integração ao **Spotify**, permitindo que você controle suas sessões de foco e relaxamento enquanto escuta suas músicas favoritas. O Oberon visa ajudar a aumentar sua produtividade e manter a concentração, utilizando música como um reforço.

## Funcionalidades

- **Técnica Pomodoro**: Gerencie seu tempo com blocos de trabalho focado seguidos por pequenos intervalos.
- **Integração com Spotify**: Controle sua playlist diretamente do aplicativo durante suas sessões de Pomodoro.
- **Notificações Personalizadas**: Receba alertas quando um ciclo de foco ou descanso terminar.
- **Timer Personalizável**: Configure a duração de suas sessões de foco e descanso de acordo com suas necessidades.
- **Interface Amigável**: Interface intuitiva e fácil de usar, desenvolvida em React.
- **Controle de Músicas**: Pause, avance ou retroceda músicas do Spotify diretamente no app.

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/caduzz/oberon.git
```

2. Acesse o diretório do projeto:

```bash
cd oberon
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o aplicativo:

```bash
npm start
```

## Scripts Disponíveis
- `npm start`: Inicializa o aplicativo no modo de desenvolvimento.
- `npm run build`: Gera uma build para produção.
- `npm run package`: Empacota o aplicativo para distribuição.

## Tecnologias Utilizadas
- `Electron`: Para criar a interface nativa do desktop e manipular funcionalidades do sistema.
- `React`: Para a construção da interface de usuário.
- `Webpack`: Como empacotador de módulos para otimizar e compilar os arquivos.
- `TypeScript`: Para tipagem estática e aumento de produtividade no desenvolvimento.
- `Spotify API`: Para integração com o Spotify e controle de músicas.

## Configuração do Spotify

Para utilizar a integração com o Spotify, siga os passos abaixo:

1. Crie um aplicativo no Spotify Developer Dashboard.
2. No arquivo .env (ou similar), adicione as seguintes variáveis:

```env
CLIENTID="CLIENTID"
CLIENTSECRET="CLIENTSECRET"
REDIRECTURI="http://localhost:9000/main_window"
```

3. No aplicativo, faça login com sua conta Spotify e permita a conexão.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença
Este projeto está licenciado sob a <a>MIT License</a>.

Oberon: Maximize sua produtividade e foque no que realmente importa enquanto curte suas músicas favoritas!