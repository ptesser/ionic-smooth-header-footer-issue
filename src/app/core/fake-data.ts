import { Cart, Lot, Plan, Stage, StageType, Worker } from 'src/app/core/models';

declare const chance: any;

export const fakeWorker: Worker = {
  id: chance.guid(),
  firstName: chance.first(),
  lastName: chance.last(),
};

export function getFakePlans(): Plan[] {
  const plans: Plan[] = new Array(chance.integer({ min: 1, max: 12 })).fill(0).map(() => {
    return getFakePlan();
  });
  return plans;
}

export function getFakePlan(): Plan {
  const createdAt: Date = chance.date({ year: 2019 });

  const plan: Plan = new Array(chance.integer({ min: 1, max: 10 })).fill(0).map(() => {
    const type = chance.pickone([StageType.Delivery, StageType.PickUp]);
    const customer = chance.pickone([
      { id: '1', name: 'Ospedaletto' },
      { id: '2', name: 'Ospedale Careggi' },
      { id: '3', name: 'Ospedale San Luca di Lucca' },
    ]);

    const date = chance.date({ year: createdAt.getFullYear(), month: createdAt.getMonth(), day: createdAt.getDay() });

    const availableLots = type === StageType.PickUp
      ? { availableLots: getFakeLots(type, date) }
      : {};

    const stage: Stage = {
      id: chance.guid(),
      carts: getFakeCarts(type, date),
      jobs: [],
      type,
      data: {
        customer: { id: customer.id, name: customer.name },
        ...availableLots,
        lat: chance.latitude(),
        long: chance.longitude(),
        address: chance.address(),
      },
      createdAt,
    };
    return stage;
  });

  return plan;
}

export function getFakeCarts(type: StageType, date: Date): Cart[] {
  if (type === StageType.PickUp) {
    return [];
  } else {
    const carts: Cart[] = new Array(chance.integer({ min: 2, max: 20 })).fill(0).map(() => {
      const cart: Cart = {
        id: chance.guid(),
        code: chance.guid(),
        qty: chance.integer({ min: 1, max: 100 }),
        lots: getFakeLots(type, date),
      };
      return cart;
    });

    return carts;
  }
}

export function getFakeLots(type: StageType, date: Date) {
  const lots: Lot[] = new Array(chance.integer({ min: 2, max: 4 })).fill(0).map(() => {
    const typeDate = type === StageType.PickUp
      ? { pickupDate: date }
      : { deliveryDate: date };

    const lot: Lot = {
      id: chance.guid(),
      ...typeDate,
    };
    return lot;
  });
  return lots;
}

export const FAKE_PLANS = getFakePlans();

export function selectFakeStagesForDay(date: Date) {
  const stages = FAKE_PLANS
    .filter((plan) => plan.length > 0)
    .filter((plan) => plan[0].createdAt.toDateString() === date.toDateString());

  return stages[0] || [];
}

export function selectfakeStageById(id: string) {
  const stages = FAKE_PLANS
    .filter((plan) => plan.length > 0)
    .map((plan) => {
      return plan.filter((p) => p.id === id);
    })
    .filter((plan) => plan.length > 0);

  return stages[0][0] || {};
}
