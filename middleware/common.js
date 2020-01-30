let endpoints = require('../static/endpoints')
let {justFetch} = require('../utils/index')

let fetchDefaults = async () => {
    let url = endpoints.filter(ept => ept.id == "all__user_details")[0].url
    try {
        let sc = await justFetch(url)
        return sc
    } catch (err) {
        return {error: true, ...err}
    }
}

let fetchCounties = async () => {
    let url = endpoints.filter(ept => ept.id == "all__counties_list")[0].url
    try {
        let sc = await justFetch(url)
        return sc
    } catch (err) {
        return {error: true, ...err}
    }
}

let fetchSubcounties = async () => {
    let url = endpoints.filter(ept => ept.id == "all__subcounties_list")[0].url
    try {
        let sc = await justFetch(url)
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

let fetchWards = async () => {
    let url = endpoints.filter(ept => ept.id == "all__wards_list")[0].url
    try {
        let sc = await justFetch(url)
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

let fetchFacilities = async () => {
    let url = endpoints.filter(ept => ept.id == "all__facilities_list")[0].url
    try {
        let sc = await justFetch(url)
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

let fetchCUs = async () => {
    let url = endpoints.filter(ept => ept.id == "all__cus_list")[0].url
    try {
        let sc = await justFetch(url)
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

let fetchMFLcodes = async () => {
    let url = endpoints.filter(ept => ept.id == "all__cus_list")[0].url
    try {
        let sc = await justFetch(url)
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

let fetchCommodities = async () => {
    let url = endpoints.filter(ept => ept.id == "all__commodities")[0].url
    try {
        let sc = await justFetch(url)
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

module.exports = {fetchCounties, fetchSubcounties, fetchWards, fetchFacilities, fetchMFLcodes, fetchCUs, fetchCommodities, fetchDefaults}