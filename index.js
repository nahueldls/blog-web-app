import express from 'express';
import bodyParser from "body-parser";
const app = express();
const port = 3000;
let arrpost = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req,res) => {
    res.render("index.ejs");
});

app.post('/submit', (req, res) => {
    let data = req.body["post"];
    arrpost.push(data);
    res.locals = {posts:arrpost};
    console.log(res.locals.posts);
    console.log("se realizó una solicitud post")
    res.render("index.ejs");
});

//problema: cuando actualizo la pagina web se realiza nuevamente la ultima solicitud post que antes ya se habia realizado, lo que genera que el ultimo post creado por el usuario se repita.

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
});