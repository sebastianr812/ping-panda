import { createCheckoutSession } from "@/lib/stripe";
import { router } from "../__internals/router";
import { privateProcedure } from "../procedures";
import { db } from "@/db";
export const paymentRouter = router({
    createCheckoutSession: privateProcedure
        .mutation(async ({ c, ctx }) => {
            const { user } = ctx;

            const session = await createCheckoutSession({
                userEmail: user.email, userId: user.id
            });

            return c.json({ url: session.url });
        }),
    getUserPlan: privateProcedure.query(({ c, ctx }) => {
        const { user } = ctx;
        return c.json({ plan: user.plan });
    }),
});

