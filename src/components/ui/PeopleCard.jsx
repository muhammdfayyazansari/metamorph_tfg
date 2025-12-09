export default function PeopleCard({
    img_src = '',
    title = '',
    subTitle = '',
    para = '',
    extraClass = '',
    isFlip = false,
}) {
    return (
        <div
            className={`flex ${isFlip ? 'flex-col lg:flex-row-reverse' : 'flex-col lg:flex-row'} gap-10 ${extraClass}`}
        >
            <div
                className={`flex w-full lg:w-2/3 ${isFlip ? 'justify-end' : ''} `}
            >
                <img
                    className="h-full max-w-40 rounded-xl object-contain lg:w-full lg:max-w-96 lg:min-w-70"
                    src={img_src}
                    alt={title}
                />
            </div>
            <div className="glass card-gradient flex flex-col-reverse lg:flex-row gap-3 rounded-3xl p-8">
                <div className="flex w-full lg:w-4/5 flex-col justify-center gap-3 lg:pr-20">
                    <div>
                        <h1 className="text-2xl font-medium">{title}</h1>
                        <h3 className="text-lg font-light text-white/50">
                            {subTitle}
                        </h3>
                    </div>
                    <div className="flex justify-between">
                        <p className="w-full font-light text-pretty text-white/50">
                            {para}
                        </p>
                    </div>
                </div>

                {/* icon div rating */}
                <div className="flex flex-col items-end lg:items-center justify-center">
                    <img
                        className="w-40 rounded-xl object-contain"
                        src={'/images/icons/rating.svg'}
                        alt={'rating'}
                    />
                    <img
                        className="w-40 rounded-xl object-contain"
                        src={'/images/icons/inverted_comma.svg'}
                        alt={'inverted_comma'}
                    />
                </div>
            </div>
        </div>
    )
}
