// import { openai } from '@ai-sdk/openai'
// import { convertToCoreMessages, streamText } from 'ai'

import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  //   const result = await streamText({
  //     model: openai('gpt-3.5-turbo'),
  //     messages: convertToCoreMessages(messages),
  //   })

  //   return result.toDataStreamResponse()
  return NextResponse.json({ messages });
}
