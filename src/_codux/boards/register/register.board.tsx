import { createBoard } from '@wixc3/react-board';
import { Register } from '../../../components/register/register';

export default createBoard({
    name: 'Register',
    Board: () => <Register />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 766,
        windowWidth: 1074
    }
});
