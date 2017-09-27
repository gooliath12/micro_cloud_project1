import { Component, OnInit } from '@angular/core';

import { Place } from './place';
import {PlaceService} from './place.service';

@Component({
  selector: 'place-input',
  template: `
<table>
  <tr>
    Address ID:&nbsp;&nbsp;&nbsp;&nbsp;<input [(ngModel)]="requestData.Address_id" placeholder="Address ID"/>
  </tr>
  <tr>
    City:&nbsp;&nbsp;&nbsp;&nbsp;<input [(ngModel)]="requestData.City" placeholder="City"/>
  </tr>
  <tr>
    Country:&nbsp;&nbsp;&nbsp;&nbsp;<input [(ngModel)]="requestData.Country" placeholder="Country"/>
  </tr>
  <tr>
    Street 1:&nbsp;&nbsp;&nbsp;&nbsp;<input [(ngModel)]="requestData.Street_1" placeholder="Street"/>
  </tr>
  <tr>
    Street 2:&nbsp;&nbsp;&nbsp;&nbsp;<input [(ngModel)]="requestData.Street_2" placeholder="Street"/>
  </tr>
  <tr>
    Postal Code:&nbsp;&nbsp;&nbsp;&nbsp;<input [(ngModel)]="requestData.Postal_Code" placeholder="Postal Code"/>
  </tr>
  <tr>
    State:&nbsp;&nbsp;&nbsp;&nbsp;<input [(ngModel)]="requestData.Sttea" placeholder="State"/>
  </tr>
</table>

  <div>
    <button (click)="onAdd()"> Add </button>
    <button (click)="onUpdate()"> Update </button>
    <button (click)="onQuery()"> Query </button>
    <button (click)="onDelete()"> Delete </button>
  </div>
  <place-display [responseData]="responseData"></place-display>
  `,
})

export class PlaceInputComponent implements OnInit {
    requestData: Place = { id: '11111',  country: 'aaa',  company: 'bbb' };
    responseData: Place[];
    responseStatus: string;

    constructor(private placeService: PlaceService) { }

    ngOnInit(): void {
      this.placeService.getPlaces().then(places => this.responseData = places);
    }

    onAdd(): void {
      this.requestData.id = this.requestData.id.trim();
      if (!this.requestData.id) {return; }
      this.placeService.create(this.requestData).then(() => {
        this.placeService.getPlaces().then(places => {
          this.responseData = places;
          console.log(this.responseData);
        });
      });
    }

    onUpdate(): void {
      this.placeService.update(this.requestData).then(() => {
        this.placeService.getPlaces().then(places => this.responseData = places);
      });
    }

    onQuery(): void {
      this.placeService.getplace(this.requestData.id).then(place => this.responseData = [place]);
    }

    onDelete(): void {
      this.placeService.del(this.requestData.id).then(() => {
        this.placeService.getPlaces().then(places => this.responseData = places);
      });
    }
}

