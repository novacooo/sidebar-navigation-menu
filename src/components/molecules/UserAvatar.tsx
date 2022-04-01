import styled from 'styled-components';

interface NameProps {
  isExpanded: boolean;
}

interface UserAvatarProps extends NameProps {
  name: string;
  image: string;
}

const Wrapper = styled.div`
  position: relative;
`;

const Avatar = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.BORDER};
  border-radius: 100px;
  user-select: none;
`;

const Name = styled.h3<NameProps>`
  position: absolute;
  top: 50%;
  left: 64px;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.TEXT_PRIMARY};
  user-select: none;
  transform: translateY(-50%)
    ${({ isExpanded }) => (isExpanded ? null : 'translateX(30px)')};
  opacity: ${({ isExpanded }) => (isExpanded ? '100%' : '0')};
  visibility: ${({ isExpanded }) => (isExpanded ? 'visible' : 'hidden')};
  transition: ${({ theme }) =>
    `opacity ${theme.TRANSITION_TIME_SHORT} ${theme.TRANSITION_EASE}, visibility ${theme.TRANSITION_TIME_SHORT} ${theme.TRANSITION_EASE}, transform ${theme.TRANSITION_TIME_SHORT} ${theme.TRANSITION_EASE}`};
`;

const UserAvatar = ({ name, image, isExpanded }: UserAvatarProps) => (
  <Wrapper>
    <Avatar src={image} />
    <Name isExpanded={isExpanded}>{name}</Name>
  </Wrapper>
);

export default UserAvatar;
