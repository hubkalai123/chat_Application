declare module 'hover-effect' {

  interface HoverEffectOptions {
    parent: HTMLElement;
    intensity?: number;
    image1: string;
    image2: string;
    displacementImage: any;
    speedIn?: number;
    speedOut?: number;
    easing?: string;
    hover?: boolean;
  }

  export default class {
    dispose(): void | { [UNDEFINED_VOID_ONLY]: never; } {
        throw new Error('Method not implemented.');
    }
    constructor(opts: HoverEffectOptions);
  }
}


interface HoverEffectInstance {
  dispose?: () => void;
  // any other methods or properties you expect to use
}

let effect: HoverEffectInstance;

