function porcentagemRepresentacao(dado) {
    total = 0
    ret = new Map();
    for(valor of dado)
    {
        total +=valor.valor
    }
    for( x of dado)
    {
        ret.set(x.estado,(100*x.valor)/total) 
    }

    return ret
    

}

dados = [
    {
        "estado": "SP",
        "valor": 67836.43
    },
    {
        "estado": "RJ",
        "valor": 36678.66
    },
    {
        "estado": "MG",
        "valor": 29229.88
    },
    {
        "estado": "ES",
        "valor": 27165.48
    },
    {
        "estado": "Outros",
        "valor": 19849.53
    },
]
console.log(porcentagemRepresentacao(dados))