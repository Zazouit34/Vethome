"use client";

import { useState } from "react";
import JobPost from "./job-post";
import JobChat from "./job-chat";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Briefcase } from "lucide-react";

export default function JobPage() {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="min-h-screen bg-white">
      <Tabs defaultValue="posts" className="w-full" onValueChange={setActiveTab}>
        <div className="flex items-center justify-between px-4 pt-6 pb-2">
          <span className="font-bold text-xl text-gray-900">Stage</span>
          <TabsList className="grid w-[200px] grid-cols-2">
            <TabsTrigger value="posts" className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              <span>Annonces</span>
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>Messages</span>
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="posts" className="mt-0">
          <JobPost />
        </TabsContent>
        
        <TabsContent value="chat" className="mt-0">
          <JobChat />
        </TabsContent>
      </Tabs>
    </div>
  );
}
