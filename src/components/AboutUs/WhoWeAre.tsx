import React from "react";
import { Button } from "../ui/button";

const WhoWeAre = () => {
  return (
    <section className="container overflow-x-hidden h-full pt-10 mx-auto">
      <div className="w-11/12 mx-auto items-center justify-between">
        {/* Upper part */}
        <div className="space-y-3 flex flex-col items-center justify-center w-full md:w-8/12 mx-auto">
          <div>
            <Button className="bg-[#dbad52] shadow-md uppercase font-medium hover:transition-all hover:bg-[#f7c769]">
              Who we are
            </Button>
          </div>
          <p className="text-base font-normal">
            At GoalQuest Consult, we empower entrepreneurs, business leaders,
            and ambitious professionals with world-class training, coaching, and
            consulting services. Since 2021, we've been transforming visions
            into reality—helping individuals and businesses thrive in Nigeria's
            competitive landscape. Headquartered in Enugu, Nigeria. Driving
            Economic Growth Across Africa.
          </p>
        </div>

        {/* Down part */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center py-16">
          <div className="w-full md:w-1/2">
            <img
              src="https://res.cloudinary.com/dn4hkronr/image/upload/v1749999715/story_sebvan.png"
              alt="story"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col space-y-5 mt-5 md:mt-0 px-2 md:px-0">
            <h2 className="font-bold text-3xl capitalize md:text-start">
              our story
            </h2>

            <p className="text-base font-normal md:text-start">
              What began as a bold startup in 2021 has grown into a leading business
              training and consulting firm in Nigeria. Our journey is fueled by:
            </p>

            <ul className="list-none space-y-2 text-base md:text-start">
              <li>✔ <strong>Excellence</strong> - Delivering top-tier programs that drive real results.</li>
              <li>✔ <strong>Accessibility</strong> - Making elite training affordable for all.</li>
              <li>✔ <strong>Innovation</strong> - Equipping leaders with cutting-edge strategies.</li>
            </ul>

            <p className="text-base font-normal md:text-start">
              Today, we’re proud to be a trusted partner for entrepreneurs,
              executives, and startups shaping a new generation of African business
              leaders.
              <br /><br />
              As we continue to evolve, our focus remains on making professional
              training and certifications accessible to all, fostering a generation
              of business leaders who will drive economic growth and transformation
              across Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhoWeAre;