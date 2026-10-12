import type { Scene, SceneId } from '../types/index.ts';

export function resolveScene(id: SceneId, scenes: Readonly<Record<SceneId, Scene>>): Scene {
  const scene = scenes[id];
  if (!scene) throw new Error(`[SceneResolver] Scene not found: "${id}"`);
  return scene;
}
