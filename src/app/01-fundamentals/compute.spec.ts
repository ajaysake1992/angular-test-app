import { compute } from './compute';

describe('compute function test' , () => {

    it('should return zero if input is negative', () => {
        const result = compute(-1);

        expect(result).toBe(0);
    });

    it('increament by one if input is postive', () => {
        const result = compute(1);

        expect(result).toBe(2);

    });

});
