const express = require('express');
const cors  = require('cors');
require('isomorphic-unfetch');
let dotenv = require('dotenv').config()

let app = express();

app.use(cors());

app.get('/', (req, res) => {
    //  res.send('hi there hello');
     res.redirect('/api');
});
app.get('/favicon.ico', (req, res) => res.status(204));

async function fetchData(endpoint) {
    console.log('fetching data from '+endpoint)
    try {
        if(endpoint == null || endpoint.length < 4){return {status: 'Error', error: 'Invalid endpoint'}}
        let dt = await fetch(endpoint)
        let ft = await dt.json()
        return ft
    } catch (err) {
        return {status: 'Error', error: 'fetchData() failed with error '+JSON.stringify(err)}
        // return {status: 'Error', error: 'fetchData() failed with error ('+err.message+')'} //DHIS2 basic error handling
    }
}
app.get('/bible/:book/:chapter?/:verse?', async (req, res) => {
    let {book, chapter, verse} = req.params
    let url = `https://bible-api.com/`
    if(book == null || book.length < 2){book = 'psalm'}
    if(chapter == null || chapter.length < 1){chapter = 63}
    if(verse == null || verse.length < 1){verse = 1}
    url += `${book}+${chapter}:${verse}`
    let fetchedData = await fetchData(url)
    res.json({answer: fetchedData});
});

app.use('/api', require('./routes/api'));






//error handling (should really use module)
app.use(function (err, req, res, next) {
    console.log("Error: "+err)
})
//error handling

app.listen(3000, () => {
    console.log(`Server started on 3000`);
});