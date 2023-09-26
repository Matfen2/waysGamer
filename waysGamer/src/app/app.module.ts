import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PresentComponent } from './present/present.component';
import { FooterComponent } from './footer/footer.component';
import { TodoistComponent } from './todoist/todoist.component';
import { ShowDirective } from './show.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentComponent,
    FooterComponent,
    TodoistComponent,
    ShowDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
