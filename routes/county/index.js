let express = require('express');
let router = express.Router()

router.get('/', (req, res) => {
    res.send("County API docs here")
})

router.use('/stockstatus', require('./stockstatus'))
router.use('/dataquality', require('./dataquality'))
// router.use('/reportingrate', require('./reportingrate'))
// router.use('/supplychainperf', require('./supplychainperf'))
// router.use('/hffollowup', require('./hffollowup'))
// router.use('/accountability', require('./accountability'))
// router.use('/issuesreceipts', require('./issuesreceipts'))

module.exports = router;