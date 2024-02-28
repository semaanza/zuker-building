export const testimonialsSchema = {
	name: "testimonials",
	label: "Testimonials",
	type: "object",
	fields: [
		{
			name: "heading",
			label: "Heading",
			type: "string",
		},
		{
			name: "testimonials",
			label: "Testimonials",
			type: "object",
			list: true,
			ui: {
				itemProps: ({ name: label }: { name: string }) => ({
					label,
				}),
			},
			fields: [
				{
					name: "name",
					label: "Name",
					type: "string",
				},
				{
					name: "quote",
					label: "Quote",
					type: "string",
				},
			],
		},
	],
}
