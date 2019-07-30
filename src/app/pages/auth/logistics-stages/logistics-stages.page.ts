import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { selectFakeStagesForDay } from 'src/app/core/fake-data';
import { Lot, StageType } from 'src/app/core/models';

@Component({
  selector: 'app-logistics-stages',
  templateUrl: './logistics-stages.page.html',
  styleUrls: ['./logistics-stages.page.scss'],
})
export class LogisticsStagesPage implements OnInit {

  readonly StageType = StageType;

  readonly planDate: string = this.route.snapshot.queryParams.date;

  readonly stages$ = of(selectFakeStagesForDay(new Date(this.planDate))).pipe(
    map((stages) => stages
      .map((stage) => {
        const dueDate = stage.type === StageType.Delivery
          ? stage.carts[0].lots[0].deliveryDate as Date
          : (stage.data.availableLots as Lot[])[0].pickupDate as Date;

        return {
          ...stage,
          dueDate,
        };

      })
      .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime()),
    ),
  );

  constructor(
    private readonly route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
  }

}
