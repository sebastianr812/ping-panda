import Stripe from "stripe";

export const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY ?? "", {
    apiVersion: "2024-12-18.acacia",
    typescript: true
});

interface CheckoutSessionProps {
    userEmail: string;
    userId: string;
}
export async function createCheckoutSession({
    userEmail,
    userId
}: CheckoutSessionProps) {
    const session = await stripe.checkout.sessions.create({
        line_items: [{
            price: "price_1QgUI3KB2J9KQf31o4mo2wt4",
            quantity: 1,
        }],
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
        customer_email: userEmail,
        metadata: {
            userId
        }
    });
    return session;
}

