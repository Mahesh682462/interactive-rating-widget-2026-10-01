document.addEventListener('DOMContentLoaded', () => {
    const ratingButtons = document.querySelectorAll('.rating-btn');
    const submitBtn = document.getElementById('submitBtn');
    const ratingCard = document.getElementById('ratingCard');
    const thankYouCard = document.getElementById('thankYouCard');
    const selectedRatingSpan = document.getElementById('selectedRating');

    let selectedRating = 0;

    ratingButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'selected' class from all buttons
            ratingButtons.forEach(btn => btn.classList.remove('selected'));

            // Add 'selected' class to the clicked button
            button.classList.add('selected');

            // Store the selected rating
            selectedRating = parseInt(button.dataset.rating);
        });
    });

    submitBtn.addEventListener('click', () => {
        if (selectedRating > 0) {
            selectedRatingSpan.textContent = selectedRating;
            ratingCard.classList.add('hidden');
            thankYouCard.classList.remove('hidden');
        } else {
            alert('Please select a rating before submitting!');
        }
    });
});
