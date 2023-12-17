import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // Importe RouterModule e Routes
import { HomeComponent } from "./pages/home/home.component";
import { ContentComponent } from "./pages/content/content.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'content/:id',
    component: ContentComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule], // Adicione esta linha para exportar RouterModule
})
export class AppRoutingModule { }
