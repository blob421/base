export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req:Request){
    const cookieStore = await cookies(); 
    const cartId = cookieStore.get("cart_id")?.value;
    
    if (!cartId) { 
        const newId = crypto.randomUUID(); 
        cookieStore.set("cart_id", newId, { 
             httpOnly: true, secure: true, sameSite: "lax", path: "/" });

     return NextResponse.json({ cartId: newId, items: [] }); 
    
    }
    else{
        console.log('cart_id exists')
        const items = [{id: 0, name: 'Product A', price: 100, image: '/bell.png', quantity:2 },
                       {id: 1, name: 'Premium Arabica Coffee Beans – 1 kg', price: 20, image:'/arrow_up.png', quantity:1}
        ]
        return NextResponse.json({items: items})
    }
}