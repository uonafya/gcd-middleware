let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../../utils/index')
let {fetchrrtrend, fetchlastestrr, fetchfacilityrr, fetchsubcountyrr} = require('../../middleware/county/reportingrate.js')

router.get('/', (req, res) => {
    let docs = getApiDocs(router)
    res.json(docs)
})

router.get('/trend/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let prapplo = req.app.locals.program //persists throughout the life of the app. Using it as a fallback
    let prog = req.query.program || prapplo
    let fetchedData = await fetchrrtrend(ou,level,pe, prog)
    res.json({ fetchedData});
});
router.get('/latesttrend/:ou?/:level?/:pe?', async (req, res) => {
	let {ou, level, pe } = req.params
	level = 3
	pe = 'LAST_MONTH'
    let prapplo = req.app.locals.program //persists throughout the life of the app. Using it as a fallback
    let prog = req.query.program || prapplo
    let fetchedData = await fetchlastestrr(ou,level,pe,prog)
    res.json({ fetchedData});
});
router.get('/facility/:ou?/:level?/:pe?', async (req, res) => {
	let {ou, level, pe } = req.params
	level = 5
    let prapplo = req.app.locals.program //persists throughout the life of the app. Using it as a fallback
    let prog = req.query.program || prapplo
    let fetchedData = await fetchfacilityrr(ou,level,pe,prog)
    res.json({ fetchedData});
});
router.get('/subcounty/:ou?/:level?/:pe?', async (req, res) => {
	let {ou, level, pe } = req.params
	level = 3
    let prapplo = req.app.locals.program //persists throughout the life of the app. Using it as a fallback
    let prog = req.query.program || prapplo
    let fetchedData = await fetchsubcountyrr(ou,level,pe,prog)
    res.json({ fetchedData});
});
module.exports = router;
