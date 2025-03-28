import React from "react";
import "./content.css";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/TaskForm");
  };
  return (
    <>
      <div className="content">
        <div className="content-1">
          <h1 className="content-h1">
            People who care<br></br> about your<br></br>{" "}
            <span style={{ color: "#7F01EA" }}>growth </span>
          </h1>
          <p>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more.
          </p>
          <input
            type="text"
            placeholder="search your course..."
            className="search-cource-inp"
          />{" "}
          <button
            style={{
              height: "40px",
              borderRadius: "8px",
              backgroundColor: "pink",
            }}
          >
            🔍
          </button>
          <p>
            We care about your data in our <a href="#">privacy policy.</a>
          </p>
          <div>
            <span className="sub-content"> ✔️ Multiple case studies</span>
            <span className="sub-content"> ✔️ Multiple industry projects</span>
            <span className="sub-content">
              ✔️ Multiple certifications to build your profile
            </span>
          </div>
          <ul>
            <li className="list-items">
              <a href="#">Work IntegrationEn</a>
            </li>
            <li className="list-items">
              <a href="#">Project-Based Learning</a>
            </li>
            <li className="list-items">
              <a href="#">Networking Opportunities Con</a>
            </li>
          </ul>
        </div>

        {/* ?contener2 */}
        <div className="content-2">
          <img
            src="https://www.skilllearningacademy.com/static/media/HomeBanner.5f25adb32ab82243fcb5.png"
            alt="img"
            className="tree-img"
            style={{}}
          />
          <button class="task-btn" onClick={handleClick}>
            Tasks
          </button>
        </div>
      </div>
    </>
  );
};
export default Content;
