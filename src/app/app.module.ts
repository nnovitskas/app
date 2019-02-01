import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GeneratorService } from './containers/generator.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneratorContComponent } from './containers/generator-cont/generator-cont.component';
import { SelectedDirective } from './containers/selected.directive';
import { Routes, RouterModule} from "@angular/router";
import { CharactersComponent } from './containers/characters/characters.component';
import { HintsComponent } from './containers/hints/hints.component';

const appRouts: Routes = [
  { path: '', component: MainComponent},
  { path: 'characters', component: CharactersComponent },
  { path: 'hints', component: HintsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    GeneratorComponent,
    GeneratorContComponent,
    SelectedDirective,
    CharactersComponent,
    HintsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [GeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
