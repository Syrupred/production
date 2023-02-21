import { createSelector } from '@reduxjs/toolkit';

import { CounterState } from '../../slice/counterSlice';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterState) => counter.value,
);
