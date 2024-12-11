import React from 'react'
import { AiTwotoneLike } from "react-icons/ai";
import { RiGlobalFill } from "react-icons/ri";
import { FaFlag, FaHashtag } from "react-icons/fa6";
import { GiMeepleCircle } from "react-icons/gi";
import { IoGitBranchOutline } from "react-icons/io5";

const FlexGrid = () => {
  return (
    <div>
      <div className="gap-4 flex flex-col justify-center  lg:grid md:grid sm:flex sm:flex-col md:grid-rows-4 ">
        <div className="flex flex-col sm:flex-col md:flex-row gap-4 w-full ">
          <div className=" flex flex-col justify-center rounded-xl border-[0.5px] border-[#048C80] p-6 gap-6 transition-all hover:scale-[1.03] w-full md:w-1/2">
            <div className="flex items-center mb-3 text-[#AAD9D1]">
              <AiTwotoneLike size={30} />
            </div>
            <div className="gap-4">
              <h3 className="text-xl font-bold mb-2">
                Cross-Platform Accessibility
              </h3>
              <p className="text-[#BABABA]">
                {
                  "Whether you're on your desktop, tablet, or smartphone, SmartNotes is accessible across all devices. Work seamlessly on the go and never miss a beat."
                }
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-xl border-[0.5px] border-[#048C80] p-6 gap-6 transition-all hover:scale-[1.03] w-full md:w-1/2">
            <div className="flex items-center mb-3 text-[#AAD9D1]">
              <RiGlobalFill size={30} />
            </div>
            <div className="gap-4">
              <h3 className="text-xl font-bold mb-2">
                {"Customizable Templates"}
              </h3>
              <p className="text-[#BABABA]">
                {
                  "Create custom templates for your recurring tasks or projects to save time and ensure consistency. Tailor SmartNotes to fit your unique workflow and preferences."
                }
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row gap-8  ">
          <div className="lg:hidden flex flex-col justify-center rounded-xl border-[0.5px] border-[#048C80] p-6 gap-6 transition-all hover:scale-[1.03] w-full md:w-full lg:w-1/4">
            <div className="flex items-center mb-3 text-[#AAD9D1]">
              <FaFlag size={30} />
            </div>
            <div className="gap-4">
              <h3 className="text-xl font-bold mb-2">
                {"Secure Cloud Storage"}
              </h3>
              <p className="text-[#BABABA]">
                {
                  "Rest easy knowing that your notes are securely stored in the cloud. Access your information from any device, anytime, without worrying about losing important data."
                }
              </p>
            </div>
          </div>
          <div className="hidden lg:flex gap-4  ">
            <div className=" flex flex-col justify-center rounded-xl border-[0.5px] border-[#048C80] p-6 gap-6 transition-all hover:scale-[1.03] w-full md:w-full lg:w-1/4">
              <div className="flex items-center mb-3 text-[#AAD9D1]">
                <FaFlag size={30} />
              </div>
              <div className="gap-4">
                <h3 className="text-xl font-bold mb-2">
                  {"Secure Cloud Storage"}
                </h3>
                <p className="text-[#BABABA]">
                  {
                    "Rest easy knowing that your notes are securely stored in the cloud. Access your information from any device, anytime, without worrying about losing important data."
                  }
                </p>
              </div>
            </div>
            <div className=" flex flex-col justify-center rounded-xl border-[0.5px] border-[#048C80] p-6 gap-6 transition-all hover:scale-[1.03] w-full md:w-1/2 lg:w-1/4">
              <div className="flex items-center mb-3 text-[#AAD9D1]">
                <GiMeepleCircle size={30} />
              </div>
              <div className="gap-4">
                <h3 className="text-xl font-bold mb-2">
                  {"Real-Time Collaboration"}
                </h3>
                <p className="text-[#BABABA]">
                  {
                    "Collaborate seamlessly with your team members or classmates in real-time on shared notes and projects."
                  }
                </p>
              </div>
            </div>

            <div className=" flex flex-col justify-center rounded-xl border-[0.5px] border-[#048C80] p-6 gap-6 transition-all hover:scale-[1.03] w-full md:w-1/2 lg:w-1/4">
              <div className="flex items-center mb-3 text-[#AAD9D1]">
                <FaHashtag size={30} />
              </div>
              <div className="gap-4">
                <h3 className="text-xl font-bold mb-2">
                  {"AI-Powered Organization"}
                </h3>
                <p className="text-[#BABABA]">
                  {
                    "Our AI-powered organization feature categorizes and prioritizes your notes, making it easy to find what you need when you need it."
                  }
                </p>
              </div>
            </div>
            <div className=" flex flex-col justify-center rounded-xl border-[0.5px] border-[#048C80] p-6 gap-6 transition-all hover:scale-[1.03] w-full md:w-full lg:w-1/4">
              <div className="flex items-center mb-3 text-[#AAD9D1]">
                <IoGitBranchOutline size={30} />
              </div>
              <div className="gap-4">
                <h3 className="text-xl font-bold mb-2">{"Integrations"}</h3>
                <p className="text-[#BABABA]">
                  {" "}
                  {
                    "Connect SmartNotes with your favorite productivity tools like Google Drive, Trello, and Slack. Streamline your workflow by syncing data across platforms and enhancing collaboration."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-col sm:flex-col md:flex-row gap-4 w-full lg:flex-row lg:gap-4 lg:hidden">
          <div className=" flex flex-col justify-center rounded-xl border-[0.5px] border-[#048C80] p-6 gap-6 transition-all hover:scale-[1.03] w-full md:w-1/2 lg:w-1/4">
            <div className="flex items-center mb-3 text-[#AAD9D1]">
              <GiMeepleCircle size={30} />
            </div>
            <div className="gap-4">
              <h3 className="text-xl font-bold mb-2">
                {"Real-Time Collaboration"}
              </h3>
              <p className="text-[#BABABA]">
                {
                  "Collaborate seamlessly with your team members or classmates in real-time on shared notes and projects."
                }
              </p>
            </div>
          </div>

          <div className=" flex flex-col justify-center rounded-xl border-[0.5px] border-[#048C80] p-6 gap-6 transition-all hover:scale-[1.03] w-full md:w-1/2 lg:w-1/4">
            <div className="flex items-center mb-3 text-[#AAD9D1]">
              <FaHashtag size={30} />
            </div>
            <div className="gap-4">
              <h3 className="text-xl font-bold mb-2">
                {"AI-Powered Organization"}
              </h3>
              <p className="text-[#BABABA]">
                {
                  "Our AI-powered organization feature categorizes and prioritizes your notes, making it easy to find what you need when you need it."
                }
              </p>
            </div>
          </div>
        </div>

        <div className=" lg:hidden flex flex-col justify-center rounded-xl border-[0.5px] border-[#048C80] p-6 gap-6 transition-all hover:scale-[1.03] w-full md:w-full lg:w-1/4">
          <div className="flex items-center mb-3 text-[#AAD9D1]">
            <IoGitBranchOutline size={30} />
          </div>
          <div className="gap-4">
            <h3 className="text-xl font-bold mb-2">{"Integrations"}</h3>
            <p className="text-[#BABABA]">
              {
                "Connect SmartNotes with your favorite productivity tools like Google Drive, Trello, and Slack. Streamline your workflow by syncing data across platforms and enhancing collaboration."
              }
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default FlexGrid