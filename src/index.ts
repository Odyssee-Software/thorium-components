import { DOM , CustomElement, JSXNodeTemplate, IConnectorTemplate } from 'thorium-framework';
const { virtual:Virtual } = DOM;

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
import { State, _State } from 'thorium-framework/modules/states';

provideFASTDesignSystem()
  .withPrefix("thorium")
  .register(allComponents);

// Définir un type pour les clés valides d'HTMLElement
type ValidHTMLElementKeys = keyof HTMLElement;
let div = DOM.render<CustomElement<HTMLElement , {}>>({ localName : 'div' });
console.log({ div })
// Fonction pour vérifier si une chaîne est une clé valide
function isHTMLElementKey(key: string): key is ValidHTMLElementKeys {
    return key in div;
}

/**
 * La fonction `baseElementAfterMounting` configure des abonnements pour les objets d'état dans les
 * attributs d'un élément personnalisé afin de mettre à jour les propriétés de l'élément lorsque l'état
 * change.
 * @param {CustomElement} target - Le paramètre `target` dans la fonction `baseElementAfterMounting`
 * est un CustomElement auquel les attributs et propriétés seront appliqués après le montage.
 * @param attributes - Le paramètre `attributes` dans la fonction `baseElementAfterMounting` est un
 * objet Record qui contient des paires clé-valeur représentant les attributs d'un élément
 * personnalisé. Chaque clé est une chaîne représentant le nom de l'attribut et la valeur
 * correspondante peut être de n'importe quel type.
 * @param properties - Le paramètre `properties` dans la fonction `baseElementAfterMounting` est un
 * objet Record qui contient des paires clé-valeur de propriétés pour l'élément personnalisé. Ces
 * propriétés seront utilisées pour configurer des écouteurs d'événements ou d'autres configurations
 * sur l'élément personnalisé après son montage dans le DOM.
 */
function baseElementAfterMounting ( target:CustomElement , attributes:Record<string,any> , properties:Record<string,any> ){

  for(let key of Object.keys( attributes )){
    if(attributes[key] && attributes[key] instanceof _State){

      let state = attributes[key] as State<string>;

      let [ value , handler ] = state.mutator;
      value.subscribe( target , ( newValue ) => {
        target[key] = newValue;
      } )

    }
  }

}

/**
 * La fonction `dataGridAfterMounting` définit l'attribut `rowsData` d'un élément personnalisé en
 * fonction des attributs et propriétés fournis, et s'abonne aux modifications si `rowsData` est une
 * instance de `_State`.
 * @param target - Le paramètre `target` dans la fonction `dataGridAfterMounting` est un élément
 * personnalisé représentant un élément HTML avec un type de grille de données spécifique. Il est
 * utilisé pour manipuler et interagir avec le composant de grille de données dans le DOM.
 * @param attributes - Le paramètre `attributes` dans la fonction `dataGridAfterMounting` est un
 * enregistrement contenant des paires clé-valeur d'attributs qui sont transmises à l'élément
 * personnalisé. Ces attributs sont accessibles en utilisant le nom de l'attribut comme clé. Dans cette
 * fonction, la variable `dataAttributeName` est définie sur "lignes
 * @param properties - Le paramètre `properties` dans la fonction `dataGridAfterMounting` est un objet
 * Record qui contient des paires clé-valeur de propriétés pour l'élément personnalisé. Ces propriétés
 * sont accessibles et définies sur l'élément « cible » dans la fonction.
 */
function dataGrigAfterMounting ( target:CustomElement<HTMLElement , _dataGrid> , attributes:Record<string,any> , properties:Record<string,any> ){

  let dataAttributeName = "rowsData";

  if( attributes[dataAttributeName] ){
    let rowsData = attributes[dataAttributeName];

    target.rowsData = rowsData;

    if( rowsData instanceof _State ){

      let [ value , handler ] = rowsData.mutator;
      value.subscribe( target , ( newValue ) => {
        console.log({ newValue })
        target.rowsData = newValue;

      })

    }

  }

}

/**
 * La fonction `createConnector` dans TypeScript crée un élément personnalisé avec des attributs et des
 * propriétés spécifiés, ainsi qu'un gestionnaire facultatif après le montage.
 * @param {string} localName - Le paramètre `localName` dans la fonction `createConnector` est une
 * chaîne qui représente le nom de l'élément personnalisé en cours de création.
 * @param [afterMountingHandler] - Le paramètre `afterMountingHandler` dans la fonction
 * `createConnector` est une fonction de rappel qui est appelée après le montage de l'élément
 * personnalisé. Il faut trois paramètres :
 * @returns La fonction `createConnector` renvoie une fonction qui prend les accessoires comme argument
 * et les traite pour extraire les attributs, les propriétés et les enfants. Il renvoie ensuite un
 * objet avec le localName, les attributs, les enfants et un objet prototype qui inclut une fonction «
 * afterMounting ». Si un `afterMountingHandler` est fourni, il sera appelé avec l'élément cible, les
 * attributs et les propriétés.
 */
function createConnector<Attributes, Properties>( localName: string , afterMountingHandler?:( target:CustomElement<any , any> , attributes:Record<string,any> , properties:Record<string,any> ) => void ) {
  return function (props: JSXNodeTemplate<Attributes, Properties> = {}) {

    let [ attributes , properties ] = Object.keys( props ).reduce(( result , key ) => {

      if(key == 'childrens')return result;
      if(isHTMLElementKey(key) && ( key != 'style' ))result[1][key] = props[key];
      else result[0][key] = props[key];

      return result;
    } , [ {} , {} ]);

    return {
      localName,
      attr: attributes || {},
      childrens: props.childrens || [],
      proto: {
        ...properties,
        afterMounting(target) {

          if(afterMountingHandler)afterMountingHandler( target , attributes , properties );
          
          if(properties["afterMounting"])return properties["afterMounting"]();

        },
      } || {}
    } as JSXNodeTemplate<Attributes, Properties>;
    
  }
}

export const ThoriumButton = createConnector<_button, {}>('thorium-button' , baseElementAfterMounting);
/* Le code ci-dessus dans TypeScript définit un composant appelé « ThoriumAccordion » à l'aide de la
bibliothèque Fast Design. Il semble créer un connecteur pour un composant accordéon basé sur le type
`_accordion` et un objet vide comme deuxième argument. Le code fait référence à la documentation
Fast Design pour les composants et semble configurer le composant accordéon avec le nom spécifié «
thorium-accordion » et un élément de base après le montage. */
// Reference à https://www.fast.design/docs/components/accordion
export const ThoriumAccordion = createConnector<_accordion, {}>('thorium-accordion' , baseElementAfterMounting);
export const ThoriumAccordionItem = createConnector<_accordionItem, {}>('thorium-accordion-item' , baseElementAfterMounting);
export const ThoriumAnchor = createConnector<_anchor, {}>('thorium-anchor' , baseElementAfterMounting);
export const ThoriumAvatar = createConnector<_avatar, {}>('thorium-avatar' , baseElementAfterMounting);
export const ThoriumBadge = createConnector<_badge, {}>('thorium-badge' , baseElementAfterMounting);
export const ThoriumBreadcrumb = createConnector<_breadcrumb, {}>('thorium-breadcrumb' , baseElementAfterMounting);
export const ThoriumBreadcrumbItem = createConnector<_breadcrumbItem, {}>('thorium-breadcrumb-item' , baseElementAfterMounting);
export const ThoriumCalendar = createConnector<_calendar, {}>('thorium-calendar' , baseElementAfterMounting);
export const ThoriumCard = createConnector<_card, {}>('thorium-card' , baseElementAfterMounting);
export const ThoriumCheckbox = createConnector<_checkbox, {}>('thorium-checkbox' , baseElementAfterMounting);
export const ThoriumCombobox = createConnector<_combobox, {}>('thorium-combobox' , baseElementAfterMounting);
export const ThoriumDataGrid = createConnector<_dataGrid, {}>('thorium-data-grid' , dataGrigAfterMounting);
export const ThoriumDataGridCell = createConnector<_dataGridCell, {}>('thorium-data-grid-cell' , baseElementAfterMounting);
export const ThoriumDataGridRow = createConnector<_dataGridRow, {}>('thorium-data-grid-row' , baseElementAfterMounting);
export const ThoriumDialog = createConnector<_dialog, {}>('thorium-dialog' , baseElementAfterMounting);
export const ThoriumDivider = createConnector<_divider, {}>('thorium-divider' , baseElementAfterMounting);
export const ThoriumFlipper = createConnector<_flipper, {}>('thorium-flipper' , baseElementAfterMounting);
export const ThoriumHorizontalScroll = createConnector<_horizontalScroll, {}>('thorium-horizontal-scroll' , baseElementAfterMounting);
export const ThoriumListbox = createConnector<_listbox, {}>('thorium-listbox' , baseElementAfterMounting);
export const ThoriumListboxOption = createConnector<_listboxOption, {}>('thorium-listbox-option' , baseElementAfterMounting);
export const ThoriumMenu = createConnector<_menu, {}>('thorium-menu' , baseElementAfterMounting);
export const ThoriumMenuItem = createConnector<_menuItem, {}>('thorium-menu-item' , baseElementAfterMounting);
export const ThoriumNumberField = createConnector<_numberField, {}>('thorium-number-field' , baseElementAfterMounting);
export const ThoriumProgress = createConnector<_progress, {}>('thorium-progress' , baseElementAfterMounting);
export const ThoriumProgressRing = createConnector<_progressRing, {}>('thorium-progress-ring' , baseElementAfterMounting);
export const ThoriumRadio = createConnector<_radio, {}>('thorium-radio' , baseElementAfterMounting);
export const ThoriumRadioGroup = createConnector<_radioGroup, {}>('thorium-radio-group' , baseElementAfterMounting);
export const ThoriumSearch = createConnector<_search, {}>('thorium-search' , baseElementAfterMounting);
export const ThoriumSelect = createConnector<_select, {}>('thorium-select' , baseElementAfterMounting);
export const ThoriumSkeleton = createConnector<_skeleton, {}>('thorium-skeleton' , baseElementAfterMounting);
export const ThoriumSlider = createConnector<_slider, {}>('thorium-slider' , baseElementAfterMounting);
export const ThoriumSliderLabel = createConnector<_sliderLabel, {}>('thorium-slider-label' , baseElementAfterMounting);
export const ThoriumSwitch = createConnector<_switch, {}>('thorium-switch' , baseElementAfterMounting);
export const ThoriumTab = createConnector<_tab, {}>('thorium-tab' , baseElementAfterMounting);
export const ThoriumTabPanel = createConnector<_tabPanel, {}>('thorium-tab-panel' , baseElementAfterMounting);
export const ThoriumTabs = createConnector<_tabs, {}>('thorium-tabs' , baseElementAfterMounting);
export const ThoriumTextArea = createConnector<_textArea, {}>('thorium-text-area' , baseElementAfterMounting);
export const ThoriumTextField = createConnector<_textField, {}>('thorium-text-field' , baseElementAfterMounting);
export const ThoriumToolbar = createConnector<_toolbar, {}>('thorium-toolbar' , baseElementAfterMounting);
export const ThoriumTooltip = createConnector<_tooltip, {}>('thorium-tooltip' , baseElementAfterMounting);
export const ThoriumTreeItem = createConnector<_treeItem, {}>('thorium-tree-item' , baseElementAfterMounting);
export const ThoriumTreeView = createConnector<_treeView, {}>('thorium-tree-view' , baseElementAfterMounting);