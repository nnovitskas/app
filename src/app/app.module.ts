import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GeneratorContService } from './containers/generator-cont/generator-cont.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneratorContComponent } from './containers/generator-cont/generator-cont.component';
import { SelectedDirective } from './containers/generator-cont/selected.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    GeneratorComponent,
    GeneratorContComponent,
    SelectedDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GeneratorContService],
  bootstrap: [AppComponent]
})
export class AppModule { }
