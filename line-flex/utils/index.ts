// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseError(parsed: any) {
  const errorMessages: string = parsed.error.errors
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((e: any) => e.message)
    .join(", ");

  return errorMessages;
}
