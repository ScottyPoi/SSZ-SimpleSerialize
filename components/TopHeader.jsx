import React from "react";
import Link from "next/link";
export default function TopHeader({ ...props }) {
  return (
    <>
      <div className="container-fluid">
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          collapseonselect="true"
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <div className="row">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <a className="navbar-brand" href="./">
                SSZ
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {props.pages.map((page) => {
                  if (!page.pages) {
                    return (
                      <li key={page.name} className="nav-item">
                        <a className="nav-link" href={`${page.url}`}>
                          {page.name}
                        </a>
                      </li>
                    );
                  } else {
                    return (
                      <li key={page.name} className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          role="button"
                          data-bs-toggle="dropdown"
                          id={page.name}
                          aria-expanded="false"
                        >
                          {page.name}
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby={page.name}
                        >
                          {page.pages.map((subpage) => {
                            return (
                              <li key={subpage.name}>
                                <Link
                                  className="dropdown-item"
                                  href={`${subpage.url}`}
                                >
                                  <a> {subpage.name}</a>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  }
                })}
                <a
                  href="https://github.com/scottypoi/ssz-simpleserialize"
                  style={{ position: "absolute", right: 0, top: 0 }}
                >
                  <img
                    width="149"
                    height="149"
                    src="https://github.blog/wp-content/uploads/2008/12/forkme_right_orange_ff7600.png?resize=149%2C149"
                    className="attachment-full size-full"
                    alt="Fork me on GitHub"
                    data-recalc-dims="1"
                  />
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}