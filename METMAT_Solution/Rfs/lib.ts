//# server typescript program lib
export function assertNotNull<T>(value: T | null | undefined): T {
  if (value == null) {
    throw new Error("Érték null vagy undefined");
  }
  return value;
}

export function parseToFloat(value: string): number {
    const result = float.Parse(value);
    if (result === undefined) {
        throw new Error("A megadott érték nem konvertálható számmá");
    }
    return result;
}