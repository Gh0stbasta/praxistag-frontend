document.getElementById("create-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const short_description = document.getElementById("short-description").value;
  const product_description = document.getElementById("description").value;
  const stock = document.getElementById("stock").value;
  const price = document.getElementById("price").value;

  try {
    const response = await fetch("http://localhost:8000/api/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        short_description,
        product_description,
        stock,
        price,
      }),
    });

    if (!response.ok) throw new Error("Fehler beim Erstellen des Produkts");

    document.getElementById("feedback").innerHTML =
      '<p class="text-success">Produkt wurde erfolgreich erstellt!</p>';
    document.getElementById("create-form").reset();
  } catch (error) {
    console.error(error);
    document.getElementById("feedback").innerHTML =
      '<p class="text-danger">Fehler beim Erstellen des Produkts.</p>';
  }
});
