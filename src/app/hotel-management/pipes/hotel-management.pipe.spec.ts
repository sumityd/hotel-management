import { HotelManagementPipe } from "./hotel-management.pipe";

describe("HotelManagementPipe", () => {
  let pipe: HotelManagementPipe;

  beforeEach(() => {
    pipe = new HotelManagementPipe();
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it('transform "Sumit" to "SU"', () => {
    expect(pipe.transform("Sumit")).toBe("SU");
  });

  it('transform "Sumit Yadav" to "SY"', () => {
    expect(pipe.transform("Sumit Yadav")).toBe("SY");
  });

  it('transform "null" to ""', () => {
    expect(pipe.transform(null)).toBe("");
  });

  it('transform "undefined" to ""', () => {
    expect(pipe.transform(undefined)).toBe("");
  });
});
