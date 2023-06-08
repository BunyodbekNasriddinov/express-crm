export const allBranchQuery = `SELECT * FROM branch`;

export const createBrachQuery = `INSERT INTO branch(branch_name, branch_phone, branch_address) VALUES($1, $2, $3)`;
