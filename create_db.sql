CREATE DATABASE IF NOT EXISTS browsers;
use browsers;
-- Browser Names table
CREATE TABLE IF NOT EXISTS BrowserNames(
    name varchar(64),
    PRIMARY KEY (name)
);
-- Versions of the browsers
CREATE TABLE IF NOT EXISTS BrowserVersions(
    version varchar(16),
    browser varchar(64),
    FOREIGN KEY (browser)
        REFERENCES BrowserNames(name)
        ON DELETE CASCADE
);
-- User Agent string consists of browser, version, mobile and operation system
CREATE TABLE IF NOT EXISTS UserAgents(
    userAgent varchar(64),
    browser varchar(64),
    version varchar(8),
    mobile bool,
    os varchar(8),
    PRIMARY KEY (userAgent),
    FOREIGN KEY (browser)
        REFERENCES BrowserNames(name)
        ON DELETE CASCADE
);
-- Window properties
CREATE TABLE IF NOT EXISTS WindowProperties(
    id INT NOT NULL AUTO_INCREMENT,
    name varchar(16),
    type text,
    PRIMARY KEY (id)
);
-- Document properties
CREATE TABLE IF NOT EXISTS DocumentProperties(
    id INT NOT NULL AUTO_INCREMENT,
    name varchar(16),
    type text,
    PRIMARY KEY(id)
);
-- Many to many relationship between user agent and window properties
CREATE TABLE IF NOT EXISTS UserAgentToWindowProperties(
    userAgent varchar(64) NOT NULL,
    windowProperty INT NOT NULL,
    FOREIGN KEY (userAgent)
        REFERENCES UserAgents(userAgent),
    FOREIGN KEY (windowProperty)
        REFERENCES WindowProperties(id)
);
-- Many to many relationship between user agent and document properties
CREATE TABLE IF NOT EXISTS UserAgentToDocumentProperties(
    userAgent varchar(64) NOT NULL,
    documentProperty INT NOT NULL,
    FOREIGN KEY (userAgent)
        REFERENCES UserAgents(userAgent)
        ON DELETE CASCADE,
    FOREIGN KEY (documentProperty)
        REFERENCES DocumentProperties(id)
        ON DELETE CASCADE
);