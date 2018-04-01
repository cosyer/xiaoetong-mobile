"use strict";

window.onload = function () {
  !function () {
    var e = document.getElementById("customers-title-num"),
        t = parseInt(e.innerText),
        s = null;t < 173412 && (s = setInterval(function () {
      (t += 66) >= 173412 && (clearInterval(s), t = 173412), e.innerText = t;
    }, 0));
  }();for (var e = document.getElementsByClassName("case-selectTab-item"), t = document.getElementsByClassName("case-customersWrapper"), s = 0; s < e.length; s++) {
    e[s].index = s, e[s].onclick = function () {
      for (var s = 0; s < e.length; s++) {
        e[s].classList.remove("case-selectTab-item_active"), t[s].classList.remove("case-customersWrapper_active");
      }this.classList.add("case-selectTab-item_active"), t[this.index].classList.add("case-customersWrapper_active");
    };
  }var a = document.getElementById("hambuger-wrapper"),
      c = document.getElementById("hambuger-list");a.onclick = function () {
    c.classList.toggle("hambuger-list_active"), i.classList.toggle("overlay_active"), a.classList.toggle("hambuger-wrapper_active");
  };var i = document.getElementById("overlay");i.onclick = function () {
    a.classList.remove("hambuger-wrapper_active"), c.classList.remove("hambuger-list_active"), i.classList.remove("overlay_active"), r.classList.remove("footer-fixed-server_active"), o.classList.remove("footer-fixed-button_active"), o.innerText = "立即咨询";
  };var o = document.getElementById("footer-fixed-button"),
      r = document.getElementById("footer-fixed-server");o.onclick = function () {
    r.classList.toggle("footer-fixed-server_active"), o.classList.toggle("footer-fixed-button_active"), i.classList.toggle("overlay_active"), o.classList.contains("footer-fixed-button_active") ? o.innerText = "收起" : o.innerText = "立即咨询";
  };
};