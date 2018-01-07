import uuid from "uuid";
import AWS from "aws-sdk";

const httpUtils = require('./http_utils.js');
const MockWineService = require('../services/wine_service.js');

const wineService = new MockWineService();

export function getWine(event, context, callback) {

    const wine_id = event.pathParameters.id;

    wineService.getWine(wine_id)
        .then(wine => callback(null, httpUtils.success(wine)))
        .catch((reason) => callback(null, httpUtils.failure(reason)));

}

export function getWines(event, context, callback) {

    wineService.getWines()
        .then(wines => callback(null, httpUtils.success(wines)))
        .catch(reason => callback(null, httpUtils.failure(reason)));

}

export function addWine(event, context, callback) {

    let wine_definition = JSON.parse(event.body);

    wineService.addWine(wine_definition)
        .then(wine => callback(null, httpUtils.success(wine)))
        .catch(wine => callback(null, httpUtils.failure(reason)));

}
