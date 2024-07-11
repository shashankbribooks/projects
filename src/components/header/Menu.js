import { Navbar, Nav, Container, Offcanvas, Col } from "react-bootstrap";
import Link from "next/link";
import Logo from "../../components/header/Logo";
import LoginButton from "../../components/header/LoginButton";
import { isMobile } from "react-device-detect";


import { useRouter } from "next/router";
import { useAppState, useAppDispatch } from "../../context/AppProvider";

const Menu = (props) => {
  // const dispatch = useAppDispatch()
  // const { user } = useAppState()

  const router = useRouter();

  const _logout = async () => {
    try {
      await Api.logout();

      dispatch({ type: "LOGOUT", payload: { user } });
      dispatch({
        type: "UPDATE_BOOK",
        payload: {
          book: null,
        },
      });
      router.replace("/login");
    } catch (error) {
      console.log("logout::error:: ", error);
    }
  };

  return (
    <Col className="text-end text-lg-start">
      {false && (
        <Navbar.Collapse id="basic-navbar-nav" className="d-none">
          <Nav className="menu">
            <Link legacyBehavior href="https://www.bribooks.com/about">
              <a className="nav-link">About Us</a>
            </Link>
            <Link legacyBehavior href="https://www.bribooks.com/ourstory">
              <a className="nav-link">Our Story</a>
            </Link>
            <Link legacyBehavior href="https://www.bribooks.com/bookstore">
              <a className="nav-link">Book Store</a>
            </Link>
            <Link legacyBehavior href="https://www.bribooks.com/contact">
              <a className="nav-link">Contact Us</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      )}

      <Navbar.Offcanvas
        id="canvas-navbar-nav"
        placement="start"
        className="bg-light"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">
            <Logo />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="padding-horizontal-40">
          <Nav className="menu">
            {isMobile ? (
              <>
                <Link
                  legacyBehavior
                  href="https://www.bribooks.com/account/profile"
                >
                  <a className="nav-link">
                    <FontAwesomeIcon
                      icon={SolidIcons.faUserCircle}
                      className="text-dark icon"
                    />{" "}
                    My Profile
                  </a>
                </Link>
                <Link
                  legacyBehavior
                  href="https://www.bribooks.com/account/mybooks"
                >
                  <a className="nav-link">
                    <FontAwesomeIcon
                      icon={SolidIcons.faBook}
                      className="text-dark icon"
                    />{" "}
                    My Books
                  </a>
                </Link>
                <Link
                  legacyBehavior
                  href="https://www.bribooks.com/account/myorders"
                >
                  <a className="nav-link">
                    <FontAwesomeIcon
                      icon={SolidIcons.faShoppingBag}
                      className="text-dark icon"
                    />{" "}
                    My Orders
                  </a>
                </Link>
                <Link
                  legacyBehavior
                  href="https://www.bribooks.com/account/myearnings"
                >
                  <a className="nav-link">
                    <FontAwesomeIcon
                      icon={SolidIcons.faSackDollar}
                      className="text-dark icon"
                    />{" "}
                    My Earnings
                  </a>
                </Link>
                <Link
                  legacyBehavior
                  href="https://www.bribooks.com/account/setting"
                >
                  <a className="nav-link">
                    <FontAwesomeIcon
                      icon={SolidIcons.faGear}
                      className="text-dark icon"
                    />{" "}
                    Setting
                  </a>
                </Link>
                <Link legacyBehavior href="https://www.bribooks.com/about">
                  <a className="nav-link">
                    <FontAwesomeIcon
                      icon={SolidIcons.faInfo}
                      className="text-dark icon"
                    />{" "}
                    About Us
                  </a>
                </Link>
                <Link legacyBehavior href="https://www.bribooks.com/ourstory">
                  <a className="nav-link">
                    <FontAwesomeIcon
                      icon={SolidIcons.faMemory}
                      className="text-dark icon"
                    />{" "}
                    Our Story
                  </a>
                </Link>
                <Link legacyBehavior href="https://www.bribooks.com/bookstore">
                  <a className="nav-link">
                    <FontAwesomeIcon
                      icon={SolidIcons.faShop}
                      className="text-dark icon"
                    />{" "}
                    Book Store
                  </a>
                </Link>
                <Link legacyBehavior href="https://www.bribooks.com/contact">
                  <a className="nav-link">
                    <FontAwesomeIcon
                      icon={SolidIcons.faAddressCard}
                      className="text-dark icon"
                    />{" "}
                    Contact Us
                  </a>
                </Link>
                {user?.id && (
                  <Nav.Item className="nav-link" onClick={_logout}>
                    <FontAwesomeIcon
                      icon={SolidIcons.faSignOutAlt}
                      className="text-dark icon"
                    />{" "}
                    Logout
                  </Nav.Item>
                )}
              </>
            ) : (
              <>
                <Link legacyBehavior href="https://www.bribooks.com/about">
                  <a className="nav-link">About Us</a>
                </Link>
                <Link legacyBehavior href="https://www.bribooks.com/ourstory">
                  <a className="nav-link">Our Story</a>
                </Link>
                <Link legacyBehavior href="https://www.bribooks.com/bookstore">
                  <a className="nav-link">Book Store</a>
                </Link>
                <Link legacyBehavior href="https://www.bribooks.com/contact">
                  <a className="nav-link">Contact Us</a>
                </Link>
              </>
            )}

            <div className="mt-4 d-block d-lg-none">
              <LoginButton />
            </div>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>

      <Navbar.Toggle aria-controls="canvas-navbar-nav" />
    </Col>
  );
};

export default Menu;
