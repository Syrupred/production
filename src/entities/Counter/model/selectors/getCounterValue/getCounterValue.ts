import { createSelector } from '@reduxjs/toolkit';

import { CounterState } from '../../slice/counterSlice';
import { getCounter } from '../getCounter/getCounter';

// @ts-ignore
export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterState) => counter.value,
);
