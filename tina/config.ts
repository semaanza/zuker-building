import { defineConfig, defineSchema } from "tinacms"
import { GlobalSchema } from "../src/layouts/globalSchema"
import { quickAboutSchema } from "../src/components/QuickAbout"

// Your hosting provider likely exposes this as an environment variable
const branch =
	process.env.GITHUB_BRANCH ||
	process.env.VERCEL_GIT_COMMIT_REF ||
	process.env.HEAD ||
	"master"

export default defineConfig({
	branch,
	clientId: process.env.PUBLIC_TINA_CLIENT_ID,
	token: process.env.TINA_TOKEN,

	build: {
		outputFolder: "admin",
		publicFolder: "public",
	},
	media: {
		tina: {
			mediaRoot: "",
			publicFolder: "public",
		},
	},
	// See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
	schema: defineSchema({
		collections: [
			{
				name: "post",
				label: "Posts",
				path: "content/posts",
				fields: [
					{
						type: "string",
						name: "title",
						label: "Title",
						isTitle: true,
						required: true,
					},
					{
						type: "rich-text",
						name: "body",
						label: "Body",
						isBody: true,
					},
				],
			},
			{
				name: "pages",
				label: "Pages",
				path: "content/pages",
				format: "json",
				fields: [
					{
						type: "string",
						name: "title",
						label: "Title",
					},
					{
						name: "blocks",
						label: "Blocks",
						type: "object",
						list: true,
						templates: [quickAboutSchema],
					},
				],
			},
			GlobalSchema,
		],
	}),
})
