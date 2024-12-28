import { currentUser } from "@clerk/nextjs/server";
import { router } from "../__internals/router";
import { publicProcedure } from "../procedures";
import { db } from "@/db";

export const authRouter = router({
    getDatabaseSyncStatus: publicProcedure.query(async ({ c, ctx }) => {
        const auth = await currentUser()

        if (!auth) {
            return c.json({ isSynced: false });
        }

        const user = await db.user

        return c.json({ status: "success" });
    }),
});

