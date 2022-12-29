const dd = document.querySelector("pre");
const url = document.getElementById("url");
const btn = document.querySelector("button");

const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 YaBrowser/22.11.5.715 Yowser/2.5 Safari/537.36",
};

function scrapeData(e) {
  e.preventDefault();
  let xhr = new XMLHttpRequest();
  let response = String;
  xhr.open("get", url.value, { headers: headers }, true);
  xhr.responseType = "text";
  xhr.onload = async () => {
    if (xhr.status == 200) response = xhr.responseText;
    dd.innerText = response;
  };
  xhr.onerror = async () => console.log(`${xhr.status}: ${xhr.statusText}`);
  xhr.send();
}

btn.addEventListener("click", scrapeData);
