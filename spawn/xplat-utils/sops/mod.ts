import { cli, cliSync } from "./cli.ts";
import { exec, exists, existsSync, IExecOptions, IExecSyncOptions } from "../../core/mod.ts";
import {
    dirname,
    ensureDirectory,
    homeConfigDir,
    homeDir,
    IS_DARWIN,
    ISplatOptions,
    join,
    readTextFile,
    splat,
    writeTextFile,
} from "../../deps.ts";

export function sops(args: string[] | Record<string, unknown>, options?: IExecOptions) {
    if (Array.isArray(args)) {
        return cli(args, options);
    }

    let o: ISplatOptions | undefined = undefined;
    if (args["splatOptions"]) {
        o = args["splatOptions"];
    }

    return cli(splat(args, o), options);
}

export function sopsSync(args: string[] | Record<string, unknown>, options?: IExecSyncOptions) {
    if (Array.isArray(args)) {
        return cliSync(args, options);
    }

    let o: ISplatOptions | undefined = undefined;
    if (args["splatOptions"]) {
        o = args["splatOptions"];
    }

    return cliSync(splat(args, o), options);
}

export async function createAgeKey(keyFile?: string) {
    keyFile ??= defaultAgeKeyFile();
    const dir = dirname(keyFile);
    const pubKeyFile = join(dir, "publicKey.txt");
    if (!await exists(keyFile)) {
        await ensureDirectory(dir);
        const _r = await exec("age-keygen", ["-o", keyFile], { stdout: "piped", stderr: "piped" })
            .then((o) => o.throwOrContinue());

        let pubKeyLine = "";
        const contents = (await readTextFile(keyFile)).split("\n");
        pubKeyLine = contents[1];
        const pubKey = pubKeyLine.substring(pubKeyLine.indexOf(":") + 1).trim();
        await writeTextFile(pubKeyFile, pubKey);
        return { keyFile, pubKeyFile };
    }

    return { keyFile, pubKeyFile };
}

/**
 * Gets the default age key file path for sops.
 * @throws EnvVaribleNotSetError if the HOME environment variable is not set.
 * @returns the default age key file path for sops
 */
export function defaultAgeKeyFile() {
    return IS_DARWIN
        ? join(homeDir(), "Library", "Application Support", "sops", "age", "keys.txt")
        : join(homeConfigDir(), "sops", "age", "keys.txt");
}

export async function hasDefaultAgeKey() {
    const keyFile = defaultAgeKeyFile();
    return await exists(keyFile);
}

export function hasDefaultAgeKeySync() {
    const keyFile = defaultAgeKeyFile();
    return existsSync(keyFile);
}
