import { Aluno } from "./Aluno";
import { TUsuario, Usuario } from "./Usuario";

interface IProfessor {
    lancarNota(aluno: Aluno, nota: number): void
}

export class Professor extends Usuario implements IProfessor {
    disciplina: string

    constructor(dados: TUsuario, disciplina: string) {
        super(dados)
        this.disciplina = disciplina
    }
    lancarNota(aluno: Aluno, nota: number): void {
        this.verificaLogin()
        aluno.notas.push(nota)
    }

    private verificaLogin(): void {
        if (!this.logado) {
            throw new Error('Professor(a) não está autenticado.')
        }
    }
}