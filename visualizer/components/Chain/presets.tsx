import deepEqual from "deep-equal";
import {Type} from "@chainsafe/ssz";
import {types as mainnetTypes} from '@chainsafe/lodestar-types/lib/presets/mainnet'
import {types as minimalTypes} from "@chainsafe/lodestar-types/lib/presets/minimal";

export const presets = {
  mainnet: mainnetTypes as unknown as Record<string, Type<any>>,
  minimal: minimalTypes as unknown as Record<string, Type<any>>,
} as const;

export type PresetName = keyof typeof presets;

export function typeNames<T>(types: Record<string, Type<T>>): string[] {
  return Object.keys(types).sort();
}