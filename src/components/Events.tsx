"use client";
import * as React from "react"
import { FlipCard, FlipCardFront, FlipCardBack } from "@/components/ui/flip-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Events() {
  return (
    <div className="p-3">
      <div className="grid grid-cols-4 gap-4">
        <FlipCard className="h-96 w-full">
          <FlipCardFront className="rounded-xl">
            <img
              width={1015}
              height={678}
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="nike air jordan"
              className="size-full object-cover"
            />
          </FlipCardFront>
          <FlipCardBack className="flex flex-col items-center justify-center rounded-xl bg-rose-600 px-4 py-6 text-center text-white">
            <h2 className="text-xl font-bold">Football</h2>
            <h4 className="mb-4">€ 1,299.00</h4>
            <Button asChild className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Link href="#">Register Now</Link>
            </Button>
          </FlipCardBack>
        </FlipCard>

        <FlipCard flipDirection="vertical" className="h-96 w-full">
          <FlipCardFront className="rounded-xl">
            <img
              width={542}
              height={678}
              src="https://images.unsplash.com/photo-1617814121568-9b184eaabf08?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="nike air jordan"
              className="size-full object-cover"
            />
          </FlipCardFront>
          <FlipCardBack className="flex flex-col items-center justify-center rounded-xl bg-emerald-500 px-4 py-6 text-center text-white">
            <h2 className="text-xl font-bold">Cricket</h2>
            <h4 className="mb-4">€ 1,299.00</h4>
            <Button asChild className="rounded-full bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500">
              <Link href="#">Register Now</Link>
            </Button>
          </FlipCardBack>
        </FlipCard>

        <FlipCard className="h-96 w-full">
          <FlipCardFront className="rounded-xl">
            <img
              width={1015}
              height={678}
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="nike air jordan"
              className="size-full object-cover"
            />
          </FlipCardFront>
          <FlipCardBack className="flex flex-col items-center justify-center rounded-xl bg-rose-600 px-4 py-6 text-center text-white">
            <h2 className="text-xl font-bold">Basketball</h2>
            <h4 className="mb-4">€ 1,299.00</h4>
            <Button asChild className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              <Link href="#">Register Now</Link>
            </Button>
          </FlipCardBack>
        </FlipCard>

        <FlipCard flipDirection="vertical" className="h-96 w-full">
          <FlipCardFront className="rounded-xl">
            <img
              width={542}
              height={678}
              src="https://images.unsplash.com/photo-1617814121568-9b184eaabf08?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="nike air jordan"
              className="size-full object-cover"
            />
          </FlipCardFront>
          <FlipCardBack className="flex flex-col items-center justify-center rounded-xl bg-emerald-500 px-4 py-6 text-center text-white">
            <h2 className="text-xl font-bold">Volleyball</h2>
            <h4 className="mb-4">€ 1,299.00</h4>
            <Button asChild className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
              <Link href="#">Register Now</Link>
            </Button>
          </FlipCardBack>
        </FlipCard>

        <FlipCard className="h-96 w-full">
          <FlipCardFront className="rounded-xl">
            <img
              width={1015}
              height={678}
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="nike air jordan"
              className="size-full object-cover"
            />
          </FlipCardFront>
          <FlipCardBack className="flex flex-col items-center justify-center rounded-xl bg-rose-600 px-4 py-6 text-center text-white">
            <h2 className="text-xl font-bold">Tug of War</h2>
            <h4 className="mb-4">€ 1,299.00</h4>
            <Button asChild className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Link href="#">Register Now</Link>
            </Button>
          </FlipCardBack>
        </FlipCard>

        <FlipCard flipDirection="vertical" className="h-96 w-full">
          <FlipCardFront className="rounded-xl">
            <img
              width={542}
              height={678}
              src="https://images.unsplash.com/photo-1617814121568-9b184eaabf08?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="nike air jordan"
              className="size-full object-cover"
            />
          </FlipCardFront>
          <FlipCardBack className="flex flex-col items-center justify-center rounded-xl bg-emerald-500 px-4 py-6 text-center text-white">
            <h2 className="text-xl font-bold">Table Tennis</h2>
            <h4 className="mb-4">€ 1,299.00</h4>
            <Button asChild className="rounded-full bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500">
              <Link href="#">Register Now</Link>
            </Button>
          </FlipCardBack>
        </FlipCard>

        <FlipCard className="h-96 w-full">
          <FlipCardFront className="rounded-xl">
            <img
              width={1015}
              height={678}
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="nike air jordan"
              className="size-full object-cover"
            />
          </FlipCardFront>
          <FlipCardBack className="flex flex-col items-center justify-center rounded-xl bg-rose-600 px-4 py-6 text-center text-white">
            <h2 className="text-xl font-bold">Carrom</h2>
            <h4 className="mb-4">€ 1,299.00</h4>
            <Button asChild className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              <Link href="#">Register Now</Link>
            </Button>
          </FlipCardBack>
        </FlipCard>

        <FlipCard flipDirection="vertical" className="h-96 w-full">
          <FlipCardFront className="rounded-xl">
            <img
              width={542}
              height={678}
              src="https://images.unsplash.com/photo-1617814121568-9b184eaabf08?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="nike air jordan"
              className="size-full object-cover"
            />
          </FlipCardFront>
          <FlipCardBack className="flex flex-col items-center justify-center rounded-xl bg-emerald-500 px-4 py-6 text-center text-white">
            <h2 className="text-xl font-bold">Chess</h2>
            <h4 className="mb-4">€ 1,299.00</h4>
            <Button asChild className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600">
              <Link href="#">Register Now</Link>
            </Button>
          </FlipCardBack>
        </FlipCard>
      </div>
    </div>
  )
}