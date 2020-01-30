let endpoints = require('../../static/endpoints')
let {justFetch, appendQueriesToUrl} = require('../../utils/index')

let fetchSupplychainsummary = async (ou,level,pe) => {
    let {url, default_org_unit, default_org_unit_level, default_period} = endpoints.filter(ept => ept.id == "county__indicator_summary")[0]
    let defaults = {default_pe: default_period, default_ou: default_org_unit, default_lvl: default_org_unit_level}
    let query = {pe, ou, level}
    try {
        let final_url = appendQueriesToUrl(url, query, defaults)
        console.log("final_url = "+final_url)
        let sc = await justFetch(final_url)
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

let fetchSupplychaintrend = async (ou,level,pe) => {
    let {url, default_org_unit, default_org_unit_level, default_period} = endpoints.filter(ept => ept.id == "county__indicator_trends")[0]
    let defaults = {default_pe: default_period, default_ou: default_org_unit, default_lvl: default_org_unit_level}
    let query = {pe, ou, level}
    try {
        let final_url = appendQueriesToUrl(url, query, defaults)
        console.log("final_url = "+final_url)
        let sc = await justFetch(final_url)
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}



module.exports = {fetchSupplychaintrend, fetchSupplychainsummary }