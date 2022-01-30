import * as reservation_service from "./reservation.service"
// @ponicode
describe("reservation_service.ReservationService.searchFlights", () => {
    let inst: any

    beforeEach(() => {
        inst = new reservation_service.ReservationService()
    })

    test("0", () => {
        let param3: any = new Date("32-01-2020")
        let result: any = inst.searchFlights(".", "/path/to/file", param3)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param3: any = new Date("32-01-2020")
        let result: any = inst.searchFlights("path/to/folder/", "path/to/file.ext", param3)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param3: any = new Date("01-01-2030")
        let result: any = inst.searchFlights("path/to/folder/", "./path/to/file", param3)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param3: any = new Date("01-01-2030")
        let result: any = inst.searchFlights("C:\\\\path\\to\\folder\\", "path/to/folder/", param3)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param3: any = new Date("01-13-2020")
        let result: any = inst.searchFlights("./path/to/file", "path/to/file.ext", param3)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let param3: any = new Date("")
        let result: any = inst.searchFlights("", "", param3)
        expect(result).toMatchSnapshot()
    })
})
