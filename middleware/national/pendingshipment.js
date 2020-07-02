// let endpoints = require('../../static/endpoints')
let {programs} = require('../../config/index')
let {justFetch, appendQueriesToUrl} = require('../../utils/index')

let fetchpendingshipment = async (prog) => {
    let endpoints = programs.find(prg => prg.id == prog).endpoints
    let {url} = endpoints.filter(ept => ept.id == "national__pending_shipments")[0]
    try {
        let sc = await justFetch(url)
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

let updatependingshipment = async (postoptions,prog) => {
    let endpoints = programs.find(prg => prg.id == prog).endpoints
    let {url} = endpoints.filter(ept => ept.id == "national__pending_shipments")[0]
    let options = {}
    options.method = "PUT" //POST if not existing. Irrelevant for now
    options.body = postoptions.body
    try {
        let sc = await justFetch(url, options)
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

let creatependingshipment = async (postoptions,prog) => { //Likely unnecessary
    let endpoints = programs.find(prg => prg.id == prog).endpoints
    let {url} = endpoints.filter(ept => ept.id == "national__pending_shipments")[0]
    let options = {}
    options.method = "POST" //POST if not existing. Irrelevant for now
    options.body = postoptions.body
    try {
        let sc = await justFetch(url, options)
        return sc
    } catch (er) {
        return {error: true, ...er}
    }
}

module.exports = {fetchpendingshipment, creatependingshipment, updatependingshipment}