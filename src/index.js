import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <div>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </div>
);
