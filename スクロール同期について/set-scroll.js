document.addEventListener("DOMContentLoaded", () => {
	const timetable_index = document.getElementById("timetable-index");
	const timetable = document.getElementById("timetable");
	const timetime = document.getElementById("timetime");

	//X軸方向の位置合わせ
	timetable_index.addEventListener("scroll", () => {
		timetable.scrollLeft = timetable_index.scrollLeft;
	});

	timetable.addEventListener("scroll", () => {
		timetable_index.scrollLeft = timetable.scrollLeft;
	});

	//Y軸方向の位置合わせ
	timetime.addEventListener("scroll", () => {
		timetable.scrollTop = timetime.scrollTop;
	});

	timetable.addEventListener("scroll", () => {
		timetime.scrollTop = timetable.scrollTop;
	});
});
