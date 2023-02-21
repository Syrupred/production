/* eslint-disable i18next/no-literal-string */
import { screen, fireEvent } from '@testing-library/react';

import { renderComponent }
    from 'shared/lib/tests/ComponentRender/ComponentRender';
import { Counter } from 'entities/Counter';

describe('Counter', () => {
    test('test', () => {
        renderComponent(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('click increment', () => {
        renderComponent(<Counter />, {
            initialState: {
                counter: { value: 10 },
            },
        });
        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
});
