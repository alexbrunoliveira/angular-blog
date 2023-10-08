import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string="https://media.comicbook.com/2021/03/zack-snyder-s-justice-league-1260500.jpeg?auto=webp&width=1024&height=768&crop=1024:768,smart"
  contentTitle:string="FILME MUITO BEM AVALIADO PELO PÚBLICO"
  contentDescription:string="lorem lorem lorem lorem lorem"


  constructor() {

  }

  ngOnInit(): void {
  }

}
