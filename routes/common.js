let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../utils/index')
let {fetchCounties, fetchSubcounties, fetchWards, fetchFacilities, fetchMFLcodes, fetchCUs, fetchCommodities, fetchMCFfacilities, fetchDefaults, fetchOrganisationUnit, fetchExpectedReports} = require('../middleware/common')

router.get('/', (req, res) => {
    let docs = getApiDocs(router)
    res.json(docs)
})

router.get('/defaults', async (req, res) => {
    let fetchedData = await fetchDefaults()
    res.json({fetchedData});
});

router.get('/counties', async (req, res) => {
    let fetchedData = await fetchCounties()
    res.json({fetchedData});
});

router.get('/subcounties/:parent?', async (req, res) => {
	let {parent} = req.params
    let fetchedData = await fetchSubcounties(parent)
    res.json({fetchedData});
});

router.get('/wards/:parent?', async (req, res) => {
	let {parent} = req.params
    let fetchedData = await fetchWards(parent)
    res.json({fetchedData});
});

router.get('/facilities/:parent?', async (req, res) => {
	const {parent} = req.params
    let fetchedData = await fetchFacilities(parent)
    res.json({fetchedData});
});

router.get('/commodities', async (req, res) => {
    let fetchedData = await fetchCommodities()
    res.json({fetchedData});
});

router.get('/community-units/:parent?', async (req, res) => {
    let fetchedData = await fetchCUs(parent)
    res.json({fetchedData});
});

router.get('/mfl-codes/:id?', async (req, res) => {
    const {id} = req.params
    let fetchedData = await fetchMFLcodes(id)
    res.json({fetchedData});
});

router.get('/organisationUnit/:id', async (req, res) => {
    let { id } = req.params
    let fetchedData = await fetchOrganisationUnit(id)
    res.json({ fetchedData});
});

router.get('/mcf-facilities', async (req, res) => {
    let fetchedData = await fetchMCFfacilities()
    res.json({fetchedData});
});

router.get('/expected-reports/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, pe } = req.params
    let defaults = await fetchDefaults() 
    if(ou === undefined || ou === null || ou === " " || ou === '~'){ou = defaults.dataViewOrganisationUnits[0].id}
    if(pe === undefined || pe === null || pe === " " || pe === '~'){pe = defaults.period}
    let fetchedData = await fetchExpectedReports(ou,pe)
    res.json({ fetchedData});
});

module.exports = router;
