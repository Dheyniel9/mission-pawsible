import { createBoard } from '@wixc3/react-board';
import { Filter } from '../../../components/filter/filter';

export default createBoard({
    name: 'Filter',
    Board: () => <Filter />,
    isSnippet: true,
});
