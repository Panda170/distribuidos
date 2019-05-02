var express = require('express');
var app = express();

app.get('/hola', function (req, res) {
  res.send('Servidor número 2 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu nunc non lorem consectetur fermentum. Maecenas sed eleifend nisi. Morbi posuere congue felis et semper. Proin maximus magna eros, et dictum massa interdum eu. In vitae malesuada ex. Fusce nec augue sit amet neque facilisis mollis. Donec ac tellus pulvinar, dictum leo vel, lobortis odio. Mauris porttitor lacus id tortor dapibus, nec ultricies quam scelerisque. Aenean eu dui lacus. Etiam sed efficitur mi, in elementum leo. Suspendisse et arcu sed nulla aliquet dictum. Suspendisse sollicitudin sem vel arcu dictum luctus in in justo. Etiam cursus egestas metus non fermentum. Donec sagittis orci urna, ut feugiat dolor gravida et. Vivamus quis felis varius, posuere est a, porttitor augue.</p>');
});
	
app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});