const db = require('../data/config');

function find() {
	return db('projects')
}

function findById(id) {
	return db('projects')
		.where('id', id)
		.first()
}

function getTasks(id) {
    return db('tasks as t')
        .leftJoin('projects as p', 'p.id', 't.project_id')
        .where('t.project_id', id)
        .select('p.name as project', 't.id as task_id', 't.task')
}

function getResources(id) {
    return db('project_resource as pr')
        .innerJoin('projects as p', 'pr.project_id', 'p.id')
        .innerJoin('resources as r', 'pr.resource_id', 'r.id')
        .where('p.id', id)
        .select('r.id', 'p.name', 'r.resource_name')
}

module.exports = {
	find,
    findById,
    getTasks,
    getResources,
}