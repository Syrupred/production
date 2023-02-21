/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux';
import Button from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{value}</h1>
            <Button onClick={increment} data-testid="increment-btn">
                increment
            </Button>
            <Button onClick={decrement} data-testid="value-btn">
                decrement
            </Button>
        </div>
    );
};

export default Counter;
