let express = require('express');
let router = express.Router()
let {getApiDocs, } = require('../../utils/index')
let {fetchDefaults} = require('../../middleware/common')
let {fetchCompleteness, fetchComparison, fetchConcordance, fetchConsistency} = require('../../middleware/county/dataquality')

router.get('/', (req, res) => {
    let docs = getApiDocs(router)
    res.json(docs)
})

router.get('/completeness/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let defaults = await fetchDefaults() 
    defaults.level = 5
    defaults.period = "LAST_12_MONTHS"
    if(ou === undefined || ou === null || ou === " " || ou === '~'){ou = defaults.dataViewOrganisationUnits[0].id}
    if(level === undefined || level === null || level === " " || level === '~'){level = defaults.level}
    if(pe === undefined || pe === null || pe === " " || pe === '~'){pe = defaults.period}
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchCompleteness(ou,level,pe,prog) 
    res.json({ fetchedData});
});

router.get('/concordance/:commdt?/:ou?/:level?/:pe?', async (req, res) => {
    let {commdt, ou, level, pe } = req.params
    let defaults = await fetchDefaults() 
    defaults.level = 5
    defaults.period = "LAST_MONTH"
    if(ou === undefined || ou === null || ou === " " || ou === '~'){ou = defaults.dataViewOrganisationUnits[0].id}
    if(level === undefined || level === null || level === " " || level === '~'){level = defaults.level}
    if(pe === undefined || pe === null || pe === " " || pe === '~'){pe = defaults.period}
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchConcordance(ou,level,pe,commdt,prog)
    res.json({ fetchedData});
});

router.get('/consistency/:commdt?/:ou?/:level?/:pe?', async (req, res) => {
    let {commdt, ou, level, pe } = req.params
    let defaults = await fetchDefaults() 
    defaults.level = 5
    defaults.period = "LAST_MONTH"
    if(ou === undefined || ou === null || ou === " " || ou === '~'){ou = defaults.dataViewOrganisationUnits[0].id}
    if(level === undefined || level === null || level === " " || level === '~'){level = defaults.level}
    if(pe === undefined || pe === null || pe === " " || pe === '~'){pe = defaults.period}
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchConsistency(ou,level,pe,commdt,prog)
    res.json({ fetchedData});
});

router.get('/comparison/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let defaults = await fetchDefaults() 
    defaults.level = 5
    defaults.period = "LAST_MONTH"
    if(ou === undefined || ou === null || ou === " " || ou === '~'){ou = defaults.dataViewOrganisationUnits[0].id}
    if(level === undefined || level === null || level === " " || level === '~'){level = defaults.level}
    if(pe === undefined || pe === null || pe === " " || pe === '~'){pe = defaults.period}
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchComparison(ou,level,pe,prog)
    res.json({ fetchedData});
});

module.exports = router;