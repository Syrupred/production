type Mods = Record<string, boolean | string>;

const classNames = (cls: string, mods: Mods = {}, additional: string[] = []) => [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods).filter(([cls, value]) => Boolean(value)).map(([cls]) => cls),
].join(' ');

export default classNames;
