import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { FaHandsPraying } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ReviewContent() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const content = [
    {
      id: 1,
      namee: "NO COMPROMISE ON VALUES",
      desc: "We will be fiercely competitive in the market place, but at no stage will we compromise on our values. We will not sacrifice our values for short-term gains or even under impossible circumstances.",
      img: "value1.webp",
    },
    {
      id: 2,
      namee: "BALANCE",
      desc: "We are modern and progressive in our outlook, but old fashioned in our value systems. We maintain such balance with our pinpoint strategy and great creative work, which doesn’t just attract attention, It gets results as well. That transforms your brand and allows you to rise above the noise.",
      img: "value2.webp",
    },
    {
      id: 3,
      namee: "HIGH STANDARDS",
      desc: "We will adopt the highest standards of honesty and integrity, professionally and personally, individually and collectively. We will be governed by a strong sense of fair play in our dealings with our colleagues, our clients, and our suppliers.",
      img: "value3.webp",
    },
    {
      id: 4,
      namee: "TRANSPARENCY",
      desc: "We will be transparent in our dealings with both our clients and suppliers. We are into a kind of business, which creates impact through partnerships. That brings transformational growth in our customers, in our company, and in ourselves together.",
      img: "value4.webp",
    },
    {
      id: 5,
      namee: "CLIENT FIRST",
      desc: "We will place our client's interest ahead of our own. We are never in holding patterns. On the preferences and needs of our clients, we are always ready to quickly evaluate, prioritize, and exercise their good judgments. That means we put our customers before everything else.",
      img: "value5.webp",
    },
    {
      id: 6,
      namee: "FORESIGHT",
      desc: "We will conserve our resources to meet unforeseen circumstances. Our customers are our true players in our business. We take on their challenges, handle their issues, and develop a deep understanding of their businesses. We create new concepts and new methodologies as what creates growth today may not create growth tomorrow.",
      img: "value6.webp",
    }
  ];

  return (
    <>
      <div className="ReviewContent">
        <Carousel
          plugins={[plugin.current]}
          className="slider"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="w-[75vw]">
            {content.map((item) => (
              <CarouselItem key={item.id}>
                <div className="p-1">
                  <Card className="flex items-center justify-center w-full  overflow-hidden rounded-lg  bg-[rgb(229,_229,_244)]">
                    <CardContent className="slider items-center  w-full flex rounded-lg justify-center">
                      <div className="w-full  flex justify-center items-center gap-6">
                        
                      <div className="overflow-hidden right w-[50vw] rounded-lg h-auto mt-5 ml-[-200px] flex items-center justify-center">
                          <img
                            className="w-[400px] h-[280px] rounded-e-sm"
                            src={item.img}
                            alt={item.namee}
                          />
                        </div>

                        <div className="left w-[50vw] h-[340px] gap-5 flex items-start justify-center flex-col">
                          <h1 className="text-5xl text-[#160444] font-medium">{item.namee}</h1>
                          <p className="text-[#160444]">{item.desc}</p>
                          <FaHandsPraying className="text-4xl text-[#160444]" />
                        </div>
                        
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}

export default ReviewContent;
