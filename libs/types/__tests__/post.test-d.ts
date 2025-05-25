/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃        @trinity/types – Post Type Safety Tests       ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Validates blog/news post structure, author relation,
 * publishing metadata, and optional tag usage.
 */

import { expectType } from 'tsd';
import type {
  Post,
  PostTitle,
  PostSlug,
  PostContent
} from '@trinity/types';
import type {
  UUID,
  ISODateString
} from '@trinity/types';

// 📝 Post Object
declare const post: Post;

expectType<UUID>(post.id);
expectType<PostTitle>(post.title);
expectType<PostSlug>(post.slug);
expectType<PostContent>(post.content);
expectType<UUID>(post.authorId);
expectType<ISODateString>(post.publishedAt);
expectType<string[] | undefined>(post.tags);
