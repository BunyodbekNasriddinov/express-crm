import pg from "pg";
import configs from "../configs/config.js";
import { InternalServerError } from "../errors/errors.js";

const pool = new pg.Pool(configs.pg);

export const fetchAll = async (SQL, params = []) => {
  const client = await pool.connect();

  try {
    const { rows } = await pool.query(SQL, params);
    return rows;
  } catch (error) {
    return new InternalServerError(error.message);
  } finally {
    client.release();
  }
};

export const fetchOne = async (SQL, params = []) => {
  const client = await pool.connect();

  try {
    const { rows: [row] } = await pool.query(SQL, params);
    return row;
  } catch (error) {
    return new InternalServerError(error.message);
  } finally {
    client.release();
  }
};
