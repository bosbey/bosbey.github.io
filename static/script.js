document.createElement ('header');
document.createElement ('footer');
document.createElement ('main');
document.createElement ('section');
document.createElement ('nav');
document.createElement ('menu');
document.createElement ('article');
document.createElement ('aside');
document.createElement ('template');
document.createElement ('icon');
document.createElement ('flex');
document.createElement ('flexible');

function element (id) { return document.getElementById (id); }
function echo (content) { document.write (content); }
function time_sleep (sec, procedure) { setTimeout (procedure, sec * 1000); }
function json_decode (data) { return JSON.parse (data); }
function go_to (url) { location.href = url; }
function get_attribute (id, key) { return element (id).getAttribute (key); }
function qs (key) { var arg = {}; location.search.replace (/[?&]+([^=&]+)=([^&]*)/gi, function (tmp, key, value) { arg [key] = value; }); return key ? arg [key] : arg; }
function http_build_query (q) { var output = ''; for (var i in q) { var key = i; var value = q [i]; output += '&' + key + '=' + value; } return output; }
