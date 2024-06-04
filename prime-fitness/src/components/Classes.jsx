import React from "react";

const Classes = () => {
  return (
    <div className="min-h-screen w-screen p-4 pb-8" id="classes">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-oceanBlue text-5xl pb-8 font-bold text-center">
          Classes
        </h1>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-center">
            Our Classes
          </h2>
          <p className="mb-4">
            At Prime Fitness, we offer a variety of classes to suit all fitness
            levels and interests. Whether you're into high-intensity workouts,
            yoga, or spin classes, we've got something for everyone.
          </p>
          <p className="mb-4">
            Check out our schedule below to see when your favorite classes are
            happening and who the instructors are.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Monday */}
            <div className="border border-gray-300 dark:bg-oceanBlue dark:text-neonAqua shadow-md dark:shadow-neonAqua p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Monday</h3>
              <ul>
                <li>8:00 AM - Yoga with Sarah</li>
                <li>10:00 AM - HIIT with John</li>
                <li>5:00 PM - Spin with Emily</li>
              </ul>
            </div>
            {/* Tuesday */}
            <div className="border border-gray-300 dark:bg-oceanBlue dark:text-neonAqua shadow-md dark:shadow-neonAqua p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Tuesday</h3>
              <ul>
                <li>9:00 AM - Pilates with Jessica</li>
                <li>12:00 PM - Zumba with Rachel</li>
                <li>6:00 PM - Body Pump with Mike</li>
              </ul>
            </div>
            {/* Wednesday */}
            <div className="border border-gray-300 dark:bg-oceanBlue dark:text-neonAqua shadow-md dark:shadow-neonAqua p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Wednesday</h3>
              <ul>
                <li>8:00 AM - Cardio Blast with Emily</li>
                <li>11:00 AM - Yoga with Sarah</li>
                <li>6:00 PM - Spin with John</li>
              </ul>
            </div>
            {/* Thursday */}
            <div className="border border-gray-300 dark:bg-oceanBlue dark:text-neonAqua shadow-md dark:shadow-neonAqua p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Thursday</h3>
              <ul>
                <li>9:00 AM - Pilates with Jessica</li>
                <li>12:00 PM - Zumba with Rachel</li>
                <li>6:00 PM - Body Pump with Mike</li>
              </ul>
            </div>
            {/* Friday */}
            <div className="border border-gray-300 dark:bg-oceanBlue dark:text-neonAqua shadow-md dark:shadow-neonAqua p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Friday</h3>
              <ul>
                <li>8:00 AM - Yoga with Sarah</li>
                <li>10:00 AM - HIIT with John</li>
                <li>5:00 PM - Spin with Emily</li>
              </ul>
            </div>
            {/* Saturday */}
            <div className="border border-gray-300 dark:bg-oceanBlue dark:text-neonAqua shadow-md dark:shadow-neonAqua p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Saturday</h3>
              <ul>
                <li>9:00 AM - Pilates with Jessica</li>
                <li>12:00 PM - Zumba with Rachel</li>
                <li>6:00 PM - Body Pump with Mike</li>
              </ul>
            </div>
            {/* Sunday */}
            <div className="border border-gray-300 dark:bg-oceanBlue dark:text-neonAqua shadow-md dark:shadow-neonAqua p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Sunday</h3>
              <ul>
                <li>8:00 AM - Yoga with Sarah</li>
                <li>10:00 AM - HIIT with John</li>
                <li>5:00 PM - Spin with Emily</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
