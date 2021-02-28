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
import { LoginComponent } from './login/login.component';
import { BuyStandComponent } from './buy-stand/buy-stand.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from './_helpers/basic-auth.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { CardDetailsComponent } from './buy-stand/card-details/card-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommunityComponent } from './homepage/community/community.component';

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
    LoginComponent,
    BuyStandComponent,
    CardDetailsComponent,
    CommunityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
