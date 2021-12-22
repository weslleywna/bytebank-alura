import { Component, EventEmitter, Output } from "@angular/core";
import { Transferencia } from "../models/transferencia.model";
import { TransferenciaService } from "../services/transferencia.service";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.componenet.scss']
})
export class NovaTransferenciaComponent {

    @Output() aoTransferir = new EventEmitter<any>();

    valor: number | undefined;
    destino: number | undefined;

    constructor (private service: TransferenciaService) {}

    transferir(): void {
        console.log('solicitado nova transferencia');
        const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino}

        this.service.adicionar(valorEmitir).subscribe(resultado => {
            console.log(resultado);
            this.limparCampos();
        }, error => {
            console.log(error);
        });
    }

    limparCampos() {
        this.valor = 0;
        this.destino = 0;
    }
}