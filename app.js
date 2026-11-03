window.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search');
    const resultDiv = document.getElementById('result');

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        // Sanitize or encode query string to prevent injection
        const encodedQuery = encodeURIComponent(query);
        const url = `superheroes.php?query=${encodedQuery}`;

        fetch(url)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error('Error fetching superheroes:', error);
            });
    });
});