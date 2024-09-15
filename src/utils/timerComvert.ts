import moment from 'moment';

export const secondsConvertForMinutes = (seconds: number) => {
    const timer = moment.utc(moment.duration(seconds, 'seconds').asMilliseconds()).format('mm:ss')

    return timer
}

export const millisecondsConvertForMinutes = (milliseconds: number) => {
    const duration = moment.duration(milliseconds);

    const minutes = duration.minutes();
    const seconds = formatWithLeadingZero(duration.seconds());

    return `${minutes}:${seconds}`;
}

const formatWithLeadingZero = (value: number) => {
    return value < 10 ? `0${value}` : `${value}`;
}