export class TariffListService {
    getTariffList()
    {
        return [
            {
                id:1,
                name:'Tariff',
                price: '123456 euro',
                downloadSpeed: '12 mbps',
                uploadSpeed:'25 mbps',
                benefits:[
                    'benefits',
                    'benefit 2',
                    'benefit 3'
                ]
            },
            {
                id:2,
                name:'Tariff',
                price: '123456 euro',
                downloadSpeed: '12 mbps',
                uploadSpeed:'25 mbps',
                benefits:[
                    'benefits',
                    'benefit 2',
                    'benefit 3'
                ]
            }
        ]
    }

}