import styled from 'styled-components';
import PanelButton from '../atoms/PanelButton';

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 36px 32px;
  width: 350px;
  height: 650px;
  background-color: ${({ theme }) => theme.BACKGROUND_NAVIGATION};
  backdrop-filter: blur(30px);
  box-shadow: 0 50px 70px -30px hsla(0, 0%, 0%, 0.9);
  border: 1px solid ${({ theme }) => theme.BORDER_NAVIGATION};
  border-radius: 10px;
`;

const PanelButtonsWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid ${({ theme }) => theme.BORDER};
  border-radius: 10px;
`;

const SectionHeader = styled.h6`
  text-transform: uppercase;
  color: ${({ theme }) => theme.TEXT_SECONDARY};
`;

const Sidebar = () => (
  <Wrapper>
    <PanelButtonsWrapper>
      <PanelButton buttonType="exit" />
      <PanelButton buttonType="minimise" />
      <PanelButton buttonType="maximise" />
    </PanelButtonsWrapper>
    <Divider />
    <SectionHeader>Menu</SectionHeader>
  </Wrapper>
);

export default Sidebar;
