/**
 * Holt Produktdetail von der API und zeigt es an
 */
async function ladeProdukt() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  console.log(id);

  if (!id) return;

  try {
    const response = await fetch(`http://127.0.0.1:8000/api/products/${id}`);
    if (!response.ok) throw new Error("Produkt konnte nicht geladen werden.");

    const p = await response.json();
    const container = document.getElementById("product-detail");

    container.innerHTML = `
            <h2 class="card-title">${p.name}</h2>
            <p class="card-text">${p.short_description}</p>
            <p class="card-text">${p.product_description}</p>
            <p class="card-text fw-bold">${p.price} €</p>
            <a href="edit.html?id=${p.id}" class="btn btn-primary">Produkt bearbeiten</a>
            <a href="index.html" class="btn btn-secondary">Zurück</a>
          `;
  } catch (error) {
    console.error(error);
    document.getElementById("product-detail").innerHTML =
      '<p class="text-danger">Fehler beim Laden des Produkts.</p>';
  }
}

ladeProdukt();
