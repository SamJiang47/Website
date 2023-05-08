const express = require('express');
const app = express(); 
const port = 3000;
let counter= 0;

app.get('/', (req, res) => {
                            res.send('Hello World! Welcome to Node.js');
                           });

app.get('/visits', (req, res) => {
                                  counter += 1;
                                  res.send(`There have been ${counter} visits to this session`);
                                 });

app.get('/rock', (req, res) => {
                                 const rndInt = Math.floor(Math.random() * 3) + 1;
                                 console.log(rndInt);
                                  if (rndInt ===3){
                                    res.send('Bot picked Scissors. You Win!!!');
                                  } else if (rndInt===1){
                                                         res.send('Bot picked Rock. Tie! Try again!');
                                     }else {
                                            res.send('Oops, there is a error!');
                                     }
                                });

app.get('/paper', (req, res) => {
    const rndInt = Math.floor(Math.random() * 3) + 1;
    console.log(rndInt);
     if (rndInt ===3){
       res.send('Bot picked Scissors. You Win!!!');
     } else if (rndInt===1){
                            res.send('Bot picked Rock. Tie! Try again!');
        }else {
               res.send('Oops, there is a error!');
        }
                                });

app.get('/scissors', (req, res) => {
    const rndInt = Math.floor(Math.random() * 3) + 1;
    console.log(rndInt);
     if (rndInt ===3){
       res.send('Bot picked Scissors. You Win!!!');
     } else if (rndInt===1){
                            res.send('Bot picked Rock. Tie! Try again!');
        }else {
               res.send('Oops, there is a error!');
        }
                                   });


app.listen(port, () => {
                        console.log(`Server listening at http://localhost:${port}`);
                       })