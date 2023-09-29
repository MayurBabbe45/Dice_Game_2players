// Function to generate a random number between 1 and 6
function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Function to update the dice images for Player 1 and Player 2
  function updateDiceImages() {
    // Generate random numbers for Player 1 and Player 2
    const randomNumber1 = generateRandomNumber();
    const randomNumber2 = generateRandomNumber();
  
    // Get the image elements for Player 1 and Player 2
    const img1 = document.querySelector('.img1');
    const img2 = document.querySelector('.img2');
  
    // Update the source attributes of the dice images based on the random numbers
    img1.src = `./images/dice${randomNumber1}.png`;
    img2.src = `./images/dice${randomNumber2}.png`;
  
    // Update the alt attributes for accessibility
    img1.alt = `Dice ${randomNumber1}`;
    img2.alt = `Dice ${randomNumber2}`;

    let resultText = "";
    if (randomNumber1 > randomNumber2) {
      resultText = "Player 1 wins!";
    } else if (randomNumber2 > randomNumber1) {
      resultText = "Player 2 wins!";
    } else {
      resultText = "It's a draw!";
    }

      // Update the text of the h1 element
    const h1 = document.querySelector('h1');
    h1.textContent = resultText;
    
  }
  
  // Call the updateDiceImages function to set initial dice images
  updateDiceImages();
  
  // Add a click event listener to the "Refresh Me" button
  const refreshButton = document.querySelector('.btn');
  refreshButton.addEventListener('click', updateDiceImages);
  