import styled from 'styled-components';
import { useState } from 'react';
import PanelButton from '../atoms/PanelButton';
import ExpandButton from '../atoms/ExpandButton';

interface WrapperProps {
  isExpanded: boolean;
}

const TRANSITION_TIME = '1s';

const Wrapper = styled.nav<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 36px 32px;
  min-width: ${({ isExpanded }) => (isExpanded ? '350px' : '150px')};
  height: 650px;
  background-color: ${({ theme }) => theme.BACKGROUND_NAVIGATION};
  backdrop-filter: blur(30px);
  box-shadow: 0 50px 70px -30px hsla(0, 0%, 0%, 0.9);
  border: 1px solid ${({ theme }) => theme.BORDER_NAVIGATION};
  border-radius: 10px;
  transition: min-width ${TRANSITION_TIME};
`;

const PanelButtonsWrapper = styled.div`
  display: flex;
  gap: 6px;
  width: 100%;
`;

const ExpandButtonWrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: flex-end;
  min-width: ${({ isExpanded }) => (isExpanded ? '100%' : '40px')};
  transition: min-width ${TRANSITION_TIME};
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 2px solid ${({ theme }) => theme.BORDER};
  border-radius: 10px;
`;

const SectionHeader = styled.h6`
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
      {/* <PanelButtonsWrapper> */}
      {/*   <PanelButton buttonType="exit" /> */}
      {/*   <PanelButton buttonType="minimise" /> */}
      {/*   <PanelButton buttonType="maximise" /> */}
      {/* </PanelButtonsWrapper> */}
      <ExpandButtonWrapper isExpanded={isExpanded}>
        <ExpandButton isExpanded={isExpanded} onClick={handleButtonClick} />
      </ExpandButtonWrapper>
      <Divider />
      <SectionHeader>Menu</SectionHeader>
    </Wrapper>
  );
};

export default Sidebar;
