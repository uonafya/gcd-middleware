let express = require('express');
let router = express.Router()
let {fetchpendingshipment, postpendingshipment} = require('../../middleware/national/pendingshipment.js')

router.get('/:ou?/:level?/:pe?', async (req, res) => {
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await fetchpendingshipment(prog)
    res.json({ fetchedData});
});

router.post('/', async (req, res) => { //likely unnecessary
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await postpendingshipment(options,prog)
    res.json({ fetchedData});
});

router.put('/', async (req, res) => {
    let prapplo = req.app.locals.program; let prog = req.query.program || prapplo
    let fetchedData = await postpendingshipment(options,prog)
    res.json({ fetchedData});
});

module.exports = router;