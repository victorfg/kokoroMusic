import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(lista: any[], texto: string): any[] {
        if (!texto) return lista
        return lista.filter(user => {
            const textoToUpper: string = texto.toLocaleUpperCase();
            let nombreGrupo: string = "";

            if (user.nombreGrupo != undefined) {
                nombreGrupo = user.nombreGrupo.toLocaleUpperCase();
            }
            if (user.nombreCancion.toUpperCase().includes(textoToUpper) || nombreGrupo.includes(textoToUpper)) {
                return true;
            }
            return false;
        });
    }
}