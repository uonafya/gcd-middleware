let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../utils/index')
let {fetchLevels, fetchCounties, fetchSubcounties, fetchWards, fetchFacilities, fetchMFLcodes, fetchCUs, fetchCommodities, fetchMCFfacilities, fetchDefaults, fetchOrganisationUnit, fetchExpectedReports} = require('../middleware/common')

router.get('/', (req, res) => {
    let docs = getApiDocs(router)
    res.json(docs)
})

router.get('/defaults', async (req, res) => {
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchDefaults(prog)
    res.json({fetchedData});
});

router.get('/levels', async (req, res) => {
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchLevels(prog)
    res.json({fetchedData});
});

router.get('/counties', async (req, res) => {
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchCounties(prog)
    res.json({fetchedData});
});

router.get('/subcounties/:parent?', async (req, res) => {
	let {parent} = req.params
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchSubcounties(parent,prog)
    res.json({fetchedData});
});

router.get('/wards/:parent?', async (req, res) => {
	let {parent} = req.params
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchWards(parent,prog)
    res.json({fetchedData});
});

router.get('/facilities/:parent?', async (req, res) => {
	const {parent} = req.params
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchFacilities(parent,prog)
    res.json({fetchedData});
});

router.get('/commodities', async (req, res) => {
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchCommodities(prog)
    res.json({fetchedData});
});

router.get('/community-units/:parent?', async (req, res) => {
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchCUs(parent,prog)
    res.json({fetchedData});
});

router.get('/mfl-codes/:id?', async (req, res) => {
    const {id} = req.params
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchMFLcodes(id,prog)
    res.json({fetchedData});
});

router.get('/organisationUnit/:id', async (req, res) => {
    let { id } = req.params
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchOrganisationUnit(id,prog)
    res.json({ fetchedData});
});

router.get('/mcf-facilities', async (req, res) => {
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchMCFfacilities(prog)
    res.json({fetchedData});
});

router.get('/expected-reports/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, pe } = req.params
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let defaults = await fetchDefaults(prog) 
    if(ou === undefined || ou === null || ou === " " || ou === '~'){ou = defaults.dataViewOrganisationUnits[0].id}
    if(pe === undefined || pe === null || pe === " " || pe === '~'){pe = defaults.period}
    let fetchedData = await fetchExpectedReports(ou,pe,prog)
    res.json({ fetchedData});
});

module.exports = router;
