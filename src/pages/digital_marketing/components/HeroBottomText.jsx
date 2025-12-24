import { Link } from "react-router-dom"

const HeroBottomText = () => {
    return (
        <div className="flex w-full flex-col justify-between space-y-4 p-6 md:hidden lg:px-16 lg:py-8">
            <div className="w-full">
                <p>
                    We're passionate about turning your vision into stunning
                    designs. Whether you're an individual, startup, or
                    corporation, we bring creativity and precision to elevate
                    your brand.
                </p>
            </div>
            <div className="flex flex-row items-end justify-center gap-5">
                <Link to="/contact" class="button-gradient"><span>Have a Project</span></Link>
                <Link to={`/contact`} className="button-glass">Contact</Link>
            </div>
        </div>
    )
}

export default HeroBottomText
