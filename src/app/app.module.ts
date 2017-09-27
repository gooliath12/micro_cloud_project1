import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { PlaceInputComponent } from './place-input.component';
import { PlaceDisplayComponent } from './place-display.component';
import { PlaceService } from './place.service';
import { PeopleInputComponent } from './people-input.component';
import { PeopleDisplayComponent } from './people-display.component';
import { PeopleService } from './people.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {
        path: 'placeinput',
        component: PlaceInputComponent
      },
      {
        path: 'people',
        component: PeopleInputComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    PlaceInputComponent,
    PlaceDisplayComponent,
    PeopleInputComponent,
    PeopleDisplayComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ PlaceService, PeopleService ],
})
export class AppModule { }
