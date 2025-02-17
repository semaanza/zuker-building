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
					alert("Message sent successfully!")
				},
				(error) => {
					console.log("FAILED...", error)
					alert("Failed to send message, please try again.")
				},
			)
		})
}
