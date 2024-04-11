import { describe, expect, it } from "vitest";
import { BurnerConnector } from "../../src/connectors/burner";
import { getBurnerConnector } from "../mocks/mocks";

describe("BurnerConnector", () => {
    const burnerObj = new BurnerConnector(
        {
            id: "Burner Account",
            name: "Burner Connector",
            icon: {
                dark: "my-dark-icon",
                light: "my-light-icon",
            },
        },
        null
    );

    it("should test available method", async () => {
        expect(burnerObj.available()).toBe(true);
    }),
        it("should test ready method", async () => {
            expect(await burnerObj.ready()).toBe(true);
            expect(burnerObj.ready()).toBeTypeOf("object");
        }),
        it("should test connect method", async () => {
            expect(() => burnerObj.connect()).rejects.toThrowError(
                "account not found"
            );
        }),
        it("should test disconnect method", async () => {
            expect(await burnerObj.disconnect()).toBeUndefined();
        }),
        it("should test account method", async () => {
            expect(await burnerObj.account()).toBeNull();
        }),
        it("should test id method", async () => {
            expect(burnerObj.id).toBe("Burner Account");
        }),
        it("should test name method", async () => {
            expect(burnerObj.name).toBe("Burner Connector");
            expect(burnerObj.name).toBeTypeOf("string");
        }),
        it("should test icon method", async () => {
            expect(burnerObj.icon.dark).toBe("my-dark-icon");
            expect(burnerObj.icon.light).toBe("my-light-icon");
        });
});

describe("BurnerConnector2", () => {
    const burnerObj = getBurnerConnector();

    it("should test available method", async () => {
        expect(burnerObj.available()).toBe(true);
    }),
        it("should test ready method", async () => {
            expect(await burnerObj.ready()).toBe(true);
            expect(burnerObj.ready()).toBeTypeOf("object");
        }),
        // it("should test connect method", async () => {
        //     expect(await burnerObj.connect()).toThrowError("fetch failed");
        // }),
        it("should test disconnect method", async () => {
            expect(await burnerObj.disconnect()).toBeUndefined();
        }),
        it("should test account method", async () => {
            expect(await burnerObj.account()).not.toBeNull();
        }),
        it("should test id method", async () => {
            // console.log(burnerObj.id);
            expect(burnerObj.id).toBe("Burner Account"); //.toEqual(KATANA_PREFUNDED_ADDRESS);
        }),
        it("should test name method", async () => {
            expect(burnerObj.name).toBe("Burner Connector");
            expect(burnerObj.name).toBeTypeOf("string");
        }),
        it("should test icon method", async () => {
            expect(burnerObj.icon.dark).toBe("my-dark-icon");
            expect(burnerObj.icon.light).toBe("my-light-icon");
        });
});
