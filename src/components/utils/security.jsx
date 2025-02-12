import forge from "node-forge";

export const encryptRSA = (plaintext, publicKeyPem) => {
  const publicKey = forge.pki.publicKeyFromPem(
    "-----BEGIN PUBLIC KEY-----" + publicKeyPem + "-----END PUBLIC KEY-----"
  );
  const buffer = forge.util.createBuffer(plaintext, "utf8");
  const encryptedData = publicKey.encrypt(buffer.getBytes(), "RSA-OAEP", {
    md: forge.md.sha512.create(),
    mgf1: {
      md: forge.md.sha1.create(),
    },
  });
  return forge.util.encode64(encryptedData);
};

export const sha256 = (data) => {
  const md = forge.md.sha256.create();
  md.update(data);
  return md.digest().toHex();
};
