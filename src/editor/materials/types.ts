export interface IMaterial {
  name: string;
  type: string;
  props: {
    [key: string]: {
      type: string | number | boolean;
      enum?: string[],
      value: any;
      description: string;
    }
  };
  events?: {
    [key: string]: {
      type: string,
      description: string
    }
  }
}
