
window.addEventListener("resize", () => { SetupCanvas() });
SetupCanvas();

function SetupCanvas() {
	// Set up the canvas
	const canvas : HTMLCanvasElement | null = document.getElementById("main-canvas") as HTMLCanvasElement;
	
	if(!canvas) {
		console.log("Could not find canvas");
		return;
	}
	
	canvas.style.width = `${window.innerWidth}px`;
	canvas.style.height = `${window.innerHeight}px`;
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}
