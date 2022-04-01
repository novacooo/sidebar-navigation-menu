import MessagesButton from 'components/atoms/MessagesButton';
import styled from 'styled-components';

interface MessagesProps {
  isExpanded: boolean;
}

const Wrapper = styled.div<MessagesProps>`
  position: relative;
  left: -14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px;
  width: calc(100% + 28px);
  height: 200px;
  background-color: ${({ theme }) => theme.BACKGROUND_MESSAGES};
  border-radius: 10px;
`;

const Messages = ({ isExpanded }: MessagesProps) => {
  return (
    <Wrapper isExpanded={isExpanded}>
      <MessagesButton isExpanded={isExpanded} />
    </Wrapper>
  );
};

export default Messages;
