import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ExampleService {

    private data = {
        name: 'John Doe',
        role: 'Web Developer'
    };
    private readonly TIME_TO_RESPONSE = 1000; // miliseconds

    constructor() { }

    read(): Observable<any> {
        return new Observable(observer => {
            setTimeout(() => {
                observer.next(this.data);
                observer.complete();
            }, this.TIME_TO_RESPONSE)
        });
    }
}