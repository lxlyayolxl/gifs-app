import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent  {

  constructor(private gifsfSservice:GifsService) {}

  buscar(termino:string):void{
    this.gifsfSservice.buscarGifs(termino);
  }

  get historial():string[]{
    return this.gifsfSservice.historial;
  }

}
