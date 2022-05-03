CREATE TABLE `checkout` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `book_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `author` varchar(255) NOT NULL,
  `checkoutdate` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `checkout` (`id`, `username`, `book_title`, `author`, `checkoutdate`) VALUES
(1, 'user1', 'A Changeling for All Seasons (Changeling Seasons #1)', 'A Changeling for All Seasons (Changeling Seasons #1)', '2022-04-18'),
(2, 'user1', 'Hatchet Jobs: Writings on Contemporary Fiction', 'Dale Peck', '2022-04-20'),
(3, 'user1', 'Harry Potter and the Prisoner of Azkaban (Harry Potter #3)', 'J.K. Rowling/Mary GrandPré', '2022-04-28');
