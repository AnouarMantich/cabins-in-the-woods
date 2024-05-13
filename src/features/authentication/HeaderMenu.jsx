import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiOutlineUser } from "react-icons/hi";
import Logout from "./Logout";
import DarkModeToggle from "../../ui/DarkModeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 04rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
