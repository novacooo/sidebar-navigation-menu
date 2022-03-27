import { FC } from 'react';
import styled from 'styled-components';

interface MenuItemProps {
  icon: FC;
  name: string;
}

const Wrapper = styled.li`
  position: relative;
  left: -12px;
  display: flex;
  gap: 16px;
  padding: 14px 16px;
  width: calc(100% + 24px);
  border-radius: 10px;
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ${({ theme }) => theme.TRANSITION_EASE};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.BACKGROUND_MENU_ITEM_HOVER};
  }
`;

const Name = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.TEXT_PRIMARY};
`;

const MenuItem = ({ icon, name }: MenuItemProps) => {
  const StyledIcon = styled(icon)`
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.ICON_PRIMARY};
  `;

  return (
    <Wrapper>
      <StyledIcon />
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default MenuItem;
