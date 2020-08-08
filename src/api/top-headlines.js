const express = require("express");
const NewsApi = require("newsapi");

const newsApi = new NewsApi(process.env.NEWS_API_KEY);

const router = express.Router();

const options = {
	country: "in",
	pageSize: 100,
};

router.get("/", async (req, res, next) => {
	let data = [];
	try {
		await newsApi.v2
			.topHeadlines(options)
			.then(resp => (data = resp.articles));
		res.json({
			success: true,
			data: data,
		});
	} catch (error) {
		next(error);
	}
});

router.post("/", async (req, res, next) => {
	let data = [];
	try {
		await newsApi.v2
			.topHeadlines({
				...options,
				...req.body,
			})
			.then(resp => (data = resp.articles));
		res.json({
			success: true,
			data: data,
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;
