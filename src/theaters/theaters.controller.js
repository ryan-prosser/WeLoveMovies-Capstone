const service = require("./theaters.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

async function list(req, res) {
    const theaters = await service.list()

    for (let theater of theaters) {
        const movies = await service.listMoviesByTheater(theater.theater_id)

        theater["movies"] = movies
    }

    res.json({data: theaters})
}



module.exports = {
    list: asyncErrorBoundary(list),
}