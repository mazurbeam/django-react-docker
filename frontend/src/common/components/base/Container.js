import styled from 'styled-components';

import { Box } from 'rebass';

const Container = styled(Box)({
  minHeight: '100vh'
});

Container.defaultProps = {
  mx: 'auto'
};

export default Container;
