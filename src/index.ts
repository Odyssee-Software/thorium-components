import { CustomElement, JSXNodeTemplate, IConnectorTemplate } from 'thorium-framework';
import {
  Button as _button,
  Accordion as _accordion,
  AccordionItem as _accordionItem,
  Anchor as _anchor,
  Avatar as _avatar,
  Badge as _badge,
  Breadcrumb as _breadcrumb,
  BreadcrumbItem as _breadcrumbItem,
  Calendar as _calendar,
  Card as _card,
  Checkbox as _checkbox,
  Combobox as _combobox,
  DataGrid as _dataGrid,
  DataGridCell as _dataGridCell,
  DataGridRow as _dataGridRow,
  Dialog as _dialog,
  Divider as _divider,
  Flipper as _flipper,
  HorizontalScroll as _horizontalScroll,
  Listbox as _listbox,
  ListboxOption as _listboxOption,
  Menu as _menu,
  MenuItem as _menuItem,
  NumberField as _numberField,
  Progress as _progress,
  ProgressRing as _progressRing,
  Radio as _radio,
  RadioGroup as _radioGroup,
  Search as _search,
  Select as _select,
  Skeleton as _skeleton,
  Slider as _slider,
  SliderLabel as _sliderLabel,
  Switch as _switch,
  Tab as _tab,
  TabPanel as _tabPanel,
  Tabs as _tabs,
  TextArea as _textArea,
  TextField as _textField,
  Toolbar as _toolbar,
  Tooltip as _tooltip,
  TreeItem as _treeItem,
  TreeView as _treeView,
} from "@microsoft/fast-components";

export type CustomMouseEvent = MouseEvent & { target: CustomElementTarget };
export type CustomElementTarget = CustomElement<Element, ({} & CustomElementDefultProps)>

export type CustomElementDefultProps = {
  id?: string;
  name?: string;
  className?: string;
  childrens?: any[];
  _afterMounting?(target): void;
}

// export * from './button';
// export * from './controls';
// export * from './divider';
// export * from './icon';
// export * from './contextual-menu';
// export * from './input';
// export * from './input2';


import {
  provideFASTDesignSystem,
  allComponents,
} from "@microsoft/fast-components";

provideFASTDesignSystem()
  .withPrefix("thorium")
  .register(allComponents);

function createConnector<Attributes, Properties>(localName: string) {
  return function (props: JSXNodeTemplate<Attributes, Properties>) {

    console.log( `createConnector ${localName}` , { props })

    let [ attributes , properties ] = Object.keys( props ).reduce(( result , key ) => {

      if(key[0] == '_')result[1][key.replace('_' , '')] = props[key];
      else result[0][key] = props[key];

      return result;
    } , [ {} , {} ]);

    return {
      localName,
      attr: {...props.attr , ...attributes} || attributes,
      childrens: props.childrens || [],
      proto: {...props.proto , ...properties} || properties
    } as JSXNodeTemplate<Attributes, Properties>;
  }
}

export const Button = createConnector<_button, {}>('thorium-button');
export const Accordion = createConnector<_accordion, {}>('thorium-accordion');
export const AccordionItem = createConnector<_accordionItem, {}>('thorium-accordion-item');
export const Anchor = createConnector<_anchor, {}>('thorium-anchor');
export const Avatar = createConnector<_avatar, {}>('thorium-avatar');
export const Badge = createConnector<_badge, {}>('thorium-badge');
export const Breadcrumb = createConnector<_breadcrumb, {}>('thorium-breadcumb');
export const BreadcrumbItem = createConnector<_breadcrumbItem, {}>('thorium-breadcumb-item');
export const Calendar = createConnector<_calendar, {}>('thorium-calendar');
export const Card = createConnector<_card, {}>('thorium-card');
export const Checkbox = createConnector<_checkbox, {}>('thorium-checkbox');
export const Combobox = createConnector<_combobox, {}>('thorium-combobox');
export const DataGrid = createConnector<_dataGrid, {}>('thorium-data-grid');
export const DataGridCell = createConnector<_dataGridCell, {}>('thorium-data-grid-cell');
export const DataGridRow = createConnector<_dataGridRow, {}>('thorium-data-grid-row');
export const Dialog = createConnector<_dialog, {}>('thorium-dialog');
export const Divider = createConnector<_divider, {}>('thorium-divider');
export const Flipper = createConnector<_flipper, {}>('thorium-flipper');
export const HorizontalScroll = createConnector<_horizontalScroll, {}>('thorium-horizontal-scroll');
export const Listbox = createConnector<_listbox, {}>('thorium-listbox');
export const ListboxOption = createConnector<_listboxOption, {}>('thorium-listbox-option');
export const Menu = createConnector<_menu, {}>('thorium-menu');
export const MenuItem = createConnector<_menuItem, {}>('thorium-menu');
export const NumberField = createConnector<_numberField, {}>('thorium-number-field');
export const Progress = createConnector<_progress, {}>('thorium-progress');
export const ProgressRing = createConnector<_progressRing, {}>('thorium-progress-ring');
export const Radio = createConnector<_radio, {}>('thorium-radio');
export const RadioGroup = createConnector<_radioGroup, {}>('thorium-radio-group');
export const Search = createConnector<_search, {}>('thorium-search');
export const Select = createConnector<_select, {}>('thorium-select');
export const Skeleton = createConnector<_skeleton, {}>('thorium-skeleton');
export const Slider = createConnector<_slider, {}>('thorium-slider');
export const SliderLabel = createConnector<_sliderLabel, {}>('thorium-slider-label');
export const Switch = createConnector<_switch, {}>('thorium-switch');
export const Tab = createConnector<_tab, {}>('thorium-tab');
export const TabPanel = createConnector<_tabPanel, {}>('thorium-tab-panel');
export const Tabs = createConnector<_tabs, {}>('thorium-tabs');
export const TextArea = createConnector<_textArea, {}>('thorium-text-area');
export const TextField = createConnector<_textField, {}>('thorium-text-field');
export const Toolbar = createConnector<_toolbar, {}>('thorium-toolbar');
export const Tooltip = createConnector<_tooltip, {}>('thorium-tooltip');
export const TreeItem = createConnector<_treeItem, {}>('thorium-tree-item');
export const TreeView = createConnector<_treeView, {}>('thorium-tree-view');