import { createBoard } from '@wixc3/react-board';
import { Reportpet } from '../../../components/reportpet/reportpet';

export default createBoard({
    name: 'Reportpet',
    Board: () => <Reportpet />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 814
    }
});
