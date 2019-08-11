import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ModalDismissDirective } from './directives/modal-dismiss.directive';
import { GridFilterPipe } from './pipe/grid-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ModalDismissDirective,
    GridFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
