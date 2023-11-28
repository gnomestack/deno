import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("cut", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("cut", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("cut", args, options);
}
