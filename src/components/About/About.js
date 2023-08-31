import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import Spinner from "react-bootstrap/Spinner";
import Fade from "react-reveal/Fade";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import "./about.css";
export default function About({ resetData, exportData, importData }) {
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
      <div className="about">
        <Fade duration={500}>
          <div className="container my-3">
            <Alert variant="primary">
              <Alert.Heading className="text-center">About</Alert.Heading>
              <hr />
              <h4 className="text-center">
                450 DSA Sheet helps you build your confidence in solving any
                coding <br /> related question and helps you prepare for your
                placements <span role="img" aria-label="student"></span>
              </h4>
            </Alert>
          </div>
          <div className="container my-5">
            <h2 className="text-center">
              <a href="/">DSA</a> is your personal web-based DSA tracker based
              on <br></br>
              <i>
                <a
                  href="https://docs.google.com/spreadsheets/d/1Mk1u_IoZ0OMOaJEJRcvS7MA-ypTYUhKI/edit?usp=drive_link&ouid=117550990179201228154&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DSA Sheet
                </a>
              </i>{" "}
              of{" "}
              <b>
                <a
                  href="https://www.linkedin.com/in/love-babbar-38ab2887/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Striver,Love Babbar,And many more...
                </a>
              </b>{" "}
              <span role="img" aria-label="join-hands"></span>
            </h2>
            <h4 className="text-center my-5">
              Designed by{" "}
              <a
                href="https://www.linkedin.com/in/arun-singh-1a0b25225/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Arun Singh (NIT PATNA)
              </a>{" "}
              <span role="img" aria-label="code-men">
                👨🏻‍💻
              </span>
            </h4>
            <h3 className="text-center my-5">
              <Badge>
                Connect with us{" "}
                <span
                  role="img"
                  aria-label="orange-hearth"
                  className="emojiFix"
                ></span>{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=100012163990032"
                  className="facebook "
                  target="_blank"
                >
                  <BsFacebook></BsFacebook>
                </a>
                <a
                  href="https://www.linkedin.com/in/arun-singh-1a0b25225/"
                  target="_blank"
                  className="Linkiden "
                >
                  <AiFillLinkedin></AiFillLinkedin>
                </a>
              </Badge>{" "}
            </h3>

            {/* <h5 className="text-center">
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
              <Badge
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
              </Badge>{" "}
            </h5> */}

            <input
              type="file"
              id="file"
              ref={inputFile}
              style={{ display: "none" }}
              accept=".json"
              onChange={handleChange}
            />
          </div>
        </Fade>
      </div>
    </>
  );
}
