document
	.getElementById("downloadButton")
	.addEventListener("click", function () {
		var resumeUrl =
			"https://drive.google.com/file/d/10Dkoqb8G3lyDRDfIomENxI4HmFDk51oL/view?usp=drive_link"; // Replace with the actual file URL

		// Open the resume download link in a new tab
		window.open(resumeUrl, "_blank");
	});

// JavaScript to open Gmail on button click
document
	.getElementById("openGmailButton")
	.addEventListener("click", function () {
		var recipient = "shraddhamuley2@gmail.com"; // Your email address

		// Create the Gmail compose URL
		var gmailComposeUrl =
			"https://mail.google.com/mail/?view=cm&fs=1&to=" +
			encodeURIComponent(recipient);

		// Open the Gmail compose window in a new tab or window
		window.open(gmailComposeUrl, "_blank");
	});
