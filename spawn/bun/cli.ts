import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../core/mod.ts";

registerExe("bun", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("bun", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("bun", args, options);
}
