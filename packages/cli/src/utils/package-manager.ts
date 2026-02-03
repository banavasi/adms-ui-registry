import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";
import pc from "picocolors";

export type PackageManager = "pnpm" | "npm" | "yarn" | "bun";

export function detectPackageManager(cwd: string): PackageManager {
  // Check for lock files
  if (fs.existsSync(path.join(cwd, "pnpm-lock.yaml"))) {
    return "pnpm";
  }
  if (fs.existsSync(path.join(cwd, "yarn.lock"))) {
    return "yarn";
  }
  if (fs.existsSync(path.join(cwd, "bun.lockb"))) {
    return "bun";
  }
  if (fs.existsSync(path.join(cwd, "package-lock.json"))) {
    return "npm";
  }

  // Default to npm
  return "npm";
}

export function getInstallCommand(pm: PackageManager, deps: string[], dev = false): string {
  const devFlag = dev ? (pm === "npm" ? "--save-dev" : "-D") : "";

  switch (pm) {
    case "pnpm":
      return `pnpm add ${devFlag} ${deps.join(" ")}`.trim();
    case "yarn":
      return `yarn add ${devFlag} ${deps.join(" ")}`.trim();
    case "bun":
      return `bun add ${devFlag} ${deps.join(" ")}`.trim();
    case "npm":
    default:
      return `npm install ${devFlag} ${deps.join(" ")}`.trim();
  }
}

export function installDependencies(
  cwd: string,
  deps: string[],
  options: { dev?: boolean; silent?: boolean } = {}
): boolean {
  if (deps.length === 0) return true;

  const pm = detectPackageManager(cwd);
  const command = getInstallCommand(pm, deps, options.dev);

  if (!options.silent) {
    console.log(pc.dim(`\nInstalling dependencies with ${pm}...`));
    console.log(pc.dim(`$ ${command}\n`));
  }

  try {
    execSync(command, {
      cwd,
      stdio: options.silent ? "ignore" : "inherit",
    });
    return true;
  } catch (error) {
    console.log(pc.red(`\n❌ Failed to install dependencies`));
    console.log(pc.dim(`Run manually: ${command}`));
    return false;
  }
}
