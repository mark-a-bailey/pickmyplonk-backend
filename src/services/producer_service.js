import uuid from "uuid";

class MockProducerService {

    getProducers() {

        return producers.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });

    }

    getProducer(id) {

        const producer = this.getProducers()
            .find(p => p.id === id);

        if (!producer) {

            throw "A producer with this ID was not found";

        } else {

            return producer;

        }

    }

    addProducer(producer_name) {

        if (!producer_name) {

            throw "The requested producer name is not valid";

        } else if (this.producerExists(producer_name)) {

            throw "A producer with this name already exists";

        } else {

            return this.buildNewProducer(producer_name);

        }

    }

    producerExists(producer_name) {

        return this.getProducers()
            .some(producer => producer.name === producer_name);

    }

    buildNewProducer(producer_name) {

        const id = uuid.v1();

        return this.buildProducer(id, producer_name);

    }

    buildProducer(id, name) {

        return {
            id: id,
            name: name
        };

    }

}

module.exports = MockProducerService;

const producers = [
    {
        id: '5f0f2900-eee5-11e7-9429-25d42ac0091c',
        name: 'Barefoot'
    },
    {
        id: '5f0f2901-eee5-11e7-9429-25d42ac0091c',
        name: 'Blossom Hill'
    },
    {
        id: '5f0f2902-eee5-11e7-9429-25d42ac0091c',
        name: 'Blue Nun'
    },
    {
        id: '5f0f2903-eee5-11e7-9429-25d42ac0091c',
        name: 'Brancott Estate'
    },
    {
        id: '5f0f2904-eee5-11e7-9429-25d42ac0091c',
        name: 'Camel Valley'
    },
    {
        id: '5f0f2905-eee5-11e7-9429-25d42ac0091c',
        name: 'Cristal'
    },
    {
        id: '5f0f2906-eee5-11e7-9429-25d42ac0091c',
        name: 'Denbies'
    },
    {
        id: '5f0f2907-eee5-11e7-9429-25d42ac0091c',
        name: 'Giffords Hall'
    },
    {
        id: '5f0f2908-eee5-11e7-9429-25d42ac0091c',
        name: 'Halfpenny Green'
    },
    {
        id: '5f0f2909-eee5-11e7-9429-25d42ac0091c',
        name: 'Hardys'
    },
    {
        id: '5f0f290a-eee5-11e7-9429-25d42ac0091c',
        name: 'Lambrini'
    },
    {
        id: '5f0f290b-eee5-11e7-9429-25d42ac0091c',
        name: 'Lyme Bay'
    },
    {
        id: '5f0f290c-eee5-11e7-9429-25d42ac0091c',
        name: 'Macaron'
    },
    {
        id: '5f0f290d-eee5-11e7-9429-25d42ac0091c',
        name: 'Mateus'
    },
    {
        id: '5f0f290e-eee5-11e7-9429-25d42ac0091c',
        name: 'Oxney'
    },
    {
        id: '5f0f290f-eee5-11e7-9429-25d42ac0091c',
        name: 'Sixteen Ridges'
    },
    {
        id: '5f0f2910-eee5-11e7-9429-25d42ac0091c',
        name: 'Trivento'
    },
    {
        id: '5f0f2911-eee5-11e7-9429-25d42ac0091c',
        name: 'Wolfblass'
    },
    {
        id: '5f0f2912-eee5-11e7-9429-25d42ac0091c',
        name: 'Yellow Tail'
    }
];