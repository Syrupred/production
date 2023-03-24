import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface RenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export const renderComponent = (component: ReactNode, options: RenderOptions = {}) => {
    const { route = '/' } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={options.initialState as StateSchema}>

                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>

            </StoreProvider>
        </MemoryRouter>,
    );
};
