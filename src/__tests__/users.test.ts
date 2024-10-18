import { render, screen, fireEvent } from '@testing-library/react';
import Users from '../pages/users';
import { Provider } from 'react-redux';
import { store } from '../src/store';

describe('Users Component', () => {
    it('should render users list and toggle email visibility', async () => {
        render(
            <Provider store={ store } >
            <Users />
        </Provider>
        );

        const button = screen.getAllByText('Show Email')[0];
        fireEvent.click(button);
        expect(button).toHaveTextContent('Hide Email');
    });
});