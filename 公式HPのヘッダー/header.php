<header>
    <div id="close-header">
        <a href="top.php"><img src="..\assets\seieisai-header-img.png" alt="清榮祭ロゴ"></a>
        <div class="header-list">
            <div class="header-menu">
                <button class="header-content" onclick="location.href='introduction.php'">
                    Intro
                    <div></div>
                </button>
                <button class="header-content" onclick="location.href='map.php'">
                    Map
                    <div></div>
                </button>
                <button class="header-content" onclick="location.href='event.php'">
                    Events
                    <div></div>
                </button>
                <button class="header-content" onclick="location.href='others.php'">
                    Others
                    <div></div>
                </button>
                <button onclick="window.open('https://seieisai.jp/invitation'),'_blank'">
                    <p>来場者登録<br>はこちら</p>
                </button>
                <div class="hbg-dummy"></div>
            </div>
        </div>
        <div class="header-shadow"></div>
    </div>

    <input type="checkbox" id="open-hbg" autocomplete="off">
    <label for="open-hbg" class="open-hbg-label">
        <div class="hbg-icon">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </label>

    <div id="open-circle-header">
        <div class="circle" id="circle"></div>
        <div class="circle-dot">
            <div class="circle-list"><input type="radio" name="hbg-menu" id="Top-button" class="circle_list_input"><label for="Top-button" class="circle_list_label">Top<p class="circle_opener">&#x25B8;</p></label>
                <ul class="circle-list-ul" id="Top-button-ul">
                    <li><button onclick="location.href='top.php'" type="button">Top</button></li>
                    <li><button onclick="location.href='top.php#info'" type="button">ご来場の皆様へ</button></li>
                    <li><button onclick="location.href='top.php#news'" type="button">ニュース</button></li>
                    <li><button onclick="location.href='top.php#access'" type="button">アクセス</button></li>
                </ul>
            </div>
        </div>
        <div class="circle-dot">
            <div class="circle-list"><input type="radio" name="hbg-menu" id="Intro-button" class="circle_list_input"><label for="Intro-button" class="circle_list_label">Introduction<p class="circle_opener">&#x25B8;</p></label>
                <ul class="circle-list-ul" id="Intro-button-ul">
                    <li><button onclick="location.href='fes-detail.php'">清榮祭とは</button></li>
                    <li><button onclick="location.href='greetings.php'">ご挨拶</button></li>
                    <li><button onclick="location.href='mascot.php'">マスコットキャラ紹介</button></li>
                    <li><button onclick="location.href='leaflet.php'">パンフレット</button></li>
                    <li><button onclick="location.href='sponsor.php'">ご協賛の方々</button></li>
                </ul>
            </div>
        </div>
        <div class="circle-dot">
            <div class="circle-list"><input type="radio" name="hbg-menu" id="Map-button" class="circle_list_input"><label for="Map-button" class="circle_list_label" onclick="location.href='map.php'">Map</label>
            </div>
        </div>
        <div class="circle-dot">
            <div class="circle-list"><input type="radio" name="hbg-menu" id="Events-button" class="circle_list_input"><label for="Events-button" class="circle_list_label">Events<p class="circle_opener">&#x25B8;</p></label>
                <ul class="circle-list-ul" id="Events-button-ul">
                    <li><button onclick="location.href='event.php'">イベント一覧</button></li>
                    <li><button onclick="location.href='event-search.php'">イベント検索</button></li>
                    <li><button onclick="location.href='timetable.php'">タイムテーブル</button></li>
                </ul>
            </div>
        </div>
        <div class="circle-dot">
            <div class="circle-list"><input type="radio" name="hbg-menu" id="Others-button" class="circle_list_input"><label for="Others-button" class="circle_list_label">Others<p class="circle_opener">&#x25B8;</p></label>
                <ul class="circle-list-ul" id="Others-button-ul">
                    <li><button onclick="location.href='others.php'">サイトマップ</button></li>
                    <li><button onclick="location.href='mailto:contact@seieisai.jp'">文化祭についてのお問い合わせ</button></li>
                    <li><button onclick="location.href='https://forms.gle/M4Y7qWgEzGeBfAm49'">サイトについてのお問い合わせ</button></li>
                </ul>
            </div>
        </div>
    </div>

    <div id="open-ordinary-header">
        <div class="not-hover"></div>
        <div>
            <a href="top.php" type="button">Top</a>
            <input type="radio" name="ordinary" id="Top-a" class="ordinary-input">
            <label for="Top-a" class="ordinary-label">
                <span>
                    <p>></p>
                </span>
            </label>
        </div>
        <ul class="ordinary-list-ul">
            <li><button onclick="location.href='top.php#info'" type="button">ご来場の皆様へ</button></li>
            <li><button onclick="location.href='top.php#news'" type="button">ニュース</button></li>
            <li><button onclick="location.href='top.php#access'" type="button">アクセス</button></li>
        </ul>
        <div>
            <a href="introduction.php">Introduction</a>
            <input type="radio" name="ordinary" id="Intro-a" class="ordinary-input">
            <label for="Intro-a" class="ordinary-label">
                <span>
                    <p>></p>
                </span>
            </label>
        </div>
        <ul class="ordinary-list-ul">
            <li><button onclick="location.href='fes-detail.php'">清榮祭とは</button></li>
            <li><button onclick="location.href='greetings.php'">ご挨拶</button></li>
            <li><button onclick="location.href='top.php#theme'">テーマ紹介</button></li>
            <li><button onclick="location.href='mascot.php'">マスコットキャラ紹介</button></li>
            <li><button onclick="location.href='leaflet.php'">パンフレット</button></li>
            <li><button onclick="location.href='sponsor.php'">ご協賛の方々</button></li>
        </ul>
        <div>
            <a href="map.php" id="ordinary-map">Map</a>
        </div>
        <div>
            <a href="event.php">Events</a>
            <input type="radio" name="ordinary" id="Events-a" class="ordinary-input">
            <label for="Events-a" class="ordinary-label">
                <span>
                    <p>></p>
                </span>
            </label>
        </div>
        <ul class="ordinary-list-ul">
            <li><button onclick="location.href='event.php'">イベント一覧</button></li>
            <li><button onclick="location.href='event-search.php'">イベント検索</button></li>
            <li><button onclick="location.href='timetable.php'">タイムテーブル</button></li>
        </ul>
        <div>
            <a href="others.php">Others</a>
            <input type="radio" name="ordinary" id="Others-a" class="ordinary-input">
            <label for="Others-a" class="ordinary-label">
                <span>
                    <p>></p>
                </span>
            </label>
        </div>
        <ul class="ordinary-list-ul">
            <li><button onclick="location.href='others.php'">サイトマップ</button></li>
            <li><button onclick="location.href='mailto:contact@seieisai.jp'">文化祭についての問い合わせ</button></li>
            <li><button onclick="location.href='https://forms.gle/M4Y7qWgEzGeBfAm49'">サイトについての問い合わせ</button></li>
        </ul>
    </div>
</header>