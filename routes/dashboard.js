let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../utils/index')
let {fetchDefaults} = require('../middleware/common')
let {fetchStockStatus, fetchMOS, fetchFacilityStockStatus} = require('../middleware/dashboard')

router.get('/', (req, res) => {
    let docs = getApiDocs(router)
    res.json(docs)
})

router.get('/stockstatus/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let defaults = await fetchDefaults(prog)
    if(ou === undefined || ou === null || ou === " " || ou === '~'){ou = defaults.dataViewOrganisationUnits[0].id}
    if(level === undefined || level === null || level === " " || level === '~'){level = defaults.level}
    if(pe === undefined || pe === null || pe === " " || pe === '~'){pe = defaults.period}
    let fetchedData = await fetchStockStatus(ou,level,pe,prog)
    res.json({ fetchedData});
});

router.get('/mos-by-commodity/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let defaults = await fetchDefaults(prog)
    if(ou === undefined || ou === null || ou === " " || ou === '~'){ou = defaults.dataViewOrganisationUnits[0].id}
    if(level === undefined || level === null || level === " " || level === '~'){level = defaults.level}
    if(pe === undefined || pe === null || pe === " " || pe === '~'){pe = defaults.period}
    let fetchedData = await fetchMOS(ou, level, pe,prog)
    res.json({ fetchedData});
});

router.get('/facility-stock-status/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let defaults = await fetchDefaults(prog)
    if(ou === undefined || ou === null || ou === " " || ou === '~'){ou = defaults.dataViewOrganisationUnits[0].id}
    if(level === undefined || level === null || level === " " || level === '~'){level = defaults.level}
    if(pe === undefined || pe === null || pe === " " || pe === '~'){pe = defaults.period}
    let fetchedData = await fetchFacilityStockStatus(ou, level, pe,prog)
    res.json({ fetchedData});
});

module.exports = router;
