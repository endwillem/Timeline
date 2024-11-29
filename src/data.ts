const ROLE = {
  ADMIN: "admin",
  BASIC: "basic",
};

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: "Willem", role: ROLE.ADMIN },
    { id: 2, name: "Ryan", role: ROLE.BASIC },
  ],
};
