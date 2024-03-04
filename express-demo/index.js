const express = require('express');
const app = express();

app.use(express.json());

const chocolates = [
    { id: 1, brand: "Cadbury", country: "United Kingdom" },
    { id: 2, brand: "Lindt", country: "Switzerland" },
    { id: 3, brand: "Ferrero Rocher", country: "Italy" },
    { id: 4, brand: "Hershey's", country: "United States" },
    { id: 5, brand: "Toblerone", country: "Switzerland" },
    { id: 6, brand: "Ghirardelli", country: "United States" },
    { id: 7, brand: "Godiva", country: "Belgium" },
    { id: 8, brand: "Milka", country: "Switzerland" },
    { id: 9, brand: "Nestlé", country: "Switzerland" },
    { id: 10, brand: "Green & Black's", country: "United Kingdom" },
    { id: 11, brand: "Guylian", country: "Belgium" },
    { id: 12, brand: "Fazer", country: "Finland" },
    { id: 13, brand: "Ritter Sport", country: "Germany" },
    { id: 14, brand: "Valrhona", country: "France" },
    { id: 15, brand: "Perugina", country: "Italy" }
];

// VIEW ALL
app.get('/api/chocolates', (req, res) => {
    res.send(chocolates);
});

// VIEW SPECIFIC
app.get('/api/chocolates/:id', (req, res) => {
    const chocolate = chocolates.find(c => c.id === parseInt(req.params.id));
    if (!chocolate) res.status(404).send('Chocolate data with the given ID is not found.');
    res.send(chocolate);
});

// CREATE DATA
app.post('/api/chocolates', (req, res) => {
    if (!req.body.brand || req.body.brand.length < 2) {
        res.status(404).send('Minimum characters of chocolate brand is 2');
        return;
    }
    else if (!req.body.country || req.body.country.length < 4) {
        res.status(404).send('Minimum characters of country is 4.');
        return;
    }
    const chocolate = {
        id: chocolates.length + 1,
        brand: req.body.brand,
        country: req.body.country
    }
    chocolates.push(chocolate);
    res.send(chocolate);
});

// UPDATE DATA
app.put('/api/chocolates/:id', (req, res) => {
    const chocolate = chocolates.find(c => c.id === parseInt(req.params.id));
    if (!chocolate) res.status(404).send('Chocolate data with the given ID is not found.');

    chocolate.brand = req.body.brand;
    chocolate.country = req.body.country;
    res.send(chocolate);
});

// DELETE
app.delete('/api/chocolates/:id', (req, res) => {
    const chocolate = chocolates.find(c => c.id === parseInt(req.params.id));
    if (!chocolate) res.status(404).send('Chocolate data with the given ID is not found.');

    const index = chocolates.indexOf(chocolate);
    chocolates.splice(index, 1);
    res.send(chocolate);
});


const port = process.env.PORT || 6969;
app.listen(port, () => console.log(`Listening on port ${port}`));

// REGUALOS, JESSIE ALBERT J.
// IT3R6
// 3-4-2024
// 5:30PM