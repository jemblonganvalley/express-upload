-- SQLite
-- create TABLE files(
--     id INTEGER PRIMARY KEY,
--     filename VARCHAR NOT NULL,
--     url VARCHAR NOT NULL,
--     created_at timestamp
-- );

-- INSERT into files(filename, url) VALUES ("fadli.png", "path/to/file");

DELETE FROM files WHERE id=2;

-- DROP TABLE files;