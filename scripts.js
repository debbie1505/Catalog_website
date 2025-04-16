const url = 'geniuses.json';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const field = document.body.dataset.field; 
    const container = document.getElementById("profile-container");

    const filtered = data.filter(g => g.field === field);

    filtered.forEach(g => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = ` 
        <img src="${g.profilePhoto}" alt="${g.name}">
        <h2>${g.name}</h2> 
        <p><strong>Lifespan:</strong> ${g.lifespan}</p>
        <p><strong>Contribution:</strong> ${g.contribution}</p>
        <blockquote>"${g.quote}"</blockquote>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading geniuses:", error);
  });
