const express = require('express');
const router = express.Router()
const {fetchStockStatus, fetchMOS, fetchFacilityStockStatus} = require('../middleware/dashboard')

router.get('/', (req, res) => {
    res.send("Dashboard API docs here")
})

router.get('/stock-status/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let fetchedData = await fetchStockStatus(ou,level,pe)
    res.json({answer: fetchedData});
});

router.get('/mos-by-commodity', async (req, res) => {
    let fetchedData = await fetchMOS()
    res.json({answer: fetchedData});
});

router.get('/facility-stock-status', async (req, res) => {
    let fetchedData = await fetchFacilityStockStatus()
    res.json({answer: fetchedData});
});

module.exports = router;