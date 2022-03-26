import styled from 'styled-components';
import { theme } from 'theme';

type ButtonType = 'exit' | 'minimise' | 'maximise';

interface PanelButtonProps {
  buttonType: ButtonType;
}

const getColor = (buttonType: ButtonType) => {
  if (buttonType === 'exit') return theme.BACKGROUND_EXIT;
  if (buttonType === 'minimise') return theme.BACKGROUND_MINIMISE;
  return theme.BACKGROUND_MAXIMISE;
};

const PanelButton = styled.button<PanelButtonProps>`
  width: 11px;
  height: 11px;
  background-color: ${({ buttonType }) => getColor(buttonType)};
  border: none;
  border-radius: 20px;
`;

export default PanelButton;
