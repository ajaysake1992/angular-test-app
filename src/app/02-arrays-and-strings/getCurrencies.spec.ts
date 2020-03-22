import { getCurrencies } from './getCurrencies';

describe('get currencies' , () => {

    it('should contain given currencies list', () => {

        const result = getCurrencies();

        expect(result).toContain('USD');

        expect(result).toContain('AUD');

        expect(result).toContain('EUR');
    });

});
