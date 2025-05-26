/**
 * Holt Produkte von der API und rendert sie
 */
async function ladeProdukte() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/products/");
    if (!response.ok) throw new Error("Fehler beim Laden der Produkte.");
    const produkte = await response.json();

    const container = document.getElementById("product-list");
    container.innerHTML = "";

    produkte.forEach((p) => {
      const card = document.createElement("div");
      card.className = "col-md-4";
      card.innerHTML = `
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">${p.name}</h5>
              <p class="card-text">${p.short_description}</p>
              <p class="card-text fw-bold">${p.price} €</p>
              <a href="detail.html?id=${p.id}" class="btn btn-primary btn-sm">Details</a>
              <a href="edit.html?id=${p.id}" class="btn btn-secondary btn-sm">Bearbeiten</a>
            </div>
          </div>
        `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error(error);
    document.getElementById("product-list").innerHTML =
      '<p class="text-danger">Fehler beim Laden der Produkte.</p>';
  }
}

ladeProdukte();
