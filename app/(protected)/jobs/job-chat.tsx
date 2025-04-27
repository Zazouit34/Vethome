"use client";

import { useState, useRef, useEffect } from "react";

import { ArrowLeft, Send, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Define message type
type Message = {
  id: string;
  sender: "user" | "other";
  text: string;
  timestamp: Date;
};

// Mock job poster data
const jobPoster = {
  name: "Dr. Amira Loudji",
  image: "/veterinary-woman-1.jpg",
  role: "Vétérinaire à Sétif",
};

export default function JobChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "other",
      text: "Bonjour, je suis intéressé par votre annonce de stage. Pouvez-vous me donner plus de détails sur les horaires et les missions ?",
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: "2",
      sender: "user",
      text: "Bonjour Dr. Loudji, je suis disponible les lundis et mercredis de 9h à 17h. J'ai déjà une expérience en clinique vétérinaire.",
      timestamp: new Date(Date.now() - 3500000),
    },
    {
      id: "3",
      sender: "other",
      text: "Parfait ! Nous avons justement besoin d'aide ces jours-là. Pouvez-vous me parler de votre expérience ?",
      timestamp: new Date(Date.now() - 3400000),
    },
  ]);
  
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: newMessage,
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setNewMessage("");
    
    // Simulate auto-reply after a short delay
    setTimeout(() => {
      const autoReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: "other",
        text: getAutoReply(newMessage),
        timestamp: new Date(),
      };
      
      setMessages(prevMessages => [...prevMessages, autoReply]);
    }, 1000);
  };

  // Simple auto-reply logic
  const getAutoReply = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("expérience") || lowerMessage.includes("expérience")) {
      return "C'est très intéressant. Nous pourrions commencer par un stage d'observation d'une semaine pour vous familiariser avec notre clinique.";
    } else if (lowerMessage.includes("horaires") || lowerMessage.includes("disponible")) {
      return "Nos horaires sont de 9h à 19h en semaine et de 9h à 13h le samedi. Nous pouvons adapter selon vos disponibilités.";
    } else if (lowerMessage.includes("rémunération") || lowerMessage.includes("salaire")) {
      return "Pour un stage, nous proposons une indemnité de 500€ par mois, plus les avantages sociaux.";
    } else if (lowerMessage.includes("merci") || lowerMessage.includes("thanks")) {
      return "Je vous en prie ! N'hésitez pas si vous avez d'autres questions.";
    } else {
      return "Merci pour votre message. Je vous répondrai plus en détail dès que possible.";
    }
  };

  // Format time
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm p-4 flex items-center gap-3">
        <Button variant="ghost" size="icon" className="rounded-full">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={jobPoster.image} alt={jobPoster.name} />
            <AvatarFallback>{jobPoster.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">{jobPoster.name}</div>
            <div className="text-xs text-gray-500">{jobPoster.role}</div>
          </div>
        </div>
      </div>
      
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {message.sender === "other" && (
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={jobPoster.image} alt={jobPoster.name} />
                <AvatarFallback>{jobPoster.name.charAt(0)}</AvatarFallback>
              </Avatar>
            )}
            <div className={`max-w-[80%] ${message.sender === "user" ? "bg-rose-400 text-white" : "bg-white text-gray-800"} rounded-2xl px-4 py-2 shadow-sm`}>
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${message.sender === "user" ? "text-rose-100" : "text-gray-500"}`}>
                {formatTime(message.timestamp)}
              </p>
            </div>
            {message.sender === "user" && (
              <Avatar className="h-8 w-8 ml-2">
                <AvatarImage src="/review-image-1.jpg" alt="Particulier" />
                <AvatarFallback>SB</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Message input */}
      <div className="bg-white border-t p-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Input
            placeholder="Écrivez votre message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            className="flex-1"
          />
          <Button 
            onClick={handleSendMessage}
            className="bg-rose-400 hover:bg-rose-500 text-white rounded-full"
            size="icon"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
} 