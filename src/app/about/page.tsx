import NavBar from "@/components/nav";
import Footer from "@/components/footer";
import SlideCard from "@/components/slideCard";

const aboutUsCards = [
    {
        id: 1,
        title: "Our Goals",
        description: "We plan to work on apps that utilize the newest technologies." +
        "We aim to create innovative and immersive experiences that take advantage of the opportunities that spatial computing allows for and to transform the way we interact with our apps.",
    },
    {
        id: 2,
        title: "Our Values",
        description: "Men of Intellect, Men of Faith, Men of Integrity",
    },
    {
        id: 3,
        title: "Our Devs",
        description: "We are a team of passionate developers and designers focused on creating immersive experiences." +
        "We met in high school at Calvert Hall College and have been working to create amazing apps over the last few years.",    
    },
];

const renderSlideCards = () => {
    return aboutUsCards.map((card, idx) => (
        <SlideCard key={card.id} title={card.title} description={card.description} style={{ transitionDelay: `${idx * 150}ms` }} />
    ));
};

// export default function Page() {
//     return (
//       <main className="flex min-h-screen flex-col font-main bg-our-gradient">
//         <NavBar page={'about'} />

//         <div className="flex flex-col flex-1">
//         <div className="h-64 md:h-1/2 p-4 sm:p-8 lg:p-16 bg-[url('/chc.jpg')] bg-cover bg-center bg-no-repeat rounded-lg">
//           <div className="flex flex-col  h-full">
//             <h1 className="text-3xl font-bold text-blue-950 dark:text-white">
//               About Us
//             </h1>
//             <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
//               Learn more about us and our goals
//             </p>
//           </div>
//         </div>
//         <div className="flex-1 md:h-1/2 p-4 sm:p-8 lg:p-16 overflow-y-auto md:overflow-y-visible">
//           <div className="w-full">
//             {renderSlideCards()}
//           </div>
//         </div>
//       </div>
//             <Footer />
//         </main>
//     );
// }



export default function Page() {
    return (
    <main className="flex h-screen flex-col bg-secondary overflow-hidden font-main">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <NavBar page={'about'} />
      
      <div className="flex flex-col flex-1 overflow-hidden w-full md:w-3/4 mx-auto">
        {/* Top half section - full column on mobile */}
        <div className="h-1/4 flex flex-col bg-[url('/chc3.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl mx-6 mt-6 shadow-xl shado">
          <div className="flex flex-col h-full p-4 md:p-6 justify-end">
            <h1 className="text-6xl font-bold text-text_primary">
              About Us
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
              Learn more about us and our goals
            </p>
          </div>
        </div>
        
        {/* Bottom half section */}
        <div className="h-1/2 bg-secondary">
          <div className="flex flex-col justify-center h-full w-full p-4 md:p-6 ">
          <div className="w-full">
            {renderSlideCards()}
          </div>
          </div>
        </div>
      </div>
        
        {/* Footer */}
      
      <div className="flex-shrink-0">
        <Footer />
      </div>
    </main>
  )
}