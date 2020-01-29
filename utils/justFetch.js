let DHIS_USERNAME = process.env.DHIS_USERNAME
let DHIS_PASSWORD = process.env.DHIS_PASSWORD

const justFetch = async (endpoint) => {
    if(endpoint == null || endpoint.length < 4){return {error: true, type: 'url', message: 'Invalid endpoint URL'}}

    let req_hd = {}
    let headers = {}

    let stri = DHIS_USERNAME+":"+DHIS_PASSWORD
    headers.authorization = "Basic YmJldHQ6QmVuemVyQHYy"
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

module.exports = justFetch