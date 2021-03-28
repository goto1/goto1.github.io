const path = require("path");

require("dotenv").config({
	path:
		process.env.ELEVENTY_ENV !== "production"
			? path.resolve(process.cwd(), ".env")
			: path.resolve(process.cwd(), ".env.prod"),
});

const { ELEVENTY_ENV } = process.env;

module.exports = {
	title: "Tom Goralczyk",
	description: "Tom Goralczyk's personal website.",
	author: "Tom Goralczyk",
	url: "https://goto1.dev",
	meta_data: {
		twitter: "@goto135",
		// default_social_image: "",
	},
	env: ELEVENTY_ENV === "production",
};
