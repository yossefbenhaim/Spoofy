const ConvertToMilliseconds = (
    minute: number | undefined,
    second: number | undefined
): number => {
    const totalSeconds = (minute ?? 0) * 60 + (second ?? 0);
    return totalSeconds;
};

export default ConvertToMilliseconds;
