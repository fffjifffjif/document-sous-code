document.addEventListener("DOMContentLoaded", () => {
	const AnimationHeader = document.querySelector(".header");
	const AnimationInput = document.getElementById("open-hbg");
	const AnimationInputLabel = document.querySelector(".open-hbg-label");

	AnimationInput.disabled = false; // Enable the input by default

	AnimationHeader.addEventListener("transitionstart", () => {
		console.log("Animation started");
		AnimationInput.disabled = true;
		AnimationInputLabel.classList.remove("notouch");

		// アニメーション終了後に解除（固定1.1秒後）
		setTimeout(() => {
			AnimationInput.disabled = false;
			AnimationInputLabel.classList.add("notouch");
			setTimeout(() => {
				AnimationInputLabel.classList.remove("notouch");
			});
		}, 1100); // transition 1s + delay 0.1s に対応
	});
});
