const parsePublicAssetsPath = (path: string): string =>
  import.meta.env.DEV
    ? (new URL(path, import.meta.url)).href
    : path;

export default parsePublicAssetsPath;