import React from "react";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput, AIOutputType } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import Image from "next/image";
import { TEMPLATE } from "../_components/TemplateListSection";
import ButtonComponent from "./_component/ButtonComponent";

export interface HISTORY {
  id: Number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

async function history() {
  const user = await currentUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress; // Correct the way email is accessed
  if (!userEmail) {
    return <div>Error: User not found.</div>;
  }
  // Fetch history list with error handling

  let HistoryList: AIOutputType[] = [];
  try {
    HistoryList = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput?.createdBy, userEmail)) // Use correct email reference
      .orderBy(desc(AIOutput.id));
  } catch (error) {
    console.error("Error fetching history:", error);
  }
  // Helper function to get template data
  const GetTemplateName = (slug: string) => {
    const template: TEMPLATE | undefined = Templates?.find(
      (item) => item.slug === slug
    );
    return template || { name: "Unknown", icon: "/default-icon.png" }; // Fallback for undefined
  };
  return (
    <div className="m-5 p-5 border rounded-lg bg-white h-fit">
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-gray-500">
        Search your previously generated AI content
      </p>

      {/* Table Header */}
      <div className="grid grid-cols-7 font-bold bg-secondary mt-5 py-3 px-3">
        <h2 className="col-span-2">TEMPLATE</h2>
        <h2 className="col-span-2">AI RESPONSE</h2>
        <h2>DATE</h2>
        <h2>WORDS</h2>
        <h2>COPY</h2>
      </div>

      {/* Table Body */}
      {HistoryList.length === 0 ? (
        <p>No history found.</p>
      ) : (
        HistoryList.map((item: AIOutputType, index: number) => (
          <div className="grid grid-cols-7 my-5 py-3 px-3" key={index}>
            <h2 className="col-span-2 flex gap-2 items-center">
              {/* Ensure src is valid and provide fallback */}
              <Image
                src={
                  GetTemplateName(item?.templateSlug)?.icon ||
                  "/default-icon.png"
                }
                alt="Template Icon"
                width={25}
                height={25}
              />
              {GetTemplateName(item.templateSlug)?.name}
            </h2>
            <h2 className="col-span-2 line-clamp-3">
              {item?.aiResponse ?? "No Response"}
            </h2>
            <h2>
              {item?.createdAt
                ? new Date(item.createdAt).toLocaleDateString()
                : "Unknown Date"}
            </h2>{" "}
            {/* Handle null dates */}
            <h2>{item?.aiResponse?.length || 0}</h2>{" "}
            {/* Handle null AI responses */}
            <h2>
              {/* <Button
                variant="ghost"
                className="text-primary"
                onClick={() => navigator.clipboard.writeText(item.aiResponse)}
              >
                Copy
              </Button> */}
              <ButtonComponent item={item} />
            </h2>
          </div>
        ))
      )}
      <hr />
    </div>
  );
}

export default history;
