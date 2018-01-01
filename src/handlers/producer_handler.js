import uuid from "uuid";
import AWS from "aws-sdk";

const MockProducerService = require('../services/producer_service.js');
const producerService = new MockProducerService();

//todo: is this required?
AWS.config.update({ region: "eu-west-2" });

export function getProducers(event, context, callback) {

    const producers = producerService.getProducers();

    callback(null, success(JSON.stringify(producers)));

}

export function getProducer(event, context, callback) {

    try {

        const producer_id = event.pathParameters.id;

        const producer = producerService.getProducer(producer_id);

        callback(null, success(JSON.stringify(producer)));

    } catch (e) {

        callback(null, failure(e));

    }

}

export function addProducer(event, context, callback) {

    try {

        const data = JSON.parse(event.body);

        console.log(data);

        const newProducer = producerService.addProducer(data.name);

        console.log(newProducer);

        callback(null, success(JSON.stringify(newProducer)));

    } catch (e) {

        callback(null, failure(e));

    }

}

function success(body) {

    return buildResponse(200, body);

}

function failure(body) {

    return buildResponse(500, body);

}

function buildResponse(statusCode, body) {

    const responseHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    };

    return {
        statusCode: statusCode,
        headers: responseHeaders,
        body: body
    };

}