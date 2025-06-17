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
          <Link legacyBehavior href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link legacyBehavior href="/services">
            <a className="nav-link">Services</a>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link legacyBehavior href="/integrations">
            <a className="nav-link">Partners</a>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link legacyBehavior href="/career">
            <a className="nav-link">Career</a>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link legacyBehavior href="/blog">
            <a className="nav-link">Blog</a>
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
          <Link legacyBehavior href="/contact-us">
            <a className="btn btn-primary">Contact Us</a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
