import { useEffect } from 'react';

const UseInitialEffect = (callback: () => void) => {
    useEffect(() => {
        if (__PROJECT !== 'storybook') {
            callback();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default UseInitialEffect;
