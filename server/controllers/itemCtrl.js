module.exports = {
	getWomansGt(req, res) {
		const db = req.app.get("db");
		db.getWomansGt()
			.then(products => res.status(200).json(products))
			.catch(err => res.status(500).send({ getLaptopERROR: err }));
	},
	getProducts(req, res) {
		const db = req.app.get("db");
		db.getProducts()
			.then(products => res.status(200).json(products))
			.catch(console.log);
	}
};
