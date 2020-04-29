let express = require('express');
let router = express.Router()
let {fetchDefaults} = require('../../middleware/common')
let {fetchfacilitymos, fetchkemsasummary } = require('../../middleware/national/nationalsummary.js')

let {getApiDocs} = require('../../utils/index')

router.get('/', (req, res) => {
    let docs = getApiDocs(router)
    res.json(docs)
})


router.get('/facility-mos/:ou?/:level?/:pe?', async (req, res) => { //TODO: set constant National OU
    let {ou, level, pe } = req.params
    let defaults = await fetchDefaults()
    // let defaults = {pe: "LAST_MONTH", ou: "HfVjCurKxh2", level: "1"}
    if(ou === undefined || ou === null || ou === " " || ou === '~'){ou = defaults.dataViewOrganisationUnits[0].id}
    if(level === undefined || level === null || level === " " || level === '~'){level = defaults.level}
    if(pe === undefined || pe === null || pe === " " || pe === '~'){pe = defaults.period}
    let fetchedData = await fetchfacilitymos(ou,level,pe)
    res.json({ fetchedData});
});

router.get('/kemsa-mos/:ou?/:level?/:pe?', async (req, res) => { //TODO: set constant National OU
    let {ou, level, pe } = req.params
    let defaults = await fetchDefaults()
    // let defaults = {pe: "LAST_MONTH", ou: "HfVjCurKxh2", level: "1"}
    if(ou === undefined || ou === null || ou === " " || ou === '~'){ou = defaults.dataViewOrganisationUnits[0].id}
    if(level === undefined || level === null || level === " " || level === '~'){level = defaults.level}
    if(pe === undefined || pe === null || pe === " " || pe === '~'){pe = defaults.period}
    let fetchedData = await fetchfacilitymos(ou,level,pe)
    res.json({ fetchedData});
});

router.get('/pending-mos/:ou?/:level?/:pe?', async (req, res) => { //TODO: set constant National OU
    let {ou, level, pe } = req.params
    let defaults = await fetchDefaults()
    // let defaults = {pe: "LAST_MONTH", ou: "HfVjCurKxh2", level: "1"}
    if(ou === undefined || ou === null || ou === " " || ou === '~'){ou = defaults.dataViewOrganisationUnits[0].id}
    if(level === undefined || level === null || level === " " || level === '~'){level = defaults.level}
    if(pe === undefined || pe === null || pe === " " || pe === '~'){pe = defaults.period}
    let fetchedData = await fetchfacilitymos(ou,level,pe)
    res.json({ fetchedData});
});

router.get('/kemsasummary/:ou?/:level?/:pe?', async (req, res) => { //TODO: set constant National OU
    let {ou, level, pe } = req.params
    let defaults = await fetchDefaults()
    // let defaults = {pe: "LAST_MONTH", ou: "HfVjCurKxh2", level: "1"}
    if(ou === undefined || ou === null || ou === " " || ou === '~'){ou = defaults.dataViewOrganisationUnits[0].id}
    if(level === undefined || level === null || level === " " || level === '~'){level = defaults.level}
    if(pe === undefined || pe === null || pe === " " || pe === '~'){pe = defaults.period}
    let fetchedData = await fetchkemsasummary(ou,level,pe)
    res.json({ fetchedData});
});

module.exports = router;
