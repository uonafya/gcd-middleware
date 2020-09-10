// let endpoints = require('../../static/endpoints')
let {programs} = require('../../config/index')
let {justFetch, appendQueriesToUrl} = require('../../utils/index')


let fetchOne = async (ou,level,pe,commodity,prog) => {
    let endpoints = programs.find(prg => prg.id == prog).endpoints
    let {url, default_org_unit, default_org_unit_level, default_period} = endpoints.filter(ept => ept.page == "Stock status" && ept.url.includes(commodity))[0] || endpoints.filter(ept => ept.page == "Stock status")[0]
    let defaults = {default_pe: default_period, default_ou: default_org_unit, default_lvl: default_org_unit_level}
    let query = {pe, ou, level}
    try {
        let final_url = appendQueriesToUrl(url, query, defaults)
        console.log('final_url', final_url);
        let sc = await justFetch(final_url)
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}




let fetchAllSS = async (ou,level,pe,prog) => {
    let endpoints = programs.find(prg => prg.id == prog).endpoints
    let {url, default_org_unit, default_org_unit_level, default_period} = endpoints.filter(ept => ept.id == "county__all_commodities")[0]
    let defaults = {default_pe: default_period, default_ou: default_org_unit, default_lvl: default_org_unit_level}
    let query = {pe, ou, level}
    try {
        let final_url = appendQueriesToUrl(url, query, defaults)
        let sc = await justFetch(final_url)
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

module.exports = {fetchOne, fetchAllSS, appendQueriesToUrl}