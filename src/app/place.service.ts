import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Place } from './place';

const withCookieOptions = new RequestOptions({ withCredentials: true });

@Injectable()
export class PlaceService {
    private placesUrl = 'http://node-express-env.82fjyxpzxd.us-east-1.elasticbeanstalk.com/Person';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) { }

    getPlaces(): Promise<Place[]> {
        return this.http.get(this.placesUrl)
                   .toPromise()
                   .then(
                       function(response){
                        console.log(response.json());
                        return response.json().data as Place[];
                    }
                    //    response => response.json().data as Place[]
                    )
                   .catch(this.handleError);
    }

    getplace(id: string): Promise<Place> {
        const url = `${this.placesUrl}/${id}`;
        return this.http.get(url)
          .toPromise()
          .then(response => response.json().data as Place)
          .catch(this.handleError);
      }

    update(place: Place): Promise<Place> {
        const url = `${this.placesUrl}/${place.id}`;
        return this.http
          .put(url, JSON.stringify(place), {headers: this.headers})
          .toPromise()
          .then(() => place)
          .catch(this.handleError);
      }

    create(place: Place): Promise<Place> {
        console.log(place);
        return this.http
          .post(this.placesUrl, JSON.stringify(place), {headers: this.headers})
          .toPromise()
          .then(() => place)
          .catch(this.handleError);
      }

    del(id: string): Promise<void> {
        const url = `${this.placesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
          .toPromise()
          .then(() => null)
          .catch(this.handleError);
      }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}