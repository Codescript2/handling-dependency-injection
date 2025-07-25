import { Component } from '@angular/core';
import { Parent } from "./components/parent/parent";
import { ParentContentProjection } from "./components/parent-content-projection/parent-content-projection";
import { Child } from "./components/child/child";
import { GetDataService } from './services/get-data.service';

@Component({
  selector: 'app-root',
  imports: [
    Parent,
    ParentContentProjection,
    Child,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
