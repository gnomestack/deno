import { exec, execSync, IExecOptions, IExecSyncOptions, registerExe } from "../../core/mod.ts";

registerExe("age", {});

registerExe("age-keygen", {});

export function cli(args?: string[], options?: IExecOptions) {
    return exec("age", args, options);
}

export function cliSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("age", args, options);
}

export function keygen(args?: string[], options?: IExecOptions) {
    return exec("age-keygen", args, options);
}

export function keygenSync(args?: string[], options?: IExecSyncOptions) {
    return execSync("age-keygen", args, options);
}
