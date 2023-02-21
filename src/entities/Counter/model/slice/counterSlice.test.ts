import { counterActions, counterReducer, CounterState } from './counterSlice';

describe('counterSlice', () => {
    test('should return counter value', () => {
        const state: CounterState = {
            value: 10,
        };
        expect(counterReducer(state as CounterState, counterActions.decrement())).toEqual(
            {
                value: 9,
            },
        );
    });

    test('should worf with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual(
            {
                value: 1,
            },
        );
    });
});
