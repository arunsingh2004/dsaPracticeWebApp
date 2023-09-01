import React from "react";
import "./navbar.css";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import Spinner from "react-bootstrap/Spinner";
import Fade from "react-reveal/Fade";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
export default function Navbar({
  dark,
  setDark,
  resetData,
  exportData,
  importData,
}) {
  const inputFile = useRef(null);
  let history = useHistory();
  const [importSpinnerState, setImportSpinnerState] = useState(false);
  const [exportSpinnerState, setExportSpinnerState] = useState(false);
  // About component takes resetData() from App <Component> to trigger DB data reset
  function handleChange(e) {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      const JSONData = JSON.parse(e.target.result);
      importData(JSONData, () => {
        setImportSpinnerState(false);
        history.push("/");
      });
    };
  }
  return (
    <>
      <div className="">
        <nav
          className="navbar bg-info d-flex flex-wrap justify-content-around  "
          style={{ backgroundColor: dark ? "#393E46" : "" }}
        >
          <div className="d-flex bd-highlight flex-wrap ">
            <div className="p-2 bd-highlight">
              <a href="/">
                <h4>
                  <Badge pill variant="light" className="hvr-grow">
                    Home
                  </Badge>
                </h4>
              </a>
            </div>
            <div className="p-2 bd-highlight">
              <a href="/about">
                <h4>
                  <Badge pill variant="light" className="hvr-grow">
                    <span
                      role="img"
                      aria-label="star"
                      className="emojiFix"
                    ></span>{" "}
                    About
                  </Badge>
                </h4>
              </a>
            </div>
            <div className="p-2 bd-highlight">
              <h5 className="text-center">
                <Badge
                  //     variant="danger"
                  as="a"
                  style={{ cursor: "pointer", backgroundColor: "orange" }}
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to reset the progress !"
                      )
                    ) {
                      setExportSpinnerState(true);
                      resetData();
                    }
                  }}
                >
                  Reset Progress
                  <Spinner
                    animation="border"
                    variant="light"
                    size="sm"
                    style={exportSpinnerState ? {} : { display: "none" }}
                  />
                </Badge>{" "}
                {/* <Badge
                  //     variant="warning"
                  as="a"
                  style={{ cursor: "pointer", backgroundColor: "yellow" }}
                  onClick={() => {
                    setExportSpinnerState(true);
                    exportData(() => {
                      setExportSpinnerState(false);
                    });
                  }}
                >
                  Export Progress
                </Badge>{" "} */}
              </h5>
            </div>
            <div className="p-2 bd-highlight">
              <a href="/Contact">
                <h4>
                  <Badge pill variant="light" className="hvr-grow">
                    FeedBack
                  </Badge>
                </h4>
              </a>
            </div>
            <div className="ml-auto p-2 bd-highlight navbar-toggle  d-flex justify-content-end ">
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
                    <span
                      role="img"
                      aria-label="sun-emoji"
                      className="emojiFix"
                    >
                      🌞
                    </span>
                  ) : (
                    <span
                      role="img"
                      aria-label="moon-emoji"
                      className="emojiFix"
                    >
                      🌔
                    </span>
                  )}
                </Badge>{" "}
              </h4>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
