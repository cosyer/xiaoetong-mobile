"use strict";

window.onload = function () {
  var e = document.getElementById("login"),
      t = document.getElementById("register"),
      n = document.getElementById("forget"),
      i = document.getElementById("transfromToLogin"),
      s = document.getElementById("transfromToRegister"),
      l = document.getElementById("transfromToForget"),
      o = document.getElementById("transfromToLoginAgain");i.onclick = function () {
    e.classList.toggle("active"), t.classList.toggle("active");
  }, s.onclick = function () {
    e.classList.toggle("active"), t.classList.toggle("active");
  }, l.onclick = function () {
    n.classList.toggle("active"), e.classList.toggle("active");
  }, o.onclick = function () {
    n.classList.toggle("active"), e.classList.toggle("active");
  };var a = document.getElementById("register-button"),
      c = !1,
      u = !1,
      r = !1,
      g = !1;function d() {
    u && r && g && c ? a.removeAttribute("disabled") : a.setAttribute("disabled", "disabled");
  }var y = /^[a-zA-Z]/,
      m = /\d+/,
      h = /(?=.*[a-z])+(?=.*[A-Z])+/g,
      v = document.getElementById("register-account"),
      p = document.getElementById("register-password1"),
      f = document.getElementById("register-password2"),
      B = (document.getElementById("register-identify"), document.getElementById("confirm")),
      E = document.getElementById("register-account-hint"),
      I = document.getElementById("register-password1-hint"),
      T = document.getElementById("register-password2-hint"),
      x = document.getElementById("register-account-img"),
      w = document.getElementById("register-password1-img"),
      b = document.getElementById("register-password2-img");B.onclick = function () {
    c = !!B.checked, d();
  };v.onchange = function () {
    J(this.value) ? (E.innerText = "", x.style.opacity = "1", u = !0) : (E.innerText = "请输入正确的十一位数手机号码", x.style.opacity = "0", u = !1), d();
  }, p.onkeyup = function () {
    var e = M(this.value, this.value[0]);y.test(this.value[0]) ? this.value.length < 6 || this.value.length > 18 ? (I.innerText = "长度在6-18个字符之间，您输入了：" + this.value.length + "个", w.style.opacity = "0", r = !1) : e === this.value.length ? (I.innerText = "不能使用连续的相同字符作为密码", w.style.opacity = "0", r = !1) : h.test(this.value) ? m.test(this.value) ? K(this.value) && this.value.length < 9 ? (I.innerText = "密码强度：弱", w.style.opacity = "1", r = !0) : K(this.value) && this.value.length < 14 && this.value.length >= 9 ? (I.innerText = "密码强度：中", w.style.opacity = "1", r = !0) : K(this.value) && this.value.length <= 18 && this.value.length >= 14 && (I.innerText = "密码强度：强", w.style.opacity = "1", r = !0) : (I.innerText = "必须包含数字", w.style.opacity = "0", r = !1) : (I.innerText = "必须包含大小写字母", w.style.opacity = "0", r = !1) : (I.innerText = "必须以字母开头", w.style.opacity = "0", r = !1), d();
  }, f.onkeyup = function () {
    this.value != p.value ? (T.innerText = "两次输入的密码不一致", b.style.opacity = "0", g = !1) : (T.innerText = "", b.style.opacity = "1", g = !0), d();
  };var k = document.getElementById("forget-button"),
      L = !1,
      A = !1,
      z = !1;function Z() {
    L && A && z ? k.removeAttribute("disabled") : k.setAttribute("disabled", "disabled");
  }var $ = document.getElementById("forget-account"),
      F = document.getElementById("forget-password1"),
      R = document.getElementById("forget-password2"),
      j = (document.getElementById("forget-identify"), document.getElementById("forget-account-hint")),
      q = document.getElementById("forget-password1-hint"),
      C = document.getElementById("forget-password2-hint"),
      D = document.getElementById("forget-account-img"),
      G = document.getElementById("forget-password1-img"),
      H = document.getElementById("forget-password2-img");$.onchange = function () {
    J(this.value) ? (j.innerText = "", D.style.opacity = "1", L = !0) : (j.innerText = "请输入正确的十一位数手机号码", D.style.opacity = "0", L = !1), Z();
  }, F.onkeyup = function () {
    var e = M(this.value, this.value[0]);y.test(this.value[0]) ? this.value.length < 6 || this.value.length > 18 ? (q.innerText = "长度在6-18个字符之间，您输入了：" + this.value.length + "个", G.style.opacity = "0", A = !1) : e === this.value.length ? (q.innerText = "不能使用连续的相同字符作为密码", G.style.opacity = "0", A = !1) : h.test(this.value) ? m.test(this.value) ? K(this.value) && this.value.length < 9 ? (q.innerText = "密码强度：弱", G.style.opacity = "1", A = !0) : K(this.value) && this.value.length < 14 && this.value.length >= 9 ? (q.innerText = "密码强度：中", G.style.opacity = "1", A = !0) : K(this.value) && this.value.length <= 18 && this.value.length >= 14 && (q.innerText = "密码强度：强", G.style.opacity = "1", A = !0) : (q.innerText = "必须包含数字", G.style.opacity = "0", A = !1) : (q.innerText = "必须包含大小写字母", G.style.opacity = "0", A = !1) : (q.innerText = "必须以字母开头", G.style.opacity = "0", A = !1), Z();
  }, R.onkeyup = function () {
    this.value != F.value ? (C.innerText = "两次输入的密码不一致", H.style.opacity = "0", z = !1) : (C.innerText = "", H.style.opacity = "1", z = !0), Z();
  };function J(e) {
    return !!/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/.test(e);
  }function K(e) {
    return !!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/.test(e);
  }function M(e, t) {
    for (var n = 0, i = 0; i < e.length; i++) {
      e.charAt(i) === t && n++;
    }return n;
  }
};