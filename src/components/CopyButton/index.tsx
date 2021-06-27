import React from 'react';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
import { Button } from '@material-ui/core';

import * as copy from 'copy-to-clipboard';
import { useToasterUpdate } from '../Toaster/ToasterProvider';

interface Props {
    data?: string;
}

const CopyButton: React.FC<Props> = (props: Props) => {
    const { data } = props;
    const { setToasterState } = useToasterUpdate();

    const handleCopy = () => {
        if (!data) {
            return;
        }

        const feedback = data.substr(0, 20);
        const message = `Content copied into clipboard: ${feedback} …`;

        copy.default(data, { format: 'text/plain' });
        setToasterState({ open: true, message, type: 'success', autoHideDuration: 2000 });
    };

    return (
        <Button onClick={handleCopy} disabled={!data} title="Copy to clipboard" variant='contained' color='primary'>
            <AssignmentTurnedIn />
        </Button>
    );
};

export default CopyButton;
