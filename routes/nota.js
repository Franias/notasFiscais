const notas = [
    {
        data: '2017-10-31',
        items: [
            { codigo: '2143', valor: 200 },
            { codigo: '2111', valor: 500 }
        ]
    },
    {
        data: '2017-07-12',
        items: [
            { codigo: '2222', valor: 120 },
            { codigo: '2143', valor: 280 }
        ]
    }, 
    {
        data: '2017-02-02',
        items: [
            { codigo: '2143', valor: 110 },
            { codigo: '7777', valor: 390 }
        ]
    },     
];

module.exports = app => {

    app.get('/notas', (req, res) => res.json(notas));
}