import { createBoard } from '@wixc3/react-board';
import { Detailpage } from '../../../components/detailpage/detailpage';

export default createBoard({
    name: 'Detailpage',
    Board: () => <Detailpage />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 777
    }
});
