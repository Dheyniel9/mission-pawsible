import { createBoard } from '@wixc3/react-board';
import { Registered_pet } from '../../../components/registered-pet/registered-pet';

export default createBoard({
    name: 'Registered_pet',
    Board: () => <Registered_pet />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 589
    }
});
