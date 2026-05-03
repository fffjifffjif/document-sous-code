document.addEventListener("DOMContentLoaded", () => {
	let scrollbarWidth = window.innerWidth - document.body.clientWidth;
	const day1_button = document.getElementById("9-5");
	const day2_button = document.getElementById("9-6");
	const timecontainer = document.getElementById("time");
	const gym_schedule = document.getElementById("gym-schedule");
	const martial_art_schedule = document.getElementById("martial-art-schedule");
	const stage_schedule = document.getElementById("stage-schedule");
	const audiovisual_schedule = document.getElementById("audiovisual-schedule");

	//DAY1 11:15~15:30
	//DAY2 9:30~15:00

	let day1content = [11, 0, "1"];
	let day2content = [9, 1, "2"];

	settimetabletime(day1content);
	settimetabletime(day2content);

	const first_day2 = document.querySelector(".day2");
	first_day2.id = "first-day2";

	updateDisplay();
	settimecontainer();

	// ラジオが変わったときに更新
	day1_button.addEventListener("change", () => {
		updateDisplay();
		settimecontainer();
	});

	day2_button.addEventListener("change", () => {
		updateDisplay();
		settimecontainer();
	});

	function settimetabletime(a) {
		let loop_count = 0;

		while (a[0] < 16) {
			timecontainer.insertAdjacentHTML(
				"beforeend",
				`<li class="day${a[2]}"><p>${a[0]}:${a[1] * 3}0</p></li>`,
			);
			gym_schedule.insertAdjacentHTML(
				"beforeend",
				`<div class="border1 day${a[2]}" style="top: calc(25.2px + calc(${loop_count} * 138.4px));"></div><div class="border2 day${a[2]}" style="top: calc(-45px + calc(${loop_count} * 138.4px));"></div>`,
			);
			martial_art_schedule.insertAdjacentHTML(
				"beforeend",
				`<div class="border1 day${a[2]}" style="top: calc(25.2px + calc(${loop_count} * 138.4px));"></div><div class="border2 day${a[2]}" style="top: calc(-45px + calc(${loop_count} * 138.4px));"></div>`,
			);
			stage_schedule.insertAdjacentHTML(
				"beforeend",
				`<div class="border1 day${a[2]}" style="top: calc(25.2px + calc(${loop_count} * 138.4px));"></div><div class="border2 day${a[2]}" style="top: calc(-45px + calc(${loop_count} * 138.4px));"></div>`,
			);
			audiovisual_schedule.insertAdjacentHTML(
				"beforeend",
				`<div class="border1 day${a[2]}" style="top: calc(25.2px + calc(${loop_count} * 138.4px));"></div><div class="border2 day${a[2]}" style="top: calc(-45px + calc(${loop_count} * 138.4px));"></div>`,
			);
			if (a[1] == 0) {
				a[1] = 1;
			} else {
				a[1] = 0;
				a[0]++;
			}
			loop_count++;
		}
	}

	function settimecontainer() {
		const height_int = timecontainer.scrollHeight - scrollbarWidth;
		const height = height_int + "px";

		gym_schedule.style.height = height;
		martial_art_schedule.style.height = height;
		stage_schedule.style.height = height;
		audiovisual_schedule.style.height = height;
	}

	function updateDisplay() {
		const day1Elems = document.querySelectorAll(".day1");
		const day2Elems = document.querySelectorAll(".day2");

		if (day1_button.checked) {
			day1Elems.forEach((el) => (el.style.display = "block"));
			day2Elems.forEach((el) => (el.style.display = "none"));
		} else if (day2_button.checked) {
			day1Elems.forEach((el) => (el.style.display = "none"));
			day2Elems.forEach((el) => (el.style.display = "block"));
		}
	}
});
