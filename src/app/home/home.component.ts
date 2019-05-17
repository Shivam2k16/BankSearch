import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
data:any;
pagesize=5;
p=1;
bankdata;
query:any;
cities:any;
MUMBAI;
favouriteBanks=[];
  constructor(private api:BankService,private router:Router) {
    this.onSelect("MUMBAI");
  }
  	 
  

  ngOnInit() {
  }


onSelect(value){
  this.favouriteBanks.length=0;
    this.api.cacheData(value).subscribe((data)=> {
          this.data=data;
       }); 
    this.getfavour(value);
  
}

addFav(ifsc,bankname){
	localStorage.setItem(bankname, JSON.stringify(bankname));
	localStorage.setItem(ifsc, JSON.stringify(ifsc));
  this.router.navigate(['/favour']);
}

getfavour(info){
  this.api.cacheData(info).subscribe((data)=> {
      this.bankdata=data;
      for (var i = 0; i < this.bankdata.length; i++) {
        var x=JSON.parse(localStorage.getItem(this.bankdata[i]["bank_name"]));
        var y=JSON.parse(localStorage.getItem(this.bankdata[i]["ifsc"]));
        if(x&&y){
          var obj={
            "bank_name":x,
            "ifsc":y
          };
          this.favouriteBanks.push(obj);
        }
      }
     });
}

}
