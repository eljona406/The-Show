import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/model/info.model';
import { ShowInfoService } from 'src/app/services/show-info.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  info!: Info[];

  constructor(private showInfoService : ShowInfoService) { }

  ngOnInit(): void {
 this.getInfo()

  }
getInfo(){
  this.showInfoService.showInfo().subscribe(data =>{
    console.log(data)
    this.info = data
    console.log(this.info)
  })
}
}
