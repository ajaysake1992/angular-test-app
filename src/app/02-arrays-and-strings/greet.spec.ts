import { greet } from './greet';

describe('greet' , () => {

    it('greeting message should contain name', () => {

        expect(greet('Ajinath')).toContain('Ajinath');

    });

});
