-- MySQL Script generated by MySQL Workbench
-- Fr 03 Mär 2017 13:45:43 CET
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema browsers
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema browsers
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `browsers` DEFAULT CHARACTER SET utf8 ;
USE `browsers` ;

-- -----------------------------------------------------
-- Table `browsers`.`DocumentProperties`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `browsers`.`DocumentProperties` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(64) NULL DEFAULT NULL,
  `type` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `browsers`.`Browsers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `browsers`.`Browsers` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `userAgent` VARCHAR(255) NULL,
  `browser` VARCHAR(64) NULL DEFAULT NULL,
  `version` VARCHAR(8) NULL DEFAULT NULL,
  `mobile` TINYINT(1) NULL DEFAULT NULL,
  `os` VARCHAR(64) NULL DEFAULT NULL,
  `count` INT(11) NULL,
  UNIQUE INDEX `userAgent_UNIQUE` (`userAgent` ASC),
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
PACK_KEYS = DEFAULT;


-- -----------------------------------------------------
-- Table `browsers`.`WindowProperties`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `browsers`.`WindowProperties` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(64) NULL DEFAULT NULL,
  `type` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `browsers`.`Browsers_has_WindowProperties`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `browsers`.`Browsers_has_WindowProperties` (
  `Browsers_id` INT(11) NOT NULL,
  `WindowProperties_id` INT(11) NOT NULL,
  `count` INT(11) NULL,
  PRIMARY KEY (`Browsers_id`, `WindowProperties_id`),
  INDEX `fk_Browsers_has_WindowProperties_WindowProperties1_idx` (`WindowProperties_id` ASC),
  INDEX `fk_Browsers_has_WindowProperties_Browsers_idx` (`Browsers_id` ASC),
  CONSTRAINT `fk_Browsers_has_WindowProperties_Browsers`
    FOREIGN KEY (`Browsers_id`)
    REFERENCES `browsers`.`Browsers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Browsers_has_WindowProperties_WindowProperties1`
    FOREIGN KEY (`WindowProperties_id`)
    REFERENCES `browsers`.`WindowProperties` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `browsers`.`Browsers_has_DocumentProperties`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `browsers`.`Browsers_has_DocumentProperties` (
  `Browsers_id` INT(11) NOT NULL,
  `DocumentProperties_id` INT(11) NOT NULL,
  `count` INT(11) NULL,
  PRIMARY KEY (`Browsers_id`, `DocumentProperties_id`),
  INDEX `fk_Browsers_has_DocumentProperties_DocumentProperties1_idx` (`DocumentProperties_id` ASC),
  INDEX `fk_Browsers_has_DocumentProperties_Browsers1_idx` (`Browsers_id` ASC),
  CONSTRAINT `fk_Browsers_has_DocumentProperties_Browsers1`
    FOREIGN KEY (`Browsers_id`)
    REFERENCES `browsers`.`Browsers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Browsers_has_DocumentProperties_DocumentProperties1`
    FOREIGN KEY (`DocumentProperties_id`)
    REFERENCES `browsers`.`DocumentProperties` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
