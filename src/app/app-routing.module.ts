import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';


const routes: Routes = [
  {path: 'Offer', component: ContentComponent},
  {path: 'Create', component: AddProductComponent},
  {path: 'List', component: ListProductComponent},
  {path: '', pathMatch:'full', redirectTo: 'Create'}   
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
