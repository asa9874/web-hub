import data from './projects.json';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'game' | 'tool' | 'experiment';
  path: string;
  thumbnail: string;
  ogImage: string;
  type: 'react' | 'static';
  source?: string;
  typecheck?: boolean;
  dependencyAliases?: Record<string, string>;
  ogSource?: string;
  ogPublicSource?: string;
}
export const projects = data as Project[];
export const projectUrl = (path: string) => import.meta.env.BASE_URL + path.replace(/^\//, '');
