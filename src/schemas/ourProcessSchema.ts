export const ourProcessSchema = {
	name: "ourProcess",
	label: "Our Process Cards",
	type: "object",
	fields: [
		{
			name: "cards",
			label: "Cards",
			type: "object",
			list: true,
			ui: {
				itemProps: ({ name: label }: { name: string }) => ({
					label,
				}),
			},
			fields: [
				{
					name: "number",
					label: "Step Number",
					type: "number",
				},
				{
					name: "title",
					label: "Card Title",
					type: "string",
				},
				{
					name: "description",
					label: "Description",
					type: "string",
				},
				{
					name: "image",
					label: "Image",
					type: "string",
				},
			],
		},
	],
}
