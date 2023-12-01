import { createBoard } from '@wixc3/react-board';
import { Footer } from '../../../components/footer/footer';

export default createBoard({
    name: 'Footer',
    Board: () => <Footer />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 568,
        canvasHeight: 98,
        windowWidth: 566,
        windowHeight: 494
    }
});
