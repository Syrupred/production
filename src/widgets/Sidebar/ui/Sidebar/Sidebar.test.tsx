/* eslint-disable i18next/no-literal-string */
import { screen, fireEvent } from '@testing-library/react';

import { renderComponent }
    from 'shared/lib/tests/ComponentRender/ComponentRender';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
    test('test', () => {
        renderComponent(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('toggle sidebar', () => {
        renderComponent(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
