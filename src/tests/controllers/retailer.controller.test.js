const request = require('supertest');
const app = require('../../app');
const { Wholesaler, Retailer } = require('../../server/models');

describe('Retailer Controller', () => {
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

  it('should get retailer associated with a single wholesaler', async () => {
    const response = await request(app)
      .get(`/api/retailers/${retailer.id}`)
      .expect(200);

    expect(response.body).toHaveProperty('id', retailer.id);
    expect(response.body.wholesalers).toBeInstanceOf(Array);
    expect(response.body.wholesalers[0].id).toBe(wholesaler.id);
  });
});
