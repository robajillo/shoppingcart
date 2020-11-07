import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
const serverURL = 'https://cors-anywhere.herokuapp.com/https://roba-ecommerce.herokuapp.com/api/products/'


@Injectable()
export class FetchProductService {

  constructor(private http: HttpClient) {
      }
    
      getAll(): Observable<any> {
        return this.http.get( serverURL );
      }
    
      get(id): Observable<any> {
        return this.http.get(`${serverURL}/${id}`);
      }
      fetchCategory(category): Observable<any> {
        return this.http.get(`${serverURL}?category=${category}`);
      }
      create(data): Observable<any> {
        return this.http.post(serverURL, data);
      }
    
      update(id, data): Observable<any> {
        return this.http.put(`${serverURL}/${id}`, data);
      }
    
      delete(id): Observable<any> {
        return this.http.delete(`${serverURL}/${id}`);
      }
    
      deleteAll(): Observable<any> {
        return this.http.delete(serverURL);
      }
    
      findByName(name): Observable<any> {
        return this.http.get(`${serverURL}?name=${name}`);
      }
    }
