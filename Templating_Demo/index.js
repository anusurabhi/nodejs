import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import redditData from './data.json' assert { type: "json" };


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/rand', (req, res) =>{
    let rand = Math.floor(Math.random() * 10)+1;
    let myName = "Anu";
    res.render('rand', {rand, myName});
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', {cats})
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if(data){
        res.render('subreddit', {...data});
    }else{
        res.render('notFound', {subreddit});
    }
    
})


app.get('*', (req, res) => {
    res.send("404 Error")
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})
