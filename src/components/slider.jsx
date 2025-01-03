import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { Card, CardContent } from "./ui/card";

function Slider() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="text-white flex items-center justify-center relative top-[100px] w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-[90%] h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full h-[70vh]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="w-full h-[70vh]">
                {/* Card with bottom border applied */}
                <Card className="w-full bg-transparent border-b-2 border-cyan-100 h-full">
                  <CardContent className="flex items-center justify-center p-6">
                    <div>
                      <div className="img">
                        <img src="https://img1.wsimg.com/isteam/ip/5e8c83b3-e6c6-40db-a509-3f2ee982a6ef/775A7577-0002.JPG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:3070,m" alt="" className="w-[100vw] h-[63vh] border rounded-md" />
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
  );
}

export default Slider;
