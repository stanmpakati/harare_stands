import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './screens/homepage/homepage.component';
import { MapComponent } from './search-page/map/map.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchResultsComponent } from './search-page/search-results/search-results.component';
import { SearchBarComponent } from './search-page/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MapComponent,
    NavbarComponent,
    SearchPageComponent,
    SearchResultsComponent,
    SearchBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
