export type ChangeToCurrencyProps = {
  value: number;
  currencyDisplay?: 'symbol' | 'code' | 'name' | 'narrowSymbol';
  style?: 'decimal' | 'currency';
};

export const changeToCurrency = ({
  value,
  currencyDisplay,
  style
}: ChangeToCurrencyProps) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: style,
    currency: 'BRL',
    currencyDisplay: currencyDisplay
  });

  return formatter.format(value);
};
