let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../../utils/index')

router.get('/', (req, res) => {
    let docs = getApiDocs(router)
    res.json(docs)
})

router.use('/stockstatus', require('./stockstatus'))
router.use('/dataquality', require('./dataquality'))
router.use('/reportingratetrend', require('./reportingratetrend'))
router.use('/supplychain', require('./supplychain'))
router.use('/hhfollowup', require('./hhfollowup'))
router.use('/accountability', require('./accountability'))
router.use('/issuesvsrecipts', require('./issuesvsrecipts'))

module.exports = router;