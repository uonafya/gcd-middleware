let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../../utils/index')
let {fetchrrtrend, fetchlastestrr, } = require('../../middleware/county/reportingratetrends.js')

router.get('/', (req, res) => {
    let docs = getApiDocs(router)
    res.json(docs)
})

router.get('/reportingratetrend/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let fetchedData = await fetchrrtrend(ou,level,pe)
    res.json({ fetchedData});
});
router.get('/latestreportingratetrend/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let fetchedData = await fetchlastestrr(ou,level,pe)
    res.json({ fetchedData});
});

module.exports = router;