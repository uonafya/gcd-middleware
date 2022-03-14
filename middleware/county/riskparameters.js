//let endpoints = require('../../static/endpoints')
let {programs} = require('../../config/index')
let {justFetch, appendQueriesToUrl} = require('../../utils/index')

let fetchriskparameters = async (ou,level,pe,prog) => {
    let endpoints = programs.find(prg => prg.id == prog).endpoints
    let {url, default_org_unit, default_org_unit_level, default_period} = endpoints.filter(ept => ept.id == "county__risk_parameters")[0]
    let defaults = {default_pe: default_period, default_ou: default_org_unit, default_lvl: default_org_unit_level}
    let query = {pe, ou, level}
    try {
        console.log("----------->>> url "+url);
        console.log("----------->>> query"+ query);
        console.log("-------->>> defaults"+defaults);
        let final_url = appendQueriesToUrl(url, query, defaults)
        let sc = await justFetch(final_url)
        console.log("---------->>> "+final_url);
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

module.exports = {fetchriskparameters}