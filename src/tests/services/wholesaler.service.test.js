const { Wholesaler, Retailer } = require('../../server/models');
const wholesalerService = require('../../server/services/wholesaler.service');

describe('Wholesaler Service', () => {
  let wholesaler;
  let retailer;

  beforeAll(async () => {
    wholesaler = await Wholesaler.create({
      name: 'Wholesaler Test',
      mobile_number: '9876543210',
    });

    retailer = await Retailer.create({
      name: 'Retailer Test',
      mobile_number: '9123456789',
    });

    // Establish a relationship between wholesaler and retailer
    await wholesaler.addRetailer(retailer);
  });

  afterAll(async () => {
    await Wholesaler.destroy({ where: {} });
    await Retailer.destroy({ where: {} });
  });

  it('should fetch wholesaler with retailers', async () => {
    const result = await wholesalerService.getWholesalerWithRetailers(wholesaler.id);
    expect(result).toHaveProperty('id', wholesaler.id);
    expect(result.retailers).toBeInstanceOf(Array);
  });
});
