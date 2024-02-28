export const servicesIntroSchema: any = {
	name: "servicesIntro",
	label: "Services Intro",
	type: "object",
	fields: [
		{
			name: "heading",
			label: "Heading",
			type: "string",
		},
		{
			name: "services",
			label: "Services",
			type: "object",
			list: true,
			ui: {
				itemProps: ({ title: label }: { title: string }) => ({
					label,
				}),
			},
			fields: [
				{
					name: "title",
					label: "Title",
					type: "string",
				},
				{
					name: "image",
					label: "Image",
					type: "image",
				},
			],
		},
	],
}
