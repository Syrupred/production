import classNames from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('one param', () => {
        expect(classNames('one param')).toBe('one param');
    });
    test('with additional', () => {
        expect(classNames('one param', {}, ['class'])).toBe('one param class');
    });
    test('with mods', () => {
        expect(classNames('one param', { open: true, closed: false }, ['class']))
            .toBe('one param class open');
    });
    test('with undefined', () => {
        expect(classNames('one param', { open: true, closed: undefined }, ['class']))
            .toBe('one param class open');
    });
});
