function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Cristiano",
    idade: 38,
}

const pessoa2 = {
    nome: "Mayara",
    idade: 28,
}

const animal = {
    nome: "Preto",
    idade: 5,
    raca: "Vira-lata",
}

console.log(calculaIdade.call(pessoa1, 50));