const app = require('./config/express')();
const port = app.get('port');

app.listen(port, () => {
    console.log(`#--------------------------------#`)
    console.log(`# LigosBank - API                #`)
    console.log(`# Versão 0.1                     #`)
    console.log(`#--------------------------------#`)
    console.log(`Servidor iniciado na porta ${port}`)
});