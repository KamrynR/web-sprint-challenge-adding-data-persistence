const db = require('../data/config');

function find() {
	return db('resources')
}

function findById(id) {
	return db('resources')
		.where('id', id)
		.first()
}

module.exports = {
	find,
    findById,
}