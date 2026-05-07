function setCount(number) {
  document.getElementById("count").value = number;
}

function generateUUIDs() {

  let count =
    parseInt(document.getElementById("count").value);

  if (isNaN(count) || count < 1) {
    count = 1;
  }

  if (count > 1000) {
    count = 1000;
  }

  document.getElementById("count").value = count;

  const result =
    document.getElementById("result");

  result.innerHTML = "";

  for (let i = 0; i < count; i++) {

    const uuid =
      crypto.randomUUID();

    const item =
      document.createElement("div");

    item.className = "uuid-item";

    item.innerHTML = `
      <span class="uuid-number">
        ${i + 1}
      </span>

      <span class="uuid-text">
        ${uuid}
      </span>

      <button
        class="copy-single"
        onclick="copySingleUUID('${uuid}')"
      >
        Copy
      </button>
    `;

    result.appendChild(item);
  }
}

function copyUUIDs() {

  const items =
    document.querySelectorAll(".uuid-item");

  const text =
    Array.from(items)
      .map(item => item.textContent)
      .join("\n");

  navigator.clipboard.writeText(text);

  alert("Copied!");
}

function copySingleUUID(uuid) {

  navigator.clipboard.writeText(uuid);

  alert("Copied!");
}

generateUUIDs();