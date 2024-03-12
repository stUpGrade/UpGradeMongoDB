app.get('/bebidas', (request, response) => {
    //request -> comanda del camarero 
    const bebida = request.query.bebida;
    //valide si la bebida que pide el cliente es una de las siguientes = [agua, cafe, vino, ron]
    //si no es decimos que no esta en el menu
    const bebidasValidas = ['fanta', 'agua', 'vino', 'ron']

    if (bebidasValidas.includes(bebida)) {
        //response -> lo que le devuelvo al cliente
        response.status(200).json({
            status: 200,
            message: `Gracias, aqui tiene su ${bebida}`
        })
    } else {
        response.status(404).json({
            status: 404,
            message: `Lo que ha pedido (${bebida}​​​​​​) no es una bebida`
        })
    }
});


app.get('/postres', (request, response) => {
    const postre = request.query.postre;
    const postresValidos = ['pastel', 'helado', 'quesillo']
    if (postresValidos.includes(postre)) {
        response.status(200).json({
            status: 200,
            message: `Gracias, aqui tiene su ${postre}`
        })
    } else {
        response.status(404).json({
            status: 404,
            message: `Lo que ha pedido (${postre}​​​​​​) no esta en el menu de postre`
        })
    }
});

app.get('/platos', (request, response) => {
    const plato = request.query.plato;
    const platosValidos = ['carne', 'pollo', 'bologna']
    if (platosValidos.includes(plato)) {
        response.status(200).json({
            status: 200,
            message: `Gracias, aqui tiene su ${plato}`
        })
    } else {
        response.status(404).json({
            status: 404,
            message: `Lo que ha pedido (${plato}​​​​​​) no esta en el menu`
        })
    }
});