import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from './Button';

describe('Button', () => {
    test('test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('test button theme clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
