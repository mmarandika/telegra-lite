
function publish() {
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  if (!title || !content) {
    alert("Judul dan konten wajib diisi!");
    return;
  }
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const html = `<h1>${title}</h1><p>${content.replace(/\n/g, "<br>")}</p>`;
  const blob = new Blob([html], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = slug + ".html";
  a.click();
  document.getElementById("link").innerHTML = `<strong>Halaman dibuat:</strong> <a href="${slug}.html">${slug}.html</a>`;
}
