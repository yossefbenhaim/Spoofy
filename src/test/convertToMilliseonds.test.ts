import ConvertToMilliseconds from '../utils/convertToMilliseconds';

test('ConvertToMilliseconds should handle undefined values', () => {
    expect(ConvertToMilliseconds(undefined, undefined)).toEqual(0);
});

test('ConvertToMilliseconds should handle minutes only', () => {
    expect(ConvertToMilliseconds(2, undefined)).toEqual(120);
});

test('ConvertToMilliseconds should handle seconds only', () => {
    expect(ConvertToMilliseconds(undefined, 30)).toEqual(30);
});

test('ConvertToMilliseconds should handle both minutes and seconds', () => {
    expect(ConvertToMilliseconds(1, 30)).toEqual(90);
});
