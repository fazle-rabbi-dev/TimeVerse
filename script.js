// Clock
function updateClock() {
	const now = new Date();
	const timeStr = now.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	});
	document.getElementById("clock").textContent = timeStr;
}
setInterval(updateClock, 1000);
updateClock();

function updateDate() {
	const options = { weekday: "long", month: "long", day: "numeric", year: "numeric" };
	const date = new Date();
	const dateString = date.toLocaleDateString("en-US", options);
	document.getElementById("date").innerHTML = dateString;
}
updateDate();

// Quote
const quotes = [
	"✨ Stay focused, stay humble.",
	"🔥 Code. Sleep. Repeat.",
	"💡 Simplicity is the ultimate sophistication.",
	"🚀 Do something today that your future self will thank you for.",
];
document.getElementById("quote").textContent = quotes[Math.floor(Math.random() * quotes.length)];

// Background images
const images = ["assets/bg1.jpg", "assets/bg2.jpg", "assets/bg3.jpeg"];

// Load saved image or set default
function loadSavedBg() {
	const savedImg = localStorage.getItem("selectedBg");
	if (savedImg && images.includes(savedImg)) {
		document.body.style.backgroundImage = `url(${savedImg})`;
	} else {
		document.body.style.backgroundImage = `url(${images[0]})`; // fallback default
	}
}

// Change and save new background
function setRandomBg() {
	const selected = images[Math.floor(Math.random() * images.length)];
	document.body.style.backgroundImage = `url(${selected})`;
	localStorage.setItem("selectedBg", selected);
}

document.getElementById("change-bg").addEventListener("click", setRandomBg);
// loadSavedBg(); // ✅ Load saved image on first load
