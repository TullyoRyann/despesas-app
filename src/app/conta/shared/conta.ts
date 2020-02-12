export class Conta {
    id: number;
    nome: string;
    saldoInicial: number;
    saldo: number;

    constructor(nome: string, saldoInicial: number, saldo: number){
        this.nome = nome,
        this.saldoInicial = saldoInicial,
        this.saldo = saldo;
    }
}