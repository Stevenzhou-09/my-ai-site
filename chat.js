async function send() {
    const text = document.getElementById("input").value;

    const response = await fetch("https://hzmyhomesky.dpdns.org/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: text })
    });

    const data = await response.json();
    document.getElementById("output").textContent = data.text;
}
