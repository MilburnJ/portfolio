import React from "react";
const Contact = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-600">Contact Me</h1>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Feel free to reach out to me through the following channels:
        </p>
        <ul className="mt-6 space-y-4">
          <li className="text-lg text-gray-800">
            📧 Email:{" "}
            <a
              href="mailto:your.email@example.com"
              className="text-blue-500 hover:underline"
            >
              your.email@example.com
            </a>
          </li>
          <li className="text-lg text-gray-800">
            💼 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              linkedin.com/in/yourprofile
            </a>
          </li>
          <li className="text-lg text-gray-800">
            🐙 GitHub:{" "}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              github.com/yourusername
            </a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Contact;
  