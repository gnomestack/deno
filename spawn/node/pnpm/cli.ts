import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("pnpm", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("pnpm", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("pnpm", args, options);
}
