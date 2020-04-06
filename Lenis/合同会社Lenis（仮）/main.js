$(function () {

  // sticky
  $('.header-inner').each(function () {

      var $window = $(window),
          $header = $(this),
          // ヘッダーのデフォルト位置を取得
          headerOffsetTop = $header.offset().top,
          headerOffsetTop2 = headerOffsetTop/10;
      $window.on('scroll', function () {
          if ($window.scrollTop() > headerOffsetTop2) {
              $header.addClass('sticky');
          } else {
              $header.removeClass('sticky');
          }
      });
      $window.trigger('scroll');

  });

  // aside
  $("#label1").click(function(){
    $("aside").animate( { left: '50%' },300 );
  } );
  $("#label2").click(function(){
    $("aside").animate( { left: '100%' },300 );
  } );

  $(".menu1").click(function(){
    $("html,body").animate({scrollTop:$('#top').offset().top},1500,"swing");
    $("aside").animate( { left: '100%' },300 );
  });
  $(".menu2").click(function(){
    $("html,body").animate({scrollTop:$('#works').offset().top},1500,"swing");
    $("aside").animate( { left: '100%' },300 );
  });
  $(".menu3").click(function(){
    $("html,body").animate({scrollTop:$('#service').offset().top},1500,"swing");
    $("aside").animate( { left: '100%' },300 );
  });
  $(".menu4").click(function(){
    $("html,body").animate({scrollTop:$('#members').offset().top},1500,"swing");
    $("aside").animate( { left: '100%' },300 );
  });
  $(".menu5").click(function(){
    $("html,body").animate({scrollTop:$('#company').offset().top},1500,"swing");
    $("aside").animate( { left: '100%' },300 );
  });

  // slidein
  $('.main-text,.contents-title,.challenge,.departs,.service,.member,.set-wrapper,.section-text,.slide,.service-text,.service-title').css('visibility','hidden');
  $(window).scroll(function(){
  var windowHeight = $(window).height(),
      topWindow = $(window).scrollTop();
    $('.main-text,.contents-title,.challenge,.departs,.service,.member,.set-wrapper,.section-text,.slide,.service-text,.service-title').each(function(){
      var targetPosition = $(this).offset().top;
      if(topWindow > targetPosition - windowHeight + 220){
        $(this).addClass("fadeInUp");
      }"swing"
    });
  });

  // setTimeout(function(){
  //   $(".header").addClass("anime1");
  // },1500,"swing");

    /*
     * Slideshow
     */
    // $('.slideshow').each(function () {
    //
    // // 変数の準備
    // // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    //
    //     var $container = $(this),                                 // a
    //         $slideGroup = $container.find('.slideshow-slides'),   // b
    //         $slides = $slideGroup.find('.slide'),                 // c
    //         $nav = $container.find('.slideshow-nav'),             // d
    //         $indicator = $container.find('.slideshow-indicator'), // e
    //         // スライドショー内の各要素の jQuery オブジェクト
    //         // a スライドショー全体のコンテナー
    //         // b 全スライドのまとまり (スライドグループ)
    //         // c 各スライド
    //         // d ナビゲーション (Prev/Next)
    //         // e インジケーター (ドット)
    //
    //         slideCount = $slides.length, // スライドの点数
    //         indicatorHTML = '',          // インジケーターのコンテンツ
    //         currentIndex = 0,            // 現在のスライドのインデックス
    //         duration = 500,              // 次のスライドへのアニメーションの所要時間
    //         easing = 'easeInOutExpo',    // 次のスライドへのアニメーションのイージングの種類
    //         interval = 7500,             // 自動で次のスライドに移るまでの時間
    //         timer;                       // タイマーの入れ物
    //
    //
    // // HTML 要素の配置、生成、挿入
    // // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    //
    //     // 各スライドの位置を決定し、
    //     // 対応するインジケーターのアンカーを生成
    //     $slides.each(function (i) {
    //         $(this).css({ left: 100 * i + '%' });
    //         indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
    //     });
    //
    //     // インジケーターにコンテンツを挿入
    //     $indicator.html(indicatorHTML);
    //
    //
    // // 関数の定義
    // // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    //
    //     // 任意のスライドを表示する関数
    //     function goToSlide (index) {
    //         // スライドグループをターゲットの位置に合わせて移動
    //         $slideGroup.animate({ left: - 100 * index + '%' }, duration, easing);
    //         // 現在のスライドのインデックスを上書き
    //         currentIndex = index;
    //         // ナビゲーションとインジケーターの状態を更新
    //         updateNav();
    //     }
    //
    //     // スライドの状態に応じてナビゲーションとインジケーターを更新する関数
    //     function updateNav () {
    //         var $navPrev = $nav.find('.prev'), // Prev (戻る) リンク
    //             $navNext = $nav.find('.next'); // Next (進む) リンク
    //         // もし最初のスライドなら Prev ナビゲーションを無効に
    //         if (currentIndex === 0) {
    //             $navPrev.addClass('disabled');
    //         } else {
    //             $navPrev.removeClass('disabled');
    //         }
    //         // もし最後のスライドなら Next ナビゲーションを無効に
    //         if (currentIndex === slideCount - 1) {
    //             $navNext.addClass('disabled');
    //         } else {
    //             $navNext.removeClass('disabled');
    //         }
    //         // 現在のスライドのインジケーターを無効に
    //         $indicator.find('a').removeClass('active')
    //             .eq(currentIndex).addClass('active');
    //     }
    //
    //     // タイマーを開始する関数
    //     function startTimer () {
    //         // 変数 interval で設定した時間が経過するごとに処理を実行
    //         timer = setInterval(function () {
    //             // 現在のスライドのインデックスに応じて次に表示するスライドの決定
    //             // もし最後のスライドなら最初のスライドへ
    //             var nextIndex = (currentIndex + 1) % slideCount;
    //             goToSlide(nextIndex);
    //         }, interval);
    //     }
    //
    //     // タイマーを停止る関数
    //     function stopTimer () {
    //         clearInterval(timer);
    //     }
    //
    //
    // // インベントの登録
    // // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    //
    //     // ナビゲーションのリンクがクリックされたら該当するスライドを表示
    //     $nav.on('click', 'a', function (event) {
    //         event.preventDefault();
    //         if ($(this).hasClass('prev')) {
    //             goToSlide(currentIndex - 1);
    //         } else {
    //             goToSlide(currentIndex + 1);
    //         }
    //     });
    //
    //     // インジケーターのリンクがクリックされたら該当するスライドを表示
    //     $indicator.on('click', 'a', function (event) {
    //         event.preventDefault();
    //         if (!$(this).hasClass('active')) {
    //             goToSlide($(this).index());
    //         }
    //     });
    //
    //     // マウスが乗ったらタイマーを停止、はずれたら開始
    //     $container.on({
    //         mouseenter: stopTimer,
    //         mouseleave: startTimer
    //     });
    //
    //
    // // スライドショーの開始
    // // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    //
    //     // 最初のスライドを表示
    //     goToSlide(currentIndex);
    //
    //     // タイマーをスタート
    //     startTimer();
    //
    // });

});
