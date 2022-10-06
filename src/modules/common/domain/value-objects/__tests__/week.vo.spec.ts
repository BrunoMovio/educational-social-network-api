import { Day } from '../day.vo';
import { Week } from '../week.vo';

describe('week vo', () => {
  it('should create a new week correctly', () => {
    const week = new Week({
      startDay: new Day('2022-02-14'),
    });

    expect(week.startDay.toString()).toBe('2022-02-14');
    expect(week.endDay.toString()).toBe('2022-02-20');
  });

  it('should not create a week when start date is not monday', () => {
    expect(() => {
      new Week({
        startDay: new Day('2022-02-13'),
      });
    }).toThrowError('Week must start on Monday');
  });
});
