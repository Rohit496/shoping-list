const insert = document.querySelector("#insert");
function myKeyEvents(event) {
  insert.innerHTML = "";
  const keyData = {
    key: event.key === " " ? "Space" : event.key,
    keyCode: event.keyCode,
    code: event.code,
  };

  for (let key in keyData) {
    const div = document.createElement("div");
    div.className = "key";
    const text = document.createTextNode(keyData[key]);
    const span = document.createElement("span");
    const textSpan = document.createTextNode(key);
    span.appendChild(textSpan);
    div.appendChild(span);
    div.appendChild(text);
    insert.appendChild(div);
  }
}

window.addEventListener("keydown", myKeyEvents);
