import { Component, OnInit } from '@angular/core';
import { businesses } from '../../../../../hadnet-server/database/mock-business-data.js'
@Component({
  selector: 'ns-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.css'],
  moduleId: module.id,
})
export class BusinessProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
