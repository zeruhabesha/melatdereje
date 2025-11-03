// This file helps TypeScript understand the Tailwind CSS directives
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'tailwindcss/colors' {
  export const gray: any;
  export const blue: any;
  export const red: any;
  export const yellow: any;
  export const green: any;
  export const purple: any;
  export const pink: any;
  export const indigo: any;
  export const teal: any;
  export const orange: any;
  export const white: string;
  export const black: string;
  export const transparent: string;
  export const current: string;
}
