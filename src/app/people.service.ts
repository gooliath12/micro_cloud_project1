import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { People } from './people';

@Injectable()
export class PeopleService {
    private peopleUrl = 'api/people';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) { }

    getPeoples(): Promise<People[]> {
        return this.http.get(this.peopleUrl)
                   .toPromise()
                   .then(response => response.json().data as People[])
                   .catch(this.handleError);
    }

    getpeople(id: string): Promise<People> {
        const url = `${this.peopleUrl}/${id}`;
        return this.http.get(url)
          .toPromise()
          .then(response => response.json().data as People)
          .catch(this.handleError);
      }

    update(people: People): Promise<People> {
        const url = `${this.peopleUrl}/${people.id}`;
        return this.http
          .put(url, JSON.stringify(people), {headers: this.headers})
          .toPromise()
          .then(() => people)
          .catch(this.handleError);
      }

    create(people: People): Promise<People> {
        console.log(people);
        return this.http
          .post(this.peopleUrl, JSON.stringify(people), {headers: this.headers})
          .toPromise()
          .then(() => people)
          .catch(this.handleError);
      }

    del(id: string): Promise<void> {
        const url = `${this.peopleUrl}/${id}`;
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