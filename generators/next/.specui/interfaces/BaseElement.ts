import type { NativeElement } from './NativeElement';
import type { ShadcnComponent } from './ShadcnComponent';
import type { Style } from './Style';

export interface Transition {
  delay?: number;
  duration?: number;
}

export type ElementArrayOrRef =
  | Element[]
  | {
      $ref: Element;
    };

export type Element = NativeElement | ShadcnComponent;

export interface BaseElement {
  action?: string;
  animate?: Style;
  class?: string | string[];
  component?: string;
  data?: any[];
  defaultChecked?: string;
  elements?: ElementArrayOrRef;
  for?: string;
  icon?: string;
  id?: string;
  key?: string;
  model?: string;
  name?: string;
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
  transition?: Transition;
  style?: Style;
  tag?: string;
  text?: string;
  whileHover?: Style;
  whileTap?: Style;
}
