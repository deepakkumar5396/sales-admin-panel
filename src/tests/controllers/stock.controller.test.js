const request = require('supertest');
const app = require('../../app');
const { Wholesaler, Retailer, Stock } = require('../../server/models');

describe('Stock Controller', () => {
  let wholesaler;
  let retailer;
  let stock;

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

    // Create a stock entry
    stock = await Stock.create({
      wholesaler_id: wholesaler.id,
      retailer_id: retailer.id,
      stock_amount: 1000,
      date: '2021-01-01',
    });
  });

  afterAll(async () => {
    await Stock.destroy({ where: {} });
    await Wholesaler.destroy({ where: {} });
    await Retailer.destroy({ where: {} });
  });

  it('should get total monthly turnover for each wholesaler for the year', async () => {
    const response = await request(app)
      .get(`/api/stocks/turnover/${wholesaler.id}`)
      .expect(200);

    expect(response.body).toHaveProperty('wholesaler_id', wholesaler.id);
    expect(response.body.monthly_turnover).toBeDefined();
  });

  it('should get max turnover for each wholesaler from a single retailer', async () => {
    const response = await request(app)
      .get(`/api/stocks/max-turnover/${wholesaler.id}`)
      .expect(200);

    expect(response.body).toHaveProperty('wholesaler_id', wholesaler.id);
    expect(response.body.max_turnover).toBeGreaterThan(0);
  });
});
