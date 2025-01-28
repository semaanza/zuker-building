export const recentProjectSchema: any = {
	name: "recentProject",
	label: "Recent Project",
	type: "object",
	fields: [
		{
			name: "heading",
			label: "Recent Project Heading",
			type: "string",
		},
		{
			name: "recentProjectDescription",
			label: "Recent Project Description",
			type: "string",
		},
		{
			name: "preImage",
			label: "Recent Pre Image",
			type: "image",
		},
		{
			name: "postImage",
			label: "Recent Post Image",
			type: "image",
		},
	],
}
