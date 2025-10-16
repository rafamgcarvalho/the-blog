import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostCoverImage } from "@/components/PostCoverImage";
import { PostHeading } from "@/components/PostHeading";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header></Header>

      <section className={"grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group"}>

        <PostCoverImage
          linkProps={{
            href: "#",
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

          <PostHeading as="h2" url="#">Lorem ipsum</PostHeading>

          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          voluptatem hic sit ea! Minus accusamus delectus eum alias
          voluptates a aut, repellendus optio nostrum rem doloremque
          pariatur consequatur eaque enim!
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Footer</p>
      </footer>
    </Container>
  );
}
