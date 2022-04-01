import { FC } from 'react';
import styled, { css } from 'styled-components';

interface NameProps {
  isExpanded: boolean;
  delay?: number;
}

interface MenuItemProps extends NameProps {
  icon: FC;
  name: string;
  onClick?: () => void;
}

const Wrapper = styled.li<NameProps>`
  position: relative;
  padding: 14px 14px;
  width: ${({ isExpanded }) =>
    isExpanded ? 'calc(100% + 28px)' : 'calc(28px + 20px)'};
  border-radius: 10px;
  transition: ${({ theme, delay }) =>
    `background-color 0.3s ${theme.TRANSITION_EASE} 0s, width ${theme.TRANSITION_TIME} ${theme.TRANSITION_EASE} ${delay}ms`};

  ${({ isExpanded, theme }) =>
    isExpanded
      ? css`
          &:hover {
            cursor: pointer;
            background-color: ${theme.BACKGROUND_MENU_ITEM_HOVER};
          }
        `
      : css`
          &:hover {
            cursor: pointer;

            > svg {
              transform: scale(110%);
            }
          }
        `}
`;

const Name = styled.p<NameProps>`
  position: absolute;
  top: 50%;
  left: calc(16px + 20px + 16px);
  font-size: 1.2rem;
  color: ${({ theme }) => theme.TEXT_PRIMARY};
  white-space: nowrap;
  user-select: none;
  transform: translateY(-50%)
    ${({ isExpanded }) => (isExpanded ? null : 'translateX(30px)')};
  visibility: ${({ isExpanded }) => (isExpanded ? 'visible' : 'hidden')};
  opacity: ${({ isExpanded }) => (isExpanded ? '100%' : '0')};
  transition-property: transform, visibility, opacity;
  transition-duration: ${({ theme }) => theme.TRANSITION_TIME_SHORT};
  transition-timing-function: ${({ theme }) => theme.TRANSITION_EASE};
  transition-delay: ${({ delay }) => delay}ms;
`;

const MenuItem = ({
  icon,
  name,
  delay = 0,
  isExpanded,
  onClick,
}: MenuItemProps) => {
  const StyledIcon = styled(icon)`
    display: block;
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.ICON_PRIMARY};
    transition-property: transform;
    transition-duration: 0.2s;
    transition-timing-function: ${({ theme }) => theme.TRANSITION_EASE};
  `;

  return (
    <Wrapper delay={delay} isExpanded={isExpanded} onClick={onClick}>
      <StyledIcon />
      <Name delay={delay} isExpanded={isExpanded}>
        {name}
      </Name>
    </Wrapper>
  );
};

export default MenuItem;
