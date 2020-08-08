const NewsApi = require("newsapi");

const newsApi = new NewsApi(process.env.NEWS_API_KEY);

exports.module = newsApi;
