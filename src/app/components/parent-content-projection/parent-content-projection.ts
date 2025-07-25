import { Component } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-parent-content-projection',
  imports: [],
  templateUrl: './parent-content-projection.html',
  styleUrl: './parent-content-projection.scss',
  providers: [
    GetDataService
  ],
  viewProviders: [
    // GetDataService,
  ]
})
export class ParentContentProjection {
}
