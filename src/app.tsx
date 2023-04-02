import { ConvertForm } from 'components/convert-form';
import { ExchangeRatesTable } from 'components/exchange-rates-table';
import { Box, Container } from 'styled';

const App = () => {
  return (
    <Container>
      <h1>Exchange Rates Converter</h1>
      <Box mt="2rem" margin="0 auto">
        <ConvertForm />
      </Box>
      <Box mt="2rem">
        <h2>Exchange CZK for:</h2>
        <Box mt="1rem">
          <ExchangeRatesTable />
        </Box>
      </Box>
    </Container>
  );
};

export default App;
