import React from "react";

const Chevrons = () => {
  return (
    <div className="flex items-center justify-center space-x-10 mt-8">
      {/* Left */}
      <svg
        width="29"
        height="19"
        viewBox="0 0 29 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.6911 7.76265L5.64523 7.76265L10.269 3.13893C10.9067 2.50117 10.9067 1.54454 10.269 0.906783C9.6312 0.269028 8.67457 0.269028 8.03681 0.906783L0.702627 8.24097C0.0648714 8.87872 0.0648714 9.83536 0.702627 10.4731L8.03681 17.8073C8.67457 18.445 9.6312 18.445 10.269 17.8073C10.9067 17.1695 10.9067 16.2129 10.269 15.5752L5.64523 10.9514L26.6911 10.9514C27.4883 10.9514 28.2855 10.3137 28.2855 9.35704C28.2855 8.40041 27.4883 7.76265 26.6911 7.76265Z"
          fill="#458FF6"
        />
      </svg>

      {/* Selected */}
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5" cy="5" r="5" fill="#5B9BF3" />
      </svg>

      {/* Next */}

      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.3" cx="5" cy="5" r="5" fill="#5B9BF3" />
      </svg>

      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.3" cx="5" cy="5" r="5" fill="#5B9BF3" />
      </svg>

      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.3" cx="5" cy="5" r="5" fill="#5B9BF3" />
      </svg>

      {/* Right */}

      <svg
        width="29"
        height="19"
        viewBox="0 0 29 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.73745 11.2373L22.7834 11.2373L18.1596 15.8611C17.5219 16.4988 17.5219 17.4555 18.1596 18.0932C18.7974 18.731 19.754 18.731 20.3918 18.0932L27.726 10.759C28.3637 10.1213 28.3637 9.16464 27.726 8.52689L20.3918 1.1927C19.754 0.55495 18.7974 0.55495 18.1596 1.1927C17.5219 1.83046 17.5219 2.78709 18.1596 3.42485L22.7834 8.04857L1.73745 8.04857C0.940251 8.04857 0.143058 8.68633 0.143058 9.64296C0.143058 10.5996 0.940251 11.2373 1.73745 11.2373Z"
          fill="#458FF6"
        />
      </svg>
    </div>
  );
};

export default Chevrons;
