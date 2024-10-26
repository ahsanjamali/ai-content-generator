"use client";
import { Button } from "@/components/ui/button";
import React from "react";

function ButtonComponent({ item }: any) {
  return (
    <Button
      variant="ghost"
      className="text-primary"
      onClick={() => navigator.clipboard.writeText(item.aiResponse)}
    >
      Copy
    </Button>
  );
}

export default ButtonComponent;
