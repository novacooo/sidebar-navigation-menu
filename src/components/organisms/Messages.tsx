import MessagesButton from 'components/atoms/MessagesButton';
import styled from 'styled-components';
import MessageItem from '../molecules/MessageItem';

interface MessageData {
  name: string;
  avatar: string;
  count: number;
}

const messagesData: Array<MessageData> = [
  {
    name: 'Max Maraston',
    avatar: 'https://picsum.photos/100?random=1',
    count: 2,
  },
  {
    name: 'Cella W McCombs',
    avatar: 'https://picsum.photos/100?random=2',
    count: 0,
  },
  {
    name: 'Edna J Critchlow',
    avatar: 'https://picsum.photos/100?random=3',
    count: 1,
  },
  {
    name: 'Dima Groshev',
    avatar: 'https://picsum.photos/100?random=4',
    count: 0,
  },
];

interface MessagesProps {
  isExpanded: boolean;
}

const Wrapper = styled.ul<MessagesProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: relative;
  left: -14px;
  padding: 20px 20px 39px 20px;
  width: calc(100% + 28px);
  background-color: ${({ theme }) => theme.BACKGROUND_MESSAGES};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS};
  list-style-type: none;
`;

const Divider = styled.hr`
  width: 90%;
  border: none;
  border-top: 1px solid hsla(0, 0%, 0%, 0.15);
  border-radius: 10px;
`;

const Messages = ({ isExpanded }: MessagesProps) => {
  return (
    <Wrapper isExpanded={isExpanded}>
      <MessagesButton isExpanded={isExpanded} />
      {messagesData.map(({ name, avatar, count }, index) => (
        <>
          <MessageItem
            key={name}
            isExpanded={isExpanded}
            delay={index * 50}
            name={name}
            avatar={avatar}
            count={count}
          />
          {index !== messagesData.length - 1 && <Divider />}
        </>
      ))}
    </Wrapper>
  );
};

export default Messages;
