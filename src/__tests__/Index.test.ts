import { convertToObject } from '../index';
test('Check convert work', () => {
    expect(convertToObject('?test=one')).toEqual({"test": "one"});
});
