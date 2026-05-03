function getWindowAspect() {
	const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	if (w / h >= 30 / 31) {
		return true;
	}
}

function getScrollbarWidth() {
	const div = document.createElement("div");
	div.style.width = "100px";
	div.style.height = "100px";
	div.style.overflow = "scroll";
	div.style.position = "absolute";
	div.style.top = "-9999px";
	document.body.appendChild(div);

	const scrollbarWidth = div.offsetWidth - div.clientWidth;

	document.body.removeChild(div);
	return scrollbarWidth;
}

//ここから自分で書いたファンクション
function circleSize(w, h, element, box_h) {
	const r = document.getElementById("circle").clientHeight;
	const x = ((r / 2) ** 2 - (h / 2 - box_h) ** 2) ** (1 / 2) - r / 4;
	const y = box_h;
	element.style.top = `${y}px`;
	element.style.left = `${x}px`;
	return [x, y];
}

function stealthCircleSize(w, h, element, box_h) {
	const r = document.getElementById("circle").clientHeight;
	const x = ((r / 2) ** 2 - (h / 2 - box_h) ** 2) ** (1 / 2) - r / 4;
	const y = box_h;
	return [x, y];
}

let circle_position = [];
function setFirstDotsOnCircle() {
	circle_position = [];
	const dots = document.getElementsByClassName("circle-dot");
	const dot_length = dots.length;
	const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	for (let i = 0; i < dot_length; i++) {
		circle_position.push(circleSize(w, h, dots[i], (h * (i + 1)) / (dot_length + 1)));
	}
}

function setDotsOnCircle() {
	let old_circle_position = circle_position;
	circle_position = [];
	const dots = document.getElementsByClassName("circle-dot");
	const dot_length = dots.length;
	const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	for (let i = 0; i < dot_length; i++) {
		setAnimationDot(dots[i], old_circle_position[i][1], (h * (i + 1)) / (dot_length + 1), 200);
		circle_position.push(circleSize(w, h, dots[i], (h * (i + 1)) / (dot_length + 1)));
	}
}

function setDotsOpenCircle(index) {
	if (index != 2) {
		if (index != 1) {
			let old_circle_position = circle_position;
			circle_position = [];
			const dots = document.getElementsByClassName("circle-dot");
			const dot_length = dots.length;
			const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

			for (let i = 0; i < index + 1; i++) {
				setAnimationDot(dots[i], old_circle_position[i][1], 0.1 * h + 0.12 * h * i, 200);
				circle_position.push(stealthCircleSize(w, h, dots[i], 0.1 * h + 0.12 * h * i));
				console.log(circle_position);
			}

			for (let i = index + 1; i < dot_length; i++) {
				setAnimationDot(
					dots[i],
					old_circle_position[i][1],
					h - 0.1 * h - 0.12 * h * (dot_length - i - 1),
					200,
				);
				circle_position.push(
					stealthCircleSize(w, h, dots[i], h - 0.1 * h - 0.12 * h * (dot_length - i - 1)),
				);
			}
		}
		if (index == 1) {
			let old_circle_position = circle_position;
			circle_position = [];
			const dots = document.getElementsByClassName("circle-dot");
			const dot_length = dots.length;
			const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

			for (let i = 0; i < index + 1; i++) {
				setAnimationDot(dots[i], old_circle_position[i][1], 0.08 * h + 0.08 * h * i, 200);
				circle_position.push(stealthCircleSize(w, h, dots[i], 0.08 * h + 0.08 * h * i));
				console.log(circle_position);
			}

			for (let i = index + 1; i < dot_length; i++) {
				setAnimationDot(
					dots[i],
					old_circle_position[i][1],
					h - 0.08 * h - 0.08 * h * (dot_length - i - 1),
					200,
				);
				circle_position.push(
					stealthCircleSize(w, h, dots[i], h - 0.08 * h - 0.08 * h * (dot_length - i - 1)),
				);
			}
		}
	}
}

function setMenuElements() {
	//実はこのコード意味ないよ！
	const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	const menu_elements = document.getElementsByClassName("circle-list");
	const menu_elements_length = menu_elements.length;
	for (let i = 0; i < menu_elements_length; i++) {
		menu_elements[i].style.left = `${(w * 8) / 20 - circle_position[i][0]}px`;
	}
}

function setOpenList() {
	const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

let movedot_h = 500;
const delay = 1;
const setMovingDot = () => {
	const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	const moving_dot = document.getElementsByClassName("moving-circle-dot");
	circleSize(w, h, moving_dot[0], movedot_h);
	if (movedot_h > h) {
		movedot_h = 0;
	}
	movedot_h = movedot_h + delay;
};

function setAnimationDot(element, startPosition, finishPosition, time) {
	let dot_position = [];
	const element_label = element.querySelector(".circle-list");
	const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	dot_position.push(circleSize(w, h, element, startPosition));
	element_label.style.left = `${(w * 8) / 20 - dot_position[0][0]}px`;
	if (Math.abs(startPosition - finishPosition) < 1) {
		circleSize(w, h, element, finishPosition);
		return;
	} else {
		startPosition += (finishPosition - startPosition) / (time / 10);
		setTimeout(() => {
			setAnimationDot(element, startPosition, finishPosition, time);
		}, 10);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	if (getWindowAspect()) {
		setFirstDotsOnCircle();
		setMenuElements();

		let radioOff = false;
		const circle_header = document.getElementById("open-circle-header");
		const hbg_input = document.getElementById("open-hbg");
		const html = document.documentElement;
		const hbg = document.querySelector(".open-hbg-label");
		const circle_list_input = document.querySelectorAll(".circle_list_input");
		const circle_list_label = document.querySelectorAll(".circle_list_label");

		hbg_input.addEventListener("change", () => {
			setDotsOnCircle();
			if (hbg_input.checked) {
				circle_header.style.top = "0";
				html.style.overflow = "hidden";
				html.style.paddingRight = getScrollbarWidth() + "px";
				html.style.backgroundColor = "#4994c6";
			} else {
				html.style.overflow = "auto";
				hbg.style.right = "0";
				html.style.paddingRight = "0";
				html.style.backgroundColor = "#fff";
				circle_list_input.forEach((r) => (r.checked = false));
				circle_header.style.top = "-1000px";
			}
		});

		console.log(circle_list_input);

		circle_list_input.forEach(function (input, i) {
			circle_list_label[i].addEventListener("click", (e) => {
				// 押した瞬間に、もし既に選択されていたら
				if (circle_list_input[i].checked && radioOff != true) {
					e.preventDefault();
					circle_list_input[i].checked = false;
					setDotsOnCircle();

					radioOff = true;
					radios.forEach((r) => (r.disabled = true));
					setTimeout(() => {
						radioOff = false;
						radios.forEach((r) => (r.disabled = false));
					}, 2300);
				}
			});
		});

		circle_list_input.forEach(function (element, i) {
			circle_list_input[i].addEventListener("change", () => {
				if (element.checked === true) {
					setDotsOpenCircle(i);
				}
			});
		});

		const radios = document.querySelectorAll('input[type="radio"]');

		radios.forEach((radio) => {
			radio.addEventListener("click", () => {
				radioOff = true;
				radios.forEach((r) => (r.disabled = true));
				setTimeout(() => {
					radioOff = false;
					radios.forEach((r) => (r.disabled = false));
				}, 2300);
			});
		});
	} else {
		const circle_header = document.getElementById("open-circle-header");
		const ordinary_header = document.getElementById("open-ordinary-header");

		circle_header.style.display = "none";
		ordinary_header.style.display = "block";

		const ordinaryInput = document.querySelectorAll(".ordinary-input");
		const ordinaryLabel = document.querySelectorAll(".ordinary-label");
		const ordinaryUl = document.querySelectorAll(".ordinary-list-ul");

		ordinaryInput.forEach(function (input, i) {
			ordinaryLabel[i].addEventListener("click", (e) => {
				// 押した瞬間に、もし既に選択されていたら
				if (ordinaryInput[i].checked) {
					e.preventDefault();
					ordinaryInput[i].checked = false;
					ordinaryInput[i].dispatchEvent(new Event("change"));
				}
			});
		});

		ordinaryInput.forEach((input, i) => {
			input.addEventListener("change", () => {
				ordinaryUl.forEach((ul) => {
					ul.style.maxHeight = 0;
					ul.style.marginBottom = "0";
				});

				if (input.checked) {
					ordinaryUl[i].style.maxHeight = ordinaryUl[i].scrollHeight + "px";
					ordinaryUl[i].style.marginBottom = "10px";
				} else {
					ordinaryUl[i].style.maxHeight = 0;
					console.log("s");
				}
			});
		});

		const hbg_input = document.getElementById("open-hbg");
		const html = document.documentElement;
		const hbg = document.querySelector(".open-hbg-label");

		hbg_input.addEventListener("change", () => {
			if (hbg_input.checked) {
				html.style.overflow = "hidden";
				html.style.paddingRight = getScrollbarWidth() + "px";
				html.style.backgroundColor = "#4994c6";
			} else {
				html.style.overflow = "auto";
				hbg.style.right = "0";
				html.style.paddingRight = "0";
				html.style.backgroundColor = "#fff";
				ordinaryInput.forEach((r) => (r.checked = false));
				ordinaryUl.forEach((ul) => {
					ul.style.maxHeight = 0;
				});
			}
		});
	}
});

if (getWindowAspect()) {
	window.addEventListener("resize", () => {
		setDotsOnCircle();
		setMenuElements();
	});
}
