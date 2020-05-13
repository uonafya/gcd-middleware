let endpoints = require('../static/endpoints')
let {justFetch, appendQueriesToUrl} = require('../utils/index')

let fetchDefaults = async () => {
    let date = new Date()
    let url = endpoints.filter(ept => ept.id == "all__user_details")[0].url
    try {
        let sc = await justFetch(url)
        sc.level = 0
        let def_yr = date.getFullYear()
        let def_mnth = date.getMonth() + 1
        if(def_mnth < 10){def_mnth = "0"+def_mnth}
        let def_prd = def_yr+""+def_mnth
        sc.period = def_prd
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

let fetchSubcounties = async (parent) => {
    let url = endpoints.filter(ept => ept.id == "all__subcounties_list")[0].url
    try {
		let sc = await justFetch(url)
		if(parent && parent != null && parent!=''){
			sc = sc.organisationUnits.filter(sc_=>sc_.parent.id==parent)
		}
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

let fetchWards = async (parent) => {
    let url = endpoints.filter(ept => ept.id == "all__wards_list")[0].url
    try {
        let sc = await justFetch(url)
		if(parent && parent != null && parent!=''){
			sc = sc.organisationUnits.filter(sc_=>sc_.parent.id==parent)
		}
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

let fetchFacilities = async (parent) => {
    let url = endpoints.filter(ept => ept.id == "all__facilities_list")[0].url
    try {
		let sc = await justFetch(url)
		if(parent && parent != null && parent!=''){
			sc = sc.organisationUnits.filter(sc_=>sc_.parent.id==parent)
		}
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

let fetchCUs = async (parent) => {
    let url = endpoints.filter(ept => ept.id == "all__cus_list")[0].url
    try {
		let sc = await justFetch(url)
		if(parent && parent != null && parent!=''){
			sc = sc.organisationUnits.filter(sc_=>sc_.parent.id==parent)
		}
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

let fetchMFLcodes = async (id) => {
    let url = endpoints.filter(ept => ept.id == "all__mfl_codes")[0].url
    try {
        let sc = await justFetch(url)
        if(id && id != null && id!=''){
          sc = sc.organisationUnits.filter(sc_=>sc_.id==id)[0]
        }
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

let fetchOrganisationUnit = async (id) => {
    try {
        let url = `${process.env.DHIS_BASE_API_URL}/organisationUnits/${id}.json`
        let sc = await justFetch(url)
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

let fetchMCFfacilities = async () => {
    let url = endpoints.filter(ept => ept.id == "all__mcf_orgunits")[0].url
    try {
        let sc = await justFetch(url)
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

let fetchExpectedReports = async (ou,pe) => {
    try {
        let {url, default_org_unit, default_period} = endpoints.filter(ept => ept.id == "all__expected_reports")[0]
        let query = {pe, ou}
        let defaults = {default_pe: default_period, default_ou: default_org_unit}
        let final_url = appendQueriesToUrl(url, query, defaults)
        let sc = await justFetch(final_url)
        return sc
        // let count = 0
        // count = parseInt(sc.rows[0][3]);
        // return count
    } catch (er) {
        return {error: true, ...er}
    }
}

module.exports = {fetchCounties, fetchSubcounties, fetchWards, fetchFacilities, fetchMFLcodes, fetchCUs, fetchCommodities, fetchDefaults, fetchOrganisationUnit, fetchMCFfacilities, fetchExpectedReports}
