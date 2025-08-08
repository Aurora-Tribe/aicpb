import { Card, CardContent } from "@/components/ui/card";

export function Banner() {
  return (
    <Card className="relative overflow-hidden border-none bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-75 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent animate-bounce"></div>
      <CardContent className="relative z-10 py-16 px-8 text-center">
        <h1 className="text-6xl font-bold mb-4 tracking-tight">Track AI</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          The Product Hunt for AI Companies - Discover, track, and analyze the leading AI companies shaping the future
        </p>
      </CardContent>
    </Card>
  );
}