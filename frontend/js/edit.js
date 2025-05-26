const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

async function ladeProdukt() {
  try {
    const res = await fetch(`http://localhost:8000/api/products/${productId}`);
    if (!res.ok) throw new Error("Produkt konnte nicht geladen werden.");
    const produkt = await res.json();
    document.getElementById("name").value = produkt.name;
    document.getElementById("short-description").value = produkt.short_description;
    document.getElementById("description").value = produkt.product_description;
    document.getElementById("stock").value = produkt.stock;
    document.getElementById("price").value = produkt.price;
  } catch (err) {
    alert("Fehler: " + err.message);
  }
}

document.getElementById("edit-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const updatedProdukt = {
    name: document.getElementById("name").value,
    short_description: document.getElementById("short-description").value,
    product_description: document.getElementById("description").value,
    stock: parseFloat(document.getElementById("stock").value),
    price: parseFloat(document.getElementById("price").value),
  };

  try {
    const res = await fetch(`http://localhost:8000/api/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProdukt),
    });

    if (!res.ok) throw new Error("Speichern fehlgeschlagen.");
    alert("Produkt wurde gespeichert.");
    window.location.href = "index.html";
  } catch (err) {
    alert("Fehler beim Speichern: " + err.message);
  }
});

ladeProdukt();
