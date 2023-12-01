import { createBoard } from '@wixc3/react-board';
import { Petdetail } from '../../../components/petdetail/petdetail';

export default createBoard({
    name: 'Petdetail',
    Board: () => <Petdetail />,
    isSnippet: true,
});
