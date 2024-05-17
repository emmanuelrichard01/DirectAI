"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdatePrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const [post, setPost] = useState({ prompt: "", tags: [] });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getPromptDetails = async () => {
      try {
        const response = await fetch(`/api/prompt/${promptId}`);
        const data = await response.json();

        if (data) {
          setPost({
            prompt: data.prompt,
            tags: data.tags || [],
          });
        }
      } catch (error) {
        console.error("Failed to fetch prompt details:", error);
      }
    };

    if (promptId) getPromptDetails();
  }, [promptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!promptId) {
      setIsSubmitting(false);
      return alert("Missing PromptId!");
    }

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: post.prompt,
          tags: post.tags,
        }),
      });

      if (response.ok) {
        router.push("/");
      } else {
        const errorData = await response.json();
        console.error("Failed to update prompt:", errorData);
        alert("Failed to update prompt: " + errorData.message);
      }
    } catch (error) {
      console.error("Failed to update prompt:", error);
      alert("Failed to update prompt. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

const UpdatePromptPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePrompt />
    </Suspense>
  );
};

export default UpdatePromptPage;
