declare module '*.scss' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS__DEV: boolean;
declare const __PROJECT: string;

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
