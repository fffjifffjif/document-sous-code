let speed = 30; // スクロールのスピード（1に近いほど速く）
let move = 1; // スクロールのなめらかさ（1に近いほどなめらかに）

// スクロール状態を記録
const scrollStateMap = new WeakMap();

function scroll(scrollElement) {
	// 前回の位置（最初は undefined → 0）
	const prev = scrollStateMap.get(scrollElement) || { x: -1, y: -1 };

	// スクロールする
	scrollElement.scrollBy(move, 0);

	// 次の位置を取得（scrollBy の直後はタイミングによって反映されないので少し遅らせてチェック）
	setTimeout(() => {
		const nextX = scrollElement.scrollLeft;
		const nextY = scrollElement.scrollTop;

		// 前回と今回が同じ位置なら終了（もうスクロールできない）
		if (prev.x === nextX && prev.y === nextY) {
			setTimeout(() => {
				scrollElement.scrollTo(0, 0); // 先頭に戻る
				setTimeout(() => {
					scroll(scrollElement); // 再開
				}, 2000); // 2秒待って再開
			}, 1000); // 1秒待って再開
		} else {
			// 状態を更新して再実行
			scrollStateMap.set(scrollElement, { x: nextX, y: nextY });
			scroll(scrollElement);
		}
	}, speed);
}

document.addEventListener("DOMContentLoaded", () => {
	const scrollElement = document.getElementsByClassName("scroll");

	setTimeout(() => {
		Array.from(scrollElement).forEach((element) => {
			scroll(element);
		});
	}, 2000); // 1秒待って再開
});
