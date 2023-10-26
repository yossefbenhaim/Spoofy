import formatDuration from '../utils/formatDuration';

test('formatDuration should format duration less than 1 minute', () => {
    const duration = 30; // 30 seconds
    expect(formatDuration(duration)).toBe('0:30');
});

test('formatDuration should format duration greater than 1 minute', () => {
    const duration = 90; // 1 minute and 30 seconds
    expect(formatDuration(duration)).toBe('1:30');
});

test('formatDuration should format duration with leading zero', () => {
    const duration = 62; // 1 minute and 2 seconds
    expect(formatDuration(duration)).toBe('1:02');
});

test('formatDuration should format duration with zero seconds', () => {
    const duration = 120; // 2 minutes and 0 seconds
    expect(formatDuration(duration)).toBe('2:00');
});
