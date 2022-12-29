const dd = document.querySelector("pre");
const url = document.getElementById("url");
const btn = document.querySelector("button");

function extractText(strToParse, strStart, strFinish) {
  return strToParse.match(strStart + "(.*?)" + strFinish);
}

function scrapeData(e) {
  e.preventDefault();
  let xhr = new XMLHttpRequest();
  let response = String;
  xhr.open("get", url.value, { mode: "no-cors" }, true);
  xhr.responseType = "text";
  xhr.onload = async () => {
    if (xhr.status == 200) response = xhr.responseText;
    dd.innerText = response;
  };
  xhr.onerror = async () => console.log(`${xhr.status}: ${xhr.statusText}`);
  xhr.send();
}

btn.addEventListener("click", scrapeData);
