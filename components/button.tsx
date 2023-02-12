import React from "react";

function DownloadButton() {
  return (
    <a
      href="/sample.pdf"
      download
      className="bg-blue-200 hover:bg-blue-100 text-white rounded px-4 py-2"
    >
      Download CV
    </a>
  );
}

export default DownloadButton;
