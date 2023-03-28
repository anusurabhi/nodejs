import express from "express";
const app = express();
console.dir(app);

// app.use((req, res) => {
//     console.log("We got a new request");
// })

app.get('/', (req, res) => {
    res.send("Welcome to my home page");
})

app.get('/cats', (req, res) => {
    res.send("meow");
})

app.get('/dogs',(req, res) => {
    res.send('woof');  
})

app.get('/r/:arbitrary', (req, res) => {
    const {arbitrary} = req.params;
    res.send(`Currently in ${arbitrary} path`)
})

app.get('/r/:arbitrary/:postId',(req, res) => {
    const {arbitrary, postId} = req.params;
    res.send(`Currently getting postId: ${postId} and arbitrary: ${arbitrary} path`)
})

app.get('/search', (req, res) => {
    const {q} = req.query;
    if(!q){
        res.send("Value for q is not inserted");
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send("I don't know that path");
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
});
