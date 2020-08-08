const express = require("express");

const emojis = require("./emojis");
const headlines = require("./top-headlines");

const router = express.Router();

router.get("/", (req, res) => {
	res.json({
		message: "API - 👋🌎🌍🌏",
	});
});

router.use("/emojis", emojis);
router.use("/headlines", headlines);

module.exports = router;
