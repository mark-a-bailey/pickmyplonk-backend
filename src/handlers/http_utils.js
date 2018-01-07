export function success(body) {

    return buildResponse(200, body);

}

export function failure(body) {

    return buildResponse(500, body);

}

export function buildResponse(statusCode, body) {

    const responseHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    };

    return {
        statusCode: statusCode,
        headers: responseHeaders,
        body: JSON.stringify(body)
    };

}
