import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";
import { logColor } from "@/utils/log-color";

export class DrizzlePostRepository implements PostRepository {
    async findAllPublic(): Promise<PostModel[]> {
      logColor("findAllPublic", Date.now());

      const posts = await drizzleDb.query.posts.findMany({
        orderBy: (posts, {desc}) => desc(posts.createdAt),
        where: (posts, {eq}) => eq(posts.published, true),
      });

      return posts;
    }

    async findBySlugPublic(slug: string): Promise<PostModel > {
      logColor("findBySlugPublic", Date.now());

      const post = await drizzleDb.query.posts.findFirst({
        where: (posts, {eq, and}) => and(eq(posts.published, true), eq(posts.slug, slug)),
      });

      if(!post) throw new Error("Post não encontrado para slug");

      return post;
    }

    async findAll(): Promise<PostModel[]> {
      logColor("findAll", Date.now());

      const posts = await drizzleDb.query.posts.findMany({
        orderBy: (posts, {desc}) => desc(posts.createdAt),
      });

      return posts;
    }

    async findById(id: string): Promise<PostModel> {
      logColor("findById", Date.now());

      const post = await drizzleDb.query.posts.findFirst({
        where: (posts, {eq}) => eq(posts.id, id),
      });

      if(!post) throw new Error("Post não encontrado para ID");

      return post;
    }
}

// (async () => {
//   const repo = new DrizzlePostRepository();
//   const post = await repo.findById("99f8add4-7684-4c16-a316-616271db199e");

//   console.log(post)
// })()
