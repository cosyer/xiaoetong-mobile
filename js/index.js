"use strict";

window.onload = function () {
  document.getElementsByClassName("imgWrapper");var e = document.getElementsByClassName("imgScrollContainer"),
      t = document.getElementsByClassName("community-item");Array.prototype.forEach.call(e, function (e) {
    e.style.left = "-26.4vw";
  });var o,
      a = 3e3,
      n = 1,
      c = 4,
      i = 0,
      r = 0;function s(t) {
    var o = t / 30,
        a = parseFloat(e[0].style.left) + t,
        n = function n() {
      o > 0 && parseFloat(e[0].style.left) < a || o < 0 && parseFloat(e[0].style.left) > a ? (Array.prototype.forEach.call(e, function (e) {
        e.style.left = parseFloat(e.style.left) + o + "vw";
      }), setTimeout(n, 10)) : (Array.prototype.forEach.call(e, function (e) {
        e.style.left = a + "vw";
      }), a > -26.4 && Array.prototype.forEach.call(e, function (e) {
        e.style.left = -26.4 * c + "vw";
      }), a < -26.4 * c && Array.prototype.forEach.call(e, function (e) {
        e.style.left = "-26.4vw";
      }));
    };n();
  }function l() {
    for (var e = 0; e < t.length; e++) {
      if (t[e].classList.contains("community-item_active")) {
        t[e].classList.remove("community-item_active");break;
      }
    }t[n - 1].classList.add("community-item_active");
  }function u() {
    o = setTimeout(function () {
      v(), u();
    }, a);
  }u();function m() {
    clearTimeout(o);
  }Array.prototype.forEach.call(e, function (e) {
    e.addEventListener("touchstart", function (e) {
      m(), i = e.targetTouches[0].pageX;
    });
  }), Array.prototype.forEach.call(e, function (e) {
    e.addEventListener("touchmove", function (e) {
      r = e.targetTouches[0].pageX;
    });
  }), Array.prototype.forEach.call(e, function (e) {
    e.addEventListener("touchend", function (e) {
      r - i > 0 ? function () {
        1 === n ? n = 4 : n -= 1;s(26.4), l();
      }() : v(), u();
    });
  });function v() {
    4 === n ? n = 1 : n += 1, s(-26.4), l();
  }for (var f = 0; f < t.length; f++) {
    t[f].onclick = function () {
      if (!this.classList.contains("community-item_active")) {
        m();var e = parseInt(this.dataset.index);s(-26.4 * (e - n)), n = e, l(), u();
      }
    };
  }!function () {
    var e = document.getElementById("customers-title-num"),
        t = parseInt(e.innerText),
        o = null;t < 173412 && (o = setInterval(function () {
      (t += 66) >= 173412 && (clearInterval(o), t = 173412), e.innerText = t;
    }, 0));
  }();var d = document.getElementById("hambuger-wrapper"),
      y = document.getElementById("hambuger-list");d.onclick = function () {
    y.classList.toggle("hambuger-list_active"), w.classList.toggle("overlay_active"), d.classList.toggle("hambuger-wrapper_active");
  };var g = document.getElementById("video-wrapper-img"),
      p = document.getElementById("video-button"),
      h = document.getElementById("video-wrapper"),
      E = document.getElementById("header-video");p.onclick = function () {
    h.classList.toggle("video-wrapper_active"), w.classList.toggle("overlay_active");
  }, g.onclick = function () {
    h.classList.remove("video-wrapper_active"), w.classList.remove("overlay_active"), E.pause();
  };var L = document.getElementById("footer-fixed-button"),
      _ = document.getElementById("footer-fixed-server");L.onclick = function () {
    _.classList.toggle("footer-fixed-server_active"), L.classList.toggle("footer-fixed-button_active"), w.classList.toggle("overlay_active"), L.classList.contains("footer-fixed-button_active") ? L.innerText = "收起" : L.innerText = "立即咨询";
  };var w = document.getElementById("overlay");w.onclick = function () {
    h.classList.remove("video-wrapper_active"), E.pause(), w.classList.remove("overlay_active"), d.classList.remove("hambuger-wrapper_active"), y.classList.remove("hambuger-list_active"), _.classList.remove("footer-fixed-server_active"), L.classList.remove("footer-fixed-button_active"), L.innerText = "立即咨询";
  };
};