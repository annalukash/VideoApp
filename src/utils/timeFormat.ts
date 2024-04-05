export const formatSecondsToReadableTime = (value: number): string => {
  const minutesAmount: number = Math.floor(value / 60);
  const secondsReminder: number = Math.floor(value - minutesAmount * 60);
  const minutes: string | number = addZeroToNumber(minutesAmount);
  const seconds: string | number = addZeroToNumber(secondsReminder);
  return `${minutes}:${seconds}`;
};

const addZeroToNumber = (value: number): string | number => {
  return value < 10 ? `0${value}` : value;
};
