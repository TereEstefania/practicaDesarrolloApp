import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ListaService } from '../services/lista.service';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
 imports:[IonicModule, ExploreContainerComponent, CommonModule, ListaService]
})
export class Tab1Page {

  


 
}
