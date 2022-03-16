let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../../utils/index')
let {fetchDefaults} = require('../../middleware/common')
let {fetchAllSS, fetchOne} = require('../../middleware/county/riskparameters')

router.get('/', (req, res) => {
    let docs = getApiDocs(router)
    res.json(docs)
})

router.get('/:commdt?/:ou?/:level?/:pe?', async (req, res) => {
    let {commdt, ou, level, pe } = req.params
	let defaults = await fetchDefaults();
	defaults.level = 5
    if(ou === undefined || ou === null || ou === " " || ou === '~'){ou = defaults.dataViewOrganisationUnits[0].id}
    if(level === undefined || level === null || level === " " || level === '~'){level = defaults.level}
    if(pe === undefined || pe === null || pe === " " || pe === '~'){pe = defaults.period}
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchOne(ou,level,pe,commdt,prog)
    res.json({ fetchedData});
});


module.exports = router;
