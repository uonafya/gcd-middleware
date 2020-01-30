let express = require('express')            // https://expressjs.com/
let cors  = require('cors');                // https://www.npmjs.com/package/cors
require('isomorphic-unfetch')               // https://www.npmjs.com/package/isomorphic-unfetch
let apicache = require('apicache')          // https://github.com/kwhitley/apicache
let dotenv = require('dotenv').config()     //https://www.npmjs.com/package/dotenv
let cache = apicache.middleware


let app = express();

app.use(cache('3 days')); // works brilliantly. // LocalForage would be an alternative that supports IndexedDB

app.use(cors());

app.get('/', async(req, res) => {
    res.redirect('/api');
});
app.get('/favicon.ico', (req, res) => res.status(204));

app.use('/api', require('./routes/api'));








//error handling (should really use module)
app.use(function (err, req, res, next) {
    res.status(404).json({error: true, message: "An error occured"})
    console.log("Error: "+err)
})
//error handling

app.listen(3000, () => {
    console.log(`Server started on 3000`);
});