let endpoints = require('../static/endpoints')
let justFetch = require('../utils/justFetch')

const fetchStockStatus = async (ou,level,pe) => {
    let url = endpoints.filter(ept => ept.id == "all__stock_status")[0].url
    try {
        let sc = await justFetch(url)
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

const fetchMOS = async () => {
    let url = endpoints.filter(ept => ept.id == "all__mos_by_commodity")[0].url
    try {
        let sc = await justFetch(url)
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

const fetchFacilityStockStatus = async () => {
    let url = endpoints.filter(ept => ept.id == "all__mos_by_commodity")[0].url
    try {
        let sc = await justFetch(url)
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

module.exports = {fetchStockStatus, fetchMOS, fetchFacilityStockStatus}