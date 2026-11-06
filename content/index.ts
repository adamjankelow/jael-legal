import { facts } from "./facts";
import { en } from "./en";
import { he } from "./he";
import { nl } from "./nl";
import type { SiteCopy } from "./types";

function assertParallel(source: SiteCopy, other: SiteCopy) {
  const label = other.locale;
  const same = (expected: number, actual: number, what: string) => {
    if (expected !== actual) {
      throw new Error(`${label}: ${what} has ${actual} items, source has ${expected}`);
    }
  };

  same(source.about.paragraphs.length, other.about.paragraphs.length, "about paragraphs");
  same(source.about.how.length, other.about.how.length, "how");
  same(source.about.limits.length, other.about.limits.length, "limits");
  same(source.services.items.length, other.services.items.length, "services");
  same(source.services.checklist.length, other.services.checklist.length, "checklist");
  same(source.insights.posts.length, other.insights.posts.length, "posts");
  same(source.privacy.blocks.length, other.privacy.blocks.length, "privacy");

  source.services.items.forEach((item, index) => {
    const next = other.services.items[index];
    if (!next || next.id !== item.id) throw new Error(`${label}: service id at ${index}`);
    if (next.lead !== item.lead) throw new Error(`${label}: lead flag for ${item.id}`);
    same(item.included.length, next.included.length, `${item.id} included`);
    same(item.excluded.length, next.excluded.length, `${item.id} excluded`);
  });

  source.insights.posts.forEach((post, index) => {
    const next = other.insights.posts[index];
    if (!next || next.slug !== post.slug) throw new Error(`${label}: insight slug at ${index}`);
    same(post.blocks.length, next.blocks.length, `${post.slug} blocks`);
    post.blocks.forEach((block, blockIndex) => {
      const otherBlock = next.blocks[blockIndex];
      if (!otherBlock || otherBlock.type !== block.type) {
        throw new Error(`${label}: ${post.slug} block ${blockIndex}`);
      }
    });
  });

  source.privacy.blocks.forEach((block, index) => {
    const otherBlock = other.privacy.blocks[index];
    if (!otherBlock || otherBlock.type !== block.type) {
      throw new Error(`${label}: privacy block ${index}`);
    }
  });

  for (const item of facts.timeline) {
    if (!other.about.roles[item.id]) throw new Error(`${label}: missing role ${item.id}`);
  }

  if (!other.about.publication.includes("{link}")) {
    throw new Error(`${label}: publication sentence is missing {link}`);
  }
}

assertParallel(en, he);
assertParallel(en, nl);

export const copies = { en, he, nl } as const;

export function getCopy(lang: keyof typeof copies): SiteCopy {
  return copies[lang];
}
