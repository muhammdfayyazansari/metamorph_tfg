const Services = () => {
  const logos = [
    "/images/ecwid_logo.svg",
    "/images/shopify_logo.svg",
    "/images/volusion_logo.svg",
    "/images/woocommerce_logo.svg",
  ];

  return (
    <div className="flex justify-around w-full py-10">
      {logos.map((path, index) => {
        return (
          <div>
            <img src={path} alt={path + index} />
          </div>
        );
      })}
    </div>
  );
};

export default Services;
