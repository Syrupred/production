import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';
import ThemeProvider from 'app/provider/ThemeProvider/ui/ThemeProvider';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/provider/ErrorBoundary';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/provider/StoreProvider';

render(
    <BrowserRouter>
        <StoreProvider>

            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>

        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
