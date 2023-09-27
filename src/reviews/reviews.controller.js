const service = require("./reviews.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")


async function reviewExists(req, res, next) {
    const {reviewId} = req.params;
    const review = await service.read(reviewId)
    if (review.length) {
        res.locals.reviews = review
        next()
    } else {
        next({status: 404, message: "Review cannot be found"})
    }
}


async function destroy(req, res) {
    const {reviewId} = req.params
    const data = await service.destroy(reviewId)
    res.sendStatus(204)
}

async function update(req, res) {
    const {reviewId} = req.params
    const updatedReview = {
        ...res.locals.review,
        ...req.body.data,
    }
    const data = await service.update(updatedReview, reviewId)
    const newReview = await service.read(reviewId)
    newReview[0].critic = await service.getCritic(newReview[0].critic_id)
    res.json({data: newReview[0]})
}




module.exports = {
    destroy: [asyncErrorBoundary(reviewExists), destroy],
    update: [asyncErrorBoundary(reviewExists), update],
}