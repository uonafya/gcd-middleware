let express = require('express');
let router = express.Router()
let {fetchCounties, fetchSubcounties, fetchWards, fetchFacilities, fetchMFLcodes, fetchCUs, fetchCommodities, fetchDefaults} = require('../middleware/common')

router.get('/', (req, res) => {
    res.send("Common API docs here")
})

router.get('/defaults', async (req, res) => {
    letfetchedData = await fetchDefaults()
    res.json({fetchedData});
});

router.get('/counties', async (req, res) => {
    letfetchedData = await fetchCounties()
    res.json({fetchedData});
});

router.get('/subcounties', async (req, res) => {
    letfetchedData = await fetchSubcounties()
    res.json({fetchedData});
});

router.get('/wards', async (req, res) => {
    letfetchedData = await fetchWards()
    res.json({fetchedData});
});

router.get('/facilities', async (req, res) => {
    letfetchedData = await fetchFacilities()
    res.json({fetchedData});
});

router.get('/commodities', async (req, res) => {
    letfetchedData = await fetchCommodities()
    res.json({fetchedData});
});

router.get('/community-units', async (req, res) => {
    letfetchedData = await fetchCUs()
    res.json({fetchedData});
});

router.get('/mfl-codes', async (req, res) => {
    letfetchedData = await fetchMFLcodes()
    res.json({fetchedData});
});

module.exports = router;