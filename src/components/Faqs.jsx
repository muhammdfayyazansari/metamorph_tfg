import FaqsCard from "./ui/FaqsCard";
import ServiceCard from "./ui/ServiceCard";

const Faqs = () => {
  const questions = [
    {
      qustion: "What services do you offer?",
      isActive: true,
      answer:
        "We provide branding, web and UI/UX design, social media content, and custom creative solutions for digital and print.",
    },
    {
      qustion: "What services do you offer?",
    },
    {
      qustion: "What services do you offer?",
    },
    {
      qustion: "What services do you offer?",
    },
    {
      qustion: "What services do you offer?",
    },
  ];
  return (
    <div className="relative flex flex-col w-full">
      <div className="absolute top-0 right-0 pt-48">
        <div className="relative h-[1000px] w-[700px] overflow-x-hidden overflow-y-auto">
          <img
            className="absolute bottom-0 right-0 object-contain "
            src="/images/bg_images/faqs_bg.webp"
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full py-10 gap-32 p-16">
        <div className="capitalize">
          <h2 className="text-4xl pl-[84px] -mb-5">Frequently Asked</h2>
          <h1 className="text-9xl font-semibold">Questions</h1>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-full pt-10 z-10 p-16">
        {questions.map((ques) => {
          return (
            <FaqsCard
              question={ques["question"]}
              answer={ques["answer"]}
              isActive={ques["isActive"]}
            />
          );
        })}
      </div>

      <div className="flex flex-col items-center capitalize z-10 pt-48 combo-gradient-opacity p-16 py-20 gap-16">
        <div className="">
          <h2 className="text-4xl pl-32 -mb-10">Enter the Next</h2>
          <h1 className="text-9xl font-semibold">Dimension</h1>
          <h2 className="text-end text-4xl -mt-2"> of Design</h2>
        </div>
        <div className="flex justify-center w-full ">
          <div className="bg-white rounded-2xl py-4 px-5">
            <button className="text-transparent text-xl bg-clip-text bg-[linear-gradient(93deg,#51D1F4_-27.2%,#D30A8C_77.56%)] font-semibold">
              Let's Morph
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
