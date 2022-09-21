import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AuthService } from './app/App-Services/AuthService';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//refresh the token timer
  document.addEventListener('click', ()=>{
    let auth = new AuthService();
    auth.refreshTimer()
  })
