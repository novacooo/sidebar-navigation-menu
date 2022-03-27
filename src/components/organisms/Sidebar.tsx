import styled from 'styled-components';
import { useState } from 'react';
import avatar from 'assets/images/avatar.jpg';
import { ReactComponent as BriefCaseIcon } from 'assets/icons/briefcase.svg';
import { ReactComponent as ClipBoardIcon } from 'assets/icons/clipboard.svg';
import { ReactComponent as FlashIcon } from 'assets/icons/flash.svg';
import { ReactComponent as SecurityIcon } from 'assets/icons/security.svg';
import { ReactComponent as TagIcon } from 'assets/icons/tag.svg';
import { ReactComponent as TeacherIcon } from 'assets/icons/teacher.svg';
import PanelButton from '../atoms/PanelButton';
import ExpandButton from '../atoms/ExpandButton';
import UserAvatar from '../molecules/UserAvatar';
import MenuItem from '../molecules/MenuItem';

interface WrapperProps {
  isExpanded: boolean;
}

interface AnimationWrapperProps extends WrapperProps {
  align: 'flex-start' | 'center' | 'flex-end';
}

const Wrapper = styled.nav<WrapperProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 34px 30px;
  min-width: ${({ isExpanded }) => (isExpanded ? '270px' : '130px')};
  height: 650px;
  background-color: ${({ theme }) => theme.BACKGROUND_NAVIGATION};
  backdrop-filter: blur(14px);
  //box-shadow: 0 50px 70px -20px hsla(0, 0%, 0%, 0.9);
  border: 1px solid ${({ theme }) => theme.BORDER_NAVIGATION};
  border-radius: 10px;
  transition: min-width
    ${({ theme }) => `${theme.TRANSITION_TIME} ${theme.TRANSITION_EASE}`};
`;

const AnimationWrapper = styled.div<AnimationWrapperProps>`
  display: flex;
  justify-content: center;
  align-self: ${({ align }) => align};
  min-width: ${({ isExpanded }) => (isExpanded ? '0' : '100%')};
  transition: min-width
    ${({ theme }) => `${theme.TRANSITION_TIME} ${theme.TRANSITION_EASE}`};
`;

const PanelButtonsWrapper = styled(AnimationWrapper)`
  gap: 6px;
  margin: 12px 0;
`;

const ExpandButtonWrapper = styled.div<WrapperProps>`
  position: absolute;
  top: 36px;
  right: 32px;
  opacity: ${({ isExpanded }) => (isExpanded ? '100%' : '0')};
  visibility: ${({ isExpanded }) => (isExpanded ? 'visible' : 'hidden')};
  transition: ${({ theme }) =>
    `opacity ${theme.TRANSITION_TIME_SHORT} ${theme.TRANSITION_EASE}, visibility ${theme.TRANSITION_TIME_SHORT} ${theme.TRANSITION_EASE}`};
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.BORDER};
  border-radius: 10px;
`;

const SectionHeader = styled.h6<WrapperProps>`
  font-size: 1rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.TEXT_SECONDARY};
`;

const MenuItemsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  list-style-type: none;
`;

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleButtonClick = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <Wrapper isExpanded={isExpanded}>
      <PanelButtonsWrapper isExpanded={isExpanded} align="flex-start">
        <PanelButton buttonType="exit" onClick={handleButtonClick} />
        <PanelButton buttonType="minimise" />
        <PanelButton buttonType="maximise" />
      </PanelButtonsWrapper>
      <ExpandButtonWrapper isExpanded={isExpanded}>
        <ExpandButton isExpanded={isExpanded} onClick={handleButtonClick} />
      </ExpandButtonWrapper>

      <AnimationWrapper isExpanded={isExpanded} align="flex-start">
        <UserAvatar name="novaco" image={avatar} isExpanded={isExpanded} />
      </AnimationWrapper>

      <Divider />
      <AnimationWrapper isExpanded={isExpanded} align="flex-start">
        <SectionHeader isExpanded={isExpanded}>Menu</SectionHeader>
      </AnimationWrapper>

      <MenuItemsWrapper>
        <MenuItem
          isExpanded={isExpanded}
          icon={BriefCaseIcon}
          name="My offers"
        />
        <MenuItem
          isExpanded={isExpanded}
          icon={ClipBoardIcon}
          name="User's Task"
          delay={50}
        />
        <MenuItem
          isExpanded={isExpanded}
          icon={TagIcon}
          name="Product Discounts"
          delay={100}
        />
        <MenuItem
          isExpanded={isExpanded}
          icon={TeacherIcon}
          name="Case Study"
          delay={150}
        />
        <MenuItem
          isExpanded={isExpanded}
          icon={SecurityIcon}
          name="Security"
          delay={200}
        />
        <MenuItem
          isExpanded={isExpanded}
          icon={FlashIcon}
          name="Your Ability"
          delay={250}
        />
      </MenuItemsWrapper>

      <Divider />
      <AnimationWrapper isExpanded={isExpanded} align="flex-start">
        <SectionHeader isExpanded={isExpanded}>Messages</SectionHeader>
      </AnimationWrapper>
    </Wrapper>
  );
};

export default Sidebar;
