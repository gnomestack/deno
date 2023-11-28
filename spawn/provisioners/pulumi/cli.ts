import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("pulumi", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("pulumi", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("pulumi", args, options);
}
