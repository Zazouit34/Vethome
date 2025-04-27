"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Newspaper } from "lucide-react";
import JobPost from "./job-post";
import JobChat from "./job-chat";
import { TabProvider, useTab } from "./tab-context";

function JobsContent() {
  const { activeTab, setActiveTab } = useTab();

  return (
    <div className="container mx-auto p-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="posts" className="flex items-center gap-2">
            <Newspaper className="h-4 w-4" />
            Annonces
          </TabsTrigger>
          <TabsTrigger value="chat" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Chat
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
