import { groupBy } from '../array.utils';

describe('groupBy', () => {
  it('should group objects by common property with iteratee', () => {
    const attendances = [
      {
        studentId: '1',
        status: 'PRESENT',
      },
      {
        studentId: '2',
        status: 'PRESENT',
      },
      {
        studentId: '1',
        status: 'ABSENT',
      },
      {
        studentId: '2',
        status: 'PRESENT',
      },
      {
        studentId: '2',
        status: 'PRESENT',
      },
    ];
    const obj = groupBy(attendances, (item) => item.studentId);

    expect(obj).toEqual({
      '1': [
        {
          studentId: '1',
          status: 'PRESENT',
        },
        {
          studentId: '1',
          status: 'ABSENT',
        },
      ],
      '2': [
        {
          studentId: '2',
          status: 'PRESENT',
        },
        {
          studentId: '2',
          status: 'PRESENT',
        },
        {
          studentId: '2',
          status: 'PRESENT',
        },
      ],
    });
  });
});
