let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../../utils/index')
let {fetchnationalissuesvsrecipts } = require('../../middleware/national/nationalissuesvsrecipts.js')

router.get(':ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let fetchedData = await fetchnationalissuesvsrecipts(ou,level,pe)
    res.json({ fetchedData});
});

module.exports = router;