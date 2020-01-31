import styled from 'styled-components';

import MatButton from '@material-ui/core/Button';

const StyledButton = styled(MatButton)`
  background: linear-gradient(
    45deg,
    ${props => props.theme.palette.awesomeColors.primary} 30%,
    ${props => props.theme.palette.awesomeColors.secondary} 90%
  );
  border: 0;
  color: white;
  height: ${props => props.theme.spacing(6)}px;
  padding: 0 30px;
  box-shadow: ${props => props.theme.palette.primary.boxShadow};
  border-radius: ${props => props.theme.spacing(.5)}px;
`;

export default StyledButton; 