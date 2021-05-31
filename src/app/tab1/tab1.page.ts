import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Filmes';

  listaVideos: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h 50m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat'
    },
    {
      nome: 'Liga da Justiça de Zack Snyder (2021)',
      lancamento: '18/03/2021',
      duracao: '4h 2m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ArWn6gCi61b3b3hclD2L0LOk66k.jpg',
      generos: ['Ação', 'Aventura', 'Fantasia', 'Ficção científica'],
      pagina: '/liga-justica'
    },
    {
      nome: 'The Matrix (1999)',
      lancamento: '31/03/1999',
      duracao: '1h 50m',
      classificacao: 100,
      cartaz: 'https://cdn.culturagenial.com/imagens/mv5bnzqzotk3otatndq0zi00ztvklwi0mtetmdllzjnkyznjntc4l2ltywdlxkeyxkfqcgdeqxvynju0otq0oty-v1-cke.jpg',
      generos: ['Ação', 'Ficção científica'],
      pagina: '/the-matrix'
    },
    {
      nome: 'The Matrix Reloaded (2003)',
      lancamento: '16/05/2003',
      duracao: '1h 50m',
      classificacao: 100,
      cartaz: 'https://images-na.ssl-images-amazon.com/images/I/51AhfnN47xL._AC_SY445_.jpg',
      generos: ['Ação', 'Ficção científica'],
      pagina: '/the-matrix-reloaded'
    },
    {
      nome: 'The Matrix Revolutions (2003)',
      lancamento: '05/11/2003',
      duracao: '1h 50m',
      classificacao: 100,
      cartaz: 'https://i.pinimg.com/originals/de/b7/33/deb7335fa11d8cb0e7d0ce6acf4033bc.jpg',
      generos: ['Ação', 'Ficção científica'],
      pagina: '/the-matrix'
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

  exibirFilme(filme: IFilme) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, favoritar!',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
