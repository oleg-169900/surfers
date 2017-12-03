"use strict";

(function () {
    var list = document.querySelector('.goods__wrapper');
    var listElems = document.querySelectorAll('.goods-item');
    var arrowLeft = document.querySelector('.goods__arrow--left');
    var arrowRight = document.querySelector('.goods__arrow--right');
    var width = 1030;
    var position = 0;
    var count = 1;


    arrowLeft.onclick = function() {
      position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';
    };

    arrowRight.onclick = function() {
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };
})();
