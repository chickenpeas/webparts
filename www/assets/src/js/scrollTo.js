// -----------------------------------------------------
// 
// scrollTo.js
// 
// -----------------------------------------------------
// アンカーリンクの飛び先をID設定した場所まで移動
// ・jQuery必須
// ・アンカーリンクでつくる
// ・飛び先にID設定必須

  (function() {
    const click = function() {
      const targetId = $(this).attr('data-scrollto');
      const $targetElement = $('#' + targetId);
      const targetTop = $targetElement.offset().top - 20;
      $('html,body').animate({ scrollTop: targetTop }, 500, 'swing');
    };
    $('.js-scrollButton').each(function(_, button) { $(button).on('click', click) });
  }());