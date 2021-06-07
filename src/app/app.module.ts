import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LanchesPage } from '../pages/lanches/lanches';
import { SucosPage } from '../pages/sucos/sucos';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { SobremesaPage } from '../pages/sobremesa/sobremesa';
import { RefeicoesPage } from '../pages/refeicoes/refeicoes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LanchesPage,
    SucosPage,
    BebidasPage,
    SobremesaPage,
    RefeicoesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LanchesPage,
    SucosPage,
    BebidasPage,
    SobremesaPage,
    RefeicoesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
