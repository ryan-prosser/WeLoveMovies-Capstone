const router = require("express").Router({mergeParameters: true})
const controller = require("./theaters.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")



router.route("/").get(controller.list).all(methodNotAllowed)


module.exports = router