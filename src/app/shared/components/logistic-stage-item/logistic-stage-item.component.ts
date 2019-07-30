import { Component, Input, OnInit } from '@angular/core';

import { Lot, Stage, StageType } from 'src/app/core/models';

@Component({
  selector: 'app-logistic-stage-item',
  templateUrl: './logistic-stage-item.component.html',
  styleUrls: ['./logistic-stage-item.component.scss'],
})
export class LogisticStageItemComponent implements OnInit {

  stageDueDate?: Date;

  private _stage?: Stage;
  @Input() set stage(s: Stage | undefined) {
    this._stage = s;

    this.stageDueDate = undefined;

    if (s) {
      const dueDate = s.type === StageType.Delivery
        ? s.carts[0].lots[0].deliveryDate as Date
        : (s.data.availableLots as Lot[])[0].pickupDate as Date;
      this.stageDueDate = dueDate;
    }
  }
  get stage() {
    return this._stage;
  }

  readonly StageType = StageType;

  constructor() { }

  ngOnInit() { }

}
