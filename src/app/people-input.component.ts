import { Component, OnInit } from '@angular/core';

import { People } from './people';
import {PeopleService} from './people.service';

@Component({
  selector: 'people-input',
  template: `
  <input [(ngModel)]="requestData.id" peopleholder="ID"/>
  <input [(ngModel)]="requestData.country" peopleholder="Country">
  <input [(ngModel)]="requestData.company" peopleholder="Company Name">
  <div>
    <button (click)="onAdd()"> Add </button>
    <button (click)="onUpdate()"> Update </button>
    <button (click)="onQuery()"> Query </button>
    <button (click)="onDelete()"> Delete </button>
  </div>
  <people-display [responseData]="responseData"></people-display>
  `,
})

export class PeopleInputComponent implements OnInit {
    requestData: People = { id: '11111',  firstName: 'aaa',  lastName: 'bbb' };
    responseData: People[];
    responseStatus: string;

    constructor(private peopleService: PeopleService) { }

    ngOnInit(): void {
      this.peopleService.getPeoples().then(people => this.responseData = people);
    }

    onAdd(): void {
      this.requestData.id = this.requestData.id.trim();
      if (!this.requestData.id) {return; }
      this.peopleService.create(this.requestData).then(() => {
        this.peopleService.getPeoples().then(people => {
          this.responseData = people;
          console.log(this.responseData);
        });
      });
    }

    onUpdate(): void {
      this.peopleService.update(this.requestData).then(() => {
        this.peopleService.getPeoples().then(people => this.responseData = people);
      });
    }

    onQuery(): void {
      this.peopleService.getpeople(this.requestData.id).then(people => this.responseData = [people]);
    }

    onDelete(): void {
      this.peopleService.del(this.requestData.id).then(() => {
        this.peopleService.getPeoples().then(people => this.responseData = people);
      });
    }
}

