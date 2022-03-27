import styled from 'styled-components';
import { useState } from 'react';
import PanelButton from '../atoms/PanelButton';
import ExpandButton from '../atoms/ExpandButton';

interface WrapperProps {
  isExpanded: boolean;
}

interface AnimationWrapperProps extends WrapperProps {
  align: 'flex-start' | 'center' | 'flex-end';
}

const TRANSITION_TIME = '0.8s';
const TRANSITION_EASE = 'cubic-bezier(.3,.69,.62,.88)';

const Wrapper = styled.nav<WrapperProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 36px 32px;
  min-width: ${({ isExpanded }) => (isExpanded ? '350px' : '120px')};
  height: 650px;
  background-color: ${({ theme }) => theme.BACKGROUND_NAVIGATION};
  backdrop-filter: blur(14px);
  //box-shadow: 0 50px 70px -20px hsla(0, 0%, 0%, 0.9);
  border: 1px solid ${({ theme }) => theme.BORDER_NAVIGATION};
  border-radius: 10px;
  transition: min-width ${TRANSITION_TIME} ${TRANSITION_EASE};
`;

const AnimationWrapper = styled.div<AnimationWrapperProps>`
  display: flex;
  justify-content: center;
  align-self: ${({ align }) => align};
  min-width: ${({ isExpanded }) => (isExpanded ? '0' : '100%')};
  transition: min-width ${TRANSITION_TIME} ${TRANSITION_EASE};
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
  transition: opacity ${TRANSITION_TIME} ${TRANSITION_EASE},
    visibility ${TRANSITION_TIME} ${TRANSITION_EASE};
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.BORDER};
  border-radius: 10px;
`;

const SectionHeader = styled.h6<WrapperProps>`
  font-size: 1.1rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.TEXT_SECONDARY};
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
      <Divider />
      <AnimationWrapper isExpanded={isExpanded} align="flex-start">
        <SectionHeader isExpanded={isExpanded}>Menu</SectionHeader>
      </AnimationWrapper>
    </Wrapper>
  );
};

export default Sidebar;
