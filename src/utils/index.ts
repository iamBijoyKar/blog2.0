export function nameToSlug(name: string): string {
  return name.replace(/\s/g, "-");
}
