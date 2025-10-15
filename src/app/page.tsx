import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { postRepository } from "@/repositories/post";
import { Suspense } from 'react';

export default async function HomePage() {
  const posts = await postRepository.findAll();

  return (
    <div>
      <header>
        <h1 className='text-6xl font-bold text-center py-8'>Aqui é a HEADER</h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className='text-6xl font-bold text-center py-8'>Footer</p>
      </footer>
    </div>
  );
}
