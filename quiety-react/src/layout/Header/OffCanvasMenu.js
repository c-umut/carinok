import React from "react";
import { Link } from "react-router-dom";
import {
  navCompanyLinks,
  navCompanyPage,
  offcanvasMenuData,
} from "./../../data";

const OffCanvasMenu = () => {
  return (
    <div className="offcanvas-body">
      <ul className="nav col-12 col-md-auto justify-content-center main-menu">
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link to="/">
            <span className="nav-link">Home</span>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link to="/services">
            <span className="nav-link">Services</span>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link to="/integrations">
            <span className="nav-link">Partners</span>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link to="/career">
            <span className="nav-link">Career</span>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link to="/blogs">
            <span className="nav-link">Blog</span>
          </Link>
        </li>
      </ul>
      <div className="action-btns mt-4 ps-3">
        {/* <span data-bs-dismiss="offcanvas" aria-label="Close">
          <Link legacyBehavior href="/login">
            <a className="btn btn-outline-primary text-decoration-none me-2">
              Sign In
            </a>
          </Link>
        </span> */}
        <span data-bs-dismiss="offcanvas" aria-label="Close">
          <Link to="/contact-us">
            <span className="btn btn-primary">Contact Us</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
