import { cli, cliSync } from "./cli.ts";
import { IExecOptions, IExecSyncOptions, ISplatOptions, splat } from "../../core/mod.ts";

export function mkcert(args: string[] | Record<string, unknown>, options?: IExecOptions) {
    if (Array.isArray(args)) {
        return cli(args, options);
    }

    let o: ISplatOptions | undefined = undefined;
    if (args["splatOptions"]) {
        o = args["splatOptions"];
    }

    return cli(splat(args, o), options);
}

export function mkcertSync(args: string[] | Record<string, unknown>, options?: IExecSyncOptions) {
    if (Array.isArray(args)) {
        return cliSync(args, options);
    }

    let o: ISplatOptions | undefined = undefined;
    if (args["splatOptions"]) {
        o = args["splatOptions"];
    }

    return cliSync(splat(args, o), options);
}

interface IMkCertGenerateOptions {
    domains: string[];
    certPath?: string;
    keyPath?: string;
}

export function generate(cmd: IMkCertGenerateOptions, options?: IExecOptions) {
    const splat: string[] = [];
    if (cmd.certPath) {
        splat.push("-cert-file", cmd.certPath);
    }

    if (cmd.keyPath) {
        splat.push("-key-file", cmd.keyPath);
    }

    splat.push(...cmd.domains);

    return mkcert(splat, options);
}

export function generateSync(cmd: IMkCertGenerateOptions, options?: IExecSyncOptions) {
    const splat: string[] = [];
    if (cmd.certPath) {
        splat.push("-cert-file", cmd.certPath);
    }

    if (cmd.keyPath) {
        splat.push("-key-file", cmd.keyPath);
    }

    splat.push(...cmd.domains);

    return mkcertSync(splat, options);
}

export async function caRootDir() {
    const o = await mkcert(["-CAROOT"], {
        stdout: "piped",
        stderr: "piped",
    });
    if (o.code !== 0) {
        return "";
    }

    const path = o.stdoutText[0].trim();
    return path;
}

export function caRootDirSync() {
    const o = mkcertSync(["-CAROOT"], {
        stdout: "piped",
        stderr: "piped",
    });
    if (o.code !== 0) {
        return "";
    }

    const path = o.stdoutText[0].trim();
    return path;
}
