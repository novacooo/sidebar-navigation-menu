import styled from 'styled-components';
import { ReactComponent as ArrowLeftIcon } from 'assets/icons/arrow-left.svg';

interface MessagesButtonProps {
  isExpanded: boolean;
}

const StyledButton = styled.button<MessagesButtonProps>`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0 12px;
  width: ${({ isExpanded }) => (isExpanded ? '109px' : '38px')};
  height: 38px;
  background-color: ${({ theme }) => theme.COLOR_MAIN};
  box-shadow: 0 10px 30px 0 hsla(218, 98%, 51%, 0.5);
  border: none;
  border-radius: 100px;
  transform: translateY(50%);
  transition: background-color 0.2s,
    width ${({ theme }) => theme.TRANSITION_TIME}, transform 0.2s;
  transition-timing-function: ${({ theme }) => theme.TRANSITION_EASE};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLOR_MAIN_HOVER};
    transform: translateY(50%) scale(98%);
  }

  &:active {
    transform: translateY(50%) scale(94%);
  }
`;

const StyledText = styled.span<MessagesButtonProps>`
  position: absolute;
  left: calc(12px + 14px + 5px);
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.TEXT_PRIMARY};
  letter-spacing: 0.03em;
  white-space: nowrap;
  transform: ${({ isExpanded }) => (isExpanded ? null : 'translateX(10px)')};
  visibility: ${({ isExpanded }) => (isExpanded ? 'visible' : 'hidden')};
  opacity: ${({ isExpanded }) => (isExpanded ? '100%' : '0')};
  transition-property: transform, visibility, opacity;
  transition-duration: ${({ theme }) => theme.TRANSITION_TIME_SHORT};
  transition-timing-function: ${({ theme }) => theme.TRANSITION_EASE};
`;

const StyledIcon = styled(ArrowLeftIcon)`
  flex-shrink: 0;
  width: 14px;
  height: 14px;
  fill: ${({ theme }) => theme.ICON_PRIMARY};
  transform: rotate(-90deg);
`;

const MessagesButton = ({ isExpanded }: MessagesButtonProps) => (
  <StyledButton isExpanded={isExpanded}>
    <StyledIcon />
    <StyledText isExpanded={isExpanded}>All messages</StyledText>
  </StyledButton>
);

export default MessagesButton;
