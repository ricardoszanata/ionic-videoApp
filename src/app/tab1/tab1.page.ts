import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController, public toastController: ToastController) {}
  async confirmarFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o FILME?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, Favoritar!',
          handler: () => {
            this.mensagemToast();
          }
        }
      ]
    });

    await alert.present();
  }
  async mensagemToast() {
    const toast = await this.toastController.create({
      message: 'Você acabou de Favoritar o FILME.',
      duration: 2000,
      color:'primary'
    });
    toast.present();
  }
}
