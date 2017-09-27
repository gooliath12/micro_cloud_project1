import { Component, Input } from '@angular/core';

import { Place } from './place';

@Component({
  selector: 'place-display',
  template: `
    <div *ngIf='responseStatus'>
        responseStatus
    </div>
    <ul *ngIf='responseData'>
        <li *ngFor="let row of responseData">
            <div>{{row.Address_id}}  {{row.City}}  {{row.Country}}</div>
        </li>
    </ul>
  `,
})

export class PlaceDisplayComponent {
    @Input() responseStatus: string;
    @Input() responseData: Place[];

}
