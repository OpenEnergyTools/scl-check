import { expect } from "chai";

import { findElement } from "../foundation/helpers.test";

import { extRefTypeRestrictions } from "./extRefTypeRestrictions.js";

const unrestrictedExtRef = `<ExtRef intAddr="someIntAddr" />`;

const pDOValid1 = `<ExtRef 
        intAddr="someIntAddr" 
        pDO="A.phsA" />`;

const pDOValid2 = `<ExtRef 
        intAddr="someIntAddr" 
        pDO="A" />`;

const pDOInValid = `<ExtRef 
        intAddr="someIntAddr" 
        pDO="someStrangepDO" />`;

const pDOandpDAValid1 = `<ExtRef 
        intAddr="someIntAddr" 
        pDO="AmpSv"
        pDA="instMag.i" />`;

const pDOandpDAValid2 = `<ExtRef 
        intAddr="someIntAddr" 
        pDO="PhV.phsA"
        pDA="cVal.mag.f" />`;

const pDAInValid = `<ExtRef 
        intAddr="someIntAddr" 
        pDO="PhV.phsA"
        pDA="someInvalidpDA" />`;

describe("A function to determine the CDC and bType though pXXX attributes", () => {
  it("return undefined with missing pDO", () =>
    expect(extRefTypeRestrictions(findElement(unrestrictedExtRef, "ExtRef")!))
      .to.be.undefined);

  describe("with pDO only given ExtRefs", () => {
    it("return correct CDC with a valid pDO", () =>
      expect(
        extRefTypeRestrictions(findElement(pDOValid1, "ExtRef")!)
      ).to.deep.equal({ cdc: "CMV" }));

    it("returns correct CDC with another valid pDO", () =>
      expect(
        extRefTypeRestrictions(findElement(pDOValid2, "ExtRef")!)
      ).to.deep.equal({ cdc: "WYE" }));

    it("returns undefined an invalid pDO", () =>
      expect(extRefTypeRestrictions(findElement(pDOInValid, "ExtRef")!)).to
        .undefined);
  });

  describe("with pDO and pDA given ExtRefs", () => {
    it("return correct CDC and bType with a valid pDO and pDA", () =>
      expect(
        extRefTypeRestrictions(findElement(pDOandpDAValid1, "ExtRef")!)
      ).to.deep.equal({ cdc: "SAV", bType: "INT32" }));

    it("return correct CDC and bType with another valid pDO and pDA", () =>
      expect(
        extRefTypeRestrictions(findElement(pDOandpDAValid2, "ExtRef")!)
      ).to.deep.equal({ cdc: "CMV", bType: "FLOAT32" }));

    it("returns undefined with invalid pDA", () =>
      expect(extRefTypeRestrictions(findElement(pDAInValid, "ExtRef")!)).to
        .undefined);
  });
});
