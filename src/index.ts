interface Aluno{
    nome: string
    idade: number
}

function getNome(aluno: Aluno) :String{
    return aluno.nome;
}

let aluno:Aluno = {
    nome: "Pedro",
    idade: 18
}

getNome(aluno);