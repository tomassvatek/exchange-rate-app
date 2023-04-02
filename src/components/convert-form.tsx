import { ExchangeRate, useExchangeRates } from 'hooks/use-exchange-rates';
import { useMemo, useState } from 'react';
import { Box, Flex, Input, Label } from 'styled';
import styled from 'styled-components';

import ComboBox, { ComboBoxOption } from './combo-box';

const formatCurrencyLabel = (currency: ExchangeRate) =>
  `${currency.code} - ${currency.currency}`;

const formatCurrencyValue = (currency: ExchangeRate) =>
  `${currency.code}__${currency.currency}`;

const parseCurrencyValue = (value: string) => {
  const [code, currency] = value.split('__');
  return { code, currency };
};

const convertCurrency = (to: ExchangeRate, amount: number) =>
  ((amount / to.rate) * to.amount).toFixed(4);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  color: black;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
`;

const FormWrapper = styled(Flex)`
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FormGroup = styled(Flex)`
  display: flex;
  flex-direction: column;
  flex-basis: 33%;
`;

const Result = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: black;

  span {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const czechKoruna: ExchangeRate = {
  code: 'CZK',
  currency: 'Czech Koruna',
  country: 'Czech Republic',
  amount: 1,
  rate: 1,
};

const fromOptions = [
  {
    label: formatCurrencyLabel(czechKoruna),
    value: formatCurrencyValue(czechKoruna),
  },
];

export const ConvertForm = () => {
  const { data, isLoading, error } = useExchangeRates();

  const [amount, setAmount] = useState<number>(1);
  const [selectedCurrency, setSelectedCurrency] = useState<
    ExchangeRate | undefined
  >(data?.[0]);

  const options = useMemo(
    () =>
      data?.map((rate) => ({
        label: formatCurrencyLabel(rate),
        value: formatCurrencyValue(rate),
      })) ?? [],
    [data]
  );

  function handleSelectChange(option: ComboBoxOption) {
    const { code, currency } = parseCurrencyValue(option.value);
    const selectedCurrency = data?.find(
      (s) => s.code === code && s.currency === currency
    );
    setSelectedCurrency(selectedCurrency);
  }

  if (isLoading) return <div>Loading exchange rates</div>;
  if (error) return <div>Something went wrong 😢</div>;

  return (
    <Wrapper>
      <FormWrapper>
        <FormGroup>
          <Label htmlFor="amount">Amount</Label>
          <Input
            name="amount"
            type="number"
            placeholder="Amount"
            min="1"
            value={Number(amount).toString()}
            onChange={(e) => setAmount(+e.currentTarget.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="amount">From</Label>
          <ComboBox
            placeholder="From"
            options={fromOptions}
            initialValue={formatCurrencyLabel(czechKoruna)}
            readOnly
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="amount">To</Label>
          <ComboBox
            placeholder="Select currency"
            options={options}
            onSelect={handleSelectChange}
          />
        </FormGroup>
      </FormWrapper>
      {selectedCurrency && (
        <Box mt="2rem">
          <Result>
            <span>{amount} CZK = </span>
            {convertCurrency(selectedCurrency, amount)} {selectedCurrency.code}
          </Result>
        </Box>
      )}
    </Wrapper>
  );
};
