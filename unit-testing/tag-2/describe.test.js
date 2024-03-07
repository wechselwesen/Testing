// Experimentelle Beispiele aus Unterricht!
describe.skip("Arithmetische Operationen", () => {
  describe("Multiplikation", () => {
    it("Teste a, b mit positiven Zahlen", () => {
      expect(15).toBe(16);
    });

    it('Teste a, b mit negativem "a"', () => {
      expect(-15).toBe(-14);
    });
  });

  describe("Division", () => {
    it('Teste mit "b" gleich 0', () => {
      expect(0).toEqual(-0);
    });

    it.todo("sollte Fehler werfen, wenn String eingegeben wird");

    test.failing("0 ist nicht 1", () => {
      expect(0).toBe(1);
    });
  });
});
