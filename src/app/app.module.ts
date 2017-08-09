import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { RouterModule } from '@angular/router';
import { ApiService } from './services/api.service';
import { TabsComponent } from './components/tabs/tabs.component';
import { SongsComponent } from './components/songs/songs.component';
import { ChordsComponent } from './components/chords/chords.component';
import { ArtistsComponent } from './components/artists/artists.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChordsComponent,
    TabsComponent,
    ArtistsComponent,
    SongsComponent
  ],
  imports: [
      HttpModule,
      BrowserModule,
      RouterModule.forRoot([
        { path: 'home', component: HomeComponent },
        { path: 'chords', component: ChordsComponent,
          children: [
            { path: ':letter', component: ArtistsComponent, outlet: 'artists' }
          ]},
        { path: 'tabs', component: TabsComponent },
      ]),
      FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
