import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormElementsComponent } from './components/form-elements/form-elements.component';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { FormElementComponent } from './components/form-elements/form-element/form-element.component';

@NgModule({
  declarations: [
    AppComponent,
    FormElementsComponent,
    FormContainerComponent,
    FormElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
