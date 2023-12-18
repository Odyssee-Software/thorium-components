[thorium-components](README.md) / Exports

# thorium-components

## Table of contents

### Interfaces

- [Input2Props](interfaces/Input2Props.md)
- [InputProps](interfaces/InputProps.md)

### Type Aliases

- [ButtonChildAreaElement](modules.md#buttonchildareaelement)
- [ButtonContentElement](modules.md#buttoncontentelement)
- [ButtonContentTextElement](modules.md#buttoncontenttextelement)
- [ButtonElement](modules.md#buttonelement)
- [ButtonProps](modules.md#buttonprops)
- [ButtonTextElement](modules.md#buttontextelement)
- [ContextualMenuElement](modules.md#contextualmenuelement)
- [ContextualMenuProps](modules.md#contextualmenuprops)
- [ControlsElement](modules.md#controlselement)
- [ControlsProps](modules.md#controlsprops)
- [CustomElementDefultProps](modules.md#customelementdefultprops)
- [CustomElementTarget](modules.md#customelementtarget)
- [CustomMouseEvent](modules.md#custommouseevent)
- [DividerElement](modules.md#dividerelement)
- [IconContainerElement](modules.md#iconcontainerelement)
- [IconElement](modules.md#iconelement)
- [IconProps](modules.md#iconprops)
- [Input2Element](modules.md#input2element)
- [InputElement](modules.md#inputelement)
- [\_Input](modules.md#_input)
- [\_InputContainer](modules.md#_inputcontainer)

### Variables

- [ButtonPatern](modules.md#buttonpatern)
- [Input2Patern](modules.md#input2patern)
- [InputPatern](modules.md#inputpatern)

### Functions

- [Button](modules.md#button)
- [ButttonConnector](modules.md#butttonconnector)
- [ContextualMenu](modules.md#contextualmenu)
- [Controls](modules.md#controls)
- [Divider](modules.md#divider)
- [Icon](modules.md#icon)
- [Input](modules.md#input)
- [Input2](modules.md#input2)
- [Input2Connector](modules.md#input2connector)
- [InputConnector](modules.md#inputconnector)

## Type Aliases

### ButtonChildAreaElement

Ƭ **ButtonChildAreaElement**: `CustomElement`\<`HTMLUnknownElement`, \{ `children`: \{ `button`: `any`  }  }\>

#### Defined in

src/button/index.tsx:63

___

### ButtonContentElement

Ƭ **ButtonContentElement**: `CustomElement`\<`HTMLButtonElement`, \{ `children`: \{ `controls`: {} ; `icon`: {} ; `text`: [`ButtonContentTextElement`](modules.md#buttoncontenttextelement)  }  }\>

#### Defined in

src/button/index.tsx:73

___

### ButtonContentTextElement

Ƭ **ButtonContentTextElement**: `CustomElement`\<`HTMLParagraphElement`, {}\>

#### Defined in

src/button/index.tsx:69

___

### ButtonElement

Ƭ **ButtonElement**\<`ControlsChildren`\>: `CustomElement`\<`HTMLButtonElement`, \{ `buttonElement`: [`ButtonContentElement`](modules.md#buttoncontentelement) ; `children`: \{ `controls?`: [`ControlsElement`](modules.md#controlselement)\<`ControlsChildren`\> ; `icon?`: [`IconContainerElement`](modules.md#iconcontainerelement) ; `text?`: [`ButtonTextElement`](modules.md#buttontextelement)  } ; `controlsElement`: `any` ; `iconElement`: `any` ; `text`: `string` ; `textElement`: [`ButtonContentTextElement`](modules.md#buttoncontenttextelement) ; `controls`: () => [`ControlsElement`](modules.md#controlselement)\<`ControlsChildren`\> ; `icon`: () => [`IconContainerElement`](modules.md#iconcontainerelement)  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ControlsChildren` | `Record`\<`string`, `CustomElement`\<`Element`, {}\>\> |

#### Defined in

src/button/index.tsx:10

___

### ButtonProps

Ƭ **ButtonProps**: \{ `className?`: `string` ; `controls?`: [`ControlsProps`](modules.md#controlsprops)[``"buttons"``] ; `icon?`: [`IconProps`](modules.md#iconprops) ; `pageLink?`: \{ `to`: `string`  } ; `textContent?`: `string` ; `action?`: (`event`: `MouseEvent`) => `void`  } & [`CustomElementDefultProps`](modules.md#customelementdefultprops)

#### Defined in

src/button/index.tsx:25

___

### ButtonTextElement

Ƭ **ButtonTextElement**: `CustomElement`\<`HTMLParagraphElement`, {}\>

#### Defined in

src/button/index.tsx:8

___

### ContextualMenuElement

Ƭ **ContextualMenuElement**: `CustomElement`\<`HTMLDivElement`, {}\>

#### Defined in

src/contextual-menu/index.tsx:9

___

### ContextualMenuProps

Ƭ **ContextualMenuProps**: \{ `childrens`: [`ButtonElement`](modules.md#buttonelement) \| [`DividerElement`](modules.md#dividerelement)[] ; `position`: ``"top"`` \| ``"right"`` \| ``"bottom"`` \| ``"left"`` ; `target`: `Element` ; `afterMouning?`: (`target`: `CustomElement`\<`HTMLDivElement`, {}\>) => `void`  } & [`CustomElementDefultProps`](modules.md#customelementdefultprops)

#### Defined in

src/contextual-menu/index.tsx:13

___

### ControlsElement

Ƭ **ControlsElement**\<`Children`\>: `CustomElement`\<`HTMLDivElement`, \{ `children`: `Children` ; `name`: ``"controls"``  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Children` | `Record`\<`string`, `CustomElement`\<`Element`, {}\>\> |

#### Defined in

src/controls/index.tsx:8

___

### ControlsProps

Ƭ **ControlsProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `buttons` | `any`[] |

#### Defined in

src/controls/index.tsx:4

___

### CustomElementDefultProps

Ƭ **CustomElementDefultProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `childrens?` | `any`[] |
| `className?` | `string` |
| `id?` | `string` |
| `name?` | `string` |
| `_afterMounting?` | (`target`: `any`) => `void` |

#### Defined in

src/index.ts:6

___

### CustomElementTarget

Ƭ **CustomElementTarget**: `CustomElement`\<`Element`, {} & [`CustomElementDefultProps`](modules.md#customelementdefultprops)\>

#### Defined in

src/index.ts:4

___

### CustomMouseEvent

Ƭ **CustomMouseEvent**: `MouseEvent` & \{ `target`: [`CustomElementTarget`](modules.md#customelementtarget)  }

#### Defined in

src/index.ts:3

___

### DividerElement

Ƭ **DividerElement**: `CustomElement`\<`HTMLDivElement`, {}\>

#### Defined in

src/divider/index.tsx:5

___

### IconContainerElement

Ƭ **IconContainerElement**: `CustomElement`\<`HTMLDivElement`, \{ `children`: \{ `icon`: [`IconElement`](modules.md#iconelement)  }  }\>

#### Defined in

src/icon/index.tsx:13

___

### IconElement

Ƭ **IconElement**: `CustomElement`\<`HTMLUnknownElement`, {}\>

#### Defined in

src/icon/index.tsx:9

___

### IconProps

Ƭ **IconProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `type` | ``"background"`` \| ``"mask"`` |

#### Defined in

src/icon/index.tsx:4

___

### Input2Element

Ƭ **Input2Element**: `CustomElement`\<`HTMLDivElement`, \{ `children`: \{ `input-container`: `CustomElement`\<`HTMLDivElement`, \{ `children`: \{ `input`: `CustomElement`\<`HTMLInputElement`, {}\>  }  }\>  } ; `container`: [`Input2Element`](modules.md#input2element)[``"children"``][``"input-container"``] ; `input`: [`Input2Element`](modules.md#input2element)[``"container"``][``"children"``][``"input"``] ; `value`: `string`  }\>

#### Defined in

src/input2/index.tsx:5

___

### InputElement

Ƭ **InputElement**: `CustomElement`\<`HTMLDivElement`, \{ `children`: \{ `input`: `CustomElement`\<`HTMLInputElement`, {}\>  } ; `input`: `CustomElement`\<`HTMLInputElement`, {}\> ; `value`: `string`  }\>

#### Defined in

src/input/index.tsx:3

___

### \_Input

Ƭ **\_Input**: [`_InputContainer`](modules.md#_inputcontainer)[``"children"``][``"input"``]

#### Defined in

src/input2/index.tsx:19

___

### \_InputContainer

Ƭ **\_InputContainer**: [`Input2Element`](modules.md#input2element)[``"children"``][``"input-container"``]

#### Defined in

src/input2/index.tsx:18

## Variables

### ButtonPatern

• `Const` **ButtonPatern**: `CustomElementPatern`\<`unknown`, `unknown`\>

#### Defined in

src/button/index.tsx:81

___

### Input2Patern

• `Const` **Input2Patern**: `CustomElementPatern`\<`unknown`, `unknown`\>

#### Defined in

src/input2/index.tsx:21

___

### InputPatern

• `Const` **InputPatern**: `CustomElementPatern`\<`unknown`, `unknown`\>

#### Defined in

src/input/index.tsx:11

## Functions

### Button

▸ **Button**(`props`): [`ButtonElement`](modules.md#buttonelement)\<`Record`\<`string`, `CustomElement`\<`Element`, {}\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ButtonProps`](modules.md#buttonprops) |

#### Returns

[`ButtonElement`](modules.md#buttonelement)\<`Record`\<`string`, `CustomElement`\<`Element`, {}\>\>\>

#### Defined in

src/button/index.tsx:121

___

### ButttonConnector

▸ **ButttonConnector**(`connectorTemplate?`): `NodeTemplate`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connectorTemplate?` | `ConnectorTemplate`\<`any`\> |

#### Returns

`NodeTemplate`\<`any`\>

#### Defined in

node_modules/thorium-framework/modules/core/dist/design-system/register.d.ts:154

___

### ContextualMenu

▸ **ContextualMenu**(`props`): [`ContextualMenuElement`](modules.md#contextualmenuelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ContextualMenuProps`](modules.md#contextualmenuprops) |

#### Returns

[`ContextualMenuElement`](modules.md#contextualmenuelement)

#### Defined in

src/contextual-menu/index.tsx:20

___

### Controls

▸ **Controls**(`props`): [`ControlsElement`](modules.md#controlselement)\<`Record`\<`string`, `CustomElement`\<`Element`, {}\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ControlsProps`](modules.md#controlsprops) |

#### Returns

[`ControlsElement`](modules.md#controlselement)\<`Record`\<`string`, `CustomElement`\<`Element`, {}\>\>\>

#### Defined in

src/controls/index.tsx:13

___

### Divider

▸ **Divider**(): [`DividerElement`](modules.md#dividerelement)

#### Returns

[`DividerElement`](modules.md#dividerelement)

#### Defined in

src/divider/index.tsx:7

___

### Icon

▸ **Icon**(`props`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IconProps`](modules.md#iconprops) |

#### Returns

`any`

#### Defined in

src/icon/index.tsx:19

___

### Input

▸ **Input**(`props`): `NodeTemplate`\<[`InputElement`](modules.md#inputelement)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`InputProps`](interfaces/InputProps.md) |

#### Returns

`NodeTemplate`\<[`InputElement`](modules.md#inputelement)\>

#### Defined in

src/input/index.tsx:42

___

### Input2

▸ **Input2**(`props`): `NodeTemplate`\<[`Input2Element`](modules.md#input2element)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`Input2Props`](interfaces/Input2Props.md) |

#### Returns

`NodeTemplate`\<[`Input2Element`](modules.md#input2element)\>

#### Defined in

src/input2/index.tsx:44

___

### Input2Connector

▸ **Input2Connector**(`connectorTemplate?`): `NodeTemplate`\<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connectorTemplate?` | `ConnectorTemplate`\<`unknown`\> |

#### Returns

`NodeTemplate`\<`unknown`\>

#### Defined in

node_modules/thorium-framework/modules/core/dist/design-system/register.d.ts:154

___

### InputConnector

▸ **InputConnector**(`connectorTemplate?`): `NodeTemplate`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `connectorTemplate?` | `ConnectorTemplate`\<`any`\> |

#### Returns

`NodeTemplate`\<`any`\>

#### Defined in

node_modules/thorium-framework/modules/core/dist/design-system/register.d.ts:154
