import { Day } from '../day.vo';
import { WeekDay } from '../week-day.vo';

describe('day vo', () => {
  it('should set monday when current day is sunday correctly', () => {
    const day = new Day('2022-02-20');

    const newDay = day.setWeekDay(WeekDay.MONDAY);

    expect(newDay.toString()).toBe('2022-02-14');
  });

  it('should set sunday when current day is any other correctly', () => {
    const day = new Day('2022-02-16');

    const newDay = day.setWeekDay(WeekDay.SUNDAY);

    expect(newDay.toString()).toBe('2022-02-20');
  });
});
