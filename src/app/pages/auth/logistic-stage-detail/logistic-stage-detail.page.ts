import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavController } from '@ionic/angular';

import { selectfakeStageById } from 'src/app/core/fake-data';
import { StageType } from 'src/app/core/models';

@Component({
  selector: 'app-logistic-stage-detail',
  templateUrl: './logistic-stage-detail.page.html',
  styleUrls: ['./logistic-stage-detail.page.scss'],
})
export class LogisticStageDetailPage implements OnInit {

  readonly StageType = StageType;

  readonly stageId: string = this.route.snapshot.params.id;
  readonly stage = selectfakeStageById(this.stageId);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly navController: NavController,
  ) {

  }

  ngOnInit() {
  }

  back() {
    this.navController.back();
  }

}
