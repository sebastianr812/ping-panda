"use client";

import { EventCategory } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { EmptyCategoryState } from "./empty-category-state";

interface CategoryPageContentProps {
    hasEvents: boolean;
    category: EventCategory;
}


/*
 * Modern Data fetching pattern - load inital data on server and re-fetch on
 * client - react query used as a state manager
 * */
export const CategoryPageContent = ({
    hasEvents: initalHasEvents,
    category
}: CategoryPageContentProps) => {
    const { data: pollingData } = useQuery({
        queryKey: ["category", category.name, "hasEvents"],
        initialData: { hasEvents: initalHasEvents }
    });

    if (!pollingData.hasEvents) {
        return (
            <EmptyCategoryState categoryName={category.name} />
        );
    }
}

