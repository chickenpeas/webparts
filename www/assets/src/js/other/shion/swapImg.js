// -----------------------------------------------------
// 
// swapImg.js
// 
// -----------------------------------------------------
// マウスホバーしたときターゲット画像をサムネイル画像に変更
// ・マウスホバーを外した時の指定はしない
// ・取得する個別番号は一ケタまで

(function () {
  const swapItem = document.getElementsByClassName('js-swapImgItem'); // swapItem共通クラス

  for (var i = swapItem.length - 1; i >= 0; i--) {
    swapItem[i].addEventListener('mouseenter', function () {
      var classNameStr = this.className; // thisクラス属性取得
      var cutStr = 'js-item-'; // 切り取り文字列
      var targetStrPos = classNameStr.indexOf(cutStr); // 切り取り開始位置
      var targetNum = classNameStr.slice(targetStrPos + 8, targetStrPos + 9); // target番号取得
      var targetIdStr = 'js-swapImg-' + targetNum; // targetのid生成
      var swapTarget = document.getElementById(targetIdStr); // target取得
      swapItemSrc = this.getAttribute('src'); // 変更するsrc取得
      swapTarget.src = swapItemSrc; // targetに変更するsrcを置き換え
    });
  }
})();