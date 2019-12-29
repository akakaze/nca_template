type stringConfig = {
    type: "string",
    value: string,
    pattern: string,
};

type numberConfig = {
    type: "number",
    value: number,
    range: [number, number],
};

type booleanConfig = {
    type: "boolean",
    value: boolean,
};

type enumConfig = {
    type: "enum",
    value: string | number,
    option: string[] | number[]
};

type configType = {
    [key: string]: stringConfig | numberConfig | booleanConfig | enumConfig
};

export default configType;