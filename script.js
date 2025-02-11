function answer(response) {
    const yesButton = document.querySelector('.yes');

    if (response === 'yes') {
        // Change the "Yes" button to a "No" button
        yesButton.innerText = "No";
        yesButton.classList.remove('yes');
        yesButton.classList.add('no');
        yesButton.style.backgroundColor = "#f44336"; // Change to red color to match "No" button
        yesButton.setAttribute('onclick', 'moveNo()'); // Make the new button move on click/hover
    }
}

function moveNo() {
    const noButton = document.querySelector('.no');

    // Generate random positions within a large gap
    const randomX = Math.floor(Math.random() * 500) - 250; // Random position between -250px and 250px on X-axis
    const randomY = Math.floor(Math.random() * 300) - 150; // Random position between -150px and 150px on Y-axis

    // Apply the new random position to the "No" button
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
