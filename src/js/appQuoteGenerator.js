document.getElementById('buttonQuoteGenerator').addEventListener('click', doIt)

function doIt () {
const fetchHeader = {
    method: 'POST',
    headers: {
      "X-Mashape-Key": "Ml1ilbMVmDmsh31eNTDogCTTKU69p1oFPYzjsnAKQT690Fk7Nd",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    }
  }

  const fetchUrl = 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous'

  window.fetch(fetchUrl, fetchHeader)
    .then(res => res.json())
    .then(function (data) { // handle data here
      console.log(data)
      const quote = document.getElementById('quote')
      quote.innerText = ('\"' + data.quote + '\"')
      const author = document.getElementById('author')
      author.innerText = ('- ' + data.author)
    })
    .catch(err => console.log('Error:', err)) // handle errors here
}
