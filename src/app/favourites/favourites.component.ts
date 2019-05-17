import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
bankdata:any;
p=1;
query:any;
pagesize=5;
favouriteBanks=[];
  constructor(private api:BankService) {
  	this.getfavour("MUMBAI");
    this.getfavour("DELHI");
    this.getfavour("BANGALORE");
    this.getfavour("HYDERABAD");
    
   }

  ngOnInit() {
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
