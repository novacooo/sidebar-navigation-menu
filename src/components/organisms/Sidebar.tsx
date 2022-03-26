import styled from 'styled-components';
import PanelButton from '../atoms/PanelButton';

const Wrapper = styled.div`
  padding: 30px 28px;
  width: 350px;
  height: 650px;
  background-color: ${({ theme }) => theme.BACKGROUND_NAVIGATION};
  backdrop-filter: blur(20px);
  box-shadow: 0 50px 70px -30px hsla(0, 0%, 0%, 0.9);
  border: 1px solid ${({ theme }) => theme.BORDER_NAVIGATION};
  border-radius: 10px;
`;

const PanelButtonsWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

const Sidebar = () => (
  <Wrapper>
    <PanelButtonsWrapper>
      <PanelButton buttonType="exit" />
      <PanelButton buttonType="minimise" />
      <PanelButton buttonType="maximise" />
    </PanelButtonsWrapper>
  </Wrapper>
);

export default Sidebar;
