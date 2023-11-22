import styled from "styled-components";
import {WEIGHTS} from "../../constants";

const NavLink = ({ children, ...delegated}) => {
  return (
    <Wrapper {...delegated}>
      <InactiveText>{children}</InactiveText>
      <ActiveText aria-hidden={true}>{children}</ActiveText>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  position: relative;
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  overflow: hidden;// Text slide-up effect
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
  transform: translateY(var(--translate-from));
  transition: transform 500ms;
  
  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transform: translateY(var(--translate-to));
      transition: transform 250ms;
    }
  }
`;

const InactiveText = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
`;

const ActiveText = styled(Text)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: ${WEIGHTS.bold};
  --translate-from: 100%;
  --translate-to: 0%;
`;

export default NavLink;
