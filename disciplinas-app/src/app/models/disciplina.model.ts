export class Disciplina {
    codigo: number ;
    nome: string;
    dataInicio?: Date;
    dataFim?: Date;
   
    constructor(codigo: number, nome: string) {
        this.codigo = codigo;
        this.nome = nome;
    }
}