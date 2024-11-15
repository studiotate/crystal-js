import type { TailwindClass } from '@specui/tailwind';

import type { NativeElement } from './NativeElement';
import { SkeletonComponent } from './SkeletonComponent';
import type { Style } from './Style';

export interface Transition {
  delay?: number;
  duration?: number;
}

export type ElementArrayOrRef = Element[] | ElementIterator | string;

export type Element = BaseElement | NativeElement | SkeletonComponent;

export type ElementIterator = {
  data?: any[];
  model?: string;
  component?: string;
  name?: string;
  key?: string;
  tag?: string;
  class?: string;
  elements?: ElementArrayOrRef;
};

type Class = string | TailwindClass;
type ClassExtended = Class | (Class | { dark: Class | Class[] } | { hover: Class | Class[] })[];

export interface BaseElement {
  action?: string;
  animate?: Style;
  alt?: string;
  auth?: 'signedIn' | 'signedOut';
  class?: ClassExtended;
  collapsible?: boolean;
  component?: string;
  data?: any[];
  defaultChecked?: string;
  elements?: ElementArrayOrRef;
  for?: string;
  header?: string;
  href?: string;
  icon?: string;
  id?: string;
  groups?: {
    label?: string;
    menu?: {
      items?: {
        icon?: string;
        title?: string;
        url?: string;
      }[];
    };
  }[];
  key?: string;
  model?: string;
  name?: string;
  placeholder?: string;
  props?: Record<
    string,
    | boolean
    | number
    | string
    | {
        type: string;
      }
  >;
  initial?: Style;
  onClick?: {
    action: string;
    data?: any;
  };
  required?: boolean;
  transition?: Transition;
  slots?: Record<string, ElementArrayOrRef>;
  src?: string;
  style?: Style;
  tag?: string;
  target?: string;
  text?: string;
  type?: string;
  value?: string;

  gridColumns?: string;
  slotDefault?: string;
  slotTrail?: string;

  disabled?: boolean;
  rows?: number;
  width?: string;
}
