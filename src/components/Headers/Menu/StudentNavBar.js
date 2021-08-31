import React from "react";
import classnames from "classnames";
import {
    UncontrolledCollapse,
    Button,
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown
} from "reactstrap";

function IndexNavbar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    };

    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 299 ||
                document.body.scrollTop > 299
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 300 ||
                document.body.scrollTop < 300
            ) {
                setNavbarColor("navbar-transparent");
            }
        };

        window.addEventListener("scroll", updateNavbarColor);

        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
        <Navbar className="bg-primary" expand="lg">
            <NavbarBrand href="/student-homepage">
                ระบบการเรียน
            </NavbarBrand>
            <button
                aria-controls="navbarSupportedContent"
                aria-expanded={false}
                aria-label="Toggle navigation"
                className="navbar-toggler navbar-toggler-right"
                data-target="#navbar-menu-icon"
                data-toggle="collapse"
                id="navbar-menu-icon"
                type="button"
            >
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-menu-icon">
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavItem>
                            <NavLink
                                href="#"
                            >
                                ชื่อ - สกุล
                            </NavLink>
                        </NavItem>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle
                            aria-expanded={false}
                            aria-haspopup={true}
                            caret
                            color="default"
                            data-toggle="dropdown"
                            href="#pablo"
                            nav
                            onClick={(e) => e.preventDefault()}
                            role="button"
                        >
                            <i
                                aria-hidden={true}
                                className="nc-icon nc-single-02"
                            />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-danger" right>
                            <DropdownItem
                                href="/homepage"
                            >
                                ออกจากระบบ
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </UncontrolledCollapse>
        </Navbar>
    );
}

export default IndexNavbar;
