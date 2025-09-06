/**
 * esse arquivo contém as tipagens que são necessárias para a compilação das
 * declarações de tipagens geradas pelo polymer
 */

// tipagens de "externs/polymer-externs.js"
export interface PolymerElementPropertiesMeta {
    type?: Function;
    value?: any;
    readOnly?: boolean;
    computed?: string;
    reflectToAttribute?: boolean;
    notify?: boolean;
    observer?: string|((val: any, old: any) => void);
}

export type PolymerElementProperties = {
    [key: string]: PolymerElementPropertiesMeta|Function;
};

// todo: documentar essas propriedades
export interface PolymerInit {
    is: string;
    extends?: string;
    properties?: PolymerElementProperties;
    observers?: string[];
    _template?: HTMLTemplateElement|(() => HTMLTemplateElement);
    hostAttributes?: {[key: string]: any};
    listeners?: {[key: string]: string};
    behaviors?: BehaviorInit | BehaviorInit[];

    // métodos de ciclo de vida
    registered?(): void;
    created?(): void;
    attached?(): void;
    detached?(): void;
    ready?(): void;
    attributeChanged?(name: string, old?: string, value?: string): void;

    // permitindo quaisquer outras propriedades definidas pelo usuário
    [others: string]: any;
}

export type BehaviorInit = Pick<
    PolymerInit,
    Exclude<keyof PolymerInit, "is" | "extends" | "_template">
>;

/**
 * o objeto passado para os observadores curingas de ".*". um registro de
 * uma alteração feita em um objeto
 * 
 * @template B o objeto que corresponde à parte não curinga do caminho
 * @template V tipagens adicionais que podem ser definidos no caminho
 */
export interface PolymerDeepPropertyChange<B, V> {
    /** path para a propriedade que foi alterada */
    path: string;

    /** o objeto que corresponde à parte não curinga do caminho */
    base: B;

    /** novo valor do path que foi alterado */
    value: B | V;
}

/**
 * um registro de alterações feitas em uma matriz
 * 
 * @template T a tipagem do array sendo observado
 */
export interface PolymerSplice<T extends Array<{}|null|undefined>> {
    /** posição onde o splice iniciou */
    index: number;

    /** array dos itens removidos */
    removed: T;

    /** número de novos itens inseridos no index */
    addedCount: number;

    /** uma referência para o array em questão */
    object: T;

    /** o 'splice' literal da string */
    type: 'splice';
}

/**
 * o objeto passado para os observadores ".splices". um set de mutações
 * feitas para o array
 * 
 * @template T a tipagem do array sendo observado
 */
export interface PolymerSpliceChange<T extends Array<{}|null|undefined>> {
    indexSplices: Array<PolymerSplice<T>>;
}

// tipagens de "externs/polymer-internal-shared-types.js"
export interface StampedTemplate extends DocumentFragment {
    __noInsertionPoint: boolean;
    nodeList: Node[];
    $: {[key: string]: Node};
    templateInfo?: TemplateInfo;
}

export interface NodeInfo {
    id: string;
    events: { name: string, value: string }[];
    hasInsertionPoint: boolean;
    templateInfo: TemplateInfo;
    parentInfo: NodeInfo;
    parentIndex: number;
    infoIndex: number;
    bindings: Binding[];
}

export interface TemplateInfo {
    nodeInfoList: NodeInfo[];
    nodeList: Node[];
    stripWhitespace: boolean;
    hasInsertionPoint?: boolean;
    hostProps: Object;
    propertyEffects: Object;
    childNodes: Node[];
    wasPreBound: boolean;
}

export interface LiteralBindingPart {
    literal: string;
    compoundIndex?: number;
}

export interface MethodArg {
    literal: boolean;
    name: string;
    value: string|number;
    rootProperty?: string;
    structured?: boolean;
    wildcard?: boolean;
}

export interface MethodSignature {
    methodName: string;
    static: boolean;
    args: MethodArg[];
    dynamicFn?: boolean;
}

export interface ExpressionBindingPart {
    mode: string;
    negate: boolean;
    source: string;
    dependencies: Array<MethodArg|string>;
    customEvent: boolean;
    signature: Object|null;
    event: string;
}

export type BindingPart = LiteralBindingPart|ExpressionBindingPart;

export interface Binding {
    kind: string;
    target: string;
    parts: BindingPart[];
    literal?: string;
    isCompound: boolean;
    listenerEvent?: string;
    listenerNegate?: boolean;
}

export interface AsyncInterface {
    run: (fn: Function, delay?: number) => number;
    cancel: (handle: number) => void;
}

// tipagens de "lib/utils/gestures.html"
export interface GestureRecognizer {
    reset: () => void;
    mousedown?: (e: MouseEvent) => void;
    mousemove?: (e: MouseEvent) => void;
    mouseup?: (e: MouseEvent) => void;
    touchstart?: (e: TouchEvent) => void;
    touchmove?: (e: TouchEvent) => void;
    touchend?: (e: TouchEvent) => void;
    click?: (e: MouseEvent) => void;
}

/**
 * não definido na biblioteca dom do typescript
 * 
 * veja: https://developer.mozilla.org/en-US/docs/Web/API/IdleDeadline
 */
export interface IdleDeadline {
    didTimeout: boolean;
    timeRemaining(): number;
}
  
export interface PolymerElementConstructor {
    new (): HTMLElement;
    is?: string;
    extends?: string;
    properties?: PolymerElementProperties;
    observers?: string[];
    template?: string|HTMLTemplateElement|null;
}