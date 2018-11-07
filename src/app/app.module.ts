import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@vwApp/app-routing.module';
import { AppComponent } from '@vwApp/app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
// import { environment } from '@vwEnv/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@vwCore/core.module';
import { SharedModule } from '@vwShared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ServiceWorkerModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
