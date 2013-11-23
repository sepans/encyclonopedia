
var regex = /sandwich/;

// Test the text of the body element against our regular expression.
/*
if (regex.test(document.body.innerText)) {
  // The regular expression produced a match, so notify the background page.
  chrome.extension.sendRequest({}, function(response) {});
} else {
  // No match was found.
}
*/

console.log(main);
console.log('jquery');


console.log($('#main'));
$('#main').css('background-color',"#000");
$('#hdtb').css('background-color',"#000");
$('#hdtbSum').css('background-color',"#000");


$('#appbar').css('background-color',"#000");
$('#mngb').css('background-color',"#000");
//document.getElementById("main").style.background = "#000";
//document.getElementById("hdtb").style.background = "#000";
//document.getElementById("hdtbSum").style.background = "#000";

//document.getElementById("appbar").style.background = "#000";
//document.getElementById("mngb").style.background = "#000";

$('.gb_hb .gb_d').css('background-image','none');

$('.gb_ub .gb_c').text($('.gb_ub .gb_c').text().replace('+','%^#@'));

$('.gb_cb').css('background-color','#000');

$('.newsimg img').attr('src','https://img.new.livestream.com/accounts/00000000002eb73c/91fc5496-8cfa-4e10-b0c9-182485465b12_170x170.jpg');


//document.getElementsByClassName('gb_d')[0].background = 'none';
//main.style.background-color = '#000';

