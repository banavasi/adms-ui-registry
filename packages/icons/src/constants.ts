/** Font Awesome Pro style packages the Vite plugin can register icons from. */
export type FaPackage = 'light' | 'solid' | 'regular'

/** Kebab-case icon names grouped by FA style package. */
export type FaIconsConfig = Partial<Record<FaPackage, string[]>>

/**
 * Icons used by ADMS RDS UI components (Font Awesome Pro · Light).
 * Included automatically when `rds: true` (the default).
 */
export const RDS_ICONS: FaIconsConfig = {
  light: [
    'check',
    'chevron-down',
    'chevron-up',
    'circle-exclamation',
    'circle-info',
    'eye',
    'eye-slash',
    'xmark',
  ],
}

/** FA prefix used in `:icon="['fal', 'star']"` bindings. */
export const FA_PREFIX: Record<FaPackage, string> = {
  light: 'fal',
  solid: 'fas',
  regular: 'far',
}

/** npm package that provides SVG definitions for each FA style. */
export const FA_PACKAGE_MODULE: Record<FaPackage, string> = {
  light: '@fortawesome/pro-light-svg-icons',
  solid: '@fortawesome/pro-solid-svg-icons',
  regular: '@fortawesome/pro-regular-svg-icons',
}

/** Convert `chevron-down` → `faChevronDown` (Font Awesome export name). */
export function toFaExportName(kebab: string): string {
  const camel = kebab
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
  return `fa${camel}`
}

/** Merge RDS preset icons with user-provided icons (deduped, stable order). */
export function resolveIconSets(
  icons: FaIconsConfig,
  options: { packages: FaPackage[]; rds: boolean }
): FaIconsConfig {
  const merged: FaIconsConfig = {}

  for (const pkg of options.packages) {
    const names = new Set<string>()
    if (options.rds) {
      for (const name of RDS_ICONS[pkg] ?? []) names.add(name)
    }
    for (const name of icons[pkg] ?? []) names.add(name)
    if (names.size > 0) merged[pkg] = [...names]
  }

  return merged
}
