function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  let _tipoMovimento = "";

  this.movimentar = () => {
    console.log(_tipoMovimento);
  };

  this.setMovimento = (movimento) => {
    _tipoMovimento = movimento;
  };

  this.getMovimento = () => {
    return _tipoMovimento;
  };
}

function Crianca(nome, sobrenome, idade) {
  Pessoa.call(this, nome, sobrenome, idade);

  this.movimentar = () => {
    this.setMovimento("Rastejando...");
    console.log(this.getMovimento());
  };
}

function Adolescente(nome, sobrenome, idade) {
  Pessoa.call(this, nome, sobrenome, idade);

  this.movimentar = () => {
    this.setMovimento("Correndo...");
    console.log(this.getMovimento());
  };
}

function Adulto(nome, sobrenome, idade) {
  Pessoa.call(this, nome, sobrenome, idade);

  this.movimentar = () => {
    this.setMovimento("Caminhando...");
    console.log(this.getMovimento());
  };
}

const crianca1 = new Crianca("Jorge", "Lucas", 7);
const adolescente1 = new Adolescente("Gabriel", "Dias", 14);
const adulto1 = new Adulto("Gustavo", "Teofilo", 24);

console.log(
  `${crianca1.nome} ${crianca1.sobrenome} - Idade: ${crianca1.idade}`
);
crianca1.movimentar();

console.log(
  `${adolescente1.nome} ${adolescente1.sobrenome} - Idade: ${adolescente1.idade}`
);
adolescente1.movimentar();

console.log(`${adulto1.nome} ${adulto1.sobrenome} - Idade: ${adulto1.idade}`);
adulto1.movimentar();
