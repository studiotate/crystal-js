import { BaseElement, Element } from './BaseElement';

export type ShadcnComponent =
  | AccordionComponent
  | AccordionItemComponent
  | AccordionTriggerComponent
  | AccordionContentComponent
  | AlertComponent
  | AlertTitleComponent
  | AlertDescriptionComponent
  | AlertDialogComponent
  | AlertDialogTriggerComponent
  | AlertDialogPortalComponent
  | AlertDialogOverlayComponent
  | AlertDialogContentComponent
  | AspectRatioComponent
  | AvatarComponent
  | AvatarImageComponent
  | AvatarFallbackComponent
  | BadgeComponent
  | BreadcrumbComponent
  | BreadcrumbListComponent
  | BreadcrumbItemComponent
  | BreadcrumbLinkComponent
  | BreadcrumbSeparatorComponent
  | BreadcrumbPageComponent
  | BreadcrumbEllipsisComponent
  | ButtonComponent
  | CalendarComponent
  | CardComponent
  | CardHeaderComponent
  | CardTitleComponent
  | CardDescriptionComponent
  | CardContentComponent
  | CardFooterComponent
  | CarouselComponent
  | CarouselContentComponent
  | CarouselItemComponent
  | CarouselNextComponent
  | CarouselPreviousComponent
  | CheckboxComponent
  | CheckboxIndicatorComponent
  | CollapsibleComponent
  | CollapsibleTriggerComponent
  | CollapsibleContentComponent
  | CommandComponent
  | CommandInputComponent
  | CommandListComponent
  | CommandEmptyComponent
  | CommandGroupComponent
  | CommandItemComponent
  | CommandSeparatorComponent
  | CommandShortcutComponent
  | ContextMenuComponent
  | ContextMenuCheckboxItemComponent
  | ContextMenuContentComponent
  | ContextMenuItemComponent
  | ContextMenuLabelComponent
  | ContextMenuRadioGroupComponent
  | ContextMenuRadioItemComponent
  | ContextMenuSeparatorComponent
  | ContextMenuSubComponent
  | ContextMenuSubContentComponent
  | ContextMenuSubTriggerComponent
  | ContextMenuTriggerComponent;

interface AccordionComponent extends BaseElement {
  component: 'accordion';
  collapsible?: boolean;
  dir?: 'ltr' | 'rtl';
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  type?: 'single' | 'multiple';
}

interface AccordionItemComponent extends BaseElement {
  component: 'accordion-item';
  disabled?: boolean;
  value: string;
}

interface AccordionTriggerComponent extends BaseElement {
  component: 'accordion-trigger';
}

interface AccordionContentComponent extends BaseElement {
  component: 'accordion-content';
  forceMount?: boolean;
}

interface AlertComponent extends BaseElement {
  component: 'alert';
}

interface AlertTitleComponent extends BaseElement {
  component: 'alert-title';
}

interface AlertDescriptionComponent extends BaseElement {
  component: 'alert-description';
}

interface AlertDialogComponent extends BaseElement {
  component: 'alert-dialog';
  defaultOpen?: boolean;
  open?: boolean;
}

interface AlertDialogTriggerComponent extends BaseElement {
  component: 'alert-dialog-trigger';
}

interface AlertDialogPortalComponent extends BaseElement {
  component: 'alert-dialog-portal';
  forceMount?: boolean;
  container?: Element;
}

interface AlertDialogOverlayComponent extends BaseElement {
  component: 'alert-dialog-overlay';
  forceMount?: boolean;
}

interface AlertDialogContentComponent extends BaseElement {
  component: 'alert-dialog-content';
  forceMount?: boolean;
}

interface AspectRatioComponent extends BaseElement {
  component: 'aspect-ratio';
  ratio?: number;
}

interface AvatarComponent extends BaseElement {
  component: 'avatar';
}

interface AvatarImageComponent extends BaseElement {
  component: 'avatar-image';
}

interface AvatarFallbackComponent extends BaseElement {
  component: 'avatar-fallback';
  delayMs?: number;
}

interface BadgeComponent extends BaseElement {
  component: 'badge';
}

interface BreadcrumbComponent extends BaseElement {
  component: 'breadcrumb';
}

interface BreadcrumbListComponent extends BaseElement {
  component: 'breadcrumb-list';
}

interface BreadcrumbItemComponent extends BaseElement {
  component: 'breadcrumb-item';
}

interface BreadcrumbLinkComponent extends BaseElement {
  component: 'breadcrumb-link';
  href?: string;
}

interface BreadcrumbSeparatorComponent extends BaseElement {
  component: 'breadcrumb-separator';
}

interface BreadcrumbPageComponent extends BaseElement {
  component: 'breadcrumb-page';
}

interface BreadcrumbEllipsisComponent extends BaseElement {
  component: 'breadcrumb-ellipsis';
}

interface ButtonComponent extends BaseElement {
  component: 'button';
  asChild?: boolean;
  disabled?: boolean;
  variant?: 'link' | 'ghost' | 'outline' | 'secondary';
  size?: 'icon';
}

interface CalendarComponent extends BaseElement {
  component: 'calendar';
}

interface CardComponent extends BaseElement {
  component: 'card';
}

interface CardHeaderComponent extends BaseElement {
  component: 'card-header';
}

interface CardTitleComponent extends BaseElement {
  component: 'card-title';
}

interface CardDescriptionComponent extends BaseElement {
  component: 'card-description';
}

interface CardContentComponent extends BaseElement {
  component: 'card-content';
}

interface CardFooterComponent extends BaseElement {
  component: 'card-footer';
}

interface CarouselComponent extends BaseElement {
  component: 'carousel';
}

interface CarouselContentComponent extends BaseElement {
  component: 'carousel-content';
}

interface CarouselItemComponent extends BaseElement {
  component: 'carousel-item';
}

interface CarouselNextComponent extends BaseElement {
  component: 'carousel-next';
}

interface CarouselPreviousComponent extends BaseElement {
  component: 'carousel-previous';
}

interface CheckboxComponent extends Omit<BaseElement, 'defaultChecked'> {
  component: 'checkbox';
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
}

interface CheckboxIndicatorComponent extends BaseElement {
  component: 'checkbox-indicator';
  forceMount?: boolean;
}

interface CollapsibleComponent extends BaseElement {
  component: 'collapsible';
  defaultOpen?: boolean;
  disabled?: boolean;
  open?: boolean;
}

interface CollapsibleTriggerComponent extends BaseElement {
  component: 'collapsible-trigger';
}

interface CollapsibleContentComponent extends BaseElement {
  component: 'collapsible-content';
  forceMount?: boolean;
}

interface CommandComponent extends BaseElement {
  component: 'command';
}

interface CommandInputComponent extends BaseElement {
  component: 'command-input';
  placeholder?: string;
}

interface CommandListComponent extends BaseElement {
  component: 'command-list';
}

interface CommandEmptyComponent extends BaseElement {
  component: 'command-empty';
}

interface CommandGroupComponent extends BaseElement {
  component: 'command-group';
  heading?: string;
}

interface CommandItemComponent extends BaseElement {
  component: 'command-item';
}

interface CommandSeparatorComponent extends BaseElement {
  component: 'command-separator';
}

interface CommandShortcutComponent extends BaseElement {
  component: 'command-shortcut';
}

interface ContextMenuComponent extends BaseElement {
  component: 'context-menu';
}

interface ContextMenuCheckboxItemComponent extends BaseElement {
  component: 'context-menu-checkbox-item';
  checked?: boolean;
}

interface ContextMenuContentComponent extends BaseElement {
  component: 'context-menu-content';
}

interface ContextMenuItemComponent extends BaseElement {
  component: 'context-menu-item';
  disabled?: boolean;
  inset?: boolean;
}

interface ContextMenuLabelComponent extends BaseElement {
  component: 'context-menu-label';
}

interface ContextMenuRadioGroupComponent extends BaseElement {
  component: 'context-menu-radio-group';
  value?: string;
}

interface ContextMenuRadioItemComponent extends BaseElement {
  component: 'context-menu-radio-item';
}

interface ContextMenuSeparatorComponent extends BaseElement {
  component: 'context-menu-separator';
}

interface ContextMenuSubComponent extends BaseElement {
  component: 'context-menu-sub';
}

interface ContextMenuSubContentComponent extends BaseElement {
  component: 'context-menu-sub-content';
}

interface ContextMenuSubTriggerComponent extends BaseElement {
  component: 'context-menu-sub-trigger';
}

interface ContextMenuTriggerComponent extends BaseElement {
  component: 'context-menu-trigger';
}
