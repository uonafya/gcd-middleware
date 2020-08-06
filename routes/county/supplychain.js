let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../../utils/index')
let {fetchSupplychaintrend, fetchSupplychainsummary} = require('../../middleware/county/supplychain')

router.get('/', (req, res) => {
    let docs = getApiDocs(router)
    res.json(docs)
})

router.get('/indicatorsummary/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params

    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchSupplychainsummary(ou,level,pe,prog)
    res.json({ fetchedData});
});
router.get('/indicatortrends/:ou?/:level?/:pe?/:commdt?', async (req, res) => {
    let {ou, level, pe, commdt } = req.params
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo;
    let fetchedData = await fetchSupplychaintrend(ou,level,pe,commdt,prog)
    res.json({ fetchedData});
});

module.exports = router;