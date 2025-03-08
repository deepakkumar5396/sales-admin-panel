const { sequelize, Wholesaler, Retailer } =
  require("../../server/models").default;
const retailerService = require("../../server/services/retailer.service");

beforeAll(async () => {
  await sequelize.sync({ force: true }); // Sync the database
});

describe("Retailer Service", () => {
  let wholesaler;
  let retailer;

  beforeAll(async () => {
    wholesaler = await Wholesaler.create({
      name: "Wholesaler Test",
      mobile_number: "9876543210",
    });

    retailer = await Retailer.create({
      name: "Retailer Test",
      mobile_number: "9123456789",
    });

    // Establish a relationship between wholesaler and retailer
    await wholesaler.addRetailer(retailer);
  });

  afterAll(async () => {
    await Wholesaler.destroy({ where: {} });
    await Retailer.destroy({ where: {} });
  });

  it("should fetch retailer with wholesalers", async () => {
    const result = await retailerService.getRetailerWithWholesalers(
      retailer.id
    );
    expect(result).toHaveProperty("id", retailer.id);
    expect(result.wholesalers).toBeInstanceOf(Array);
  });
});
