let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../utils/index')
<<<<<<< HEAD
let {fetchCounties, fetchSubcounties, fetchWards, fetchFacilities, fetchMFLcodes, fetchCUs, fetchCommodities, fetchDefaults, fetchOrganisationUnit} = require('../middleware/common')
=======
let {fetchCounties, fetchSubcounties, fetchWards, fetchFacilities, fetchMFLcodes, fetchCUs, fetchCommodities, fetchMCFfacilities, fetchDefaults} = require('../middleware/common')
>>>>>>> 0163550cc17ba4a6faebb3e554781ce0cdcb6b66

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

router.get('/subcounties', async (req, res) => {
    let fetchedData = await fetchSubcounties()
    res.json({fetchedData});
});

router.get('/wards', async (req, res) => {
    let fetchedData = await fetchWards()
    res.json({fetchedData});
});

router.get('/facilities', async (req, res) => {
    let fetchedData = await fetchFacilities()
    res.json({fetchedData});
});

router.get('/commodities', async (req, res) => {
    let fetchedData = await fetchCommodities()
    res.json({fetchedData});
});

router.get('/community-units', async (req, res) => {
    let fetchedData = await fetchCUs()
    res.json({fetchedData});
});

router.get('/mfl-codes', async (req, res) => {
    let fetchedData = await fetchMFLcodes()
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

module.exports = router;
