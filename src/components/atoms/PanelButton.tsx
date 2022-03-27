import styled from 'styled-components';
import { theme } from 'theme';

type ButtonType = 'exit' | 'minimise' | 'maximise';

interface PanelButtonProps {
  buttonType: ButtonType;
}

const getColors = (buttonType: ButtonType) => {
  if (buttonType === 'exit')
    return [theme.BACKGROUND_EXIT, theme.BACKGROUND_EXIT_HOVER];

  if (buttonType === 'minimise')
    return [theme.BACKGROUND_MINIMISE, theme.BACKGROUND_MINIMISE_HOVER];

  return [theme.BACKGROUND_MAXIMISE, theme.BACKGROUND_MAXIMISE_HOVER];
};

const PanelButton = styled.button<PanelButtonProps>`
  width: 12px;
  height: 12px;
  background-color: ${({ buttonType }) => getColors(buttonType)[0]};
  border: none;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
    background-color: ${({ buttonType }) => getColors(buttonType)[1]};
  }
`;

export default PanelButton;
