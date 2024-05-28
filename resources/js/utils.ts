export type Options = Record<string, string>

export const serialize = (obj: Options) => {
    var str: string[] = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}
