import styled from 'styled-components';

import { Box } from 'reakit';

const Viewport = styled(Box)({
  minHeight: '100vh',
  maxHeight: '100vh',
  margin: '0',
  padding: '0'
});

Viewport.defaultProps = {
  //   mx: 'auto'
};

export default Viewport;
