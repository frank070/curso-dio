import prompt from "prompt";
import promptQRCode from "../../prompts-shema/prompt-qrcode.js";
import handle from "./handle.js"; //handle = lidar

async function createQRcode() {
  prompt.get(promptQRCode, handle);
  prompt.start;
}

export default createQRcode;
