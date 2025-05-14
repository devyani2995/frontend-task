document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll('input[name="unit"]');

    radios.forEach((radio) => {
        radio.addEventListener("change", function () {
            // Hide all tables and remove active class
            const allCards = document.querySelectorAll('.card');
            console.log(allCards)
            allCards.forEach(card => {
                card.classList.remove('active');
                const acc = card.querySelector('.table-accordion');
                if (acc){
                    acc.style.display = 'none';
                }
            });

            // Activate selected card and show its table
            const selectedCard = radio.closest('.card');
            selectedCard.classList.add('active');
            const selectedTable = selectedCard.querySelector('.table-accordion');
            if (selectedTable){
                selectedTable.style.display = 'block';
            }
        });
    });
});
