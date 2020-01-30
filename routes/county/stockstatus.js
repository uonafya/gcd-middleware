let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../../utils/index')
let {fetchAL, fetchAS, fetchSP, fetchRDT, fetchAllSS} = require('../../middleware/county/stockstatus')

router.get('/', (req, res) => {
    let docs = getApiDocs(router)
    res.json(docs)
})

router.get('/al/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let fetchedData = await fetchAL(ou,level,pe)
    res.json({ fetchedData});
});

router.get('/as/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let fetchedData = await fetchAS(ou,level,pe)
    res.json({ fetchedData});
});

router.get('/sp/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let fetchedData = await fetchSP(ou,level,pe)
    res.json({ fetchedData});
});

router.get('/rdt/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let fetchedData = await fetchRDT(ou,level,pe)
    res.json({ fetchedData});
});

router.get('/all/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let fetchedData = await fetchAllSS(ou,level,pe)
    res.json({ fetchedData});
});

module.exports = router;