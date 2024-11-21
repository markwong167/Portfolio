import React from "react";
import samplePdf from "../assets/Mark_Wong_Resume.pdf";
const ResumePage = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        margin: "0 auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <iframe
        src={samplePdf}
        title='PDF Viewer'
        style={{ width: "100%", height: "100%", border: "none" }}
      />
      <button
        onClick={() => window.open(samplePdf, "_self")}
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          zIndex: 2,
          background: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "10px 15px",
          cursor: "pointer",
        }}
      >
        Download Resume
      </button>
    </div>
  );
};

export default ResumePage;
