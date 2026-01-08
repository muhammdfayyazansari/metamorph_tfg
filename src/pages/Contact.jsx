import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Toaster, toast } from 'react-hot-toast'
import * as Yup from 'yup'
import ScrollReveal from '../components/animations/ScrollReveal'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

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
    .required('Phone number is required'),
  message: Yup.string().trim().required('Message is required'),
})

export default function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState(null)

  return (
    <ScrollReveal>
      <div className="div-bottom-gradient flex min-h-200 w-full flex-col items-start justify-center gap-16 overflow-hidden px-6 pt-30 pb-10 text-white lg:flex-row lg:px-20">
        <div className="absolute -bottom-35 left-0 md:h-190 md:w-190">
          <img
            className="object-contain"
            src="/images/bg_images/technology_bg_2.png"
            alt=""
          />
        </div>

        <Toaster position="top-center" />

        {/* LEFT SIDE */}
        <div className="z-10 w-full space-y-8 lg:w-1/2">
          <h1 className="text-5xl font-semibold tracking-tight lg:text-9xl">
            Contact
          </h1>

          <div className="space-y-5 text-lg">
            <div className="flex items-end gap-3">
              <span className="rounded-lg bg-white p-2 text-xl">
                <img
                  className={`h-4 w-4 object-contain`}
                  src="/images/icons/envelop.svg"
                  alt=""
                />
              </span>
              <a href="mailto:contact@metamorph.solutions">
              <span>contact@metamorph.solutions</span>
              </a>
            </div>

            <div className="flex items-end gap-3">
              <span className="rounded-lg bg-white p-2 text-xl">
                <img
                  className={`h-4 w-4 object-contain`}
                  src="/images/icons/gfx_bot.svg"
                  alt=""
                />
              </span>
              <a href='https://t.me/metamorphsolutions'>
              <span>t.me/metamorphsolutions</span>
              </a>
            </div>

            <div className="flex items-end gap-3">
              <span className="rounded-lg bg-white p-2 text-xl">
                <img
                  className={`h-4 w-4 object-contain`}
                  src="/images/icons/domain.svg"
                  alt=""
                />
              </span>
              <a href="https://metamorph.solutions">
              <span>www.metamorph.solutions</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
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
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              try {
                setSubmissionStatus({ type: 'loading', message: 'Sending message...' })
                toast.loading('Sending message...', { id: 'contact-form' })

                const response = await fetch('/api/send_email.php', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(values),
                })

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                const result = await response.json()

                if (result.status === 'success') {
                  toast.success('Message sent successfully!', { id: 'contact-form' })
                  setSubmissionStatus({ type: 'success', message: 'Your message has been sent successfully!' })
                  resetForm()
                } else {
                  toast.error(result.message || 'Failed to send message.', { id: 'contact-form' })
                  setSubmissionStatus({ type: 'error', message: result.message || 'Failed to send message. Please try again.' })
                }
              } catch (error) {
                console.error('Error sending email:', error)
                toast.error('An error occurred. Please try again later.', { id: 'contact-form' })
                
                // Provide a clearer message if it looks like a local environment issue
                if (error.message.includes('Unexpected token') || error.message.includes('JSON')) {
                    setSubmissionStatus({ 
                        type: 'error', 
                        message: 'Local Environment Note: Please ensure both the Vite server and the local PHP server are running. If you just deployed, check your server PHP logs.' 
                    })
                } else {
                    setSubmissionStatus({ type: 'error', message: 'An error occurred while sending your message. Please try again later.' })
                }
              } finally {
                setSubmitting(false)
              }
            }}
          >
            {({ setFieldValue, values }) => (
              <Form className="space-y-4">
                {/* FIRST + LAST NAME */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm">First name</label>
                    <Field
                      name="firstName"
                      placeholder="First name"
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(
                          /[^A-Za-z\s]/g,
                          ''
                        )
                      }}
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
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(
                          /[^A-Za-z\s]/g,
                          ''
                        )
                      }}
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
                <div className="phone-input-container !relative !z-50">
                  <label className="text-sm">Phone number</label>
                  <PhoneInput
                    country={'us'}
                    value={values.phone}
                    onChange={(phone) => setFieldValue('phone', phone)}
                    containerClass="!mt-1 !relative !z-50"
                    inputClass="!w-full !bg-transparent !text-white !border-none !rounded-xl !py-5 !pl-14 !text-sm focus:!outline-none glass card-gradient"
                    buttonClass="!bg-transparent !border-none !rounded-l-xl hover:!bg-white/10 !z-60"
                    dropdownClass="!bg-neutral-900 !text-white !border-white/10 !rounded-xl !z-70"
                    searchClass="!bg-neutral-800 !text-white"
                    placeholder="+1 (XXX) XXX-XXXX"
                    enableSearch={true}
                    disableSearchIcon={true}
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

              {/* STATUS MESSAGE */}
              {submissionStatus && (
                <div className={`mt-4 text-center text-sm font-medium ${
                  submissionStatus.type === 'success' ? 'text-green-400' : 
                  submissionStatus.type === 'error' ? 'text-red-400' : 'text-blue-400'
                }`}>
                  {submissionStatus.message}
                </div>
              )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </ScrollReveal>
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
