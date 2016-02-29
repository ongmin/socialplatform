const app = require('./app.js');
const PORT = process.env.PORT || 9090;

app.listen(PORT);
console.log('Listening on port: ' + PORT);