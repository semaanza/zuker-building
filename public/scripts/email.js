;(function () {
	// https://dashboard.emailjs.com/admin/account
	emailjs.init("dz8PeFB6rYJcagdZH")
	console.log("EmailJS initialized with public key")
})()

window.onload = function () {
	document
		.getElementById("contact-form")
		.addEventListener("submit", function (event) {
			event.preventDefault()
			console.log("Form submission triggered")
			// these IDs from the previous steps
			emailjs.sendForm("service_mbztsar", "template_tx7chm6", this).then(
				(result) => {
					console.log("SUCCESS!", result.text)
					const formStatus = document.getElementById("form-status")
					formStatus.textContent = "Message sent successfully!"
					formStatus.classList.add(
						"bg-green-500",
						"text-white",
						"p-4",
						"rounded-lg",
						"shadow-lg",
					)
					setTimeout(() => {
						formStatus.textContent = ""
						formStatus.classList.remove(
							"bg-green-500",
							"text-white",
							"p-4",
							"rounded-lg",
							"shadow-lg",
						)
					}, 3000)
					this.reset()
				},
				(error) => {
					console.log("FAILED...", error)
					const formStatus = document.getElementById("form-status")
					formStatus.textContent = "Failed to send message, please try again."
					formStatus.classList.add(
						"bg-red-500",
						"text-white",
						"p-4",
						"rounded-lg",
						"shadow-lg",
					)
					setTimeout(() => {
						formStatus.textContent = ""
						formStatus.classList.remove(
							"bg-red-500",
							"text-white",
							"p-4",
							"rounded-lg",
							"shadow-lg",
						)
					}, 3000)
				},
			)
		})
}
