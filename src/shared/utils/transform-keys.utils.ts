export function snakeToCamel(str: string): string {
  const withoutUnderscores = str.replace(/_([a-zA-Z])/g, (_, letter) => letter.toUpperCase());
  const firstCharLower = withoutUnderscores.charAt(0).toLowerCase() + withoutUnderscores.slice(1);
  return firstCharLower.replace(/ID$/g, 'Id');
}

export function camelToSnake(str: string): string {
  return str.replace(/([A-Z])/g, (letter) => `_${letter.toLowerCase()}`);
}

export function transformKeysToCamelCase<T extends object>(obj: unknown): T {
  if (obj === null || typeof obj !== 'object') {
    return obj as T;
  }

  if (Array.isArray(obj)) {
    return obj.map(transformKeysToCamelCase) as unknown as T;
  }

  return Object.keys(obj as Record<string, unknown>).reduce((result, key) => {
    const camelKey = snakeToCamel(key);
    const value = (obj as Record<string, unknown>)[key];

    (result as Record<string, unknown>)[camelKey] = transformKeysToCamelCase(value);
    
    return result;
  }, {} as T);
}

export function transformKeysToSnakeCase<T extends object>(obj: unknown): T {
  if (obj === null || typeof obj !== 'object') {
    return obj as T;
  }

  if (Array.isArray(obj)) {
    return obj.map(transformKeysToSnakeCase) as unknown as T;
  }

  return Object.keys(obj as Record<string, unknown>).reduce((result, key) => {
    const snakeKey = camelToSnake(key);
    const value = (obj as Record<string, unknown>)[key];
    
    (result as Record<string, unknown>)[snakeKey] = transformKeysToSnakeCase(value);
    
    return result;
  }, {} as T);
}
