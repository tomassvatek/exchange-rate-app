import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

type ExchangeRate = {
  currency: string;
  code: string;
  country: string;
  amount: number;
  rate: number;
};

function parseData(data: string): ExchangeRate[] {
  const rows = data
    .trim()
    .split('\n')
    .map((row) => row.split('|'));
  const header = rows[1];
  const currencies = rows.slice(2).map((row) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    header.reduce((obj: any, key, index) => {
      obj[key.toLocaleLowerCase()] = row[index];
      return obj;
    }, {})
  );
  return currencies as ExchangeRate[];
}

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const res = await axios({
    method: 'get',
    url: `https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt`,
  });
  response.status(200).json(parseData(res.data));
}
