import React from "react";

const Trainers = () => {
  return (
    <div className="min-h-screen w-screen p-4 pb-12" id="trainers">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-oceanBlue text-5xl pb-8 font-bold text-center">
          Our Trainers
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Sarah */}
          <div className="border border-gray-300 p-4 rounded-md dark:bg-oceanBlue dark:text-neonAqua shadow-md dark:shadow-neonAqua">
            <h3 className="text-lg font-semibold mb-2">Sarah</h3>
            <p className="mb-2">Yoga Instructor</p>
            <p>
              Sarah is a certified yoga instructor with over 10 years of
              experience. She specializes in various yoga styles, including
              Vinyasa, Hatha, and Ashtanga.
            </p>
          </div>
          {/* John */}
          <div className="border border-gray-300 p-4 rounded-md dark:bg-oceanBlue dark:text-neonAqua shadow-md dark:shadow-neonAqua">
            <h3 className="text-lg font-semibold mb-2">John</h3>
            <p className="mb-2">HIIT Specialist</p>
            <p>
              John is a highly experienced HIIT specialist known for his intense
              and effective workout routines. With John, you'll push your limits
              and achieve incredible results.
            </p>
          </div>
          {/* Emily */}
          <div className="border border-gray-300 p-4 rounded-md dark:bg-oceanBlue dark:text-neonAqua shadow-md dark:shadow-neonAqua">
            <h3 className="text-lg font-semibold mb-2">Emily</h3>
            <p className="mb-2">Spin Instructor</p>
            <p>
              Emily brings energy and enthusiasm to every spin class. With her
              motivating playlists and challenging routines, you'll pedal your
              way to fitness success.
            </p>
          </div>
          {/* Jessica */}
          <div className="border border-gray-300 p-4 rounded-md dark:bg-oceanBlue dark:text-neonAqua shadow-md dark:shadow-neonAqua">
            <h3 className="text-lg font-semibold mb-2">Jessica</h3>
            <p className="mb-2">Pilates Instructor</p>
            <p>
              Jessica is a dedicated Pilates instructor who focuses on
              strengthening and toning your body. Join her classes for a
              full-body workout that improves flexibility and core strength.
            </p>
          </div>
          {/* Rachel */}
          <div className="border border-gray-300 p-4 rounded-md dark:bg-oceanBlue dark:text-neonAqua shadow-md dark:shadow-neonAqua">
            <h3 className="text-lg font-semibold mb-2">Rachel</h3>
            <p className="mb-2">Zumba Instructor</p>
            <p>
              Rachel's Zumba classes are like no other! Get ready to dance,
              sweat, and have fun while burning calories with her dynamic and
              exciting routines.
            </p>
          </div>
          {/* Mike */}
          <div className="border border-gray-300 p-4 rounded-md dark:bg-oceanBlue dark:text-neonAqua shadow-md dark:shadow-neonAqua">
            <h3 className="text-lg font-semibold mb-2">Mike</h3>
            <p className="mb-2">Body Pump Instructor</p>
            <p>
              Mike's Body Pump classes are designed to sculpt and tone your
              muscles. Join his sessions for a full-body workout using barbells,
              dumbbells, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
