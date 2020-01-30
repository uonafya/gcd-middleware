let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../../utils/index')
let {fetchCompleteness, fetchComparison, fetchConcordance, fetchConsistency} = require('../../middleware/county/dataquality')

router.get('/', (req, res) => {
    let docs = getApiDocs(router)
    res.json(docs)
})

router.get('/completeness/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let fetchedData = await fetchCompleteness(ou,level,pe)
    res.json({ fetchedData});
});

router.get('/concordance/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let fetchedData = await fetchConcordance(ou,level,pe)
    res.json({ fetchedData});
});

router.get('/consistency/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let fetchedData = await fetchConsistency(ou,level,pe)
    res.json({ fetchedData});
});

router.get('/comparison/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let fetchedData = await fetchComparison(ou,level,pe)
    res.json({ fetchedData});
});

module.exports = router;