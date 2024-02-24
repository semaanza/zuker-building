import { footerSchema } from "./footer/footerSchema"
import { NavBarSchema } from "./navbar/navBarSchema"

export const GlobalSchema: any = {
	name: "global",
	label: "Global",
	path: "content/global",
	format: "json",
	templates: [NavBarSchema, footerSchema],
}
