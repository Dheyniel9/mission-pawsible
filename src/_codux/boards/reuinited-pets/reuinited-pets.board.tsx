import { createBoard } from '@wixc3/react-board';
import { Reuinited_pets } from '../../../components/reuinited-pets/reuinited-pets';

export default createBoard({
    name: 'Reuinited_pets',
    Board: () => <Reuinited_pets />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 340,
        canvasWidth: 974,
        windowWidth: 1254,
        windowHeight: 679
    }
});
