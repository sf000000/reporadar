export interface Repo {
  id: number;
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
  owner: {
    login: string;
    avatar: string;
    url: string;
  };
}

interface LanguageDetail {
  type: string;
  color?: string;
  extensions: string[];
  tm_scope: string;
  ace_mode: string;
  language_id: number;
  aliases?: string[];
  codemirror_mode?: string;
  codemirror_mime_type?: string;
}

export interface Languages {
  [key: string]: LanguageDetail;
}
