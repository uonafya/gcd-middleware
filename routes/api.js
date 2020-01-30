let express = require('express');
let router = express.Router()

router.get('/', (req, res) => {
    res.send("API docs here")
})

router.use('/common', require('./common'))
router.use('/dashboard', require('./dashboard'))
router.use('/county', require('./county/index'))
// router.use('/national', require('./national/index'))

module.exports = router;