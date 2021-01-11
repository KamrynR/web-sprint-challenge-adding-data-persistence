const db = require('../data/config');

function find() {
	return db('tasks')
}

function findById(id) {
	return db('tasks')
		.where('id', id)
		.first()
}

module.exports = {
	find,
    findById,
}