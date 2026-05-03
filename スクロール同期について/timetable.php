<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <!--css/jsの読み込みはここより下で行ってください-->
    <link rel="stylesheet" href="timetable.css">
    <script src="set-scroll.js"></script>
    <script src="make-timetable.js"></script>
</head>

<body>
    <div class="container">
        <h1>Timetable</h1>
        <div class="set-date">
            <input type="radio" name="change-date" id="9-5" value="9-5" checked>
            <label for="9-5" id="day1-label">
                <p>9/5</p>
            </label>
            <input type="radio" name="change-date" id="9-6" value="9-6">
            <label for="9-6" id="day2-label">
                <p>9/6</p>
            </label>
        </div>
        <div class="timetable-container">
            <div class="time">
                <div></div>
                <div id="timetime">
                    <ul id="time"></ul>
                </div>
            </div>
            <div class="timetable-index" id="timetable-index">
                <div>体育館</div>
                <div>武道場</div>
                <div class="day1">食堂</div>
                <div class="day2">屋外ステージ</div>
                <div>視聴覚室</div>
            </div>
            <div class="timetable" id="timetable">
                <ul id="gym-schedule">
                    <span></span>
                    <div class="border1"></div>
                    <!--このliは最後は消す-->
                    <!--このliのphpの書き方-->
                    <!--top→1時間あたり138.4pxずれます
                            表の一番上の時刻がtop: 25.2px;です。
                        height→1時間あたり138.4pxです。
                        文字→pタグの中に入れたら、自動でレスポンシブします
                        団体コードを指定しておいてください。
                        モーダルに使用します。
-->
                    <li>
                        <p>僕らの7日間戦争</p>
                    </li>
                </ul>
                <ul id="martial-art-schedule">
                    <span></span>
                    <div class="border1"></div>
                </ul>
                <ul id="stage-schedule">
                    <span></span>
                    <div class="border1"></div>
                </ul>
                <ul id="audiovisual-schedule">
                    <span></span>
                    <div class="border1"></div>
                </ul>
            </div>
        </div>
    </div>
    <form id="form">
        <div class="form-background"></div>
        <button type="button" id="cancel-form" class="form-button">
            <div></div>
            <div></div>
        </button>
        <div class="form-container">
        </div>
    </form>
</body>

</html>