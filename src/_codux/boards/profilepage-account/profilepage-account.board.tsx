import { createBoard } from '@wixc3/react-board';
import { Profilepage_Account } from '../../../components/profilepage-account/profilepage-account';

export default createBoard({
    name: 'Profilepage_Account',
    Board: () => <Profilepage_Account />,
    isSnippet: true,
});
