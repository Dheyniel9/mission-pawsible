import { createBoard } from '@wixc3/react-board';
import { Update_profile } from '../../../components/update-profile/update-profile';

export default createBoard({
    name: 'Update_profile',
    Board: () => <Update_profile />,
    isSnippet: true,
});
