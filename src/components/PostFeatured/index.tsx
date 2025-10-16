import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  const slug = "qulquer"
  const postLink = `/post/${slug}`;

  return (
    <section className={"grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group"}>

      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_9.png",
          alt: "Titulo",
          priority: true,
        }}
      ></PostCoverImage>

      <div className="flex flex-col gap-4 sm:justify-center">
        <time className="text-slate-600 text-sm/tight" dateTime="2025-10-15">15/10/2025 15:00</time>

        <PostHeading as="h1" url={postLink}>Lorem ipsum</PostHeading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          voluptatem hic sit ea! Minus accusamus delectus eum alias
          voluptates a aut, repellendus optio nostrum rem doloremque
          pariatur consequatur eaque enim!
        </p>
      </div>
    </section>
  );
}
