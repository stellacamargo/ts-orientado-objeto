import { Aluno } from "./Aluno"
import { Professor } from "./Professor"

const joao = {
    nome: 'João',
    email: 'joao@email.com',
    senha: '12345'
}

const maria = {
    nome: 'Maria',
    email: 'maria@email.com',
    senha: '12345'
}

const ana = {
    nome: 'Ana',
    email: 'ana@email.com',
    senha: '12345'
}

const professoraMaria = new Professor(maria, 'História')
const alunoJoao = new Aluno(joao)
const alunaAna = new Aluno(ana)

professoraMaria.login('12345')
professoraMaria.lancarNota(alunoJoao, 8)
professoraMaria.lancarNota(alunoJoao, 10)
professoraMaria.lancarNota(alunoJoao, 7)
professoraMaria.lancarNota(alunoJoao, 5)

professoraMaria.lancarNota(alunaAna, 9)
professoraMaria.lancarNota(alunaAna, 8)
professoraMaria.lancarNota(alunaAna, 10)

console.log('Notas João >>>', alunoJoao.notas);
console.log('Média João >>>', alunoJoao.obterMedia());

console.log('Notas Ana >>>', alunaAna.notas);
console.log('Média Ana >>>', alunaAna.obterMedia());