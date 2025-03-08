const request = require('supertest');
const app = require('../../app');
const { Wholesaler, Retailer } = require('../../server/models');

describe('Wholesaler Controller', () => {
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

  it('should get wholesaler with associated retailers', async () => {
    const response = await request(app)
      .get(`/api/wholesalers/${wholesaler.id}`)
      .expect(200);

    expect(response.body).toHaveProperty('id', wholesaler.id);
    expect(response.body.retailers).toBeInstanceOf(Array);
    expect(response.body.retailers[0].id).toBe(retailer.id);
  });
});
