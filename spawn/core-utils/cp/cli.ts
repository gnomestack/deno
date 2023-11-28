import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("cp", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("cp", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("cp", args, options);
}
