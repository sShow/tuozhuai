import Event from './event';

export default class Node extends Event {
  protected key: string;

  readonly type: string;
  readonly id: string;

  $el: undefined | HTMLElement;
  private _mounted: boolean;
  private _style: Record<string, any>;
  private _prop: Record<string, any>;
  private _event: Record<string, any>;
  private _animation: Record<string, any>;
  private _children: Node[];

  constructor(type: string) {
    super();
    this.key = '123123';

    this.type = type;
    this.id = '';
    this.$el = undefined;

    this._mounted = false;
    this._style = {};
    this._prop = {};
    this._event = {};
    this._animation = {};
    this._children = [];
  }

  get children(): Node[] {
    return [];
  }

  get material() {
    return {};
  }

  get style() {
    return { ...this._style } as const;
  }

  set style(style: Record<string, any>) {
    this._style = style;
  }

  get prop() {
    return { ...this._prop } as const;
  }

  set prop(prop: Record<string, any>) {
    this._prop = prop;
  }

  get event() {
    return this._event;
  }

  set event(event: Record<string, any>) {
    this._event = event;
  }

  mounted() {
    this._mounted = true;
  }

  destroy() {
    this._mounted = false;
  }
}
