var rot13 = function (str) {
	// https://github.com/kvz/phpjs/blob/master/functions/strings/str_rot13.js
	return (str + '').replace(/[a-z]/gi, function (s) {
      return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13));
    });
}

document.getElementById('diy').onsubmit = function (e) {
	var textarea = document.getElementById('text');
    textarea.value = rot13(textarea.value);
    e.preventDefault();
};
