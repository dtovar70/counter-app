import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {

    test('getImagen debe de retornar un error si no tenemos api key', async() => {
        
        const url = await getImagen();

        expect( typeof url ).toBe( 'string' );
        expect( url ).toEqual('No se encontró la imágen');

    });
})