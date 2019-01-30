const { getProducts, getWomansGt } = require("../controllers/itemCtrl");

module.exports = app => {
	app.get("/api/clothes", getProducts);
	app.get("/api/womans-graphics", getWomansGt);
};
