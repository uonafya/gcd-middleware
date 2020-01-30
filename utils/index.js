let DHIS_USERNAME = process.env.DHIS_USERNAME
let DHIS_PASSWORD = process.env.DHIS_PASSWORD

let justFetch = async (endpoint) => {
    endpoint+="&displayProperty=NAME&outputIdScheme=UID"
    if(endpoint == null || endpoint.length < 4){return {error: true, type: 'url', message: 'Invalid endpoint URL'}}

    let req_hd = {}
    let headers = {}

    headers.authorization = "Basic "+Buffer.from(DHIS_USERNAME+":"+DHIS_PASSWORD).toString('base64')
    req_hd.headers = headers
    req_hd.method = "GET"
    
    try {
        let result = await fetch(endpoint, req_hd)
        let result_json = await result.json()
        return result_json
    } catch (err) {
        return {error: true, ...err}
    }
}

let appendQueriesToUrl = (url, query, defaults) => {
    let {pe, ou, level} = query
    let {default_pe, default_ou, default_lvl} = defaults

    let query_append = ``
    if(pe != null && pe != ''){query_append+=`&dimension=pe:${pe}`}else{query_append+=`&dimension=pe:${default_pe}`}
    if(ou != null && ou != ''){query_append+=`&dimension=ou:${ou}`}else{query_append+=`&dimension=ou:${default_ou}`}
    if(level != null && level != '' && level != 0){query_append+=`;LEVEL-${level}` } else{ if(default_lvl != null && default_lvl != ''){query_append+=`;LEVEL-${default_lvl}`} }

    url+=query_append
    return url
}
module.exports = {justFetch, appendQueriesToUrl}