/* eslint-disable camelcase */

exports.shorthands = undefined;


exports.up = pgm => {
    pgm.sql(`
      create table if not exists "Users"
      (
        id serial not null constraint user_pk primary key,
        name text not null,
        email text not null,
        password text not null,
        "createdAt" timestamp with time zone not null,
        "updatedAt" timestamp with time zone not null
      );  
    `)
  }
  
  exports.down = pgm => {
    pgm.sql(`
      drop table "Users";
    `)
  }