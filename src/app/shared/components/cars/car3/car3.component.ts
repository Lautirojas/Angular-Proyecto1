import { Component } from '@angular/core';
import { TrafficLightService } from 'src/app/services/traffic-light.service';

@Component({
  selector: 'app-car3',
  templateUrl: './car3.component.html',
  styleUrls: ['./car3.component.css'],
})
export class Car3Component {
  constructor(public trafficLightService: TrafficLightService) {}
}
