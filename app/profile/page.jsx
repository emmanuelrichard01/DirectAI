"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";
import Loading from "./loading";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [myPosts, setMyPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!session?.user?.id) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/users/${session.user.id}/posts`);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setMyPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [session?.user?.id]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        if (response.ok) {
          const filteredPosts = myPosts.filter((item) => item._id !== post._id);
          setMyPosts(filteredPosts);
        } else {
          const data = await response.json();
          console.error(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };


  return (
    <section className="w-full">
      {/*<h1 className="head_text text-left">
        <span className="blue_gradient">{session?.user?.name || "User"}'s Profile</span>
      </h1>
       <p className="desc text-left">
        Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination.
      </p> */}

      {loading ? (

        <Loading />
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <Profile
          name={session?.user?.name || "My"}
          desc="Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination."
          data={myPosts}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
    </section>
  );
};

export default MyProfile;
