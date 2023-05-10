const express = require('express');
const app = express();
const port = process.env.PORT || 3000
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/*pp.*', (req, res) => {
    res.send('good');
});

app.get('/users/:userId/color/:color', (req, res) => {
    let id = req.params.userId;
    console.log(req.params);
    console.log(id);
    res.send(`your user id is ${id} ${req.params.color} `)
})

app.route('/route').get((req, res) => {
    res.send('from a get request')
})
.post((req, res) => {
    let count = req.body.count;
    let color = req.body.color;
    console.log(req.body);
    res.send('from a post request ' + count + ' color ' + color)
})

app.listen(port, () => {
    console.log(`Server is up, listening on port: ${port}`);
})