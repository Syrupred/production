import { useEffect, useState } from 'react';

import Button from 'shared/ui/Button/Button';

const BugButton = () => {
    const [error, setError] = useState(false);
    const handle = () => setError(true);
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={handle}>
            throw error
        </Button>
    );
};

export default BugButton;
