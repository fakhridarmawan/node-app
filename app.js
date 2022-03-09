const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Bug fixing'))
app.listen(3000, () => console.log('Server ready'))