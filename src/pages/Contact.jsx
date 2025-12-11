export default function Contact() {
  return (
    // <div className="flex min-h-screen w-full flex-col items-center justify-between gap-16 bg-[#0b0e13] px-6 py-20 text-white lg:flex-row lg:px-20">
    <div className="div-bottom-gradient flex min-h-200 w-full flex-col items-start justify-between gap-16 overflow-hidden px-6 pt-30 text-white pb-10 lg:flex-row lg:px-20">
      <div className="absolute -bottom-35 left-0 md:h-190 md:w-190">
        <img
          className="object-contain"
          src="/images/bg_images/technology_bg_2.png"
        />
      </div>

      {/* LEFT SIDE */}
      <div className="z-10 w-full space-y-8 lg:w-1/2">
        <h1 className="text-5xl font-semibold tracking-tight lg:text-9xl">
          Contact
        </h1>

        <div className="space-y-5 text-lg">
          <div className="flex items-center gap-3">
            <span className="text-xl text-pink-400">📧</span>
            <span>support@metamorph.design</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl text-blue-400">✈️</span>
            <span>@MetamorphGFX_Bot</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl text-purple-400">🔗</span>
            <span>www.metamorph.design</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      {/* <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl lg:w-[420px]"> */}
      <div className="glass card-gradient z-10 w-full rounded-2xl p-8 shadow-2xl backdrop-blur-xl lg:w-[420px]">
        <form className="space-y-4">
          {/* FIRST + LAST NAME */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm">First name</label>
              <input
                // >>> APPLIED: glass card-gradient (already done here, kept for consistency)
                className="glass card-gradient mt-1 w-full rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none"
                placeholder="First name"
              />
            </div>

            <div>
              <label className="text-sm">Last name</label>
              <input
                // >>> APPLIED: glass card-gradient
                className="glass card-gradient mt-1 w-full rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none"
                placeholder="Last name"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              // >>> APPLIED: glass card-gradient
              className="glass card-gradient mt-1 w-full rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none"
              placeholder="you@company.com"
            />
          </div>

          {/* PHONE NUMBER */}
          <div>
            <label className="text-sm">Phone number</label>
            <div className="flex gap-2">
              <input
                // >>> APPLIED: glass card-gradient
                className="glass card-gradient mt-1 w-full rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none"
                placeholder="+1 (555) 000-0000"
              />
              <select
                // >>> APPLIED: glass card-gradient
                className="glass card-gradient mt-1 rounded-md px-2 text-sm text-gray-300 focus:outline-none"
              >
                <option>US</option>
                <option>UK</option>
                <option>PK</option>
                <option>IN</option>
              </select>
            </div>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-sm">Message</label>
            <textarea
              rows={4}
              // >>> APPLIED: glass card-gradient
              className="glass card-gradient mt-1 w-full rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none"
              placeholder="Leave us a message..."
            ></textarea>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="rounded-md button-gradient py-2 font-medium text-white transition hover:opacity-90"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
