const ConvertToMilliseconds = (minute: any, second: any): number => {
    const totalSeconds = minute * 60 + second;
    return totalSeconds;
};

export default ConvertToMilliseconds;
