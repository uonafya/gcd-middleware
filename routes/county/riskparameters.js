let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../../utils/index')
let {fetchriskparameters } = require('../../middleware/county/riskparameters.js')


router.get('/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchriskparameters(ou,level,pe,prog)
    res.json({ fetchedData });
});

module.exports = router;