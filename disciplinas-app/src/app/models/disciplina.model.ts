export class Disciplina {
    id: number ;
    nome: string;
    dataInicio?: Date;
    dataFim?: Date;
   
    constructor(id: number, nome: string, dataInicio: string, dataFim: string) {
        this.id = id;
        this.nome = nome;
        this.dataInicio = new Date(dataInicio);
        this.dataFim = new Date(dataFim);
    }
}