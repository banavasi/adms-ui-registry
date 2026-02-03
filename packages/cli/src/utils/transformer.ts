import type { RdsConfig } from "./config.js";

export function transformImports(content: string, config: RdsConfig): string {
  // Transform @/lib/utils to user's alias
  const libPath = config.libDir.replace(config.srcDir + "/", "");
  content = content.replace(/@\/lib\/utils/g, `${config.alias}/${libPath}/utils`);

  // Transform @/components/ui to user's components alias or path
  if (config.componentsAlias) {
    // User has a dedicated alias like @ui
    content = content.replace(/@\/components\/ui/g, config.componentsAlias);
  } else {
    // Use main alias with path
    const compPath = config.componentsDir.replace(config.srcDir + "/", "");
    content = content.replace(/@\/components\/ui/g, `${config.alias}/${compPath}`);
  }

  return content;
}
