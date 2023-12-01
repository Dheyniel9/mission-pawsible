import { createBoard } from '@wixc3/react-board';
import { Reportpet } from '../../../components/reportpet/reportpet';

export default createBoard({
    name: 'Updatepets',
    Board: () => <Reportpet />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 622
    }
});
