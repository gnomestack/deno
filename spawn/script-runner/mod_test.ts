import { scriptRunner } from "./mod.ts";
import { assert, test } from "../dev_deps.ts";
import { IS_WINDOWS } from "../deps.ts";

test("bash", async () => {
    const r = await scriptRunner.runScript("bash", `echo "test"`, {
        stdout: "piped",
        stderr: "piped",
    });

    assert.exists(r);
    assert.equals(r.code, 0);
    assert.equals(r.stdoutText, "test\n");
});

test("deno", async () => {
    const r = await scriptRunner.runScript("deno", "console.log('test');", {
        stdout: "piped",
        stderr: "piped",
    });

    assert.exists(r);
    assert.equals(r.code, 0);
    assert.equals(r.stdoutText, "test\n");
});

test("node", async () => {
    const r = await scriptRunner.runScript("node", "console.log('test');", {
        stdout: "piped",
        stderr: "piped",
    });

    assert.exists(r);
    assert.equals(r.code, 0);
    assert.equals(r.stdoutText, "test\n");
});

test("pwsh", async () => {
    const r = await scriptRunner.runScript("pwsh", "Write-Host 'test'", {
        stdout: "piped",
        stderr: "piped",
    });

    assert.exists(r);
    assert.equals(r.code, 0);
    if (IS_WINDOWS) {
        assert.equals(r.stdoutText, "test\r\n");
    } else {
        assert.equals(r.stdoutText, "test\n");
    }
});
