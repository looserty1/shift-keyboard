document.getElementById("translate").addEventListener("click", translate);
function translate() {
  let shift = parseInt(document.getElementById("shift").value);
  let text = document.getElementById("input").value;
  let a = [null, "a", 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "A", 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', "&nbsp;", ".", "!", "ñ", "á", "ó", "ú", "é", "ä", "å", "®", "þ", "ü", "í", "ö", "ß", "ð", "ø", "æ", "©", "µ", "ç", "¿", "²", "³", "¤", "€", "¼", "½", "¾", "‘", "¥", "×", "¡", "¢", "°", "Ø", "1", "2", "3", "0", "5", "6", "9", "7", "8", "4"];
  text = text.split(" ");
  let i = -1;
  let a2 = [];
  while (i<text.length-1) {
    i += 1;
    a2.push(a[text[i]-shift]);
    console.log(a[text[i]-shift])
  }
  document.getElementById("return").innerHTML = a2.join("");
}