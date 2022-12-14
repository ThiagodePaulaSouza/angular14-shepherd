import { Component } from '@angular/core';
import { ShepherdService } from 'angular-shepherd';
import { steps as defaultSteps, defaultStepOptions} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'romario';
  constructor(private shepherdService: ShepherdService) {}
  ngAfterViewInit() {
    this.shepherdService.defaultStepOptions = defaultStepOptions;
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;
    this.shepherdService.addSteps(defaultSteps)
    this.shepherdService.start();
  }
}
