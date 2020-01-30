let endpoints = require('../../static/endpoints')
let {justFetch, appendQueriesToUrl} = require('../../utils/index')

let fetchpendingshipment = async (ou,level,pe) => {
    let {url} = endpoints.filter(ept => ept.id == "national__pending_shipments")[0]
    try {
        
        console.log(url)
        let sc = await justFetch(url)
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

module.exports = {fetchpendingshipment}