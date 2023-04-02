import { useExchangeRates } from 'hooks/use-exchange-rates';
import styled from 'styled-components';

import { Error } from './error';
import { Loading } from './loading';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  color: black;
  box-shadow: 0 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  border: ${({ theme }) => `1px solid ${theme.colors.boder}`};
  padding: 1rem;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Td = styled.td`
  border: ${({ theme }) => `1px solid ${theme.colors.border}`};
  padding: 0.5rem 1rem;
  .currency {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const ExchangeRatesTable = () => {
  const { data, isLoading, error } = useExchangeRates();

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <Table>
      <thead>
        <tr>
          <Th>Currency</Th>
          <Th>Country</Th>
          <Th>Amount</Th>
          <Th>Rate</Th>
        </tr>
      </thead>
      <tbody>
        {data?.map((rate) => (
          <tr key={`${rate.country}_${rate.code}`}>
            <Td>
              {rate.code} - <span className="currency">{rate.currency}</span>
            </Td>
            <Td>{rate.country}</Td>
            <Td>{rate.amount}</Td>
            <Td>
              <b>{rate.rate}</b>
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
