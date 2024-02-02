import { Component } from '@angular/core';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Componentes-Martinez-Matias-Lucas-entrega1';

  isLoading = false;
  constructor(private loadingService: LoadingService){
    this.loadingService.isLoading$.subscribe({
      next: (value) => this.isLoading = value
    })
  }
}
