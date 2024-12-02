/* *Esercizio*
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
- Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
- Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
- Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array.
- Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
- Testare su postman
Bonus:
filtrare i dati sulla base di parametri in query string
*/

// Express variables
const express = require("express");     //--> const to import express
const app = express();                  // --> to call express methods
const PORT = 3000;                      // --> localhost:PORT

// Static files folder;
app.use(express.static("public"));

// importing the DB file

const myPosts = require("./public/data/database.js");
const counter = require("./public/data/database.js");
// Response at http://localhost:3000
app.get("/", (req, res) => {
    res.send("<h1>Server del mio blog</h1>");
})

// Response
app.get("/bacheca", (req, res) => {
    res.json(myPosts);
    res.json(counter)
})

// app.get("/:tags", (req, res) => {
//     const tags = req.params.tags;
//     // console.log(tags);
//     let posts = [...myPosts];
//     //
//     if (tags) {
//         posts = myPosts.find((post) => {
//             return post.tags.toLowerCase() === tags.toLowerCase();
//         });
//         if (!tags) {
//             posts = {
//                 error: "Tag search has produced 0 results"
//             }
//         }
//     }
//     res.json(posts);
// })

// Error message when page not found

app.all("*", (req, res) => {
    res.status(404).send("<h1>Error 404 - Not found</h1>")
})

// Listener to the local host port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})


