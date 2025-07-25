import { Component, Host, Inject, inject, Optional } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
import { Parent } from '../parent/parent';
import { ParentContentProjection } from '../parent-content-projection/parent-content-projection';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss',
  providers: [
    // GetDataService
  ],
  // viewProviders: []
})
export class Child {
  // private _getData = inject(GetDataService, {optional: true, skipSelf: true});
  // private _getData = inject(GetDataService, {optional: true, self: true});
  // private _getData = inject(GetDataService, {optional: true, host: true});

  private _parent = inject(Parent, {optional: true});
  private _parentContent = inject(ParentContentProjection, {optional: true});

  constructor(
    @Inject(GetDataService) @Optional() @Host()
    private _getData: GetDataService
  ) {
    console.log({
      getData: this._getData,
      parent: this._parent,
      parentContent: this._parentContent,
    })
  }
}
