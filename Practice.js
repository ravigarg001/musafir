fetch("https://api.chucknorris.io/jokes/random").then(response => {
   return response.json()
}).then(res => {
   document.getElementById('joke').innerText = res.value;
})