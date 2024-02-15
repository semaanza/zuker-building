export const footerSchema = {
	name: "footer",
	label: "Footer",
	type: "object",
	fields: [
		{
			name: "footerLogo",
			label: "Footer Logo",
			type: "object",
			fields: [
				{
					name: "footerLogoImage",
					label: "Footer Logo Image",
					type: "image",
				},
				{
					name: "footerLogoHref",
					label: "Footer Logo Href",
					type: "string",
				},
			],
		},
		{
			name: "footerNavItems",
			label: "Footer Navigation Links",
			type: "object",
			list: true,
			ui: {
				itemProps: ({ linkName: label }: { linkName: string }) => ({ label }),
			},
			fields: [
				{
					name: "linkName",
					label: "Link Name",
					type: "string",
				},
				{
					name: "linkHref",
					label: "Link Href",
					type: "string",
				},
			],
		},
		{
			name: "footerSocialLinks",
			label: "Footer Social Links",
			type: "object",
			list: true,
			ui: {
				itemProps: ({ socialName: label }: { socialName: string }) => ({
					label,
				}),
			},
			fields: [
				{
					name: "socialName",
					label: "Social Name",
					type: "string",
				},
				{
					name: "socialHref",
					label: "Social Href",
					type: "string",
				},
				{
					name: "socialImage",
					label: "Social Image",
					type: "image",
				},
			],
		},
	],
}
