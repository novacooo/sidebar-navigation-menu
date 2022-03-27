import { FC } from 'react';
import styled from 'styled-components';

interface NameProps {
  isExpanded: boolean;
}

interface MenuItemProps extends NameProps {
  icon: FC;
  name: string;
}

const Wrapper = styled.li<NameProps>`
  position: relative;
  left: -16px;
  padding: 14px 16px;
  min-width: ${({ isExpanded }) => (isExpanded ? 'calc(100% + 32px)' : '0')};
  border-radius: 10px;
  transition: background-color 0.3s,
    min-width ${({ theme }) => theme.TRANSITION_TIME};
  transition-timing-function: ${({ theme }) => theme.TRANSITION_EASE};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.BACKGROUND_MENU_ITEM_HOVER};
  }
`;

const Name = styled.p<NameProps>`
  position: absolute;
  top: 50%;
  left: calc(16px + 20px + 16px);
  font-size: 1.4rem;
  color: ${({ theme }) => theme.TEXT_PRIMARY};
  white-space: nowrap;
  transform: translateY(-50%)
    ${({ isExpanded }) => (isExpanded ? null : 'translateX(30px)')};
  visibility: ${({ isExpanded }) => (isExpanded ? 'visible' : 'hidden')};
  opacity: ${({ isExpanded }) => (isExpanded ? '100%' : '0')};
  transition-property: transform, visibility, opacity;
  transition-duration: ${({ theme }) => theme.TRANSITION_TIME_SHORT};
  transition-timing-function: ${({ theme }) => theme.TRANSITION_EASE};
`;

const MenuItem = ({ icon, name, isExpanded }: MenuItemProps) => {
  const StyledIcon = styled(icon)`
    display: block;
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.ICON_PRIMARY};
  `;

  return (
    <Wrapper isExpanded={isExpanded}>
      <StyledIcon />
      <Name isExpanded={isExpanded}>{name}</Name>
    </Wrapper>
  );
};

export default MenuItem;
