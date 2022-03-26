import styled from 'styled-components';
import Sidebar from '../components/organisms/Sidebar';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const HomePage = () => (
  <Wrapper>
    <Sidebar />
  </Wrapper>
);

export default HomePage;
