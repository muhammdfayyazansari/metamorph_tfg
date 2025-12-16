import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Toaster, toast } from 'react-hot-toast'
import * as Yup from 'yup'

const contactSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .matches(/^[A-Za-z\s]+$/, 'Only letters and spaces are allowed')
    .required('First name is required'),
  lastName: Yup.string()
    .trim()
    .matches(/^[A-Za-z\s]+$/, 'Only letters and spaces are allowed')
    .required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9+()]{7,15}$/, 'Invalid phone number')
    .required('Phone number is required'),
  message: Yup.string().trim().required('Message is required'),
})

export default function Contact() {
  return (
    // <div className="flex min-h-screen w-full flex-col items-center justify-between gap-16 bg-[#0b0e13] px-6 py-20 text-white lg:flex-row lg:px-20">
    <div className="div-bottom-gradient flex min-h-200 w-full flex-col items-start justify-center gap-16 overflow-hidden px-6 pt-30 pb-10 text-white lg:flex-row lg:px-20">
      <div className="absolute -bottom-35 left-0 md:h-190 md:w-190">
        <img
          className="object-contain"
          src="/images/bg_images/technology_bg_2.png"
        />
      </div>

      <Toaster position="top-right" />

      {/* LEFT SIDE */}
      <div className="z-10 w-full space-y-8 lg:w-1/2">
        <h1 className="text-5xl font-semibold tracking-tight lg:text-9xl">
          Contact
        </h1>

        <div className="space-y-5 text-lg">
          <div className="flex items-end gap-3">
            <span className="text-xl bg-white p-2 rounded-lg">
              <img className={`object-contain w-4 h-4`} src="/images/icons/envelop.svg" />
            </span>
            <span>support@metamorph.design</span>
          </div>

          <div className="flex items-end gap-3">
            <span className="text-xl bg-white p-2 rounded-lg">
              <img className={`object-contain w-4 h-4`} src="/images/icons/gfx_bot.svg" />
            </span>
            <span>@MetamorphGFX_Bot</span>
          </div>

          <div className="flex items-end gap-3">
              <span className="text-xl bg-white p-2 rounded-lg">
              <img className={`object-contain w-4 h-4`} src="/images/icons/domain.svg" />
            </span>
            <span>www.metamorph.design</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      {/* <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl lg:w-[420px]"> */}
      <div className="glass card-gradient z-10 w-full rounded-2xl p-8 shadow-2xl backdrop-blur-xl lg:w-[420px]">
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
          }}
          validationSchema={contactSchema}
          onSubmit={(values, { resetForm }) => {
            const subject = encodeURIComponent('New Contact Message')
            const body = encodeURIComponent(
              `First Name: ${values.firstName}
              Last Name: ${values.lastName}
              Email: ${values.email}
              Phone: ${values.phone}

              Message:
              ${values.message}`
            )

            // toast.success('Opening email client…')
            // window.location.href = `mailto:support@metamorph.design?subject=${subject}&body=${body}`
            window.location.href = `mailto:to=Muhammad-Bilal300@gmail.com?subject=${subject}&body=${body}`
            resetForm()
          }}
        >
          <Form className="space-y-4">
            {/* FIRST + LAST NAME */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm">First name</label>
                <Field
                  name="firstName"
                  placeholder="First name"
                  className="glass card-gradient mt-1 w-full rounded-xl px-3 py-2 text-sm focus:outline-none"
                />
                <ErrorMessage
                  name="firstName"
                  component="p"
                  className="mt-1 text-xs text-red-400"
                />
              </div>

              <div>
                <label className="text-sm">Last name</label>
                <Field
                  name="lastName"
                  placeholder="Last name"
                  className="glass card-gradient mt-1 w-full rounded-xl px-3 py-2 text-sm focus:outline-none"
                />
                <ErrorMessage
                  name="lastName"
                  component="p"
                  className="mt-1 text-xs text-red-400"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="you@company.com"
                className="glass card-gradient mt-1 w-full rounded-xl px-3 py-2 text-sm focus:outline-none"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="mt-1 text-xs text-red-400"
              />
            </div>

            {/* PHONE NUMBER */}
            <div>
              <label className="text-sm">Phone number</label>
              <Field
                name="phone"
                placeholder="0300 1234567"
                className="glass card-gradient mt-1 w-full rounded-xl px-3 py-2 text-sm focus:outline-none"
              />
              <ErrorMessage
                name="phone"
                component="p"
                className="mt-1 text-xs text-red-400"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm">Message</label>
              <Field
                as="textarea"
                rows={4}
                name="message"
                placeholder="Leave us a message..."
                className="glass card-gradient mt-1 w-full rounded-xl px-3 py-2 text-sm focus:outline-none"
              />
              <ErrorMessage
                name="message"
                component="p"
                className="mt-1 text-xs text-red-400"
              />
            </div>

            {/* SUBMIT */}
            <button type="submit" className="button-gradient">
              <span>Submit</span>
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

// import Select from 'react-select'

// const countries = [
//   { value: 'US', label: 'us' },
//   { value: 'UK', label: 'us' },
//   { value: 'PK', label: 'us' },
//   { value: 'IN', label: 'us' },
//   { value: 'US', label: 'us' },
//   { value: 'UK', label: 'us' },
//   { value: 'PK', label: 'us' },
//   { value: 'IN', label: 'us' },
//   { value: 'US', label: 'us' },
//   { value: 'UK', label: 'us' },
//   { value: 'PK', label: 'us' },
//   { value: 'IN', label: 'us' },
//   { value: 'US', label: 'us' },
//   { value: 'UK', label: 'us' },
//   { value: 'PK', label: 'us' },
//   { value: 'IN', label: 'us' },
// ]

// export default function Contact() {
//   const glassSelectStyles = {
//     control: (base) => ({
//       ...base,
//       // background: 'rgba(255,255,255,0.05)',
//       background: 'color-mix(in oklch,var(--color-background) 40%,transparent)',
//       backdropFilter: 'blur(20px)',
//       border: '1px solid rgba(255,255,255,0.15)',
//       borderRadius: '0.75rem',
//       minHeight: '40px',
//       boxShadow: 'none',
//       color: 'white !important;',
//     }),
//     menu: (base) => ({
//       ...base,
//       background: 'rgba(15,18,25,0.95)',
//       backdropFilter: 'blur(20px)',
//       borderRadius: '0.75rem',
//       overflow: 'hidden',
//     }),
//     option: (base, state) => ({
//       ...base,
//       background: state.isFocused
//         ? 'linear-gradient(84deg, #7D4AE2, #F2D25E)'
//         : 'transparent',
//       color: 'white',
//       cursor: 'pointer',
//     }),
//     singleValue: (base) => ({
//       ...base,
//       color: 'white',
//     }),
//   }
//   return (
//     // <div className="flex min-h-screen w-full flex-col items-center justify-between gap-16 bg-[#0b0e13] px-6 py-20 text-white lg:flex-row lg:px-20">
//     <div className="div-bottom-gradient flex min-h-200 w-full flex-col items-start justify-center gap-16 overflow-hidden px-6 pt-30 pb-10 text-white lg:flex-row lg:px-20">
//       <div className="absolute -bottom-35 left-0 md:h-190 md:w-190">
//         <img
//           className="object-contain"
//           src="/images/bg_images/technology_bg_2.png"
//         />
//       </div>

//       {/* LEFT SIDE */}
//       <div className="z-10 w-full space-y-8 lg:w-1/2">
//         <h1 className="text-5xl font-semibold tracking-tight lg:text-9xl">
//           Contact
//         </h1>

//         <div className="space-y-5 text-lg">
//           <div className="flex items-center gap-3">
//             <span className="text-xl text-pink-400">📧</span>
//             <span>support@metamorph.design</span>
//           </div>

//           <div className="flex items-center gap-3">
//             <span className="text-xl text-blue-400">✈️</span>
//             <span>@MetamorphGFX_Bot</span>
//           </div>

//           <div className="flex items-center gap-3">
//             <span className="text-xl text-purple-400">🔗</span>
//             <span>www.metamorph.design</span>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE FORM */}
//       {/* <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl lg:w-[420px]"> */}
//       <div className="glass card-gradient z-10 w-full rounded-2xl p-8 shadow-2xl backdrop-blur-xl lg:w-[420px]">
//         <form className="space-y-4">
//           {/* FIRST + LAST NAME */}
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//             <div>
//               <label className="text-sm">First name</label>
//               <input
//                 // >>> APPLIED: glass card-gradient (already done here, kept for consistency)
//                 className="glass card-gradient mt-1 w-full rounded-xl px-3 py-2 text-sm placeholder-gray-400 focus:outline-none"
//                 placeholder="First name"
//               />
//             </div>

//             <div>
//               <label className="text-sm">Last name</label>
//               <input
//                 // >>> APPLIED: glass card-gradient
//                 className="glass card-gradient mt-1 w-full rounded-xl px-3 py-2 text-sm placeholder-gray-400 focus:outline-none"
//                 placeholder="Last name"
//               />
//             </div>
//           </div>

//           {/* EMAIL */}
//           <div>
//             <label className="text-sm">Email</label>
//             <input
//               type="email"
//               // >>> APPLIED: glass card-gradient
//               className="glass card-gradient mt-1 w-full rounded-xl px-3 py-2 text-sm placeholder-gray-400 focus:outline-none"
//               placeholder="you@company.com"
//             />
//           </div>

//           {/* PHONE NUMBER */}
//           <div>
//             <label className="text-sm">Phone number</label>
//             <div className="flex gap-2">
//               <input
//                 // >>> APPLIED: glass card-gradient
//                 className="glass card-gradient mt-1 w-full rounded-xl px-3 py-2 text-sm placeholder-gray-400 focus:outline-none"
//                 placeholder="+1 (555) 000-0000"
//               />

//               {/* <Select
//                 options={countries}
//                 styles={glassSelectStyles}
//                 placeholder="Country"
//               /> */}
//               {/* <select
//                 // >>> APPLIED: glass card-gradient
//                 className="glass card-gradient mt-1 rounded-xl px-2 text-sm text-gray-300 focus:outline-none"
//               >
//                 <option>US</option>
//                 <option>UK</option>
//                 <option>PK</option>
//                 <option>IN</option>
//               </select> */}
//             </div>
//           </div>

//           {/* MESSAGE */}
//           <div>
//             <label className="text-sm">Message</label>
//             <textarea
//               rows={4}
//               // >>> APPLIED: glass card-gradient
//               className="glass card-gradient mt-1 w-full rounded-xl px-3 py-2 text-sm placeholder-gray-400 focus:outline-none"
//               placeholder="Leave us a message..."
//             ></textarea>
//           </div>

//           {/* SUBMIT */}
//           <button class="button-gradient">
//             <span>Submit</span>
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }
