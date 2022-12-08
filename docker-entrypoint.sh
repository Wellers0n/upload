#!/bin/bash

DATABASE_URL="postgres://postgres:postgres@postgres-db:5432/uploaddb?schema=public" /usr/src/app/node_modules/node-pg-migrate up