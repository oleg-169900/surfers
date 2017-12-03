'use strict';

(function () {
  var titles = document.querySelectorAll('.goods-item__text-title');
  var texts = document.querySelectorAll('.goods-item__text');
  var goodsItemToggles = document.querySelector('.goods-item__toggles')
  var toggle1 = document.querySelector('#toggle-1');
  var toggle2 = document.querySelector('#toggle-2');
  var toggle3 = document.querySelector('#toggle-3');

  for (var i = 0; i <= titles.length - 1; i++) {
    titles[i].classList.add('hidden');
  }

  for (var j = 1; j <= texts.length - 1; j++) {
    texts[j].classList.add('hidden');
  }

  goodsItemToggles.classList.remove('hidden');

  toggle1.onclick = function() {
    toggle1.classList.add('goods-item__toggle--active');
    toggle2.classList.remove('goods-item__toggle--active');
    toggle3.classList.remove('goods-item__toggle--active');
    texts[0].classList.remove('hidden');
    texts[1].classList.add('hidden');
    texts[2].classList.add('hidden');
  }

  toggle2.onclick = function() {
    toggle2.classList.add('goods-item__toggle--active');
    toggle1.classList.remove('goods-item__toggle--active');
    toggle3.classList.remove('goods-item__toggle--active');
    texts[1].classList.remove('hidden');
    texts[0].classList.add('hidden');
    texts[2].classList.add('hidden');
  }

  toggle3.onclick = function() {
    toggle3.classList.add('goods-item__toggle--active');
    toggle1.classList.remove('goods-item__toggle--active');
    toggle2.classList.remove('goods-item__toggle--active');
    texts[2].classList.remove('hidden');
    texts[0].classList.add('hidden');
    texts[1].classList.add('hidden');
  }
})();
