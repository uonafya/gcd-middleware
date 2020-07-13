let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../../utils/index')
let {fetchallmalariacommodities } = require('../../middleware/national/allmalariacommodities.js')

router.get('/:ou?/:level?/:pe?', async (req, res) => { //TODO: set constant National OU
    let {ou, level, pe } = req.params
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchallmalariacommodities(ou,level,pe,prog)
    res.json({ fetchedData});
});

module.exports = router;