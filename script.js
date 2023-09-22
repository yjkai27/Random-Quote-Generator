async function getRandomQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    const quote = data.content;
    const author = data.author;
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    quoteElement.textContent = quote;
    authorElement.textContent = "- " + author;

    const randomColor = getColor();
    document.body.style.backgroundColor = randomColor;
    quoteElement.style.color = randomColor;
    authorElement.style.color = randomColor;
    document.querySelector('h1').style.color = randomColor;
    document.querySelector('button').style.backgroundColor = randomColor;
    
  } catch (error) {
    console.log('Error:', error);
  }
}

function getColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 12)]; 
  }
  return color;
}
getRandomQuote();
