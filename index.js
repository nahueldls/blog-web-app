import express from 'express';
import bodyParser from "body-parser";
import {fileURLToPath} from "url";
import path from 'path';
import { dirname } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let arrpost = [];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req,res) => {
    // console.log(arrpost);
    if (arrpost.length==0) {
        res.render("index.ejs");
    } else {
        res.render("index.ejs", { posts: arrpost });
    }
});


app.get('/post', (req, res) => {
    res.render("partials/post.ejs");
});

app.post('/', (req, res) => {
    let data = req.body["post"];
    arrpost.push(data);
    res.locals = {posts:arrpost};
    console.log(res.locals.posts);
    console.log("se realizó una solicitud post");
    res.redirect("/");
});


app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
});