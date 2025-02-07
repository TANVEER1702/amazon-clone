"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function Page() {
  const { slug } = useParams();
  return (
    <div className="text-center my-5">
      <h1 className="text-xl fw-bold">{slug}</h1>
    </div>
  );
}
