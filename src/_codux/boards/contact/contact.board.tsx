import { createBoard } from '@wixc3/react-board';
import { Contact } from '../../../components/contact/contact';

export default createBoard({
    name: 'Contact',
    Board: () => <Contact />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 706,
        canvasHeight: 551,
        windowWidth: 814
    }
});
