export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  tags?: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  github?: string;
  featured?: boolean;
}
