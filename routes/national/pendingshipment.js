let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../../utils/index')
let {fetchpendingshipment } = require('../../middleware/national/pendingshipment.js')

router.get('/', async (req, res) => {
    let {ou, level, pe } = req.params
    let fetchedData = await fetchpendingshipment(ou,level,pe)
    res.json({ fetchedData});
});

module.exports = router;