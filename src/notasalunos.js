class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const alunos = [
    new Aluno('João', 9),
    new Aluno('Leandro', 5),
    new Aluno('Paloma', 10),
    new Aluno('Gustavo', 3),
    new Aluno('Gabriela', 6)
]

const aprovados = alunos.filter(aluno => aluno.nota >= 6);

console.log(aprovados);