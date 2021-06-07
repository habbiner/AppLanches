import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LanchesPage } from '../lanches/lanches';
import { SucosPage } from '../sucos/sucos';
import { BebidasPage } from '../bebidas/bebidas';
import { SobremesaPage } from '../sobremesa/sobremesa';
import { RefeicoesPage } from '../refeicoes/refeicoes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{ title: string, img: string, component: any }>;

  constructor(public navCtrl: NavController) {

    this.pages = [
      { title: 'Lanches', img: '../../assets/imgs/lanche-ico.jpeg', component: LanchesPage },
      { title: 'Sucos', img: '../../assets/imgs/sucos-ico.jpeg', component: SucosPage },
      { title: 'Bebidas', img: '../../assets/imgs/bebidas-ico.jpeg', component: BebidasPage },
      { title: 'Sobremesa', img: '../../assets/imgs/img1.jpg', component: SobremesaPage },
      { title: 'Refeições', img: '../../assets/imgs/img2.jpg', component: RefeicoesPage }
    ];

  }

  openPage(page: any): void {
    this.navCtrl.push(page.component);
  }

  openBebidas(){
    this.navCtrl.push(BebidasPage);
  }

}
