const express = require('express');
const router = express.Router()
const {fetchCounties, fetchSubcounties, fetchWards, fetchFacilities, fetchMFLcodes, fetchCUs, fetchCommodities, fetchDefaults} = require('../middleware/common')

router.get('/', (req, res) => {
    res.send("Common API docs here")
})

router.get('/defaults', async (req, res) => {
    let fetchedData = await fetchDefaults()
    res.json({answer: fetchedData});
});

router.get('/counties', async (req, res) => {
    let fetchedData = await fetchCounties()
    res.json({answer: fetchedData});
});

router.get('/subcounties', async (req, res) => {
    let fetchedData = await fetchSubcounties()
    res.json({answer: fetchedData});
});

router.get('/wards', async (req, res) => {
    let fetchedData = await fetchWards()
    res.json({answer: fetchedData});
});

router.get('/facilities', async (req, res) => {
    let fetchedData = await fetchFacilities()
    res.json({answer: fetchedData});
});

router.get('/commodities', async (req, res) => {
    let fetchedData = await fetchCommodities()
    res.json({answer: fetchedData});
});

router.get('/community-units', async (req, res) => {
    let fetchedData = await fetchCUs()
    res.json({answer: fetchedData});
});

router.get('/mfl-codes', async (req, res) => {
    let fetchedData = await fetchMFLcodes()
    res.json({answer: fetchedData});
});

module.exports = router;