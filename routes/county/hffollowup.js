let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../../utils/index')
let {fetchhfunderstocked, fetchhfoverstocked } = require('../../middleware/county/hffollowup.js')

router.get('/', (req, res) => {
    let docs = getApiDocs(router)
    res.json(docs)
})

router.get('/understocked/:commdt?/:ou?/:level?/:pe?', async (req, res) => {
    let {commdt, ou, level, pe } = req.params
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    level = 5
    let fetchedData = await fetchhfunderstocked(ou,level,pe,commdt,prog)
    res.json({ fetchedData});
});
router.get('/overstocked/:commdt?/:ou?/:level?/:pe?', async (req, res) => {
    let {commdt, ou, level, pe } = req.params
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    level = 5
    let fetchedData = await fetchhfoverstocked(ou,level,pe,commdt,prog)
    res.json({ fetchedData});
});

module.exports = router;
