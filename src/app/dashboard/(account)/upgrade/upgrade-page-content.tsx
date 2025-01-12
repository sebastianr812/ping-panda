"use client";

import { client } from "@/lib/client";
import { Plan } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const UpgradePageContent = ({ plan }: { plan: Plan }) => {
    const router = useRouter();

    const { mutate: createCheckoutSession } = useMutation({
        mutationFn: async () => {
            const res = await client.payment.createCheckoutSession.$post();
            return await res.json();
        },
        onSuccess: ({ url }) => {
            if (url) {
                router.push(url);
            }
        }
    });

}

