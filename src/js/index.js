            // Variável para armazenar o valor selecionado
            let selectedValue = null;

            // Seleciona todos os números e o botão
            const numbers = document.querySelectorAll('.number');
            const submitButton = document.getElementById('submit-button');
    
            // Adiciona evento de clique a cada número
            numbers.forEach(number => {
                number.addEventListener('click', function() {
                    // Remove a classe 'selected' de todos os números
                    numbers.forEach(num => num.classList.remove('selected'));
    
                    // Adiciona a classe 'selected' ao número clicado
                    this.classList.add('selected');
    
                    // Armazena o valor do número clicado
                    selectedValue = this.textContent;
    
                    // Habilita o botão SUBMIT
                    submitButton.disabled = false;
                });
            });
    
            // Adiciona evento de clique ao botão SUBMIT
            submitButton.addEventListener('click', function() {
                if (selectedValue) {
                    // Armazena o valor selecionado no localStorage
                    localStorage.setItem('selectedRating', selectedValue);
    
                    // Redireciona para a segunda página
                    window.location.href = './tanks.html';
                }
            });
   