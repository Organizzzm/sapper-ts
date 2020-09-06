export interface Nav {
  name: string;
}

const nav = (): Nav => ({ name: "My Name" });
const obj = { name: "My Name" };

export { nav, obj };
