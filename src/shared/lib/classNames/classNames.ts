
type Mods = Record<string, boolean | string>;

const classNames = (cls: string, mods: Mods, additional: string[]) => {
return [
    cls,
    ...additional,
    ...Object.entries(mods).filter(([cls, value]) => Boolean(value)).map(([cls]) => cls),
].join(' ');
};

export default classNames;