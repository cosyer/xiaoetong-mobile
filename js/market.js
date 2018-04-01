"use strict";

window.onload = function () {
  for (var e = document.getElementsByClassName("market-selectTab-item"), t = document.getElementsByClassName("market-product-list"), a = 0; a < e.length; a++) {
    e[n = a].index = n, e[n].onclick = function () {
      for (var a = 0; a < e.length; a++) {
        e[a].classList.remove("market-selectTab-item_active"), t[a].classList.remove("market-product-list_active");
      }this.classList.add("market-selectTab-item_active"), t[this.index].classList.add("market-product-list_active");
    };
  }var n;window.addEventListener("scroll", function () {
    for (var e = document.getElementsByClassName("market-product-item-img"), t = 0; t < e.length; t++) {
      var a = e[t];if (s(a)) {
        var n = a.getAttribute("data-url");a.setAttribute("src", n);
      }
    }
  });function s(e) {
    var t = e.getBoundingClientRect(),
        a = window.innerHeight || docuemnt.documentElement.clientHeight;return t.top >= 0 && t.top <= a;
  }var i,
      o = document.getElementById("scrollContainer"),
      c = document.getElementById("img-wrapper"),
      r = document.getElementsByClassName("buttons-item"),
      l = 1,
      m = 6,
      u = !1,
      v = 4e3,
      d = 0,
      g = 0,
      f = 0;c.style.left = "-100%";function y(e) {
    if (0 != e) {
      u = !0;var t = e / 50,
          a = parseInt(c.style.left) + e,
          n = function n() {
        t > 0 && parseInt(c.style.left) < a || t < 0 && parseInt(c.style.left) > a ? (c.style.left = parseInt(c.style.left) + t + "%", setTimeout(n, 10)) : (c.style.left = a + "%", a > -100 && (c.style.left = -100 * m + "%"), a < -100 * m && (c.style.left = "-100%"), u = !1);
      };n();
    }
  }function L() {
    for (var e = 0; e < r.length; e++) {
      if (r[e].classList.contains("buttons-item_active")) {
        r[e].classList.remove("buttons-item_active");break;
      }
    }r[l - 1].classList.add("buttons-item_active");
  }function _() {
    i = setTimeout(function () {
      p(), _();
    }, v);
  }function p() {
    u || (6 === l ? l = 1 : l += 1, y(-100), L());
  }_(), o.addEventListener("touchstart", function (e) {
    clearTimeout(i), d = e.targetTouches[0].pageX;
  }), o.addEventListener("touchmove", function (e) {
    g = e.targetTouches[0].pageX, f = g - d;
  }), o.addEventListener("touchend", function () {
    f > 20 ? u || (1 === l ? l = 6 : l -= 1, y(100), L()) : f < -20 && p(), _();
  });var b = document.getElementById("overlay");b.onclick = function () {
    h.classList.remove("hambuger-wrapper_active"), k.classList.remove("hambuger-list_active"), b.classList.remove("overlay_active"), x.classList.remove("footer-fixed-server_active"), E.classList.remove("footer-fixed-button_active"), E.innerText = "立即咨询", B.classList.remove("market-wxContainer_active");
  };var h = document.getElementById("hambuger-wrapper"),
      k = document.getElementById("hambuger-list");h.onclick = function () {
    k.classList.toggle("hambuger-list_active"), b.classList.toggle("overlay_active"), h.classList.toggle("hambuger-wrapper_active");
  };var E = document.getElementById("footer-fixed-button"),
      x = document.getElementById("footer-fixed-server");E.onclick = function () {
    x.classList.toggle("footer-fixed-server_active"), E.classList.toggle("footer-fixed-button_active"), b.classList.toggle("overlay_active"), E.classList.contains("footer-fixed-button_active") ? E.innerText = "收起" : E.innerText = "立即咨询";
  };var w = document.getElementsByClassName("market-product-button"),
      B = document.getElementById("market-wxContainer"),
      I = document.getElementById("market-wxContainer-close");Array.prototype.forEach.call(w, function (e) {
    e.onclick = function () {
      b.classList.toggle("overlay_active"), B.classList.toggle("market-wxContainer_active");
    };
  }), I.onclick = function () {
    b.classList.remove("overlay_active"), B.classList.remove("market-wxContainer_active");
  };
};