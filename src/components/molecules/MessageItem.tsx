import styled from 'styled-components';

interface ExpandedProps {
  isExpanded: boolean;
  delay?: number;
}

interface MessageItemProps extends ExpandedProps {
  name: string;
  avatar: string;
  count: number;
}

const Wrapper = styled.li<ExpandedProps>`
  display: flex;
  align-items: center;
  width: ${({ isExpanded }) => (isExpanded ? '100%' : '24px')};
  position: relative;
  transition: width ${({ theme }) => theme.TRANSITION_TIME};
  transition-timing-function: ${({ theme }) => theme.TRANSITION_EASE};
  transition-delay: ${({ delay }) => delay}ms;
`;

const StyledImg = styled.img`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 100px;
`;

const Name = styled.p<ExpandedProps>`
  position: absolute;
  left: calc(24px + 12px);
  font-size: 1.2rem;
  color: ${({ theme }) => theme.TEXT_PRIMARY};
  white-space: nowrap;
  transform: ${({ isExpanded }) => (isExpanded ? null : 'translateX(20px)')};
  visibility: ${({ isExpanded }) => (isExpanded ? 'visible' : 'hidden')};
  opacity: ${({ isExpanded }) => (isExpanded ? '100%' : '0')};
  transition-property: transform, visibility, opacity;
  transition-duration: ${({ theme }) => theme.TRANSITION_TIME_SHORT};
  transition-timing-function: ${({ theme }) => theme.TRANSITION_EASE};
  transition-delay: ${({ delay }) => delay}ms;
`;

const MessageItem = ({
  isExpanded,
  delay = 0,
  name,
  avatar,
  count,
}: MessageItemProps) => (
  <Wrapper isExpanded={isExpanded} delay={delay}>
    <StyledImg alt={name} src={avatar} />
    <Name isExpanded={isExpanded} delay={delay}>
      {name}
    </Name>
  </Wrapper>
);

export default MessageItem;
