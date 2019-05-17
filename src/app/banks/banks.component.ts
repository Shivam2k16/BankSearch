import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BankService } from '../bank.service';


@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {
ifsc:any;
id:any;
data:any;
info=[];
infokey:any;
  constructor(
  	    private route: ActivatedRoute,
  	    private api : BankService,
    private location: Location
  ) { 

  	this.ifsc = route.snapshot.paramMap.get('id');
    if(this.ifsc){
      this.getbankInfo("MUMBAI");
      this.getbankInfo("DELHI");
      this.getbankInfo("BANGALORE");
      this.getbankInfo("HYDERABAD");
    }

  	 

  }

  ngOnInit() {
  }

  getbankInfo(info){
    this.api.cacheData(info).subscribe((data)=> {
  this.data=data;
  this.id = this.data.map((e)=> { return e.ifsc; }).indexOf(this.ifsc);
        var bankinfo=this.data[this.id];
        this.infokey=Object.keys(bankinfo);
        this.info.push(bankinfo);
     });
  }

}
