import { createBoard } from '@wixc3/react-board';
import { Found_pets } from '../../../components/found-pets/found-pets';

export default createBoard({
    name: 'Found_pets',
    Board: () => <Found_pets />,
    isSnippet: true,
});
