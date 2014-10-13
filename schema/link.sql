DROP TABLE IF EXISTS `link`;
CREATE TABLE `link` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `url`  varchar(255) NOT NULL,
  `account`  varchar(255) NOT NULL,
  `password`  varchar(255) NOT NULL,
  `updated` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
);
