export interface Transferencia {
    id?: string;
    valor: number | string | undefined;
    destino: number | string | undefined;
    data?: Date;
}