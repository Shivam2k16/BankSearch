import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { shareReplay,map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const CACHE_SIZE = 4;

@Injectable({
  providedIn: 'root'
})
export class BankService {

  
private cache1$: Observable<any>;
private cache2$: Observable<any>;
private cache3$: Observable<any>;
private cache4$: Observable<any>;
url = 'https://vast-shore-74260.herokuapp.com/banks?city=';



  constructor(private http: HttpClient) {
  	this.cacheData("MUMBAI");
    this.cacheData("DELHI");
    this.cacheData("BANGALORE");
    this.cacheData("HYDERABAD");
   }

  


cacheData(info){

  	if(info=="MUMBAI"){
  		if (!this.cache1$) {
      this.cache1$ = this.getdata(info).pipe(shareReplay(CACHE_SIZE));
	}
  	}
  	else if(info=="DELHI"){
  		if (!this.cache2$) {
      this.cache2$ = this.getdata(info).pipe(shareReplay(CACHE_SIZE));
	}
  	}
  	else if(info=="BANGALORE"){
  		if (!this.cache3$) {
      this.cache3$ = this.getdata(info).pipe(shareReplay(CACHE_SIZE));
	}
  	}
  	else if(info=="HYDERABAD"){
  		if (!this.cache4$) {
      this.cache4$ = this.getdata(info).pipe(shareReplay(CACHE_SIZE));
	}
  	}
  	else {
  		if (!this.cache1$) {
      this.cache1$ = this.getdata(info).pipe(shareReplay(CACHE_SIZE));
	}
  	}
	

if(info=="MUMBAI"){ return this.cache1$;}
  	else if(info=="DELHI"){ return this.cache2$;}
  	else if(info=="BANGALORE"){ return this.cache3$;}
  	else if(info=="HYDERABAD"){ return this.cache4$;}
  	else { return this.cache1$;}

}


  getdata(info){
  	var url=this.url+info;
   return this.http.get(`${url}`).pipe(
      map((response) => {return response;}));
  }
}
