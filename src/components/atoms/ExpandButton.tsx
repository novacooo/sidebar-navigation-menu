import styled from 'styled-components';
import { ReactComponent as ArrowLeftIcon } from 'assets/icons/arrow-left.svg';

interface ExpandButtonProps {
  isExpanded: boolean;
  onClick?: () => void;
}

const ArrowIcon = styled(ArrowLeftIcon)<ExpandButtonProps>`
  width: 18px;
  height: 18px;
  fill: ${({ theme }) => theme.ICON_PRIMARY};
  transform: rotate(${({ isExpanded }) => (isExpanded ? '0deg' : '180deg')})
    translateX(${({ isExpanded }) => (isExpanded ? '-1px' : '-1px')});
  transition: transform 1s;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.BACKGROUND_BUTTON};
  border: 1px solid ${({ theme }) => theme.BORDER_BUTTON};
  border-radius: 50px;
  transition: border-color 0.2s;

  &:hover {
    cursor: pointer;
    border-color: ${({ theme }) => theme.BORDER_BUTTON_HOVER};
  }
`;

const ExpandButton = ({ isExpanded, onClick }: ExpandButtonProps) => (
  <Button onClick={onClick}>
    <ArrowIcon isExpanded={isExpanded} />
  </Button>
);

export default ExpandButton;
