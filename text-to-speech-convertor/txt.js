function speak() {
	let text = document.getElementById("text").value;
	if (text !== "") {
		let pitch = document.getElementById("pitch").value;
		let speech = new SpeechSynthesisUtterance();
		speech.lang = "en-US";
		speech.text = text;
		speech.pitch = pitch;
		window.speechSynthesis.speak(speech);
	}
}

