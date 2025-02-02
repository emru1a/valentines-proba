function selectOption(answer) {
    const questionElement = document.getElementById('question');
    const imageContainer = document.getElementById('image-container');
    const options = document.getElementById('options');
  
    if (answer === 'yes') {
      questionElement.textContent = "Yay! ❤️ I'm so happy you said yes!";
      imageContainer.style.backgroundImage = "url('cat-heart.gif')";
      options.innerHTML = "<p>Thank you for being amazing! ❤️</p>";
    } else if (answer === 'no') {
      questionElement.textContent = "Oh no! 😢 That's okay, maybe next time.";
      imageContainer.style.backgroundImage = "url('cat.gif')";
      options.innerHTML = "<p>Maybe next time? 💔</p>";
    }
  }
  
