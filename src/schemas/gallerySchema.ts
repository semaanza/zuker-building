export const gallerySchema: object = {
	name: "gallery",
	label: "Gallery",
	type: "object",
	list: true,
	fields: [
		{
			name: "images",
			label: "Images",
			type: "object",
			list: true,
			ui: {
				itemProps: ({ imageTitle: label }: { imageTitle: string }) => ({
					label,
				}),
			},
			fields: [
				{
					name: "imageTitle",
					label: "Image Title",
					type: "string",
				},
				{
					name: "image",
					label: "Image",
					type: "image",
				},
				{
					name: "imageDescription",
					label: "Image Description",
					type: "string",
				},
			],
		},
	],
}
