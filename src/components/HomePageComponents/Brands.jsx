const Brands = () => {
  const logos = [
    "/images/ecwid_logo.svg",
    "/images/shopify_logo.svg",
    "/images/volusion_logo.svg",
    "/images/woocommerce_logo.svg",
  ];

  return (
    <div className="flex items-baseline flex-nowrap overflow-x-scroll hide-scrollbar space-x-5 w-full justify-around p-6 lg:py-8 lg:px-16">
      {logos.map((path, index) => {
        return (
          <div className="flex-none w-40">
            <img src={path} alt={path + index} />
          </div>
        );
      })}
    </div>
  );
};

export default Brands;
