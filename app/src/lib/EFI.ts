export const credentialsEFI = {
  sandbox: Boolean(process.env.SANDBOX_EFI),
  client_id: process.env.CLIENT_ID_EFI!,
  client_secret: process.env.CLIENT_SECRET_EFI!,
  certificate: "server/certificate",
};
