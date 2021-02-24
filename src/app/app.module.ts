import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';
import { MapComponent } from './search-page/map/map.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchResultsComponent } from './search-page/search-results/search-results.component';
import { SearchBarComponent } from './search-page/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StandsComponent } from './search-page/search-results/stands/stands.component';
import { StandComponent } from './search-page/search-results/stands/stand/stand.component';
import { SearchInputComponent } from './shared/search-input/search-input.component';
import { AvailabilityToggleComponent } from './search-page/search-bar/availability-toggle/availability-toggle.component';
import { CommunityToggleComponent } from './search-page/search-bar/community-toggle/community-toggle.component';
import { MinPriceInputComponent } from './search-page/search-bar/min-price-input/min-price-input.component';
import { GlenMapComponent } from './search-page/glen-map/glen-map.component';
import { StandTypeToggleComponent } from './search-page/search-bar/stand-type-toggle/stand-type-toggle.component';
import { StandDetailsComponent } from './shared/stand-details/stand-details.component';
import { CitiesComponent } from './homepage/cities/cities.component';
import { StandtypeComponent } from './homepage/standtype/standtype.component';
import { StandModalComponent } from './search-page/search-results/stands/stand/stand-modal/stand-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MapComponent,
    NavbarComponent,
    SearchPageComponent,
    SearchResultsComponent,
    SearchBarComponent,
    StandsComponent,
    StandComponent,
    StandDetailsComponent,
    StandTypeToggleComponent,
    SearchInputComponent,
    AvailabilityToggleComponent,
    CommunityToggleComponent,
    MinPriceInputComponent,
    GlenMapComponent,
    CitiesComponent,
    StandtypeComponent,
    StandModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
