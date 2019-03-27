import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./layouts/main/main.component";
import { CharactersComponent } from "./containers/characters/characters.component";
import { HintsComponent } from "./containers/hints/hints.component";

const appRoutes: Routes = [
  { path: '', component: MainComponent},
  { path: 'characters', component: CharactersComponent },
  { path: 'hints', component: HintsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
