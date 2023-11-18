export class Disciplina {
    id: number ;
    nome: string;
    dataInicio?: string;
    dataFim?: string;
   
    constructor(id: number, nome: string, dataInicio: string, dataFim: string) {
        this.id = id;
        this.nome = nome;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }
}