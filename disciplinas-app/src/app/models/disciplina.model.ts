export class Disciplina {
    id: number ;
    nome: string;
    dataInicio?: Date;
    dataFim?: Date;
   
    constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
    }
}