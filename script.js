text = "aWeSome";
document.write(text.toUpperCase());
document.write("<br>")
document.write(text.toLowerCase());
document.write("<br>")
document.write(text.startsWith("a"));
document.write("<br>");

text2 = "JavaScript is the Coolest!";
var regexp = new RegExp("JavaScript")
var result = regexp.test(text2);
document.write(result);