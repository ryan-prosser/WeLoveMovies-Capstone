const service = require("./movies.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

async function list(req, res) {
    const data = await service.list(req.query.is_showing)
    res.json({data})
}

async function movieExists(req, res, next) {
    const {movieId} = req.params
    const movie = await service.read(movieId)
    if (movie.length) {
        res.locals.movie = movie
        return next()
    }
    return next({status:404, message: "Movie cannot be found."})
}

async function read(req, res) {
    const {movie} = res.locals
    res.json({data: movie[0]})
}

async function moviesInTheaters(req, res) {
    const {movieId} = req.params
    const theaters = await service.moviesInTheaters(movieId)
    res.json({data: theaters})
}

async function reviewsWithCritic(req, res) {
    const {movieId} = req.params
    const reviews = await service.reviewsByMovie(movieId)

    for (let review of reviews) {
        const critic = await service.criticForReview(review.critic_id)

        review["critic"] = critic[0]
    }

    res.json({data: reviews})
}


module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(movieExists), read],
  moviesInTheaters: [asyncErrorBoundary(movieExists), moviesInTheaters],
  reviewsWithCritic: [asyncErrorBoundary(movieExists), reviewsWithCritic]
}