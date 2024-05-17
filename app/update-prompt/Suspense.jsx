"use client";

import { Suspense } from "react";
import UpdatePromptContent from "./UpdatePromptContent";

const UpdatePrompt = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <UpdatePromptContent />
        </Suspense>
    );
};

export default UpdatePrompt;
