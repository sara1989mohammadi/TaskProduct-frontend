import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { CreateProductComponent } from './pages/first-page/create-product/create-product.component';
import { ListProductComponent } from './pages/first-page/list-product/list-product.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule, MatInputModule } from '@angular/material'; 
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    CreateProductComponent,
    ListProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,CommonModule,
    ToastrModule.forRoot() ,
    MatDialogModule, MatSelectModule,
    HttpClientModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, FormsModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
