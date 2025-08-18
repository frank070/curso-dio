import prompt from "prompt";
import createQRcode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

import mainPrompt from "./prompts-shema/prompt-main.js";

async function main() {
  prompt.get(mainPrompt, async (err, choose) => {
    //  choose: escolher
    if (choose.select == 1) await createQRcode();
    if (choose.select == 2) await createPassword();
  });

  prompt.start();
}
main();
