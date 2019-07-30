import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { FAKE_PLANS } from 'src/app/core/fake-data';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.page.html',
  styleUrls: ['./plans.page.scss'],
})
export class PlansPage implements OnInit {

  readonly plans$ = of(FAKE_PLANS).pipe(
    map((plans) => plans
      .filter((plan) => plan.length > 0)
      .map((plan) => ({
        date: plan[0].createdAt,
        count: plan.length,
      }))
      .sort((a, b) => a.date.getTime() - b.date.getTime()),
    ),
  );

  constructor() { }

  ngOnInit() {
  }

}
