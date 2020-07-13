import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InfoPanelComponent } from './info-panel/info-panel.component';
import { MenuComponent } from './menu/menu.component';
import { InteractionService } from './services/interaction.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InboxComponent } from './inbox/inbox.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoPanelComponent,
    MenuComponent,
    InboxComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Animation Module
    FormsModule
  ],
  providers: [InteractionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
