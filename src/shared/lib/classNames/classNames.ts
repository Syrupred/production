export type Mods = Record<string, boolean | string | undefined>;

const classNames = (cls: string, mods: Mods = {}, additional: Array<string | undefined> = []) => [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods).filter(([cls, value]) => Boolean(value)).map(([cls]) => cls),
].join(' ');

export default classNames;
