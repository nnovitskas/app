import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GeneratorService } from './services/generator.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneratorContComponent } from './containers/generator-cont/generator-cont.component';
import { CharactersComponent } from './containers/characters/characters.component';
import { HintsComponent } from './containers/hints/hints.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule, MatInputModule,
  MatRadioModule, MatSelectModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    GeneratorComponent,
    GeneratorContComponent,
    CharactersComponent,
    HintsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule

  ],
  providers: [GeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
