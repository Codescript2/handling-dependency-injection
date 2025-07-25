import { Component } from '@angular/core';
import { Child } from "../child/child";
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
  providers: [
    // GetDataService
  ],
  viewProviders: [
    GetDataService
  ]
})
export class Parent {

}
