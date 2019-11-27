import styled from 'styled-components';

import MatButton from '@material-ui/core/Button';

const StyledButton = styled(MatButton)`
  background: linear-gradient(
    45deg,
    ${props => props.theme.palette.awesomeColors.primary} 30%,
    ${props => props.theme.palette.awesomeColors.secondary} 90%
  );
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;

export default StyledButton;