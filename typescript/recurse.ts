type NestedNumber = NestedNumber[] | Number

const numbers: NestedNumber = [1, 2, 3, [4, 5, 6], [7, 8, 9]];

type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [key: string]: unknown };
type JSONArray = unknown[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

function isJSON(arg: JSONValue): boolean {
    if (typeof arg === 'string' || typeof arg === 'number' || typeof arg === 'boolean' || arg === null) {
        return true;
    }
    if (typeof arg === 'object' && arg !== null) {
        return Object.keys(arg).every(key => isJSON(arg[key]));
    }
    return false;
}

type NonNullableQuery<T> = {
    [Prop in keyof T]-?: NonNullableQuery<NonNullable<T[Prop]>>;
}