import React from "react";

const Membership = () => {
  return (
    <div className="min-h-screen w-screen p-4" id="membership">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-oceanBlue text-5xl pb-8 font-bold text-center">
          Membership
        </h1>
        <div>
          <p className="mb-4">
            At Prime Fitness, we offer flexible membership options to fit your
            lifestyle and fitness goals. Whether you're looking for a monthly
            membership or a discounted rate for students and seniors, we have a
            plan for you.
          </p>
          <p className="mb-4">
            Explore our membership options below and take the first step towards
            joining our community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-300 p-4 rounded-md dark:bg-oceanBlue dark:text-neonAqua shadow-md dark:shadow-neonAqua">
              <h3 className="text-lg font-semibold mb-2">
                Standard Membership
              </h3>
              <p className="mb-2">Access to all facilities and classes</p>
              <p className="mb-2">Monthly membership</p>
              <p className="mb-2">Price: $50 per month</p>
              <button className="bg-neonAqua text-gray-500 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white">
                Sign Up
              </button>
            </div>
            <div className="border border-gray-300 p-4 rounded-md dark:bg-oceanBlue dark:text-neonAqua shadow-md dark:shadow-neonAqua">
              <h3 className="text-lg font-semibold mb-2">
                Student/Senior Membership
              </h3>
              <p className="mb-2">Discounted rate for students and seniors</p>
              <p className="mb-2">Access to all facilities and classes</p>
              <p className="mb-2">Monthly membership</p>
              <p className="mb-2">Price: $40 per month</p>
              <button className="bg-neonAqua text-gray-500 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
