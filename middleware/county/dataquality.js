let endpoints = require('../../static/endpoints')
let {justFetch} = require('../../utils/index')

let fetchCompleteness = async (ou,level,pe) => {
    let url = endpoints.filter(ept => ept.id == "all__stock_status")[0].url
    try {
        let sc = await justFetch(url)
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

module.exports = {fetchCompleteness}