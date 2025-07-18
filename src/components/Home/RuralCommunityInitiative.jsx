'use client'

import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const images = [
  '/RCI-Image1.jpg',
  '/RCI-Image2.jpg',
  '/RCI-Image3.jpg',
  '/RCI-Image4.jpg',
  '/RCI-Image5.jpg',
  '/RCI-Image6.jpg',
  '/RCI-Image7.jpg',
  '/RCI-Image8.jpg',
]

export default function RuralCommunityInitiative() {
  return (
    <section id="rural-community" className="py-16 px-4 mx-10 rounded-lg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Rural Community Initiative
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto font-semibold">
          Empowering local communities through outreach, technology, and development support. The Rural Community Initiative aims to uplift rural areas by providing essential resources, training, and opportunities for sustainable growth.
        </p>

        <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center">
          {/* Image Carousel */}
          <div className="w-full md:w-1/2 relative">
            <Carousel className="w-full max-w-full">
              <CarouselContent>
                {images.map((src, idx) => (
                  <CarouselItem key={idx}>
                    <div className="overflow-hidden rounded-xl">
                      <Image
                        src={src}
                        alt={`Community image ${idx + 1}`}
                        width={800}
                        height={500}
                        className="object-cover w-full h-[420px] md:h-[360px]"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* Move buttons farther out */}
              <CarouselPrevious className="-left-6 md:-left-10 z-10" />
              <CarouselNext className="-right-6 md:-right-10 z-10" />
            </Carousel>
          </div>

          {/* Video */}
          <div className="w-full md:w-1/2">
            <div className="h-[340px] md:h-[360px] rounded-xl shadow-md overflow-hidden">
              <iframe
                src="/RCI-VideoQuest.mp4"
                title="Rural Community Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
