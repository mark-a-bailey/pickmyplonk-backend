import uuid from "uuid";
import AWS from "aws-sdk";

//todo: is this required?
AWS.config.update({ region: "eu-west-2" });

export function main(event, context, callback) {

    const response_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    };

    const response = {
        statusCode: 200,
        headers: response_headers,
        body: JSON.stringify(get_producer_list())
    };

    callback(null, response);
}

function get_producer_list() {

    let producer_names = [
        'Wolfblass',
        'Trivento',
        'Brancott Estate',
        'Hardys',
        'Barefoot',
        'Blossom Hill',
        'Lambrini',
        'Blue Nun',
        'Mateus',
        'Yellow Tail',
        'Macaron',
        'Cristal',
        'Camel Valley',
        'Oxney',
        'Giffords Hall',
        'Denbies',
        'Lyme Bay',
        'Halfpenny Green',
        'Sixteen Ridges'
    ];

    return producer_names
        .sort()
        .map(function (name) {
            let producer_uuid = uuid.v1();
            return {uuid: producer_uuid, name: name};
        });

}