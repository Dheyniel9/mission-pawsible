import { createBoard } from '@wixc3/react-board';
import { Update_report } from '../../../components/update-report/update-report';

export default createBoard({
    name: 'Update_report',
    Board: () => <Update_report />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 770
    }
});
