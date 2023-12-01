import { createBoard } from '@wixc3/react-board';
import { Profilepage } from '../../../components/profilepage/profilepage';

export default createBoard({
    name: 'Profilepage',
    Board: () => <Profilepage />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 617,
        canvasHeight: 390
    }
});
