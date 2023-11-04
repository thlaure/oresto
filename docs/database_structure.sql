DROP SCHEMA IF EXISTS `oresto`;
CREATE SCHEMA IF NOT EXISTS `oresto`;

USE `oresto`;

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_roman_ci;

DROP TABLE IF EXISTS `type`;
CREATE TABLE IF NOT EXISTS `type` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_roman_ci;

DROP TABLE IF EXISTS `dish`;
CREATE TABLE IF NOT EXISTS `dish` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `price` FLOAT NOT NULL,
    `image` VARCHAR(255) NULL,
    `category_id` INT NULL,
    `type_id` INT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_roman_ci;

DROP TABLE IF EXISTS `allergen`;
CREATE TABLE IF NOT EXISTS `allergen` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_roman_ci;

DROP TABLE IF EXISTS `dish_allergen`;
CREATE TABLE IF NOT EXISTS `dish_allergen` (
    `dish_id` INT NOT NULL,
    `allergen_id` INT NOT NULL,
    PRIMARY KEY (`dish_id`, `allergen_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_roman_ci;

DROP TABLE IF EXISTS `menu`;
CREATE TABLE IF NOT EXISTS `menu` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(255) NULL,
    `description` TEXT NULL,
    `price` FLOAT NOT NULL,
    `is_custom` TINYINT(1) NOT NULL DEFAULT 0,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_roman_ci;

DROP TABLE IF EXISTS `menu_dish`;
CREATE TABLE IF NOT EXISTS `menu_dish` (
    `menu_id` INT NOT NULL,
    `dish_id` INT NOT NULL,
    PRIMARY KEY (`menu_id`, `dish_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_roman_ci;

DROP TABLE IF EXISTS `purchase`;
CREATE TABLE IF NOT EXISTS `purchase` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `customer_name` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT NOW(),
    `updated_at` DATETIME NOT NULL DEFAULT NOW(),
    `total_price` FLOAT NOT NULL,
    `number` VARCHAR(255) NOT NULL,
    `message` TEXT NULL,
    `is_validated` TINYINT(1) NOT NULL DEFAULT 0,
    `table_id` INT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_roman_ci;

DROP TABLE IF EXISTS `menu_purchase`;
CREATE TABLE IF NOT EXISTS `menu_purchase` (
    `menu_id` INT NOT NULL,
    `purchase_id` INT NOT NULL,
    PRIMARY KEY (`menu_id`, `purchase_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_roman_ci;

DROP TABLE IF EXISTS `table`;
CREATE TABLE IF NOT EXISTS `table`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `number` INT NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_roman_ci;

DROP TABLE IF EXISTS `seating`;
CREATE TABLE IF NOT EXISTS `seating` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `number` INT NOT NULL,
    `is_free` TINYINT(1) NOT NULL DEFAULT 1,
    `table_id` INT NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_roman_ci;


ALTER TABLE `dish` ADD FOREIGN KEY (`type_id`) REFERENCES `type` (`id`);
ALTER TABLE `dish` ADD FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
ALTER TABLE `menu_dish` ADD FOREIGN KEY (`dish_id`) REFERENCES `dish` (`id`);
ALTER TABLE `menu_dish` ADD FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`);
ALTER TABLE `menu_purchase` ADD FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`);
ALTER TABLE `menu_purchase` ADD FOREIGN KEY (`purchase_id`) REFERENCES `purchase` (`id`);
ALTER TABLE `purchase` ADD FOREIGN KEY (`table_id`) REFERENCES `table` (`id`);
ALTER TABLE `seating` ADD FOREIGN KEY (`table_id`) REFERENCES `table` (`id`);