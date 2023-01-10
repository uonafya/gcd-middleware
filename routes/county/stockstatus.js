let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../../utils/index')
let {fetchDefaults} = require('../../middleware/common')
let {fetchAllSS, fetchOne, fetchAllSSMap} = require('../../middleware/county/stockstatus')

router.get('/', (req, res) => {
    let docs = getApiDocs(router)
    res.json(docs)
})

router.get('/one/:commdt?/:ou?/:level?/:pe?', async (req, res) => {
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

router.get('/all/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
	let defaults = await fetchDefaults();
    if(ou === undefined || ou === null || ou === " " || ou === '~'){
        console.log("???????????????????????")
        console.log(defaults.dataViewOrganisationUnits)
        console.log("???????????????????????")
        ou = defaults.dataViewOrganisationUnits[0].id
    }
    if(level === undefined || level === null || level === " " || level === '~'){level = defaults.level}
    if(pe === undefined || pe === null || pe === " " || pe === '~'){pe = defaults.period}
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchAllSS(ou,level,pe,prog)
    res.json({ fetchedData});
});

router.get('/map/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
	let defaults = await fetchDefaults();
    if(ou === undefined || ou === null || ou === " " || ou === '~'){
        console.log("???????????????????????")
        console.log(defaults.dataViewOrganisationUnits)
        console.log("???????????????????????")
        ou = defaults.dataViewOrganisationUnits[0].id
    }
    if(level === undefined || level === null || level === " " || level === '~'){level = defaults.level}
    if(pe === undefined || pe === null || pe === " " || pe === '~'){pe = defaults.period}
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchAllSSMap(ou,level,pe,prog)
    res.json({ fetchedData});
});

module.exports = router;
