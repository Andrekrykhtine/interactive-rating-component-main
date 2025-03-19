    // Recupera o valor armazenado no localStorage
    const selectedRating = localStorage.getItem('selectedRating');

    // Exibe o valor no elemento <span>
    if (selectedRating) {
        document.getElementById('selected-rating').textContent = selectedRating;
    } else {
        // Caso não haja valor armazenado, exibe uma mensagem de erro
        document.getElementById('selected-rating').textContent = 'N/A';
    }