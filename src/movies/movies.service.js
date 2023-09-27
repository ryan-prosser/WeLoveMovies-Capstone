const knex = require("../db/connection")

function list(isShowing) {
    if (isShowing === 'true') {
        return showing()
    }
    return listAll()
}

function listAll(){
  return knex("movies").select("*")
}

function showing() {
    return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .select("m.*")
    .groupBy("m.movie_id")
    .where({is_showing: true})
}

function read(movie_id) {
    return knex("movies").select("*").where({"movie_id": movie_id})
}

function moviesInTheaters(movie_id) {
    return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .join("theaters as t", "mt.theater_id", "t.theater_id")
    .select("t.*")
    .where({"mt.movie_id": movie_id})
}

function reviewsByMovie(movie_id) {
    return knex("reviews")
    .where({"movie_id": movie_id})
    .select("*")
}

function criticForReview(criticId) {
    return knex("critics")
    .where({"critic_id": criticId})
    .select("*")
}

module.exports = {
  list,
  listAll,
  showing,
  read,
  moviesInTheaters,
  reviewsByMovie,
  criticForReview
}