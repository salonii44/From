import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ParentComponent } from './parent/parent.component';
import { ParentsComponent } from './parents/parents.component';
import { FormComponent } from './form/form.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  // {path:'' , component:  HomeComponent},
  // {path:'about' , component: AboutComponent},
  // {path:'contact' , component: ContactComponent},
  // {path:'product' , component: ProductComponent},
  // {path:'parent', component: ParentComponent},
  // {path:'parents' , component:ParentsComponent},
  // {path:'form', component: FormComponent},
  // {path:'update/:id', component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  ],

})
export class AppRoutingModule { }
