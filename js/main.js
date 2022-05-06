// jsを記述する際はここに記載していく

// トップ画像欄テキストアニメーション
//eachTextAnimeにappeartextというクラス名をつける定義
function EachTextAnimeControl() {
  $('.eachTextAnime').each(function () {
    //eachTextAnimeの上の座標を取得し-50 したものを代入
    var elemPos = $(this).offset().top - 50;
    //スクロールした時の位置を取得
    var scroll = $(window).scrollTop();
    //画面の高さを取得
    var windowHeight = $(window).height();
    //スクロール位置が.scrollTopの上座標-50から画面の高さを引いた数値以上なら
    if (scroll >= elemPos - windowHeight) {
      //eachTextAnimeにappeartexクラスを付与
      $(this).addClass("appeartext");
    } else {
      //該当しなければappeartexクラスを削除
      $(this).removeClass("appeartext");
    }
  });
}

//画面が読み込まれた関数を実行
$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".eachTextAnime");
  //繰り返し処理
  element.each(function () {
    //eachTextAnime内のテキストを取得
    var text = $(this).text();
    //空の要素を作成
    var textbox = "";
    //textを一文字づつ区切る 一文字づつに関数を実行 ?tとiが何を表すか不明
    text.split('').forEach(function (t, i) {
      //tが空白でなければok
      if (t !== " ") {
        if (i < 10) {
          //? 不明
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    //eachTextAnimeの中身を textboxに入れ替える
    $(this).html(textbox);
  });

  /* アニメーション用の関数を呼ぶ*/
  EachTextAnimeControl();
});

//スライド画面アニメーション
$('.slider').slick({
  arrows: false,//左右の矢印はなし
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
  speed: 6900,//スライドのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
  pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
  cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
  slidesToShow: 4,//スライドを画面に4枚見せる
  slidesToScroll: 1,//1回のスライドで動かす要素数
  responsive: [
    {
    breakpoint: 769,//モニターの横幅が769px以下の見せ方
    settings: {
      slidesToShow: 2,//スライドを画面に2枚見せる
    }
  },
  {
    breakpoint: 426,//モニターの横幅が426px以下の見せ方
    settings: {
      slidesToShow: 1.5,//スライドを画面に1.5枚見せる
    }
  }
]
});

