//let endpoints = require('../../static/endpoints')
let {programs} = require('../../config/index')
let {justFetch, appendQueriesToUrl} = require('../../utils/index')

let fetchaccountability = async (ou,level,pe,prog) => {
    let endpoints = programs.find(prg => prg.id == prog).endpoints
    let {url, default_org_unit, default_org_unit_level, default_period} = endpoints.filter(ept => ept.id == "county__riskparameters")[0]
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

module.exports = {fetchaccountability}