import React from "react";
import Badge from "react-bootstrap/Badge";
import "./footer.css";
export default function Footer({ dark, setDark }) {
  return (
    <div className="copyright">
      <footer
        className="footer"
        style={{ backgroundColor: dark ? "#393E46" : "" }}
      >
        <div className="d-flex bd-highlight">
          <div className="p-2 bd-highlight">
            <a href="https://github.com/AsishRaju/450-DSA">
              <h4>
                <Badge pill variant="light" className="hvr-grow">
                  <span role="img" aria-label="star" className="emojiFix">
                    ⭐
                  </span>{" "}
                  This project
                </Badge>
              </h4>
            </a>
          </div>
          <div className="ml-auto p-2 bd-highlight footer-toggle">
            <h4>
              {/* toggle dark mode */}
              <Badge
                pill
                variant="light"
                className="hvr-grow"
                onClick={() => {
                  setDark(!dark);
                  window.localStorage["isDark"] = !dark;
                }}
                style={{ cursor: "pointer" }}
              >
                {dark ? (
                  <span role="img" aria-label="sun-emoji" className="emojiFix">
                    ☀️
                  </span>
                ) : (
                  <span role="img" aria-label="moon-emoji" className="emojiFix">
                    🌙
                  </span>
                )}
              </Badge>{" "}
            </h4>
          </div>
        </div>
      </footer>
    </div>
  );
}
