import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, Router,Routes, RouterModule } from '@angular/router';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { CurrencyPipeTsPipe } from './appPipes/currency.pipe.ts.pipe';
import { CustomePipeTsPipe } from './custome.pipe.ts.pipe';
import { CustomeStyleDirectiveTsDirective } from './appdirectives/custome-style.directive.ts.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CustomePipe } from './appPipes/custome.pipe';
import { CustomeDirectiveDirective } from './appdirectives/custome-directive.directive';
import { FilterPipe } from './filter.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ParentsComponent } from './parents/parents.component';
import { ProductsService } from './appService/products.service';
import { CustomeService } from './appService/custome.service';

import { MessagesModule } from 'primeng/messages';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {SliderModule} from 'primeng/slider';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { TableComponent } from './table/table.component';
import { UpdateComponent } from './update/update.component';
import { SplitButtonModule } from 'primeng/splitbutton';

import { CascadeSelectModule } from 'primeng/cascadeselect';
import {RippleModule} from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { SubjectComponent } from './subject/subject.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { MapComponent } from './RXJS/map/map.component';
import { FilterComponent } from './RXJS/filter/filter.component';
import { ChildsComponent } from './RXJS/map/childs/childs.component';


const appRoutes: Routes=[
  // {path:'', component:UserlistComponent}
  // {path:'' , component:  HomeComponent},
  // {path:'about' , component: AboutComponent},
  // {path:'contact' , component: ContactComponent},
  // {path:'product' , component: ProductComponent},
  // {path:'', component: ParentComponent},
  // {path:'parents' , component:ParentsComponent},
  {path:'form', component: FormComponent},
  // {path:'table', component: TableComponent},
  // {path:'update/:id', component: UpdateComponent},
  {path:'subject', component: SubjectComponent},
  // {path:'comp1',component:Comp1Component},
  // {path:'comp2',component:Comp2Component},
  // {path:'comp3',component:Comp3Component},
  // {path:'map',component:MapComponent},
  // {path:'childs',component:ChildsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    HomeComponent,
    CurrencyPipeTsPipe,
    CustomePipeTsPipe,
    CustomeStyleDirectiveTsDirective,
    ParentComponent,
    ChildComponent,
    CustomePipe,
    CustomeDirectiveDirective,
    FilterPipe,
    ParentsComponent,
    FormComponent,
    TableComponent,
    UpdateComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    MapComponent,
    FilterComponent,
    ChildsComponent,







  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
RouterModule.forRoot(appRoutes),
FormsModule,
HttpClientModule,
ReactiveFormsModule,
BrowserAnimationsModule,
InputTextModule,
ButtonModule,
CardModule,
SliderModule,
SplitButtonModule,
CascadeSelectModule,
PasswordModule,
CalendarModule,
TableModule,
ToastModule,
ToolbarModule,
RippleModule,



  ],
  providers: [CustomeService,
    ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
