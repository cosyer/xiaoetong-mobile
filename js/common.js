"use strict";

window.onload = function () {
  var e = document.getElementById("hambuger-wrapper"),
      t = document.getElementById("hambuger-list");e.onclick = function () {
    t.classList.toggle("hambuger-list_active"), o.classList.toggle("overlay_active"), e.classList.toggle("hambuger-wrapper_active");
  };var o = document.getElementById("overlay");o.onclick = function () {
    e.classList.remove("hambuger-wrapper_active"), t.classList.remove("hambuger-list_active"), o.classList.remove("overlay_active"), s.classList.remove("footer-fixed-server_active"), i.classList.remove("footer-fixed-button_active"), i.innerText = "立即咨询";
  };var i = document.getElementById("footer-fixed-button"),
      s = document.getElementById("footer-fixed-server");i.onclick = function () {
    s.classList.toggle("footer-fixed-server_active"), i.classList.toggle("footer-fixed-button_active"), o.classList.toggle("overlay_active"), i.classList.contains("footer-fixed-button_active") ? i.innerText = "收起" : i.innerText = "立即咨询";
  };
};