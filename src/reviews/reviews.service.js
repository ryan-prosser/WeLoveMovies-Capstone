const knex = require("../db/connection")


function read(reviewId) {
    return knex("reviews")
    .where({"review_id": reviewId})
    .select("*")
}

function getCritic(criticId) {
    return knex("critics")
    .select("organization_name", "preferred_name", "surname")
    .where({"critic_id": criticId})
    .first()
}

function destroy(reviewId) {
    return knex("reviews")
    .where({"review_id": reviewId})
    .del()
}

function update(updatedReview, reviewId) {
    return knex("reviews")
    .where({"review_id": reviewId})
    .update(updatedReview, ["*"])
    .then((data) => data[0])

}



module.exports = {
destroy,
read,
update,
getCritic,
}