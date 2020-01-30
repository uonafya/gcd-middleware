let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../utils/index')
let {fetchStockStatus, fetchMOS, fetchFacilityStockStatus} = require('../middleware/dashboard')

router.get('/', (req, res) => {
    let docs = getApiDocs(router)
    res.json(docs)
})

router.get('/stockstatus/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    //get user defaults & pass them here
    let fetchedData = await fetchStockStatus(ou,level,pe)
    res.json({ fetchedData});
});

router.get('/mos-by-commodity', async (req, res) => {
    //get user defaults & pass them here
    let fetchedData = await fetchMOS()
    res.json({ fetchedData});
});

router.get('/facility-stock-status', async (req, res) => {
    //get user defaults & pass them here
    let fetchedData = await fetchFacilityStockStatus()
    res.json({ fetchedData});
});

module.exports = router;