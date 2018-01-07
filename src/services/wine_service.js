import uuid from "uuid";

class MockWineService {

    getWine(id) {

        return this.getWines().then(wines => {
            return new Promise((resolve, reject) => {
                let wine = wines.find(p => p.id === id);
                if (wine) {
                    resolve(wine);
                } else {
                    reject('A wine with this ID does not exist');
                }}
            )
        });

    }

    addWine(wine) {

        return new Promise((resolve, reject) => {

            //check for duplicates

            //perform validation

            let new_wine = Object.assign({id: uuid.v1()}, wine);

            resolve(new_wine);

        });

    }

    getWines() {

        return new Promise((resolve, reject) => {

            let sorted_wines = wines.sort((wine1, wine2) =>
                wine1.name.localeCompare(wine2.name));

            if (sorted_wines) {
                resolve(sorted_wines);
            } else {
                reject('A list of wines could not be retrieved');
            }

        });

    }

}

module.exports = MockWineService;

const wines = [
    {
        id: '8cebc66a-f3a6-11e7-8c3f-9a214cf093ae',
        name: 'Malbec',
        producer: '5f0f2910-eee5-11e7-9429-25d42ac0091c',
        wine_type: 'Red',
        sparkling: false,
        grape_varieties: [
            'Malbec'
        ],
        country: 'Argentina',
        region: 'Mendoza'
    },
    {
        id: '8cebc66a-f3a6-11e7-8c3f-9a214cf056df',
        name: 'Merlot',
        producer: '5f0f2910-eee5-11e7-9429-25d42ac0091c',
        wine_type: 'Red',
        sparkling: false,
        grape_varieties: [
            'Merlot'
        ],
        country: 'South Africa',
        region: 'Mendoza'
    }
];
