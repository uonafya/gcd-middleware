let express = require('express');
let router = express.Router()
let {getApiDocs} = require('../../utils/index')

router.get('/', (req, res) => {
    let docs = getApiDocs(router)
    res.json(docs)
})

router.use('/stockstatus', require('./stockstatus'))
router.use('/dataquality', require('./dataquality'))
router.use('/reportingrate', require('./reportingrate'))
router.use('/supplychain', require('./supplychain'))
router.use('/hffollowup', require('./hffollowup'))
router.use('/accountability', require('./accountability'))
router.use('/issuesvsreceipts', require('./issuesvsreceipts'))

module.exports = router;
