let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../../utils/index')
let {fetchaccountability } = require('../../middleware/county/accountability.js')

// router.get('/', (req, res) => {
//     let docs = getApiDocs(router)
//     res.json(docs)
// })

router.get('/:ou?/:level?/:pe?', async (req, res) => {
    let {ou, level, pe } = req.params
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchaccountability(ou,level,pe,prog)
    res.json({ fetchedData });
});

module.exports = router;