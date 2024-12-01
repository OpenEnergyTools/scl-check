export const savChildren = {
  instMag: {
    tagName: "DataAttribute",
    name: "instMag",
    fc: "MX",
    type: "AnalogueValue",
    typeKind: "CONSTRUCTED",
    descID: "IEC61850_7_3.CDCAnalogueInfo::SAV.instMag.desc",
    mandatory: true,
    presCond: "M",
    children: {
      i: {
        tagName: "SubDataAttribute",
        name: "i",
        type: "INT32",
        descID: "IEC61850_7_3.AnalogueValue::AnalogueValue.i.desc",
        presCond: "AtLeastOne",
        presCondArgs: "1",
      },
      f: {
        tagName: "SubDataAttribute",
        name: "f",
        type: "FLOAT32",
        descID: "IEC61850_7_3.AnalogueValue::AnalogueValue.f.desc",
        presCond: "AtLeastOne",
        presCondArgs: "1",
      },
    },
  },
  q: {
    tagName: "DataAttribute",
    name: "q",
    fc: "MX",
    type: "Quality",
    qchg: "true",
    descID: "IEC61850_7_3.CDCAnalogueInfo::SAV.q.desc",
    mandatory: true,
    presCond: "M",
  },
  t: {
    tagName: "DataAttribute",
    name: "t",
    fc: "MX",
    type: "Timestamp",
    descID: "IEC61850_7_3.CDCAnalogueInfo::SAV.t.desc",
    presCond: "O",
  },
  units: {
    tagName: "DataAttribute",
    name: "units",
    fc: "CF",
    type: "Unit",
    typeKind: "CONSTRUCTED",
    dchg: "true",
    descID: "IEC61850_7_3.CDCAnalogueInfo::SAV.units.desc",
    presCond: "O",
    children: {
      SIUnit: {
        tagName: "SubDataAttribute",
        name: "SIUnit",
        type: "SIUnitKind",
        typeKind: "ENUMERATED",
        descID: "IEC61850_7_3.ConstructedDAs::Unit.SIUnit.desc",
        mandatory: true,
        presCond: "M",
        children: {
          "": {
            tagName: "Literal",
            name: "",
            literalVal: "1",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.none.desc",
          },
          m: {
            tagName: "Literal",
            name: "m",
            literalVal: "2",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.m.desc",
          },
          kg: {
            tagName: "Literal",
            name: "kg",
            literalVal: "3",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.kg.desc",
          },
          s: {
            tagName: "Literal",
            name: "s",
            literalVal: "4",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.s.desc",
          },
          A: {
            tagName: "Literal",
            name: "A",
            literalVal: "5",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.A.desc",
          },
          K: {
            tagName: "Literal",
            name: "K",
            literalVal: "6",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.K.desc",
          },
          mol: {
            tagName: "Literal",
            name: "mol",
            literalVal: "7",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.mol.desc",
          },
          cd: {
            tagName: "Literal",
            name: "cd",
            literalVal: "8",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.cd.desc",
          },
          deg: {
            tagName: "Literal",
            name: "deg",
            literalVal: "9",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.deg.desc",
          },
          rad: {
            tagName: "Literal",
            name: "rad",
            literalVal: "10",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.rad.desc",
          },
          sr: {
            tagName: "Literal",
            name: "sr",
            literalVal: "11",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.sr.desc",
          },
          Gy: {
            tagName: "Literal",
            name: "Gy",
            literalVal: "21",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.Gy.desc",
          },
          Bq: {
            tagName: "Literal",
            name: "Bq",
            literalVal: "22",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.Bq.desc",
          },
          "°C": {
            tagName: "Literal",
            name: "°C",
            literalVal: "23",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind._deg_C.desc",
          },
          Sv: {
            tagName: "Literal",
            name: "Sv",
            literalVal: "24",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.Sv.desc",
          },
          F: {
            tagName: "Literal",
            name: "F",
            literalVal: "25",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.F.desc",
          },
          C: {
            tagName: "Literal",
            name: "C",
            literalVal: "26",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.C.desc",
          },
          S: {
            tagName: "Literal",
            name: "S",
            literalVal: "27",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.S.desc",
          },
          H: {
            tagName: "Literal",
            name: "H",
            literalVal: "28",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.H.desc",
          },
          V: {
            tagName: "Literal",
            name: "V",
            literalVal: "29",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.V.desc",
          },
          ohm: {
            tagName: "Literal",
            name: "ohm",
            literalVal: "30",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.ohm.desc",
          },
          J: {
            tagName: "Literal",
            name: "J",
            literalVal: "31",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.J.desc",
          },
          N: {
            tagName: "Literal",
            name: "N",
            literalVal: "32",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.N.desc",
          },
          Hz: {
            tagName: "Literal",
            name: "Hz",
            literalVal: "33",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.Hz.desc",
          },
          lx: {
            tagName: "Literal",
            name: "lx",
            literalVal: "34",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.lx.desc",
          },
          Lm: {
            tagName: "Literal",
            name: "Lm",
            literalVal: "35",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.Lm.desc",
          },
          Wb: {
            tagName: "Literal",
            name: "Wb",
            literalVal: "36",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.Wb.desc",
          },
          T: {
            tagName: "Literal",
            name: "T",
            literalVal: "37",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.T.desc",
          },
          W: {
            tagName: "Literal",
            name: "W",
            literalVal: "38",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.W.desc",
          },
          Pa: {
            tagName: "Literal",
            name: "Pa",
            literalVal: "39",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.Pa.desc",
          },
          "m²": {
            tagName: "Literal",
            name: "m²",
            literalVal: "41",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.m_sq_.desc",
          },
          "m³": {
            tagName: "Literal",
            name: "m³",
            literalVal: "42",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.m_cube_.desc",
          },
          "m/s": {
            tagName: "Literal",
            name: "m/s",
            literalVal: "43",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.m_per_s.desc",
          },
          "m/s²": {
            tagName: "Literal",
            name: "m/s²",
            literalVal: "44",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.m_per_s_sq_.desc",
          },
          "m³/s": {
            tagName: "Literal",
            name: "m³/s",
            literalVal: "45",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.m_cube__per_s.desc",
          },
          "m/m³": {
            tagName: "Literal",
            name: "m/m³",
            literalVal: "46",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.m_per_m_cube_.desc",
          },
          M: {
            tagName: "Literal",
            name: "M",
            literalVal: "47",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.M.desc",
          },
          "kg/m³": {
            tagName: "Literal",
            name: "kg/m³",
            literalVal: "48",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.kg_per_m_cube_.desc",
          },
          "m²/s": {
            tagName: "Literal",
            name: "m²/s",
            literalVal: "49",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.m_sq__per_s.desc",
          },
          "W/m K": {
            tagName: "Literal",
            name: "W/m K",
            literalVal: "50",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.W_per_m_K.desc",
          },
          "J/K": {
            tagName: "Literal",
            name: "J/K",
            literalVal: "51",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.J_per_K.desc",
          },
          ppm: {
            tagName: "Literal",
            name: "ppm",
            literalVal: "52",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.ppm.desc",
          },
          "1/s": {
            tagName: "Literal",
            name: "1/s",
            literalVal: "53",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.1_per_s.desc",
          },
          "rad/s": {
            tagName: "Literal",
            name: "rad/s",
            literalVal: "54",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.rad_per_s.desc",
          },
          "W/m²": {
            tagName: "Literal",
            name: "W/m²",
            literalVal: "55",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.W_per_m_sq_.desc",
          },
          "J/m²": {
            tagName: "Literal",
            name: "J/m²",
            literalVal: "56",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.J_per_m_sq_.desc",
          },
          "S/m": {
            tagName: "Literal",
            name: "S/m",
            literalVal: "57",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.S_per_m.desc",
          },
          "K/s": {
            tagName: "Literal",
            name: "K/s",
            literalVal: "58",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.K_per_s.desc",
          },
          "Pa/s": {
            tagName: "Literal",
            name: "Pa/s",
            literalVal: "59",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.Pa_per_s.desc",
          },
          "J/kg K": {
            tagName: "Literal",
            name: "J/kg K",
            literalVal: "60",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.J_per_kg_K.desc",
          },
          VA: {
            tagName: "Literal",
            name: "VA",
            literalVal: "61",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.VA.desc",
          },
          Watts: {
            tagName: "Literal",
            name: "Watts",
            literalVal: "62",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.Watts.desc",
            deprecated: "true",
          },
          VAr: {
            tagName: "Literal",
            name: "VAr",
            literalVal: "63",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.VAr.desc",
          },
          phi: {
            tagName: "Literal",
            name: "phi",
            literalVal: "64",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.phi.desc",
            deprecated: "true",
          },
          "cos(phi)": {
            tagName: "Literal",
            name: "cos(phi)",
            literalVal: "65",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.cos(phi).desc",
          },
          Vs: {
            tagName: "Literal",
            name: "Vs",
            literalVal: "66",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.Vs.desc",
          },
          "V²": {
            tagName: "Literal",
            name: "V²",
            literalVal: "67",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.V_sq_.desc",
          },
          As: {
            tagName: "Literal",
            name: "As",
            literalVal: "68",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.As.desc",
          },
          "A²": {
            tagName: "Literal",
            name: "A²",
            literalVal: "69",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.A_sq_.desc",
          },
          "A²t": {
            tagName: "Literal",
            name: "A²t",
            literalVal: "70",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.A_sq_t.desc",
          },
          VAh: {
            tagName: "Literal",
            name: "VAh",
            literalVal: "71",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.VAh.desc",
          },
          Wh: {
            tagName: "Literal",
            name: "Wh",
            literalVal: "72",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.Wh.desc",
          },
          VArh: {
            tagName: "Literal",
            name: "VArh",
            literalVal: "73",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.VArh.desc",
          },
          "V/Hz": {
            tagName: "Literal",
            name: "V/Hz",
            literalVal: "74",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.V_per_Hz.desc",
          },
          "Hz/s": {
            tagName: "Literal",
            name: "Hz/s",
            literalVal: "75",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.Hz_per_s.desc",
          },
          char: {
            tagName: "Literal",
            name: "char",
            literalVal: "76",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.char.desc",
          },
          "char/s": {
            tagName: "Literal",
            name: "char/s",
            literalVal: "77",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.char_per_s.desc",
          },
          "kgm²": {
            tagName: "Literal",
            name: "kgm²",
            literalVal: "78",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.kgm_sq_.desc",
          },
          dB: {
            tagName: "Literal",
            name: "dB",
            literalVal: "79",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.dB.desc",
          },
          "J/Wh": {
            tagName: "Literal",
            name: "J/Wh",
            literalVal: "80",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.J_per_Wh.desc",
          },
          "W/s": {
            tagName: "Literal",
            name: "W/s",
            literalVal: "81",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.W_per_s.desc",
          },
          "l/s": {
            tagName: "Literal",
            name: "l/s",
            literalVal: "82",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.l_per_s.desc",
          },
          dBm: {
            tagName: "Literal",
            name: "dBm",
            literalVal: "83",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.dBm.desc",
          },
          h: {
            tagName: "Literal",
            name: "h",
            literalVal: "84",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.h.desc",
          },
          min: {
            tagName: "Literal",
            name: "min",
            literalVal: "85",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.min.desc",
          },
          "Ohm/m": {
            tagName: "Literal",
            name: "Ohm/m",
            literalVal: "86",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.Ohm_per_m.desc",
          },
          "percent/s": {
            tagName: "Literal",
            name: "percent/s",
            literalVal: "87",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.percent_per_s.desc",
          },
          "A/V": {
            tagName: "Literal",
            name: "A/V",
            literalVal: "88",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.A_per_V.desc",
          },
          "A/Vs": {
            tagName: "Literal",
            name: "A/Vs",
            literalVal: "89",
            descID: "IEC61850_7_3.DAEnums::SIUnitKind.A_per_Vs.desc",
          },
        },
      },
      multiplier: {
        tagName: "SubDataAttribute",
        name: "multiplier",
        type: "MultiplierKind",
        typeKind: "ENUMERATED",
        defaultValue: "none",
        descID: "IEC61850_7_3.ConstructedDAs::Unit.multiplier.desc",
        presCond: "O",
        children: {
          y: {
            tagName: "Literal",
            name: "y",
            literalVal: "-24",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind.y.desc",
          },
          z: {
            tagName: "Literal",
            name: "z",
            literalVal: "-21",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind.z.desc",
          },
          a: {
            tagName: "Literal",
            name: "a",
            literalVal: "-18",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind.a.desc",
          },
          f: {
            tagName: "Literal",
            name: "f",
            literalVal: "-15",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind.f.desc",
          },
          p: {
            tagName: "Literal",
            name: "p",
            literalVal: "-12",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind.p.desc",
          },
          n: {
            tagName: "Literal",
            name: "n",
            literalVal: "-9",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind.n.desc",
          },
          µ: {
            tagName: "Literal",
            name: "µ",
            literalVal: "-6",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind._micro.desc",
          },
          m: {
            tagName: "Literal",
            name: "m",
            literalVal: "-3",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind.m.desc",
          },
          c: {
            tagName: "Literal",
            name: "c",
            literalVal: "-2",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind.c.desc",
          },
          d: {
            tagName: "Literal",
            name: "d",
            literalVal: "-1",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind.d.desc",
          },
          "": {
            tagName: "Literal",
            name: "",
            literalVal: "0",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind.none.desc",
          },
          da: {
            tagName: "Literal",
            name: "da",
            literalVal: "1",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind.da.desc",
          },
          h: {
            tagName: "Literal",
            name: "h",
            literalVal: "2",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind.h.desc",
          },
          k: {
            tagName: "Literal",
            name: "k",
            literalVal: "3",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind.k.desc",
          },
          M: {
            tagName: "Literal",
            name: "M",
            literalVal: "6",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind.M.desc",
          },
          G: {
            tagName: "Literal",
            name: "G",
            literalVal: "9",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind.G.desc",
          },
          T: {
            tagName: "Literal",
            name: "T",
            literalVal: "12",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind.T.desc",
          },
          P: {
            tagName: "Literal",
            name: "P",
            literalVal: "15",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind.P.desc",
          },
          E: {
            tagName: "Literal",
            name: "E",
            literalVal: "18",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind.E.desc",
          },
          Z: {
            tagName: "Literal",
            name: "Z",
            literalVal: "21",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind.Z.desc",
          },
          Y: {
            tagName: "Literal",
            name: "Y",
            literalVal: "24",
            descID: "IEC61850_7_3.DAEnums::MultiplierKind.Y.desc",
          },
        },
      },
    },
  },
  sVC: {
    tagName: "DataAttribute",
    name: "sVC",
    fc: "CF",
    type: "ScaledValueConfig",
    typeKind: "CONSTRUCTED",
    dchg: "true",
    descID: "IEC61850_7_3.CDCAnalogueInfo::SAV.sVC.desc",
    presCond: "MFscaledAV",
    children: {
      scaleFactor: {
        tagName: "SubDataAttribute",
        name: "scaleFactor",
        type: "FLOAT32",
        descID:
          "IEC61850_7_3.ConstructedDAs::ScaledValueConfig.scaleFactor.desc",
        mandatory: true,
        presCond: "M",
      },
      offset: {
        tagName: "SubDataAttribute",
        name: "offset",
        type: "FLOAT32",
        descID: "IEC61850_7_3.ConstructedDAs::ScaledValueConfig.offset.desc",
        mandatory: true,
        presCond: "M",
      },
    },
  },
  min: {
    tagName: "DataAttribute",
    name: "min",
    fc: "CF",
    type: "AnalogueValue",
    typeKind: "CONSTRUCTED",
    dchg: "true",
    descID: "IEC61850_7_3.CDCAnalogueInfo::SAV.min.desc",
    presCond: "O",
    children: {
      i: {
        tagName: "SubDataAttribute",
        name: "i",
        type: "INT32",
        descID: "IEC61850_7_3.AnalogueValue::AnalogueValue.i.desc",
        presCond: "AtLeastOne",
        presCondArgs: "1",
      },
      f: {
        tagName: "SubDataAttribute",
        name: "f",
        type: "FLOAT32",
        descID: "IEC61850_7_3.AnalogueValue::AnalogueValue.f.desc",
        presCond: "AtLeastOne",
        presCondArgs: "1",
      },
    },
  },
  max: {
    tagName: "DataAttribute",
    name: "max",
    fc: "CF",
    type: "AnalogueValue",
    typeKind: "CONSTRUCTED",
    dchg: "true",
    descID: "IEC61850_7_3.CDCAnalogueInfo::SAV.max.desc",
    presCond: "O",
    children: {
      i: {
        tagName: "SubDataAttribute",
        name: "i",
        type: "INT32",
        descID: "IEC61850_7_3.AnalogueValue::AnalogueValue.i.desc",
        presCond: "AtLeastOne",
        presCondArgs: "1",
      },
      f: {
        tagName: "SubDataAttribute",
        name: "f",
        type: "FLOAT32",
        descID: "IEC61850_7_3.AnalogueValue::AnalogueValue.f.desc",
        presCond: "AtLeastOne",
        presCondArgs: "1",
      },
    },
  },
  d: {
    tagName: "DataAttribute",
    name: "d",
    fc: "DC",
    type: "VisString255",
    descID: "IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc",
    presCond: "O",
  },
  dU: {
    tagName: "DataAttribute",
    name: "dU",
    fc: "DC",
    type: "Unicode255",
    descID: "IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc",
    presCond: "O",
  },
  cdcName: {
    tagName: "DataAttribute",
    name: "cdcName",
    fc: "EX",
    type: "VisString255",
    descID: "IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc",
    presCond: "O",
  },
  dataNs: {
    tagName: "DataAttribute",
    name: "dataNs",
    fc: "EX",
    type: "VisString255",
    descID: "IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc",
    presCond: "MOdataNs",
  },
};
