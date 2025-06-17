import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OffCanvasMenu from "./OffCanvasMenu";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import {
  navHomeOne,
  navHomeTwo,
  navCompanyLinks,
  navCompanyPage,
  navHomeThree,
  navHomeFour,
} from "./../../data";
const Navbar = ({
  navDark,
  insurance,
  classOption,
  corporate,
  creativeAgencyOne,
  itCompany,
}) => {
  // console.log("corporate...", corporate);
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector(".main-header");
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <>
      <header
        className={`main-header z-10 ${
          creativeAgencyOne ? "creative_agency_nav " : ""
        }  ${itCompany ? "it_company_nav " : ""}     ${
          corporate ? "header-35 position-absolute top-0 start-0 zindex-9" : ""
        }   ${navDark ? "position-absolute " : ""} w-100 ${classOption} ${
          insurance && "ins-header main-header w-100 z-10 "
        }`}
      >
        <nav
          className={`navbar navbar-expand-xl z-50  ${
            corporate ? "affix" : ""
          } ${navDark ? "navbar-dark " : "navbar-light"} sticky-header ${
            scroll > headerTop ? "affix" : ""
          }`}
        >
          <div className="container d-flex align-items-center justify-content-lg-between position-relative">
            <Link to="/">
              {scroll > headerTop || !navDark || itCompany ? (
                <img
                  width={113}
                  height={36}
                  src="assets/img/carinok_logo.png"
                  alt="logo"
                  className="img-fluid logo-color"
                />
              ) : (
                <img
                  width={113}
                  height={36}
                  src="assets/img/carinok_logo.png"
                  alt="logo"
                  className="img-fluid logo-white"
                />
              )}
            </Link>
            <button
              className="navbar-toggler position-absolute right-0 border-0"
              id="#offcanvasWithBackdrop"
              role="button"
            >
              <span
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBackdrop"
                aria-controls="offcanvasWithBackdrop"
              >
                <HiMenu />
              </span>
            </button>
            <div className="clearfix"></div>
            <div className="collapse navbar-collapse justify-content-center">
              <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                <li>
                  <Link to="/home" className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="nav-link">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/integrations" className="nav-link">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link to="/career" className="nav-link">
                    Career
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="nav-link">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="d-none d-md-block d-lg-block">
              <Link
                to="/contact-us"
                className="btn btn-primary"
              >
                Contact Us
              </Link>
            </div>

            <div
              className="offcanvas offcanvas-end d-xl-none"
              tabIndex="-1"
              id="offcanvasWithBackdrop"
            >
              <div className="offcanvas-header d-flex align-items-center mt-4">
                <Link
                  to="/"
                  className="d-flex align-items-center mb-md-0 text-decoration-none"
                >
                  <img
                    width={121}
                    height={36}
                    src="/assets/img/carinok_logo.png"
                    alt="logo"
                    className="img-fluid ps-2"
                  />
                </Link>
                <button
                  type="button"
                  className="close-btn text-danger"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <HiOutlineX />
                </button>
              </div>

              <OffCanvasMenu />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
