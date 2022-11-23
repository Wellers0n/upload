/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
      create table if not exists "Transactions"
      (
        id serial not null constraint transaction_pk primary key,
        type int not null,
        date timestamp with time zone not null,
        product text not null,
        amount int not null,
        seller text not null,
        description text not null,
        nature text not null,
        signal text not null,
        "createdAt" timestamp with time zone not null,
        "updatedAt" timestamp with time zone not null
      );  
    `)
  }
  
  exports.down = pgm => {
    pgm.sql(`
      drop table "Transactions";
    `)
  }