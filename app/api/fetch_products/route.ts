
export const runtime = "nodejs";
import { NextResponse } from "next/server";

export async function GET(req:Request){
   
   return NextResponse.json({results: [{name:'Product A', id:0, url:'product01', img:"/bell.png"}, 
    {name:'Product B', id:1, url:'product01', img:"/bell.png"}, {name:'Amazing Product', id:2, url:'product01'}]})
}