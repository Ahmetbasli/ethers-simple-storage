const ethers = require("ethers");
const fs = require("fs");

async function main() {
  const wallet = new ethers.Wallet(
    "a1a0a8ffe8deb710d93560a33a2a976fa412a98d0df1a36e6b4e2b7ce2e6358f"
  );
  const encryptedJsonKey = await wallet.encrypt(
    "password",
    "a1a0a8ffe8deb710d93560a33a2a976fa412a98d0df1a36e6b4e2b7ce2e6358f"
  );
  fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey);
  console.log(encryptedJsonKey);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(0);
  });
