"use client";
import * as React from "react";
import { FlipCard, FlipCardFront, FlipCardBack } from "@/components/ui/flip-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Events() {
  return (
    <div className="p-4 sm:p-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {/* Football */}
        <FlipCard className="h-64 sm:h-72 md:h-80 w-full">
          <FlipCardFront className="rounded-lg md:rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Football"
              className="size-full object-cover"
            />
          </FlipCardFront>
          <FlipCardBack className="flex flex-col items-center justify-center rounded-lg md:rounded-xl bg-gradient-to-br from-rose-600 to-rose-800 px-4 py-4 sm:py-6 text-center text-white">
            <h2 className="text-lg sm:text-xl font-bold">Football</h2>
            <p className="text-sm sm:text-base mb-3 sm:mb-4">Team sport</p>
            <Button asChild className="rounded-full text-sm sm:text-base bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Link href="#">Register Now</Link>
            </Button>
          </FlipCardBack>
        </FlipCard>

        {/* Cricket */}
        <FlipCard flipDirection="vertical" className="h-64 sm:h-72 md:h-80 w-full">
          <FlipCardFront className="rounded-lg md:rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cricket"
              className="size-full object-cover"
            />
          </FlipCardFront>
          <FlipCardBack className="flex flex-col items-center justify-center rounded-lg md:rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 px-4 py-4 sm:py-6 text-center text-white">
            <h2 className="text-lg sm:text-xl font-bold">Cricket</h2>
            <p className="text-sm sm:text-base mb-3 sm:mb-4">Bat and ball game</p>
            <Button asChild className="rounded-full text-sm sm:text-base bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500">
              <Link href="#">Register Now</Link>
            </Button>
          </FlipCardBack>
        </FlipCard>

        {/* Basketball */}
        <FlipCard className="h-64 sm:h-72 md:h-80 w-full">
          <FlipCardFront className="rounded-lg md:rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Basketball"
              className="size-full object-cover"
            />
          </FlipCardFront>
          <FlipCardBack className="flex flex-col items-center justify-center rounded-lg md:rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 px-4 py-4 sm:py-6 text-center text-white">
            <h2 className="text-lg sm:text-xl font-bold">Basketball</h2>
            <p className="text-sm sm:text-base mb-3 sm:mb-4">Fast-paced court game</p>
            <Button asChild className="rounded-full text-sm sm:text-base bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              <Link href="#">Register Now</Link>
            </Button>
          </FlipCardBack>
        </FlipCard>

        {/* Volleyball */}
        <FlipCard flipDirection="vertical" className="h-64 sm:h-72 md:h-80 w-full">
          <FlipCardFront className="rounded-lg md:rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Volleyball"
              className="size-full object-cover"
            />
          </FlipCardFront>
          <FlipCardBack className="flex flex-col items-center justify-center rounded-lg md:rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 px-4 py-4 sm:py-6 text-center text-white">
            <h2 className="text-lg sm:text-xl font-bold">Volleyball</h2>
            <p className="text-sm sm:text-base mb-3 sm:mb-4">Net team sport</p>
            <Button asChild className="rounded-full text-sm sm:text-base bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
              <Link href="#">Register Now</Link>
            </Button>
          </FlipCardBack>
        </FlipCard>

        {/* Tug of War */}
        <FlipCard className="h-64 sm:h-72 md:h-80 w-full">
          <FlipCardFront className="rounded-lg md:rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tug of War"
              className="size-full object-cover"
            />
          </FlipCardFront>
          <FlipCardBack className="flex flex-col items-center justify-center rounded-lg md:rounded-xl bg-gradient-to-br from-violet-600 to-violet-800 px-4 py-4 sm:py-6 text-center text-white">
            <h2 className="text-lg sm:text-xl font-bold">Tug of War</h2>
            <p className="text-sm sm:text-base mb-3 sm:mb-4">Strength competition</p>
            <Button asChild className="rounded-full text-sm sm:text-base bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Link href="#">Register Now</Link>
            </Button>
          </FlipCardBack>
        </FlipCard>

        {/* Table Tennis */}
        <FlipCard flipDirection="vertical" className="h-64 sm:h-72 md:h-80 w-full">
          <FlipCardFront className="rounded-lg md:rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Table Tennis"
              className="size-full object-cover"
            />
          </FlipCardFront>
          <FlipCardBack className="flex flex-col items-center justify-center rounded-lg md:rounded-xl bg-gradient-to-br from-green-600 to-green-800 px-4 py-4 sm:py-6 text-center text-white">
            <h2 className="text-lg sm:text-xl font-bold">Table Tennis</h2>
            <p className="text-sm sm:text-base mb-3 sm:mb-4">Fast racket sport</p>
            <Button asChild className="rounded-full text-sm sm:text-base bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500">
              <Link href="#">Register Now</Link>
            </Button>
          </FlipCardBack>
        </FlipCard>

        {/* Carrom */}
        <FlipCard className="h-64 sm:h-72 md:h-80 w-full">
          <FlipCardFront className="rounded-lg md:rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Carrom"
              className="size-full object-cover"
            />
          </FlipCardFront>
          <FlipCardBack className="flex flex-col items-center justify-center rounded-lg md:rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 px-4 py-4 sm:py-6 text-center text-white">
            <h2 className="text-lg sm:text-xl font-bold">Carrom</h2>
            <p className="text-sm sm:text-base mb-3 sm:mb-4">Tabletop game</p>
            <Button asChild className="rounded-full text-sm sm:text-base bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              <Link href="#">Register Now</Link>
            </Button>
          </FlipCardBack>
        </FlipCard>

        {/* Chess */}
        <FlipCard flipDirection="vertical" className="h-64 sm:h-72 md:h-80 w-full">
          <FlipCardFront className="rounded-lg md:rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1520170350707-b8e334803e58?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Chess"
              className="size-full object-cover"
            />
          </FlipCardFront>
          <FlipCardBack className="flex flex-col items-center justify-center rounded-lg md:rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 px-4 py-4 sm:py-6 text-center text-white">
            <h2 className="text-lg sm:text-xl font-bold">Chess</h2>
            <p className="text-sm sm:text-base mb-3 sm:mb-4">Strategy board game</p>
            <Button asChild className="rounded-full text-sm sm:text-base bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
              <Link href="#">Register Now</Link>
            </Button>
          </FlipCardBack>
        </FlipCard>
      </div>
    </div>
  );
}