export const convertToObject = (url: string) => {
    const arr = url.slice(1).split(/&|=/);
    const params: any = {};
    for (let i = 0; i < arr.length; i += 2) {
        const key = arr[i];
        const value: string = arr[i + 1];
        params[key] = value;
    }
  return params;
};
