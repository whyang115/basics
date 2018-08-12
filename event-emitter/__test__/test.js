import EventEmitter from "../index"
import { exec } from "child_process"

const ee = new EventEmitter()

describe("instance should have  properties andmethods", () => {
	test("instance should have events property", () => {
		expect("events" in ee).toBeTruthy()
	})
	test("instance should have 'on' method", () => {
		expect("on" in ee).toBeTruthy()
	})
	test("instance should have 'emit' method", () => {
		expect("emit" in ee).toBeTruthy()
	})
	test("instance should have 'clear' method", () => {
		expect("clear" in ee).toBeTruthy()
	})
})

describe("register event callback and emit it", () => {
	let res1, res2
	ee.on("test", (...para) => (res1 = para.reduce((p, c) => p + c)))
	ee.on("test", (...para) => (res2 = para.reduce((p, c) => p * c)))
	ee.emit("test", 1, 2, 3)
	test("res1 should equals 6", () => {
		expect(res1).toBe(6)
	})
	test("res2 should equals 6", () => {
		expect(res2).toBe(6)
	})

	test("emit inexistence event should  throw error", () => {
		expect(() => ee.emit("error")).toThrow()
	})
	test("clear inexistence event should throw error", () => {
		expect(() => ee.clear("error")).toThrow()
	})
	test("clear events", () => {
		ee.clear("test")
		expect(() => ee.emit("test")).toThrow()
	})
})
