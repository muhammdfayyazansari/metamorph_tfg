import FaqsCard from './ui/FaqsCard'
import ServiceCard from './ui/ServiceCard'

const Faqs = () => {
    const questions = [
        {
            qustion: 'What services do you offer?',
            isActive: true,
            answer: 'We provide branding, web and UI/UX design, social media content, and custom creative solutions for digital and print.',
        },
        {
            qustion: 'What services do you offer?',
        },
        {
            qustion: 'What services do you offer?',
        },
        {
            qustion: 'What services do you offer?',
        },
        {
            qustion: 'What services do you offer?',
        },
    ]
    return (
        <div className="relative flex w-full flex-col">
            <div className="absolute top-0 right-0 flex h-full w-full items-center justify-end self-end lg:pt-48">
                <div className="relative h-[500px] w-[350px] lg:h-[1000px] lg:w-[700px]">
                    <img
                        className="absolute right-0 h-full object-contain lg:bottom-0"
                        src="/images/bg_images/faqs_bg.webp"
                    />
                </div>
            </div>
            <div className="flex w-full flex-col items-center gap-32 p-16 py-10">
                <div className="capitalize">
                    <h2 className="-mb-2 pl-10 text-[20px] leading-none tracking-[-0.04em] sm:-mb-4 sm:pl-20 sm:text-[30px] md:-mb-5 md:pl-[90px] md:text-[40px] lg:-mb-6 lg:pl-[100px] lg:text-[55px]">
                        frequently asked
                    </h2>

                    <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
                        questions
                    </h1>
                </div>
            </div>
            <div className="z-10 flex w-full flex-col gap-5 p-6 lg:px-16 lg:py-8">
                {questions.map((ques) => {
                    return (
                        <FaqsCard
                            question={ques['question']}
                            answer={ques['answer']}
                            isActive={ques['isActive']}
                        />
                    )
                })}
            </div>

            <div className="combo-gradient-opacity z-10 flex flex-col items-center gap-16 p-16 py-20 pt-48 capitalize">
                <div className="capitalize">
                    <h2 className="-mb-5 pl-20 text-[20px] leading-none tracking-[-0.04em] sm:-mb-8 sm:pl-30 sm:text-[30px] md:-mb-10 md:pl-40 md:text-[40px] lg:-mb-13 lg:pl-50 lg:text-[55px]">
                        Enter the Next
                    </h2>

                    <h1 className="text-[70px] leading-none font-medium tracking-[-0.04em] sm:text-[120px] md:text-[150px] lg:text-[185px]">
                        Dimension
                    </h1>
                    <h2 className="-mt-2 text-end text-[20px] leading-none tracking-[-0.04em] sm:-mt-3 sm:text-[30px] md:-mt-5 md:text-[40px] lg:-mt-6 lg:text-[55px]">
                        of Design
                    </h2>
                </div>
                <div className="flex w-full justify-center">
                    <div className="rounded-2xl bg-white px-5 py-4">
                        <button className="bg-[linear-gradient(93deg,#51D1F4_-27.2%,#D30A8C_77.56%)] bg-clip-text text-xl font-semibold text-transparent">
                            Let's Morph
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs
