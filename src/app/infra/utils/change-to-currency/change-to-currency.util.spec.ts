import { changeToCurrency, ChangeToCurrencyProps } from '~/app/infra/utils';

describe('Change To Currency', () => {
  const defaultValue: ChangeToCurrencyProps = {
    value: 123,
    style: 'currency'
  };

  test('should return a string decimal', () => {
    expect(changeToCurrency({ ...defaultValue, style: 'decimal' })).toBe(
      '1,23'
    );
  });

  test('should return a string currency', () => {
    expect(changeToCurrency(defaultValue)).toContain('R$');
  });

  test('should return a string currency with code', () => {
    expect(
      changeToCurrency({
        ...defaultValue,
        currencyDisplay: 'code'
      })
    ).toContain('BRL');
  });

  test('should return a string currency with name', () => {
    expect(
      changeToCurrency({
        ...defaultValue,
        currencyDisplay: 'name'
      })
    ).toContain('Real brasileiro');
  });
});
