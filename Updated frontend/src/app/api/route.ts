import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({"message" : "Happy server started"} , {status  : 200});
}