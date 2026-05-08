import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonIcon,} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heartOutline, heart, } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonApp, IonRouterOutlet, IonIcon,],
})
export class AppComponent {
  constructor() {addIcons({heartOutline, heart,});}
}
