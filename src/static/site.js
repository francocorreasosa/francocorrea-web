(function() {
  var origin = 944165400;

  var el = document.getElementById('years');
  el.textContent = Math.floor(
    (new Date().getTime() / 1000 - origin) / 31536000
  );
})();
