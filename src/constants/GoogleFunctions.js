import { GoogleSpreadsheet } from "google-spreadsheet";
import * as Constantes from "constants/Constantes";
import JSON from "../invite-card-de5731008e4d.json";

const doc = new GoogleSpreadsheet(Constantes.SPREADSHEET_ID);

const private_key = JSON["private_key"].replace(/\n/g, "\n");
const client_email = JSON["client_email"];
let sheet;

const loadInfo = async () => {
  try {
    await doc.useServiceAccountAuth({
      client_email: client_email,
      private_key: private_key,
    });
    await doc.loadInfo();
    sheet = doc.sheetsById[Constantes.SHEET_ID];
  } catch (e) {
    console.error("No se pudo cargar la informacion del excel");
  }
};

const helpers = {
  getRows: async function () {
    try {
      await loadInfo();
      const data = await sheet.getRows();
      let info = new Array();
      await data.forEach((da) => {
        info.push({
          HashCode: da["HashCode"],
        });
      });
      return info;
    } catch (e) {
      console.error("Error: ", e);
    }
    return {};
  },

  addRow: async function (row) {
    try {
      await loadInfo();
      await sheet.addRow(row);
    } catch (e) {
      console.error("Error: ", e);
    }
  },

  findObj: async function (hashCode, array) {
    let find;
    await array.forEach((a) => {
      find = hashCode === a["HashCode"] ? true : false;
    });
    return find;
  },
};

export default helpers;
