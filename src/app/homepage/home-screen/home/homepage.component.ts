import { Component, OnInit } from '@angular/core';
import { Creators } from 'src/app/model/creators.model';
import { Info } from 'src/app/model/info.model';
import { ShowInfoService } from 'src/app/services/show-info.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  info!: Info[];
  infoData!: Info;
  creators!: Creators[];
  constructor(private showInfoService : ShowInfoService) { }

  ngOnInit(): void {
 this.getInfo()

  }
getInfo(){
  this.showInfoService.showInfo().subscribe(data =>{
   
    this.info = data
    this.infoData= this.info[0]
    console.log(this.info)
    console.log(this.infoData)
    this.creators = this.infoData.creators
  })
}
}
