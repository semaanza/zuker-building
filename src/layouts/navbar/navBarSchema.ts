export const NavBarSchema = {
	name: "navbar",
	label: "Navbar",
	type: "object",
	fields: [
		{
			name: "logo",
			label: "Logo",
			type: "object",
			fields: [
				{
					name: "logoImage",
					label: "Logo Image",
					type: "image",
				},
				{
					name: "logoHref",
					label: "Logo Href",
					type: "string",
				},
			],
		},
		{
			name: "navItems",
			label: "Navigation Links",
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
			name: "services",
			label: "Services",
			type: "object",
			fields: [
				{
					name: "servicesTitle",
					label: "Services Title",
					type: "string",
				},
				{
					name: "servicesItems",
					label: "Services Items",
					type: "object",
					list: true,
					ui: {
						itemProps: ({ serviceName: label }: { serviceName: string }) => ({
							label,
						}),
					},
					fields: [
						{
							name: "serviceName",
							label: "Service Name",
							type: "string",
						},
						{
							name: "serviceHref",
							label: "Service Href",
							type: "string",
						},
					],
				},
			],
		},
	],
}
