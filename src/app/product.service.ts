export class ProductService {
    constructor() {
    }
    getProducts() {
        return [
            {
              name: 'One Plus 7',
              value: '70300'
            },
            {
              name: 'One Plus 7a',
              value: '74000'
            },
            {
              name: 'One Plus 7b',
              value: '90000'
            }
          ];
    }

    getProduct() {
      return {
        name: 'One Plus 7 Pro',
        numberOfOrders: 15036,
        rating: 4.9896,
        price: 42365,
        launchDate: new Date(2019, 5, 28)
      };
    }
}
