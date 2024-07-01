export function addBreak(paragraph: string) {
	let periodCount = 0
	let modifiedParagraph = ""

	for (let i = 0; i < paragraph.length; i++) {
		modifiedParagraph += paragraph[i]
		if (paragraph[i] === ".") {
			periodCount++
			if (periodCount % 5 === 0) {
				// Check if the period is the 5th, 10th, 15th, etc.
				modifiedParagraph += "<br><br>" // Add two breaks after the period for a blank line space
			}
		}
	}

	return modifiedParagraph
}
