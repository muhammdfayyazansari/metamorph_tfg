import React from 'react'

const AdminCapabilities = () => {
  return (
    <section className="py-24 text-white">
      <div className="container-section w-full space-y-20 lg:space-y-32">
        {/* Row 1: Executive-Level Admin Capabilities */}
        <div className="flex flex-col w-full lg:flex-row justify-between items-center gap-8 lg:gap-0">
          {/* Left: Text */}
          <div className="space-y-4 lg:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight">
              Executive-Level Admin <br className="hidden lg:block" /> Capabilities
            </h2>
            <ul className="opacity-60 text-lg lg:text-[20px] font-light space-y-2 lg:space-y-0">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Real-time performance metrics
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Revenue and profit visualization
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Order, customer, and conversion intelligence
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Product trend mapping & loyalty behavior insights
              </li>
            </ul>
          </div>
          
          {/* Right: Image Placeholder */}
          <div className="relative w-full lg:w-auto mt-4 lg:mt-0">
            {/* UPLOAD IMAGE HERE: /images/CustomStoresImgs/admin_dashboard.png */}
            <img 
              src="/images/CustomStoresImgs/adminImgOne.svg" 
              alt="Executive Admin Dashboard" 
              className="w-full lg:w-[800px]"
            />
          </div>
        </div>

        {/* Row 2: Enterprise Catalog & Experience Management */}
        <div className="flex w-full flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center">
           {/* Left: Image Placeholder */}
           {/* Mobile: Image First (default order). Desktop: Image First (default order). */}
           {/* User request: "imgs that are on left side appear on top of text". So Image First. */}
           <div className="relative w-full lg:w-auto order-1">
            {/* UPLOAD IMAGE HERE: /images/CustomStoresImgs/catalog_management.png */}
            <img 
              src="/images/CustomStoresImgs/adminImgTwo.svg" 
              alt="Enterprise Catalog Management" 
              className="w-full lg:w-[800px]"
            />
          </div>

          {/* Right: Text */}
          <div className="space-y-4 lg:space-y-8 order-2">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight">
              Enterprise Catalog & <br className="hidden lg:block" /> Experience Management
            </h2>
            <ul className="opacity-60 text-lg lg:text-[20px] font-light space-y-2 lg:space-y-0">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Unified product and variant control
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Smart inventory assignment
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Category hierarchy & priority sorting
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Tag/Badge-driven merchandising
              </li>
            </ul>
          </div>
        </div>


        <div className="flex w-full flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
          {/* Left: Text */}
          <div className="space-y-4 lg:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight">
              Financial Architecture
            </h2>
            <ul className="opacity-60 text-lg lg:text-[20px] font-light space-y-2 lg:space-y-0">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Integrated wallet system
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Multi-gateway payment framework
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Customizable payment routing
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Automated couponing engine
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Abandoned cart profit recovery
              </li>
            </ul>
          </div>
          
          {/* Right: Image Placeholder */}
          <div className="relative w-full lg:w-auto mt-4 lg:mt-0">
            {/* UPLOAD IMAGE HERE: /images/CustomStoresImgs/admin_dashboard.png */}
            <img 
              src="/images/CustomStoresImgs/adminImgThree.svg" 
              alt="Executive Admin Dashboard" 
              className="w-full lg:w-[800px]"
            />
          </div>
        </div>

        <div className="flex w-full flex-col lg:flex-row gap-8 lg:gap-[120px] items-center">
           {/* Left: Image Placeholder */}
           <div className="relative w-full lg:w-auto order-1">
            {/* UPLOAD IMAGE HERE: /images/CustomStoresImgs/catalog_management.png */}
            <img 
              src="/images/CustomStoresImgs/adminImgFour.svg" 
              alt="Enterprise Catalog Management" 
              className="w-full lg:w-[800px]"
            />
          </div>

          {/* Right: Text */}
          <div className="space-y-4 lg:space-y-8 order-2">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight">
              Customer Relationship <br className="hidden lg:block" /> Infrastructure
            </h2>
            <ul className="opacity-60 text-lg lg:text-[20px] font-light space-y-2 lg:space-y-0">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Approval-based review ecosystem
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Two-way support ticketing with email pipeline tracking
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                One-click replacement activation
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Automated engagement sequences (post-purchase, reactivation, loyalty rewards)
              </li>
            </ul>
          </div>
        </div>

         <div className="flex w-full flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
          {/* Left: Text */}
          <div className="space-y-4 lg:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight">
              Brand & Growth <br className="hidden lg:block" /> Systems
            </h2>
            <ul className="opacity-60 text-lg lg:text-[20px] font-light space-y-2 lg:space-y-0">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Homepage banner management
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Announcement broadcasting
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Built-in blog for authority & SEO
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Referral engine with reward flows
              </li>
            </ul>
          </div>
          
          {/* Right: Image Placeholder */}
          <div className="relative w-full lg:w-auto mt-4 lg:mt-0">
            {/* UPLOAD IMAGE HERE: /images/CustomStoresImgs/admin_dashboard.png */}
            <img 
              src="/images/CustomStoresImgs/adminImgFive.svg" 
              alt="Executive Admin Dashboard" 
              className="w-full lg:w-[800px]"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between w-full items-center">
           {/* Left: Image Placeholder */}
           <div className="relative w-full lg:w-auto order-1">
            {/* UPLOAD IMAGE HERE: /images/CustomStoresImgs/catalog_management.png */}
            <img 
              src="/images/CustomStoresImgs/adminImgSix.svg" 
              alt="Enterprise Catalog Management" 
              className="w-full lg:w-[800px]"
            />
          </div>

          {/* Right: Text */}
          <div className="space-y-4 lg:space-y-8 order-2">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight">
              Governance, Compliance <br className="hidden lg:block" /> & Security
            </h2>
            <ul className="opacity-60 text-lg lg:text-[20px] font-light space-y-2 lg:space-y-0">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Tiered admin/user permission matrix
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Detailed audit logging
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                IP/device ban controls
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Scheduled backup automation
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Custom SMTP, bot protection & secure access layers
              </li>
            </ul>
          </div>
        </div>

         <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
          {/* Left: Text */}
          <div className="space-y-4 lg:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight">
              Integrations & <br className="hidden lg:block" /> Extensibility
            </h2>
            <ul className="opacity-60 text-lg lg:text-[20px] font-light space-y-2 lg:space-y-0">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                API-ready architecture
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Third-party plug-in capability
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Optional custom system enhancements available
              </li>
            </ul>
          </div>
          
          {/* Right: Image Placeholder */}
          <div className="relative w-full lg:w-auto mt-4 lg:mt-0">
            {/* UPLOAD IMAGE HERE: /images/CustomStoresImgs/admin_dashboard.png */}
            <img 
              src="/images/CustomStoresImgs/adminImgSeven.svg" 
              alt="Executive Admin Dashboard" 
              className="w-full lg:w-[800px]"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between w-full items-center">
           {/* Left: Image Placeholder */}
           <div className="relative w-full lg:w-auto order-1">
            {/* UPLOAD IMAGE HERE: /images/CustomStoresImgs/catalog_management.png */}
            <img 
              src="/images/CustomStoresImgs/adminImgEight.svg" 
              alt="Enterprise Catalog Management" 
              className="w-full lg:w-[800px]"
            />
          </div>

          {/* Right: Text */}
          <div className="space-y-4 lg:space-y-8 order-2">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight">
              A Luxe Customer  <br className="hidden lg:block" /> Experience — Delivered <br className="hidden lg:block" /> Instantly
            </h2>
            <ul className="opacity-60 text-lg lg:text-[20px] font-light space-y-2 lg:space-y-0">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Customer Control Center
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Spending insights
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Order history
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Credential access vault
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Rewards dashboard
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
          {/* Left: Text */}
          <div className="space-y-4 lg:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight">
              Customer Finance <br className="hidden lg:block" /> Layer
            </h2>
            <ul className="opacity-60 text-lg lg:text-[20px] font-light space-y-2 lg:space-y-0">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Wallet funding  
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Transaction history
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Reward points
              </li>
            </ul>
          </div>
          
          {/* Right: Image Placeholder */}
          <div className="relative w-full lg:w-auto mt-4 lg:mt-0">
            {/* UPLOAD IMAGE HERE: /images/CustomStoresImgs/admin_dashboard.png */}
            <img 
              src="/images/CustomStoresImgs/adminImgNine.svg" 
              alt="Executive Admin Dashboard" 
              className="w-full lg:w-[800px]"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between w-full items-center">
           {/* Left: Image Placeholder */}
           <div className="relative w-full lg:w-auto order-1">
            {/* UPLOAD IMAGE HERE: /images/CustomStoresImgs/catalog_management.png */}
            <img 
              src="/images/CustomStoresImgs/adminImgTen.svg" 
              alt="Enterprise Catalog Management" 
              className="w-full lg:w-[800px]"
            />
          </div>

          {/* Right: Text */}
          <div className="space-y-4 lg:space-y-8 order-2">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight">
              Self-Management
            </h2>
            <ul className="opacity-60 text-lg lg:text-[20px] font-light space-y-2 lg:space-y-0">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Referral invite
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Account customization
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Profile & security settings
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
          {/* Left: Text */}
          <div className="space-y-4 lg:space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight">
              Automated Fulfillment
            </h2>
            <ul className="opacity-60 text-lg lg:text-[20px] font-light space-y-2 lg:space-y-0">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Instant access delivery
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Verified credential management
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                Replacement workflows with tracking
              </li>
            </ul>
          </div>
          
          {/* Right: Image Placeholder */}
          <div className="relative w-full lg:w-auto mt-4 lg:mt-0">
            {/* UPLOAD IMAGE HERE: /images/CustomStoresImgs/admin_dashboard.png */}
            <img 
              src="/images/CustomStoresImgs/adminImgEleven.svg" 
              alt="Executive Admin Dashboard" 
              className="w-full lg:w-[800px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminCapabilities
