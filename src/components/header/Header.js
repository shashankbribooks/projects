import Image from "next/image";

import Logo from "../../components/header/Logo";
import Menu from "../../components/header/Menu";
import LoginButton from "../../components/header/LoginButton";
import Cart from "../../components/header/Cart";
import { Navbar, Container } from "react-bootstrap";

const Header = (props) => {
  const { theme = null, cart = true, menu = true, loginButton = true } = props;

  return (
    <header className={theme ?? ""}>
      <Navbar expand="lg">
        <Container>
          <Logo />
          {menu && <Menu />}

          <div className="d-flex align-items-center">
            {cart && <Cart />}
            {loginButton && (
              <div className="d-none d-lg-block">
                <LoginButton />
              </div>
            )}
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
