import App from './app'

const app  = new App().express;

app.listen(process.env.PORT || 3000, 
    () => 
    console.log(`servidor rodando na porta ${process.env.PORT || 3000}`)
)