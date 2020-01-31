let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../../utils/index')
let {fetchnationalsummary } = require('../../middleware/national/nationalsummary.js')

router.get(':ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let fetchedData = await fetchnationalsummary(ou,level,pe)
    res.json({ fetchedData});
});

module.exports = router;