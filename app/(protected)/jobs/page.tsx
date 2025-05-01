"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Newspaper, ArrowLeft } from "lucide-react";
import JobPost from "./job-post";
import JobChat from "./job-chat";
import { TabProvider, useTab } from "./tab-context";
import { useRouter } from "next/navigation";

function JobsContent() {
  const { activeTab, setActiveTab } = useTab();
  const router = useRouter();

  return (
    <div className="container mx-auto p-4">
        <div className="flex items-center justify-center mb-8 relative">
        <button onClick={() => router.back()} className="absolute left-4 md:left-10">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Emplois</h1>
      </div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="posts" className="flex items-center gap-2">
            <Newspaper className="h-4 w-4" />
           
          </TabsTrigger>
          <TabsTrigger value="chat" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
           
          </TabsTrigger>
        </TabsList>
        <TabsContent value="posts">
          <JobPost />
        </TabsContent>
        <TabsContent value="chat">
          <JobChat />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default function JobsPage() {
  return (
    <TabProvider>
      <JobsContent />
    </TabProvider>
  );
}
