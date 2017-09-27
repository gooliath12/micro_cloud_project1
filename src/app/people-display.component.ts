import { Component, Input } from '@angular/core';

import { People } from './people';

@Component({
  selector: 'people-display',
  template: `
    <div *ngIf='responseStatus'>
        responseStatus
    </div>
    <ul *ngIf='responseData'>
        <li *ngFor="let row of responseData">
            <div>{{row.id}}  {{row.firstName}}  {{row.lastName}}</div>
        </li>
    </ul>
  `,
})

export class PeopleDisplayComponent {
    @Input() responseStatus: string;
    @Input() responseData: People[];

}
