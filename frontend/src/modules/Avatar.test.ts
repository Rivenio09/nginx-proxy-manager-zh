import { describe, expect, it } from "vitest";
import { getAvatarUrl } from "./Avatar";

describe("getAvatarUrl", () => {
	it("replaces protocol-relative Gravatar URLs with Cravatar", () => {
		expect(getAvatarUrl("//www.gravatar.com/avatar/hash?default=mm")).toBe(
			"https://cravatar.cn/avatar/hash?default=mm",
		);
	});

	it("replaces absolute Gravatar URLs with Cravatar", () => {
		expect(getAvatarUrl("https://secure.gravatar.com/avatar/hash?s=80")).toBe(
			"https://cravatar.cn/avatar/hash?s=80",
		);
	});

	it("keeps non-Gravatar URLs unchanged", () => {
		expect(getAvatarUrl("https://example.com/avatar.png")).toBe("https://example.com/avatar.png");
	});

	it("returns an empty string when no URL is provided", () => {
		expect(getAvatarUrl()).toBe("");
	});
});
