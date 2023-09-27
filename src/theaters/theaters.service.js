const knex = require("../db/connection")
const mapProperties = require("../utils/map-properties")
const reduceProperties = require("../utils/reduce-properties")

function list() {
    return knex("theaters")
    .select("*")
}

function listMoviesByTheater(theaterId) {
	return knex("movies_theaters as mt")
		.join("movies as m", "m.movie_id", "mt.movie_id")
		.where({"theater_id": theaterId})
		.select("m.*", "mt.is_showing", "mt.theater_id");
}

module.exports = {
list,
listMoviesByTheater,
}