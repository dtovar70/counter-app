import { render } from "@testing-library/react";
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
    test('debe de hacer match con el snapshot', () => {
        const title = 'Mi título';
        const { container } = render(<FirstApp title={ title } />);
        
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el tìtulo en un h1', () => {

        const title = 'Mi título';
        const { container, getByText } = render(<FirstApp title={ title } />);
        
        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);
    });
});