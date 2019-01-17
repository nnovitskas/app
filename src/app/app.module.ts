import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GeneratorContService } from './containers/generat-cont/generator-cont.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneratorContComponent } from './containers/generat-cont/generator-cont.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    GeneratorComponent,
    GeneratorContComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GeneratorContService],
  bootstrap: [AppComponent]
})
export class AppModule { }
