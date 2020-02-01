CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50),
  tabs VARCHAR(255),
  groups VARCHAR(255)
)

CREATE TABLE tabs(
  uuid VARCHAR(36),
  displayname VARCHAR(50),
  pasties VARCHAR(1500),
  theme VARCHAR(800),
  usersCanView VARCHAR(255),
  groups VARCHAR(255),
)

CREATE TABLE pasties(
  uuid VARCHAR(36),
  name VARCHAR(50),
  owner VARCHAR(50),
  public BOOLEAN NOT NULL,
  usersCanView VARCHAR()
)
CREATE TABLE permissions(
  uuid VARCHAR(36),
  groupAccess VARCHAR(50),
  userAccess VARCHAR(50)
)
CREATE TABLE groups(
  uuid VARCHAR(36),
  groupName VARCHAR(50),
  groupOwner VARCHAR(50),
  secondaryOwner BOOLEAN NOT NULL,
  admin BOOLEAN NOT NULL,
  user VARCHAR(50),
)

INSERT INTO permissions(uuid) SELECT DISTINCT uuid FROM tabs;

UPDATE permissions SET groupAccess=groups.groupName WHERE uuid= groups.uuid;

UPDATE permissions SET userAccess=tabs.usersCanView WHERE uuid= 