"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput, AIOutputType } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useContext, useEffect, useState } from "react";
import { HISTORY } from "../history/page";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";

function UsageTrack() {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { updateCreditUsage, setUpdateCreditUsage } = useContext(
    UpdateCreditUsageContext
  );

  useEffect(() => {
    user && GetData();
  }, [user]);

  useEffect(() => {
    user && GetData();
  }, [updateCreditUsage && user]);

  const GetData = async () => {
    const emailAddress = user?.primaryEmailAddress?.emailAddress;

    if (!emailAddress) {
      return <div>Error: User not found.</div>;
    }

    const result: AIOutputType[] = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, emailAddress));

    GetTotalUsage(result);
  };

  const GetTotalUsage = (result: AIOutputType[]) => {
    let total: number = 0;
    result.forEach((element) => {
      total = total + Number(element.aiResponse?.length);
    });

    setTotalUsage(total);
  };
  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{
              width: (totalUsage / 10000) * 100 + "%",
            }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage}/10,000 credit used</h2>
      </div>
      <Link href="/dashboard/billing">
        <Button variant={"secondary"} className="w-full my-3 text-primary">
          Upgrade
        </Button>
      </Link>
    </div>
  );
}

export default UsageTrack;
