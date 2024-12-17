const FeaturesSection = () => {
    const features = [
      {
        icon: "🚚",
        title: "Next day as standard",
        description: "Order before 3pm and get your order the next day as standard.",
      },
      {
        icon: "🎨",
        title: "Made by true artisans",
        description: "Handmade crafted goods made with real passion and craftsmanship.",
      },
      {
        icon: "💰",
        title: "Unbeatable prices",
        description: "For our materials and quality you won’t find better prices anywhere.",
      },
      {
        icon: "♻️",
        title: "Recycled packaging",
        description: "We use 100% recycled packaging to ensure our footprint is manageable.",
      },
    ];
  
    return (
      <div className="bg-white mb-7">
    
        <h1 className="text-3xl  text-center mb-8">​🇼​​🇭​​🇦​​🇹​ ​🇲​​🇦​​🇰​​🇪​​🇸​ ​🇴​​🇺​​🇷​ ​🇧​​🇷​​🇦​​🇳​​🇩​ ​🇩​​🇮​​🇫​​🇫​​🇪​​🇷​​🇪​​🇳​​🇹​
        </h1>
        
        
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </section>
      </div>
    );
  };
  
  export default FeaturesSection;
  