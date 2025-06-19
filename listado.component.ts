import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  @HostBinding('class') class = 'mt-4';

  items: string[] = ['Elemento 1', 'Elemento 2'];

  agregarItem(valor: string) {
    if (valor.trim()) {
      this.items.push(valor.trim());
    }
  }
}
